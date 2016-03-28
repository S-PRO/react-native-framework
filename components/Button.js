'use strict';

import React, { Component, StyleSheet, Text, TouchableHighlight} from 'react-native';

export default class Button extends Component{
    constructor(props){
        super(props);
        console.log("props")
        console.log(props)
    }
    renderChild(){
        if(typeof this.props.children === 'string'){
            return(
                <Text style={[styles.text, this.props.textStyles]}>{this.props.children}</Text>
            )
        }
        else if(typeof this.props.children === 'object'){
            return(
                this.props.children
            )
        }
    }
    render(){
        return(
            <TouchableHighlight underlayColor={this.props.underlayColor ? this.props.underlayColor : underlayColor}
                                style={[styles.highlight, this.props.highlightStyles, this.props.disabled ? styles.buttonDisabled : false]}
                                onPress={this.props.disabled ? null : this.props.onClick}>
                {this.renderChild(this.props)}
            </TouchableHighlight>
        )
    }
}


const underlayColor = '#00A4DC';

var styles = StyleSheet.create({
    highlight:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:'#00A4DC'
    },
    text:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'700',
        textAlign:'center'
    },
    buttonDisabled:{
        opacity:0.1
    }
});

