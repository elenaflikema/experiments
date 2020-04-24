import React, { Component } from 'react';

class User extends Component{
    render() {
        const { render } = this.props;

        return <h3>Props as a function: {render(true)}</h3>
    }
}

export default User;
