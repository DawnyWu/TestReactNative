'use strict'

var React = require('react-native');
var SearchPage = require('./SearchPage');
var {
  AppRegistry,
  NavigatorIOS,
  Text
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'yellow',
    fontSize: 40,
    margin: 80
  },
  container: {
    flex: 1
  }
});
class HelloWorld extends React.Component {
  render() {
    return(
    <Text style={styles.text}>Hello World (Again)</Text>
    )
  }
}
class Test extends React.Component {
  render() {
    return (
     <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>)
  }
}

AppRegistry.registerComponent('Test', () => Test);