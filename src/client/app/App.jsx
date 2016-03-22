"use strict";
const React = require('react');

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static getData() {
        return "foo";
    }
    componentWillUnmount() {
    }

    componentDidMount() {
        fetch('http://192.168.168.90:3000/word.json')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            this.setState(json);
        }.bind(this)).catch(function (ex) {
            console.error('fetch parsing failed', ex)
        })
    }

    render() {
        console.log("state", this.state);
        return (
            <main id="result" className='main'>
                {this.props.data.word}
            </main>
        );
    }
}


const App = (props) => (
    <div className="app">
        <MainContainer data={props}/>
    </div>);


module.exports = App;