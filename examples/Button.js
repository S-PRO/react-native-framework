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
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <ButtonStable>
                    <Text>Button Stable</Text>
                </ButtonStable>
                <ButtonAssertive>Assertive</ButtonAssertive>
                <ButtonBalanced>Balanced</ButtonBalanced>
                <ButtonCalm>Calm</ButtonCalm>
                <ButtonDark>Dark</ButtonDark>
                <ButtonEnergized>Energized</ButtonEnergized>
                <ButtonLight>Light</ButtonLight>
                <ButtonPositive>Positive</ButtonPositive>
                <ButtonRoyal>Royal</ButtonRoyal>
                <Button highlightStyles={{backgroundColor:'grey'}}>Button with custom background</Button>
            </View>
        )
    }
}