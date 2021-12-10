import { OBJECT } from '../../helpers';
import *  as actionTypes from '../../redux/ActionTypes'

const initialState: any = {
    loading: false,
    authenticated: false
};

interface IAction {
    type: string
    [index: string]: any
}

const error = (error: string, state: any) => OBJECT.UPDATE(state, {
    error,
    loading: false
});

const success = (data: any, state: any) => OBJECT.UPDATE(state, {
    data: {
        ...data.data,
        token: data.token
    },
    token: data.token,
    loading: false
});

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case actionTypes.MAIN_ACTION_TYPE:
            return payload.type === actionTypes.LOGIN && OBJECT.UPDATE(state, {
                loading: true,
                error: undefined
            });
        case actionTypes.ACTION_CLEANER:
            return payload.type === actionTypes.LOGIN && initialState;
        case actionTypes.LOGIN_SUCCESS:
            return success(payload.data, state)
        case actionTypes.LOGIN_ERROR:
            return error(payload.error, state)
        case actionTypes.SIGNUP_SUCCESS:
            return OBJECT.UPDATE(state, {
                data: {
                    message: 'Account registration success',
                    ...payload.data.data,
                    token: payload.data.token
                },
                token: payload.data.token,
                loading: false
            });
        case actionTypes.SIGNUP_ERROR:
            return error(payload.error, state)
        default:
            return state;
    }
};
