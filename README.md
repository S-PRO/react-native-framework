# react-native-framework

***

## Icons Component
https://github.com/oblador/react-native-vector-icons

#### example:

```javascript
var Icon = require('react-native-vector-icons/FontAwesome');
...
render() {
    return (
        <View>
            <Icon name="rocket" size={30} color="#900" />
        </View>
    );
}
```

***

##  Sidebar component
https://github.com/react-native-fellowship/react-native-side-menu


#### example:

```javascript
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
```

***

## ListItem component
![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/ListItem/ListItem.png)

####example:
```javascript
import ListItem from './src/ListItem';

...
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
...
this.state = {
              dataSource: ds.cloneWithRows([{name:'Sample Text Item 1', icon:'tree'},
                                            {name:'Sample Text Item 2', icon:'beer'},
                                            {name:'Long Sample Text Item' +
                                                  'Long Sample Text Item' +
                                                  'Long Sample Text Item' +
                                                  'Long Sample Text Item ', icon:'rocket'}])};

...


render() {
    return (
        <ListView style={{marginTop: 70, flexDirection: 'column'}} dataSource={this.state.dataSource}
                  renderRow={(rowData) => {
                   return (<ListItem>
                              <Icon itemType={'icon'} name={rowData.icon}/>
                              <Text usersStyles={{color: '#f00'}} itemType={'text'}>{rowData.name}</Text>
                              <ButtonRoyal itemType={'button'}>Go</ButtonRoyal>
                           </ListItem>)}}
        />
    );
}
```
#### API

* `textSize` - Size of text with `itemType={'text'}`
* `textColor` - Text of text with `itemType={'text'}`
* `noteColor` - Color of text with `itemType={'text'}`
* `backgroundColor` - Background color for row
* `borderColor` - Border color for row
* `Inner Items`:
    * For each inner item You can set custom styles - property:
        * `usersStyles={{color: '#f00'}}`

***

## ButtonBar component
![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/ButtonBar/ButtonBar.png)
####example:
```javascript
import ButtonBar from './src/ButtonBar'

import {ButtonAssertive, ButtonBalanced, ButtonCalm} from './src/Button';

class ReactNativeUI extends Component {
    render() {
        return (
            <View>
                <ButtonBar>
                    <ButtonAssertive>Assertive</ButtonAssertive>
                    <ButtonBalanced>Balanced</ButtonBalanced>
                    <ButtonCalm>Calm</ButtonCalm>
                    <ButtonCalm>Calm</ButtonCalm>
                </ButtonBar>
                <ButtonBar>
                    <ButtonCalm>Calm</ButtonCalm>
                    <ButtonCalm>Calm</ButtonCalm>
                    <ButtonCalm>Calm</ButtonCalm>
                </ButtonBar>
                <ButtonBar>
                    <ButtonCalm>Calm</ButtonCalm>
                    <ButtonCalm>Calm</ButtonCalm>
                </ButtonBar>

            </View>
        );
    }
}
```

***

## CheckBox component
![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/CheckBox/CheckBox.png)
####example:
```javascript
import CheckBox from './src/CheckBox'

class ReactNativeUI extends Component {
    constructor(props) {
        super(props);
        this.state = {checked1: true,
                      checked2: true,
                      checked3: true};
    }

    changeChecked(obj) {
        this.setState(obj);
    }
    render() {
        return (
            <View>
                <CheckBox
                    icon={'./check_mark.png'}
                    checked={this.state.checked1}
                    onToggle={(checked) => this.changeChecked({checked1: checked})}
                >test checkbox 1</CheckBox>
                <CheckBox
                    checked={this.state.checked2}
                    onToggle={(checked) => this.changeChecked({checked2: checked})}
                >test checkbox 2</CheckBox>
                <CheckBox
                    checked={this.state.checked3}
                    onToggle={(checked) => this.changeChecked({checked3: checked})}
                >test checkbox 3</CheckBox>
            </View>
        );
    }
}
```
#### API

* `checked` - initial state of checkbox. Default: false
* `onPress` - function that will be invoked by pressing to checkbox with checked property as argument.
* `size` - Diameter of circle. Minimum: `15`, default: `17`
* `outerColor` - Color of outer circle. Default: `#387ef5`
* `markColor` - Color of check mark. Default: `#fff`
* `borderColor` - Color of border. Default: `#ddd`
* `labelPosition` - Label rendering position. Default: `right`, may be `right` or `left`

***

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

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/Form/form.png)

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
* `FormInput` - custom TextInput wrapped in styles and highlight (validation in future)
    
    
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
* `value` - value for component,
* `textChanged` - method to update value in parent component,
* `styles` - custom user styles for TextInput component,
* `highlight` - custom onFocus highlight style - borderColor, backgroundColor;
    
## NotificationBox component


![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/NotificationBox/NotificationBox.png)

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


## ImageSlider component

![Alt](https://github.com/S-PRO/react-native-framework/blob/develop/src/ImageSlider/ImageSlider.png)

#### example:
```javascript
import ImageSlider from '../src/ImageSlider';

class TestImageSlider extends Component{
    constructor(props){
        super(props);
        this.state = {
            images: []
        }
    }
    render(){
        return(
            <View style={{marginTop:200}}>
                <ImageSlider images={this.state.images} />
            </View>
        )
    }
}
```

#### API:
* `images` - array of image uri's to be display     
