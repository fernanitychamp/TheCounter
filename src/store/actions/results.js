import { STORE_RESULT, DELETE_RESULT } from './actionTypes';

const _saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const store_res = (res) => {
    return dispatch => { // despliega una funcion asincrona despues de 2 segundos
        setTimeout(() => {
            dispatch(_saveResult(res))
        }, 2000)
    }
}

export const delete_res = (resId) => {
    return {
        type: DELETE_RESULT,
        payload: {
            id: resId
        }
    }
}
