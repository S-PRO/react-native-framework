#CheckBox
####example:
<pre>
import React, { AppRegistry, Component, View, Text, Image } from 'react-native';

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
            &lt;View&gt;
                &lt;CheckBox
                    icon={'./check_mark.png'}
                    checked={this.state.checked1}
                    onToggle={(checked) =&gt; this.changeChecked({checked1: checked})}
                &gt;test checkbox 1&lt;/CheckBox&gt;
                &lt;CheckBox
                    checked={this.state.checked2}
                    onToggle={(checked) =&gt; this.changeChecked({checked2: checked})}
                &gt;test checkbox 2&lt;/CheckBox&gt;
                &lt;CheckBox
                    checked={this.state.checked3}
                    onToggle={(checked) =&gt; this.changeChecked({checked3: checked})}
                &gt;test checkbox 3&lt;/CheckBox&gt;
            &lt;/View&gt;
        );
    }
}
</pre>
####Options
<ul>
    <li> checked : initial state of checkbox. Default: false </li>
    <li> onPress : function that will be invoked by pressing to checkbox with checked property as argument.  </li>
    <li> size : Diameter of circle. Minimum: 15, default: 17 </li>
    <li> outerColor : Color of outer circle. Default: #387ef5 </li>
    <li> markColor : Color of check mark. Default: #fff </li>
    <li> borderColor : Color of border. Default: #ddd </li>
    <li> labelPosition : Label rendering position. Default: right, may be 'right' or 'left' </li>
</ul>
####preview:
![]('CheckBox.png')
