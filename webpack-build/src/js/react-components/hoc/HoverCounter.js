import React, { Component } from 'react';
import UpdatedComponent from './withCounter';

class HoverCounter extends Component{
    render() {
        const { count,incrementCount } = this.props;
        return <div className="block" onMouseOver={incrementCount}><h1>Hovered {count} times</h1></div>
    }
}

export default UpdatedComponent(HoverCounter, 3);
