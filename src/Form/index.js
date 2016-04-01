'use strict';

import React, { Component, View, StyleSheet, Text, TextInput, Switch } from 'react-native';

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:10,
        borderColor: 'grey',
        borderWidth: 1,
        marginTop:200,
        marginLeft:20,
        marginRight:20
    },
    input:{
        marginTop:10,
        height:30,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:2,
        padding:5
    },
    highlight:{
        borderColor:'lightblue',
        borderWidth:2
    }
});


/**
 * FormInput props:
 * value, textChanged, styles, key
 */
class FormInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            highlight:false,
            value:props.value
        }
    }
    focus(){
        this.setState({highlight:true})
    }
    blur(){
        this.setState({highlight:false})
    }
    onTextChange(text){
        this.setState({value:text});
        this.props.textChanged(text);
    }
    render(){
        return(
            <TextInput
                onBlur={this.blur.bind(this)}
                onFocus={this.focus.bind(this)}
                value={this.state.value}
                onChangeText={this.onTextChange.bind(this)}
                key={this.props.key}
                style={[styles.input, this.props.styles, this.state.highlight ? styles.highlight : {}]}
                keyboardType="default"/>
        )

    }
}

class Form extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <View style={styles.form}>
                {this.props.children}
            </View>
        )
    }
}

export {
    Form,
    FormInput
}