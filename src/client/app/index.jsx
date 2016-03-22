import App from './App.jsx';
const ReactDom = require('react-dom');
const React = require('react');
// TODO put the fetch here
let data = {word: 'Hello'}
ReactDom.render(<App word={data}/>, document.getElementById('content'));