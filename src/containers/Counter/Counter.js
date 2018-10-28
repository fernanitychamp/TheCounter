import React from 'react';
import { connect } from 'react-redux';

import Styles from './Counter.module.css';

import CurrentCounter from '../../components/CurrentCounter/CurrentCounter';
import ControlCounter from '../../components/ControlCounter/ControlCounter';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    actionHandler = (ev, act) => {
        if (act && act.type === 'inc')
            this.props.onIncrementHandler()
        
        if (act && act.type === 'dec')
            this.props.onDecrementHandler()

        if (act && act.type === 'add')
            this.props.onAddHandler(act.value)

        if (act && act.type === 'subtract')
            this.props.onSubstractHandler(act.value)

        // if (action && action.type === 'inc') {
        //     this.setState(prevState => ({counter: prevState.counter + 1}))
        // } else if (action && action.type === 'dec') {
        //     this.setState(prevState => ({counter: prevState.counter - 1}))
        // } else if (action && action.type === 'add' && action.value) {
        //     this.setState(prevState => ({counter: prevState.counter + action.value}))
        // } else if (action && action.type === 'substract' && action.value) {
        //     this.setState(prevState => ({counter: prevState.counter - action.value}))
        // } else {
        //     console.log('accion desconocida')
        //     alert('Accion desconocida')
        // }

    }


    render() {
        return (
            <div className={Styles.Counter}>
                <CurrentCounter counter={this.props.ctr} />
                <ControlCounter clickedAction={this.actionHandler} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.storedResult.map(res => 
                        <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default connect(state => {
    return {
        ctr: state.counter,
        storedResult: state.results
    }
}, dispatch => {
    return {
        onIncrementHandler: () => dispatch({type: 'INCREMENT'}),
        onDecrementHandler: () => dispatch({type: 'DECREMENT'}),
        onAddHandler: (v) => dispatch({type: 'ADD', value: v}),
        onSubstractHandler: (v) => dispatch({type: 'SUBTRACT', value: v}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (selectedId) => dispatch({type: 'DELETE_RESULT', payload: {id: selectedId}})
    }
})(Counter);