import React from 'react';

import Styles from './ControlCounter.module.css';


const controlCounter = (props) => (
    <div className={Styles.ControlCounter}>
        <button onClick={(ev) => props.clickedAction(ev, {type: 'inc'})}>Incrementar</button>
        <button onClick={(ev) => props.clickedAction(ev, {type: 'dec'})}>Decrementar</button>
        <button onClick={(ev) => props.clickedAction(ev, {type: 'add', value: 5})}>Añadir 5</button>
        <button onClick={(ev) => props.clickedAction(ev, {type: 'substract', value: 10})}>Restart 10</button>
    </div>
)

export default controlCounter;