import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                Hello, world from {process.env.NODE_ENV}!
            </div>
        );
    }
}

export default App;