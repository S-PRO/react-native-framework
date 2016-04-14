'use strict';

import React, { Component, View, StyleSheet, TextInput } from 'react-native';

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

    static propTypes = TextInput.propTypes;

    _focus(){
        this.setState({highlight:true})
    }
    _blur(){
        this.setState({highlight:false})
    }
    _onChangeText(text){
        this.setState({value:text});
    }
    render(){
        const commonProps = {
            ...this.props,
            key: this.props.key,
            value: this.state.value,
            onBlur: this._blur.bind(this),
            onFocus: this._focus.bind(this),
            onChangeText: this._onChangeText.bind(this),
            style: [styles.input, this.props.style, this.state.highlight ? styles.highlight : {}]
        };
        return(
            <TextInput {...commonProps} />
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

const styles = StyleSheet.create({
    form:{
        flex:1,
        padding:10,
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

export {
    Form,
    FormInput
}