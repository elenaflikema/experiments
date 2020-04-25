import React from 'react';
import './hoc/ClickCounter'
import ClickCounterHOC from './hoc/ClickCounter';
import HoverCounterHOC from './hoc/HoverCounter';

import Counter from './renderProps/Counter';
import ClickCounterRP from './renderProps/ClickCounter';
import HoverCounterRP from './renderProps/HoverCounter';
import User from './renderProps/User';

import Catalog from "./Catalog/Catalog";
import AppComponent from "./context/AppComponent";
import { UserProvider } from './context/userContext';

import { HelloTS } from "./ts-components/HelloTS.tsx";

import LangSelector from "./LangContext/LangSelector";
import { LangProvider } from "./LangContext/langContext";

function App() {

    return (
        <div className="App">

            <h3>Language Context</h3>
            <LangProvider>
                <LangSelector/>
            </LangProvider>


            <h3>Welcome to TypeScript</h3>
            <HelloTS compiler="TS" framework="React"/>

            <h3>Context</h3>
            <UserProvider value="Elena Flikema">
                <AppComponent />
            </UserProvider>

            <h3>Default Context (is used when there is no Provider for the Context)</h3>
            <AppComponent />

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
