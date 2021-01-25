import React from "react";

import Header from "./components/Header";
import Counter from "./components/Counter";
class App extends React.Component {
    render() {
        return (
            <div>
                <Header text="This Counter: "/>
                <Counter />
                <h1>Hello world</h1>
            </div>
        )
    }
}

export default App;