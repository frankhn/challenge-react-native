import { ACTION_CLEANER, ACTION_TYPE, MAIN_ACTION_TYPE } from "./ActionTypes"

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

interface IActionClean {
    type: keyof typeof ACTION_TYPE
}
export const clean = (payload: IActionClean) => ({
    type: ACTION_CLEANER,
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
