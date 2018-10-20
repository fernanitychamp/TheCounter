import React from 'react';

import Styles from './CurrentCounter.module.css';


const currentCounter = (props) => (
    <div className={Styles.CurrentCounter}>
        <header>
            <h2>Contador actual: {props.counter}</h2>
        </header>
    </div>
)

export default currentCounter;