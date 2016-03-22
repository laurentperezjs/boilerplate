"use strict";
const React = require('react');
import MainContainer from './MainContainer.jsx'


const App = (props) => (
    <div className="app">
        <MainContainer data={props}/>
    </div>);


module.exports = App;