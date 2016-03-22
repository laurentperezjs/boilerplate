import App from './App.jsx';
const ReactDom = require('react-dom');
const React = require('react');
let data = {word: 'Hello'}
ReactDom.render(<App word={data}/>, document.getElementById('content'));