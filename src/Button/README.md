#Button
####example:
<pre>
import React, { Component, View, Text, Image } from 'react-native';

import {ButtonStable,
    ButtonAssertive,
    ButtonBalanced,
    ButtonCalm,
    ButtonDark,
    ButtonEnergized,
    ButtonLight,
    ButtonPositive,
    ButtonRoyal} from 'react-native-framework'

export default class TestButton extends Component{
    render(){
        return(
            &lt;View&gt;
                &lt;ButtonStable&gt;
                    &lt;Text&gt;Button Stable&lt;/Text&gt;
                &lt;/ButtonStable&gt;
                &lt;ButtonAssertive&gt;Assertive&lt;/ButtonAssertive&gt;
                &lt;ButtonBalanced&gt;Balanced&lt;/ButtonBalanced&gt;
                &lt;ButtonCalm&gt;Calm&lt;/ButtonCalm&gt;
                &lt;ButtonDark&gt;Dark&lt;/ButtonDark&gt;
                &lt;ButtonEnergized&gt;Energized&lt;/ButtonEnergized&gt;
                &lt;ButtonLight&gt;Light&lt;/ButtonLight&gt;
                &lt;ButtonPositive&gt;Positive&lt;/ButtonPositive&gt;
                &lt;ButtonRoyal&gt;Royal&lt;/ButtonRoyal&gt;
                &lt;Button highlightStyles={{backgroundColor:'grey'}}&gt;Button with only text&lt;/Button&gt;
            &lt;/View&gt;
        )
    }
}
</pre>
####preview:
![]('Button.png')
