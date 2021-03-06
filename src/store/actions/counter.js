import { INCREMENT, DECREMENT, 
    ADD, SUBTRACT } from './actionTypes';

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
