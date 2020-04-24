import React, { Component } from "react";

class RegComp extends Component {

    render() {
        console.info('***Regular Render***');
        return (
            <React.Fragment>
                <h2>Hi, {this.props.name}!
                    I'm a Regular Component</h2>
            </React.Fragment>
        );
    }
}

export default RegComp;
