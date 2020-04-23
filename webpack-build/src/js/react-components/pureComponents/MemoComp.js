import React, { memo } from 'react';

function MemoComp({name}) {
    console.info('rendering MemoComp');
    return (
        <div>
            <h2>Hi, {name}!
                I'm a Memo Functional Component</h2>
        </div>
    )
}

export default memo(MemoComp);