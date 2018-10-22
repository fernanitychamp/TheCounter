import React from 'react';

import Styles from './Button.module.css';

const button = (props) => (
    <button 
        className={Styles.Button}
        onClick={props.act ? ev => props.clicked(ev, props.act) : props.clicked}>
        {props.children}
    </button>
)

export default button;