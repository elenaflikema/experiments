import React, { PureComponent } from "react";

class PureComp extends PureComponent {

    render() {
        console.info('***Pure Render***');
        return (
            <React.Fragment>
                <h2>Hi, {this.props.name}!
                    I'm a Pure Component</h2>
            </React.Fragment>
        );
    }
}

export default PureComp;
