import React, { Component, StyleSheet, View, Text } from 'react-native';

import Footer from 'react-native-framework';


export default class TestFooter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Footer styles={styles}>
                    <Text>Custom footer it is</Text>
                </Footer>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundColor: 'red'
});