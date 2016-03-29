import React, { Component, View, Text, Image } from 'react-native';

import Button from 'react-native-framework';


export default class TestButton extends Component{
    render(){
        return(
            <View>
                <Button highlightStyles={{backgroundColor:'grey'}}>Button with only text</Button>
                <Button>
                    <Text>Button with only text</Text>
                </Button>
                <Button>
                    <Image source={{uri:'http://www.velior.ru/wp-content/uploads/2009/05/Test-Computer-Key-by-Stuart-Miles.jpg'}}/>
                </Button>
            </View>
        )
    }
}