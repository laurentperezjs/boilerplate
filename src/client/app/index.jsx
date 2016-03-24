import App from './App.jsx';
import { Router, Route, Link, browserHistory } from 'react-router'

const ReactDom = require('react-dom');
const React = require('react');
let data = {word: 'Hello'}

ReactDom.render(<App word={data}/>, document.getElementById('content'));