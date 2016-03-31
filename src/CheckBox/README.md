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
####preview:
![]('CheckBox.png')
