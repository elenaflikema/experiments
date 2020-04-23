import React, { useContext }  from 'react';
import SecondLevelComponent from './SecondLevelComponent';
import UserContext from "./userContext";

function FirstLevelComponent() {
    return (
        <div className="level1">
            <h2>User Context: {useContext(UserContext)}</h2>
            <SecondLevelComponent />
        </div>
    );
}

export default FirstLevelComponent;
