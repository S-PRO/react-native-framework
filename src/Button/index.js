'use strict';

import React, { Component, StyleSheet, Text, TouchableHighlight, PropTypes} from 'react-native';

class Button extends Component{
    static propTypes = {
        children:PropTypes.string.isRequired
    };
    constructor(props){
        super(props);
    }

    getUnderlayColor(){
        if((this.props) && this.props.underlayColor){
            return this.props.underlayColor;
        }
        else if((this.state) && this.state.underlayColor){
            return this.state.underlayColor;
        }
        else{
            return underlayColor.buttonStable;
        }
    }

    getBackground() {
        return this.state ? this.state.backgroundColor: styles.buttonStable;
    }

    getColor() {
        return this.state ? this.state.color: styles.colorDark;
    }

    renderChild(){
        if(typeof this.props.children === 'string'){
            return(
                <Text style={[ styles.text, this.props.textStyles, this.getColor()]}>{this.props.children}</Text>
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
            <TouchableHighlight underlayColor={this.getUnderlayColor()}
                                style={[this.getBackground(), styles.highlight, this.props.highlightStyles, this.props.disabled ? styles.buttonDisabled : false]}
                                onPress={this.props.disabled ? null : this.props.onClick}>
                {this.renderChild(this.props)}
            </TouchableHighlight>
        )
    }
}

class ButtonStable extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor:styles.buttonStable,
            color:styles.colorDark,
            underlayColor:underlayColor.buttonStable
        };
    }
}

class ButtonPositive extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonPositive,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonPositive
        };
    }
}

class ButtonCalm extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonCalm,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonCalm
        };
    }
}

class ButtonBalanced extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonBalanced,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonBalanced
        };
    }
}

class ButtonEnergized extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonEnergized,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonEnergized
        };
    }
}

class ButtonAssertive extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonAssertive,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonAssertive
        };
    }
}

class ButtonRoyal extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonRoyal,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonRoyal
        };
    }
}

class ButtonDark extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonDark,
            color:styles.colorWhite,
            underlayColor:underlayColor.buttonDark
        };
    }
}

class ButtonLight extends Button {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: styles.buttonLight,
            color:styles.colorDark,
            underlayColor:underlayColor.buttonLight
        };
    }
}

const underlayColor = {
    buttonStable:'#e5e5e5',
    buttonPositive:'#0c60ee',
    buttonCalm:'#0a9dc7',
    buttonBalanced:'#28a54c',
    buttonEnergized:'#e6b500',
    buttonAssertive:'#e42112',
    buttonRoyal:'#6b46e5',
    buttonDark:'#262626',
    buttonLight:'#fafafa'
};

var styles = StyleSheet.create({
    colorWhite: {
        color: '#fff'
    },
    colorDark: {
        color: '#444'
    },
    buttonStable: {
        backgroundColor: '#f8f8f8',
        borderColor:'#b2b2b2'
    },
    buttonPositive: {
        borderColor:'#0c60ee',
        backgroundColor: '#387ef5'
    },
    buttonCalm: {
        borderColor:'#0a9dc7',
        backgroundColor: '#11c1f3'
    },
    buttonBalanced: {
        borderColor:'#28a54c',
        backgroundColor: '#33cd5f'
    },
    buttonEnergized: {
        borderColor:'#e6b500',
        backgroundColor: '#ffc900'
    },
    buttonAssertive: {
        backgroundColor: '#ef473a',
        borderColor:'#e42112'
    },
    buttonRoyal: {
        borderColor:'#6b46e5',
        backgroundColor: '#886aea'
    },
    buttonDark: {
        borderColor:'#000',
        backgroundColor: '#444444'
    },
    buttonLight: {
        borderColor:'#ccc',
        backgroundColor: 'white'
    },
    highlight:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:0.5,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        marginBottom:10
    },
    text:{
        fontSize:16,
        fontWeight:'700',
        textAlign:'center'
    },
    buttonDisabled:{
        opacity:0.1
    }
});

export {
    Button,
    ButtonStable,
    ButtonPositive,
    ButtonCalm,
    ButtonBalanced,
    ButtonEnergized,
    ButtonAssertive,
    ButtonRoyal,
    ButtonDark,
    ButtonLight
};
