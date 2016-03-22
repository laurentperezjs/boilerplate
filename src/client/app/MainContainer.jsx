const React = require('react');
const fetch = require('node-fetch'); // triggers webpack error but fails, why ? why must I require b/c fetch not visible ?

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getData() {
        //can't call setState because it is unmounted
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

