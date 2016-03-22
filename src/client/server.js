import App from './app/App.jsx';
import MainContainer from './app/MainContainer.jsx'

const express = require('express');
const React = require('React');
const ReactDOMServer = require('react-dom/server');
const AppFactory = React.createFactory(require('./app/App.jsx'));

const app = express();
const port = process.env.PORT || 3000;
const fetch = require('node-fetch');
app.set('views', __dirname);
app.use('/word.json', (req, res) => {
    var ua = req.headers['user-agent'];
    var now = Date.now();
    console.log("requesting data for:" + ua + " at:" + now);
    let data = {word: 'Hello'};
    res.json(data)
});

app.use('/index.html', (req, res) => {
    const mc = new MainContainer();
    console.log(mc.getData());
    // fetch here is node-fetch
    fetch('http://localhost:3000/word.json')
        .then(function (response) {
            return response.json()
        }).then(function (json) {
        console.log('fetched json:', json);
        const reactHtml = ReactDOMServer.renderToString(AppFactory(json));
        res.render('index.ejs', {reactOutput: reactHtml});
    }).catch(function (ex) {
        console.error('fetch parsing failed', ex)
        return "parsing failed";
    })
});
app.use('/', express.static(`${__dirname}`));
app.listen(port, ()=> {
    console.log(`Website listening on port ${port}`);
    if (process.env.NODE_ENV === "production") {
        console.log('ENVIRONEMENT VARIABLES :');
        console.log(process.env);
    }
});