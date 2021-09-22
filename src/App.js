import React from 'react';
import '../src/styles/styles.scss';
import {Main} from "./pages/Main/Main";

class App extends React.Component {
  render() {
    return (
        <div className="body">
            <Main />
        </div>
    );
  }
}

export default App;