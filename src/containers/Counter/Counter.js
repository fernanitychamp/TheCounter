import React from 'react';

import Styles from './Counter.module.css';

import CurrentCounter from '../../components/CurrentCounter/CurrentCounter';
import ControlCounter from '../../components/ControlCounter/ControlCounter';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    actionHandler = (ev, action) => {
        if (action.type === 'inc') {
            this.setState(prevState => ({counter: prevState.counter + 1}))
        } else if (action.type === 'dec') {
            this.setState(prevState => ({counter: prevState.counter - 1}))
        } else if (action.type === 'add' && action.value) {
            this.setState(prevState => ({counter: prevState.counter + action.value}))
        } else if (action.type === 'substract' && action.value) {
            this.setState(prevState => ({counter: prevState.counter - action.value}))
        } else {
            console.log('accion desconocida')
            alert('Accion desconocida')
        }
    }


    render() {
        return (
            <div className={Styles.Counter}>
                <CurrentCounter counter={this.state.counter} />
                <ControlCounter clickedAction={this.actionHandler.bind(this)} />
            </div>            
        )
    }
}

export default Counter;