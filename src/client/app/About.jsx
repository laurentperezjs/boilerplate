const React = require('react');

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        console.log("componentWillMount at:" + Date.now());
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        console.log("componentDidMount at:" + Date.now());
    }

    render() {
        return (
            <div>
                i am about
            </div>
        );
    }
}
