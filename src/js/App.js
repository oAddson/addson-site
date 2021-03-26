import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./assets/favicon.svg"

class App extends Component {
    render () {
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-log" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    }
}

const container = document.querySelector('#root');
container ? ReactDOM.render(<App/>, container) : false;