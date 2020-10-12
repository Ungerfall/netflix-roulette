import React from 'react';
import './App.css';
import HelloWorldFunctionalComponent from './component/HelloWorldFunctionalComponent';
import HelloWorldClassComponent from './component/HelloWorldClassComponent';
import HelloWorldClassPureComponent from './component/HelloWorldClassPureComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table >
          <tr>
            <td>Functional component</td>
            <td>
              <HelloWorldFunctionalComponent />
            </td>
          </tr>
          <tr>
            <td>Class component</td>
            <td>
              <HelloWorldClassComponent />
            </td>
          </tr>
          <tr>
            <td>Class pure component</td>
            <td>
              <HelloWorldClassPureComponent />
            </td>
          </tr>
          <tr>
            <td>createElement component</td>
            <td>
              {React.createElement("h3", null, "Hello, World!")}
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;