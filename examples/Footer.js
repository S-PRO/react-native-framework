import React, { Component, StyleSheet, View, Text } from 'react-native';

import Footer from 'react-native-framework';


export default class TestFooter extends Component{
    render(){
        return(
            <View>
                <Footer styles={styles.footer}>
                    <Text>Custom footer it is</Text>
                </Footer>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:'red'
    }
});