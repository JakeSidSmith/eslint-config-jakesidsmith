import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Header = () => (
  <h1 {...this.props}>
    {this.props.children}
  </h1>
);

class App extends Component {
  render () {
    return (
      <Header className="my-class" awesome>
        Hello, world!
        <span />
        <span
          prop
        />
      </Header>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
