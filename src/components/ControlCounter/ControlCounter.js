import React from 'react';

import Styles from './ControlCounter.module.css';

import Button from '../UI/Button/Button';


const controlCounter = (props) => (
    <div className={Styles.ControlCounter}>
        <Button clicked={props.clickedAction} payload={{type: 'inc'}}>Incrementar</Button>
        <Button clicked={props.clickedAction} payload={{type: 'dec'}}>Decrementar</Button>
        <Button clicked={props.clickedAction} payload={{type: 'add', value: 5}}>Sumar 5</Button>
        <Button clicked={props.clickedAction} payload={{type: 'substract', value: 10}}>Restar 10</Button>
    </div>
)

export default controlCounter;