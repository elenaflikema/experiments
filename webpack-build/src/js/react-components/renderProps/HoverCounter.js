import React, { Component } from 'react';

class HoverCounter extends Component{
    render() {
        const { count, incrementCount } = this.props;
        return <div className="block" onMouseOver={incrementCount}><h1>Hovered {count} times</h1></div>
    }
}

export default HoverCounter;
