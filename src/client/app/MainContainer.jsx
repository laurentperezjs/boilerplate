const React = require('react');
// triggers webpack error, fails bundle generation, why ? why must I require b/c fetch not visible ?
//const fetch = require('node-fetch');
const request = require('superagent');
const superagentPromisePlugin = require('superagent-promise-plugin');


export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getData() {
        //can't call setState because it is unmounted
        return "foo";
    }

    componentWillMount() {
        /*
         Invoked once, both on the client and server, immediately before the initial rendering occurs. If you call setState within this method
         render() will see the updated state and will be executed only once despite the state change.
         */
        console.log("componentWillMount at:" + Date.now());
        /*fetch('http://localhost:3000/word.json')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            this.setState(json);
        }.bind(this)).catch(function (ex) {
            console.error('fetch parsing failed', ex)
        })*/
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        console.log("componentDidMount at:" + Date.now()); // why not shown ?

    }

    render() {
        console.log("state", this.state);
        var word = this.state.word;
        return (
            <main id="result" className='main'>
                {/* casse le didmount {this.props.data.word} */}
                {word}
            </main>
        );
    }
}
