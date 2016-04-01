import React, { Component, View, Text, Image } from 'react-native';

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
