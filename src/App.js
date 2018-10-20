import React, { Component } from 'react';

import Styles from './App.module.css';

import Counter from './containers/Counter/Counter';


class App extends Component {
    render() {
        return (
            <div className={Styles.App}>
                <Counter />
            </div>
        );
    }
}

export default App;
