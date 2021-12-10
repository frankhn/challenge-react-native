import { AxiosError } from 'axios';
import { all, takeEvery, call, fork, put } from 'redux-saga/effects';
import { actionDone } from './Action';
import { ACTION_TYPE, MAIN_ACTION_TYPE } from './ActionTypes';
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
        console.log('executing')
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
        console.log(error.response)
        yield put(actionDone({
            ...payload.data,
            type: `${payload.type}_ERROR`,
            error: error.response?.data?.message ?? error.response?.data?.error?.message ?? 'unknown error'
        }));
    }
}

function* watchSaga() {
    yield takeEvery(MAIN_ACTION_TYPE, gSaga)
}

export default function* rootSaga() {
    yield all([fork(watchSaga)]);
}