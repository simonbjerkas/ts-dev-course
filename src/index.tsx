import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(): React.ReactNode {
    return <div>Hi there</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
