const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }

    } else if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }

    } else if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }

    } else if (action.type === 'SUBTRACT') {
        return {
            ...state,
            counter: state.counter - action.value
        }

    } else if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: state.counter}) // concat es la manera efectiva de hacer push a un array
        }

    } else if (action.type === 'DELETE_RESULT') {
        const updatedResults = [...state.results]
        const removedId = updatedResults.findIndex(v => action.payload.id === v.id)
        updatedResults.splice(removedId, 1)
        
        return {
            ...state, 
            results: updatedResults
        }
    }

    return state;
}

export default reducer;