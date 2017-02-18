import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

const Header = () => (
  <Text {...this.props}>
    {this.props.children}
  </Text>
);

class App extends Component {
  render () {
    return (
      <Header className="my-class" awesome>
        Hello, World!
      </Header>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
