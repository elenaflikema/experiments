import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Elena',
            age: 30
        }


    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Elena',
                age: 30
            })
        }, 2000)
    }

    render() {
        console.info('***Parent Render***');
        return (
            <React.Fragment>
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </React.Fragment>
        );
    }
}

export default ParentComp;
