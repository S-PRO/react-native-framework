import React, { Component, StyleSheet, View, Text } from 'react-native';

import Select from 'react-native-framework';


export default class TestSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            chosenItem:1,
            listOfProps:[1,2,3,4,5,6,7,8,9]
        };
    }

    update(){
        console.log('updated')
    }

    render(){
        return(
            <View style={styles.container}>
                <Select value={this.state.chosenItem} update={this.update.bind(this)} options={this.state.listOfProps} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:50
    }
});