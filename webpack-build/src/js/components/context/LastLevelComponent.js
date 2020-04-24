import React from 'react';
import { UserConsumer } from "./userContext";

function LastLevelComponent() {
    return (
        <UserConsumer>
            {username => {
                return (
                    <div className="level3">
                        <h3> User Context: {username}</h3>
                    </div>
                )}
            }
        </UserConsumer>
    );
}

export default LastLevelComponent;
