# react-native-framework

## Icons
https://github.com/oblador/react-native-vector-icons

example:

<pre>
var Icon = require('react-native-vector-icons/FontAwesome');
...
render() {
    return (
        &lt;View&gt;
            &lt;Icon name="rocket" size={30} color="#900" /&gt;
        &lt;/View&gt;
    );
}
</pre>

##  Sidebar 
https://github.com/react-native-fellowship/react-native-side-menu


example:

<pre>
const SideMenu = require('react-native-side-menu');

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

class Application extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}
</pre>