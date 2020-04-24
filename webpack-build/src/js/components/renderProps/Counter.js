import React, { Component } from 'react';

class Counter extends Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        const {incrementNumber} = this.props;

        this.setState(prevState => {
            return { count: prevState.count + incrementNumber }
        })
    };

    render() {
        return (
            <React.Fragment>
                {this.props.render(this.state.count, this.incrementCount)}
            </React.Fragment>
        )
    }
}

export default Counter;
