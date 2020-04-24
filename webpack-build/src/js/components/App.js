import React from 'react';
import './hoc/ClickCounter'
import ClickCounterHOC from './hoc/ClickCounter';
import HoverCounterHOC from './hoc/HoverCounter';

import ClickCounterRP from './renderProps/ClickCounter';
import HoverCounterRP from './renderProps/HoverCounter';
import User from './renderProps/User';

import Counter from './renderProps/Counter';
import Catalog from "./catalog/Catalog";
import AppComponent from "./context/AppComponent";
import { UserProvider } from './context/userContext';
import ParentComp from "./pureComponents/ParentComp";

import { HelloTS } from "./ts-components/HelloTS.tsx";

function App() {
    return (
        <div className="App">

            <h3>Welcome to TypeScript</h3>
            <HelloTS compiler="TS" framework="React"/>

            <h3>Pure Component</h3>
            <ParentComp />
            <hr />

            <h3>Context</h3>
            <UserProvider value="Elena Flikema">
                <AppComponent />
            </UserProvider>

            <hr />

            <h3>Higher Order Components</h3>
            <ClickCounterHOC name="Elena" />
            <HoverCounterHOC />

            <hr />

            <h3>Render Props</h3>
            <Counter
                incrementNumber={-1}
                render={(count, incrementCount) =>
                    <ClickCounterRP count={count} incrementCount={incrementCount} />
                }
            />
            <Counter
                incrementNumber={-3}
                render={(count, incrementCount) =>
                    <HoverCounterRP count={count} incrementCount={incrementCount} />
                }
            />

            <hr />

            <User render={isLogged => isLogged ? "Elena" : "Guest"}/>

            <hr />

            <h3>Catalog</h3>
            <Catalog />

        </div>
    );
}

export default App;
