# react-native-framework

## Icons
https://github.com/oblador/react-native-vector-icons

#### example:

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


#### example:

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

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Header/Header.png)

#### example:

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

#### API

    * `styles` - custom user styles for View component
    

## Footer component

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Footer/Footer.png)

#### example:

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

#### API

    * `styles` - custom user styles for View component


## Form component

![Alt](https://github.com/S-PRO/react-native-framework/blob/feature/screenshots_for_not_screened_components/src/Form/form.png)

#### example:

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

#### API:
    * 'FormInput' - custom TextInput wrapped in styles and highlight (validation in future)
    
    
## FormInput component


#### example:

```javascript
import { Form, FormInput } from 'react-native-framework';

class TestFormInput extends Component{
    render(){
        return(
            <View>
                <Form>
                    <FormInput
                        required={true}
                        value={this.state.lastname}
                        textChanged={this.textChanged.bind(this)}
                        key="lastname"/>
                </Form>
            </View>
        )
    }
}

```

#### API:
    * 'value' - value for component,
    * 'textChanged' - method to update value in parent component,
    * `styles` - custom user styles for TextInput component,
    * 'highlight' - custom onFocus highlight style - borderColor, backgroundColor;
    
## NotificationBox component


![Alt](https://github.com/S-PRO/react-native-framework/blob/feature/screenshots_for_not_screened_components/src/NotificationBox/NotificationBox.png)

#### example:

```javascript
import { SystemMessage, SuccessMessage, ErrorMessage} from '../src/NotificationBox';

export default class TestNotificationBox extends Component{
    render(){
        return(
            <View style={{marginTop:100, marginLeft:10, marginRight:10}}>
                <SystemMessage message="System message box"/>
                <SuccessMessage message="Success message box"/>
                <ErrorMessage message="Error message box"/>
            </View>
        )
    }
}
```

#### API:
    * `success` - bool value,
    * `failure` - bool value,
    * `message` - message to be displayed,
    * `SuccessMessage` - custom component with set styles,
    * `SystemMessage` - custom component with set styles,
    * `ErrorMessage` - custom component with set styles,
    
    
## Select component

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Select/select.png)

#### example:

```javascript
import Select from 'react-native-framework';

export default class TestSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenItem:1,
            listOfProps:[1,2,3,4,5,6,7,8,9]
        };
    }
    update(){
        console.log('updated')
    }
    render(){
        return(
            <View style={styles.container}>
                <Select value={this.state.chosenItem} update={this.update.bind(this)} options={this.state.listOfProps} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
});
```

#### API:
    * `options` - list of options to display,
    * `value` - current value,
    * `update` - update callback;


## TabBar component:
![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/TabBar/Tabbar%201.png)
![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/TabBar/Tabbar2.png)

#### example:

```javascript
import TabBar from 'react-native-framework';


export default class TestTabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            page:'FIRST'
        };
    }

    onSelect(name){
        this.setState({
            page:name
        });
    }

    render(){
        return(
            <View>
                <TabBar selected={this.state.page} style={{backgroundColor:'white'}}
                        selectedStyle={{color:'red'}} onSelect={el=>this.onSelect(el.props.name)}>
                    <Text name="FIRST">1</Text>
                    <Text name="SECOND">2</Text>
                    <Text name="THIRD">3</Text>
                    <Text name="FOURTH">4</Text>
                    <Text name="FIFTH">5</Text>
                </TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundColor:'red'
});

```

#### API:
    * `selected` - current selected value,
    * `onSelect` - callback when changes selection,
    * `selectedStyle` - selected tab styling,
    * `locked` - disable certain tab
    
    
## Button component

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Button/Button.png)

#### example:
```javascript
import {ButtonStable,
    ButtonAssertive,
    ButtonBalanced,
    ButtonCalm,
    ButtonDark,
    ButtonEnergized,
    ButtonLight,
    ButtonPositive,
    ButtonRoyal} from '../src/Button/index'


export default class TestButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <ButtonStable>Button Stable</ButtonStable>
                <ButtonAssertive>Assertive</ButtonAssertive>
                <ButtonBalanced>Balanced</ButtonBalanced>
                <ButtonCalm>Calm</ButtonCalm>
                <ButtonDark>Dark</ButtonDark>
                <ButtonEnergized>Energized</ButtonEnergized>
                <ButtonLight>Light</ButtonLight>
                <ButtonPositive>Positive</ButtonPositive>
                <ButtonRoyal>Royal</ButtonRoyal>
                <Button highlightStyles={{backgroundColor:'grey'}}>Button with only text</Button>
            </View>
        )
    }
}
```

#### API:
    * `underlayColor` - color when button pressed,
    * `textStyles` - custom user styles for text inside button (only <Text> component styling),
    * `highlightStyles` - custom user style for button container (only <TouchableHighlight> component styling);
