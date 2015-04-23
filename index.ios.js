'use strict'

var React = require('react-native');

var {
  AppRegistry
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class Test extends React.Component {
  render() {
    return React.createElement(React.Text, {style: styles.text}, "Hello World!");
  }
}

AppRegistry.registerComponent('Test', () => Test);