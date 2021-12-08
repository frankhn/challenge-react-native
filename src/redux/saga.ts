import { AxiosError } from 'axios';
import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import { METRIX } from '../helpers';
import { actionDone } from './Action';
import { ACTION_TYPE, ASYNC_STORAGE_ACT, MAIN_ACTION_TYPE } from './ActionTypes';
import { get, post } from './request';

interface ResponseGenerator {
    data?: any,
}
interface ISaga {
    type: string
    payload: {
        method: 'get' | 'post',
        type: keyof typeof ACTION_TYPE,
        path: string,
        data?: any
    }
}


function* gSaga({ type, payload }: ISaga) {
    try {
        const response: ResponseGenerator = yield call(
            payload.method === 'get' ? get : post,
            `${payload.path}`, {
            ...payload.data ?? undefined
        });
        console.log(response, 'saga')
        yield put(actionDone({
            ...payload,
            type: `${payload.type}_SUCCESS`,
            response,
        }));
    } catch (error: AxiosError | any) {
        yield put(actionDone({
            ...payload.data,
            type: `${payload.type}_ERROR`,
            error: error.response?.data?.message ?? error.response?.data?.error?.message ?? 'unknown error'
        }));
    }
}


interface ISync {
    payload: {
        key: string
        type: keyof typeof ACTION_TYPE
        act: string
        format: 'object' | 'string'
        data?: any
    }
    [index: string]: any
}

const getFunc = async ({ act, data, key, format }: any) => {
    switch (act) {
        case 'save': return METRIX.saveData(`key`, data)
        case 'remove': return METRIX.deleteItem(key)
        default: return METRIX.getData(key, format)
    }
}

function* asyncStorageActions({ ASYNC_STORAGE_ACT, payload }: ISync) {
    try {
        const data: any = call((
            async () => getFunc({ payload, format: 'object' })))
        console.log(data, 'exisint')
        if (data.data) {
            yield put(actionDone({
                type: `${payload.type}_SUCCESS`,
                response: {
                    ...data,
                }
            }))
        }
    } catch (error) {
        yield put(actionDone({
            type: `${payload.type}_ERROR`,
            error: 'Not authenticated'
        }))
    }
}

function* watchSaga() {
    yield takeEvery(MAIN_ACTION_TYPE, gSaga)
}

function* watchauthenticateSignedUser() {
    yield takeEvery(ASYNC_STORAGE_ACT, asyncStorageActions)
}

export default function* rootSaga() {
    yield all([fork(watchSaga)]);
    yield all([fork(watchauthenticateSignedUser)])
}