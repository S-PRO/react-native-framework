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
      &lt;View style={styles.container}&gt
        &lt;Text style={styles.welcome}&gt
          Welcome to React Native!
        &lt;/Text&gt
        &lt;Text style={styles.instructions}&gt
          To get started, edit index.ios.js
        &lt;/Text&gt
        &lt;Text style={styles.instructions}&gt
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        &lt;/Text&gt
      &lt;/View&gt
    );
  }
}

class Application extends React.Component {
  render() {
    const menu = &lt;Menu navigator={navigator}/>;

    return (
      &lt;SideMenu menu={menu}&gt
        &lt;ContentView/&gt
      &lt;/SideMenu&gt
    );
  }
}
</pre>




## Header

example:

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Header/Header.png)

```javascript

import React, { Component, StyleSheet, View, Text } from 'react-native';

import Header from 'react-native-framework';


export default class TestHeader extends Component{
    render(){
        return(
            <View>
                <Header styles={styles.header}>
                    <Text>Welcome to React Native</Text>
                </Header>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'red'
    }
});
```