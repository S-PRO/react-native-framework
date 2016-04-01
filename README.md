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




## Header component

example:

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Header/Header.png)

```javascript

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
        backgroundColor:'#444'
    }
});
```

### API

    * styles - custom user styles for View component
    

## Footer component

example:

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Footer/Footer.png)

```javascript

import Footer from 'react-native-framework';

export default class TestFooter extends Component{
    render(){
        return(
            <View>
                <Footer styles={styles.footer}>
                    <Text>Welcome to React Native</Text>
                </Footer>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'#444'
    }
});
```

### API

    * styles - custom user styles for View component


## Form component

example:

![Alt](https://github.com/S-PRO/react-native-framework/blob/feature/screenshots_for_not_screened_components/src/Form/form.png)

```javascript

import { Form, FormInput} from '../src/Form'


export default class TestForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'John',
            lastname:'Test',
            email:'john@testmail.com'
        }
    }
    render(){
        return(
            <View style={{marginTop:100, marginLeft:10, marginRight:10}}>
                <Form ref="form">
                    <FormInput
                        required={true}
                        value={this.state.firstname}
                        textChanged={this.textChanged.bind(this)}
                        key="firstname"/>
                    <FormInput
                        required={true}
                        value={this.state.lastname}
                        textChanged={this.textChanged.bind(this)}
                        key="lastname"/>
                    <FormInput
                        required={true}
                        value={this.state.email}
                        textChanged={this.textChanged.bind(this)}
                        key="email"/>

                </Form>
            </View>
        )
    }
}
```

### API

    * styles - custom user styles for View component