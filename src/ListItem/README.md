#Button
####example:
```javascript
import React, {
    AppRegistry,
    Component,
    View,
    Text,
    Image,
    ListView
} from 'react-native';

import ListItem from './src/ListItem'
import {ButtonRoyal} from './src/Button'
import Icon from 'react-native-vector-icons/FontAwesome'

class ReactNativeUI extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {checked1: true,
                      checked2: true,
                      checked3: true,
                      dataSource: ds.cloneWithRows([{name:'Sample Text Item 1', icon:'tree'},
                                                    {name:'Sample Text Item 2', icon:'beer'},
                                                    {name:'Long Sample Text Item Long Sample Text Item Long Sample Text Item Long Sample Text Item ', icon:'rocket'}])};
    }


    render() {
        return (
            <ListView style={{marginTop: 70, flexDirection: 'column'}} dataSource={this.state.dataSource}
                      renderRow={(rowData) => {
                       return (<ListItem>
                                  <Icon itemType={'icon'} name={rowData.icon}/>
                                  <Text itemType={'text'}>{rowData.name}</Text>
                                  <ButtonRoyal itemType={'button'}>Go</ButtonRoyal>
                               </ListItem>)}}
            />
        );
    }
}
```

####options:
<ul>
    <li>textSize</li>
    <li>textColor</li>
    <li>noteColor</li>
    <li>backgroundColor</li>
    <li>borderColor</li>
</ul>

####preview:
![](ButtonBar.png)
