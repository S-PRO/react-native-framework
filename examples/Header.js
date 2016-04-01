import React, { Component, StyleSheet, View, Text } from 'react-native';

import Header from 'react-native-framework';


export default class TestHeader extends Component{
    render(){
        return(
            <View>
                <Header styles={styles.header}>
                    <Text>Custom footer it is</Text>
                </Header>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'red'
    }
});