import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.STORE_RESULT) {
        const updatedResult = state.results.concat({id: new Date(), value: action.result})
        // concat es la manera efectiva de hacer push a un array
        // el value es un valor que obtiene de una payload que trae del Counter.js
        return updateObject(state, updatedResult) 

    } else if (action.type === actionTypes.DELETE_RESULT) {
        const updatedResults = [...state.results]
        const removedId = updatedResults.findIndex(v => action.payload.id === v.id)
        updatedResults.splice(removedId, 1)
        
        return updateObject(state, {results: updatedResults})
    }

    return state;
}

export default reducer;