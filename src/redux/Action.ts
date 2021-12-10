import { ACTION_TYPE, GET_SIGNED_USER_SUCCESS, MAIN_ACTION_TYPE } from "./ActionTypes"

interface IActionSTART {
    method?: 'get' | 'post' | 'put' | 'delete',
    type: keyof typeof ACTION_TYPE
    path?: string,
    data?: any
}

export const action = (payload: IActionSTART) => ({
    type: MAIN_ACTION_TYPE,
    payload: { ...payload }
})

interface IActionEND {
    type: string,
    response?: any
    error?: any
}
export const actionDone = ({ type, response, error }: IActionEND) => ({
    type: type,
    payload: {
        data: response,
        error
    }
})

interface IAsyncStorageACtion {
    type: keyof typeof ACTION_TYPE
    act: 'remove' | 'save' | 'get',
    key: string
}
export const _init = (data:any) => ({
    type: GET_SIGNED_USER_SUCCESS,
    payload: data
})