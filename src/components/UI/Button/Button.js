import React from 'react';

import Styles from './Button.module.css';

const button = (props) => (
    <button 
        className={Styles.Button}
        onClick={(ev) => props.clicked(ev, props.payload)}>
        {props.children}
    </button>
)

export default button;