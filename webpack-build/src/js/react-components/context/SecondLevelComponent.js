import React from 'react';
import LastLevelComponent from './LastLevelComponent';

function SecondLevelComponent() {
    return (
        <div className="level2">
            <LastLevelComponent />
        </div>
    );
}

export default SecondLevelComponent;
