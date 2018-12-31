export const INCREMENT      = 'INCREMENT';
export const DECREMENT      = 'DECREMENT';
export const ADD            = 'ADD';
export const SUBTRACT       = 'SUBTRACT';
export const STORE_RESULT   = 'STORE_RESULT';
export const DELETE_RESULT  = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add = (v) => {
    return {
        type: ADD,
        value: v
    }
}

export const substract = (v) => {
    return {
        type: SUBTRACT,
        value: v
    }
}

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

