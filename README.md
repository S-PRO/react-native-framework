# react-native-framework

***

## Icons Component
https://github.com/oblador/react-native-vector-icons

####example:

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


####example:

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

