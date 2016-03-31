'use strict';

import React, { Component, View, StyleSheet, Text, TextInput } from 'react-native';


class FormInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        };
    }
    valueChanged(text) {
        this.setState({value: text});
    }

    render(){
        return(
            <TextInput  style={styles.input}
                        onChangeText={this.valueChanged.bind(this)}
                        keyboardType="default"
                        value={this.state.value}/>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10
    }
});

class Form extends Component{
    static propTypes = {
        //validate:function(props, propName, componentName){
            //if(!childrenIsValid(props)){
            //    return new Error('Validation failed!');
            //
            //}
        //}
    };
    constructor(props){
        super(props);
        console.log('props')
        console.log(props)
    }
    onSubmit(){

    }

    render(){
        return(
            <View style={{marginTop:200}}>
                {this.props.children}
            </View>
        )
    }
}
//<FormInput/>

export {
    Form, FormInput
}