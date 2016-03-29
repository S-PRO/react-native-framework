'use strict';

import React, { Component, StyleSheet, Text, TouchableHighlight} from 'react-native';

class Button extends Component{
    setBackground(bgColor) {
        this.setState({backgroundColor: bgColor});
    }

    getBackground() {
        return this.state ? this.state.backgroundColor: styles.buttonStable;
    }

    setColor(color) {
        this.setState({color: color});
    }

    getColor() {
        return this.state ? this.state.color: styles.colorDark;
    }

    renderChild(){
        if(typeof this.props.children === 'string'){
            return(
                <Text style={[this.getColor(), styles.text, this.props.textStyles]}>{this.props.children}</Text>
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
                                style={[this.getBackground(), styles.highlight, this.props.highlightStyles, this.props.disabled ? styles.buttonDisabled : false]}
                                onPress={this.props.disabled ? null : this.props.onClick}>
                {this.renderChild(this.props)}
            </TouchableHighlight>
        )
    }
}

class ButtonStable extends Button {
    componentDidMount(){
        this.setColor(styles.colorDark);
        this.setBackground(styles.buttonStable);
    }
}

class ButtonPositive extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonPositive);
    }
}

class ButtonCalm extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonCalm);
    }
}

class ButtonBalanced extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonBalanced);
    }
}

class ButtonEnergized extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonEnergized);
    }
}

class ButtonAssertive extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonAssertive);
    }
}

class ButtonRoyal extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonRoyal);
    }
}

class ButtonDark extends Button {
    componentDidMount(){
        this.setColor(styles.colorWhite);
        this.setBackground(styles.buttonDark);
    }
}

class ButtonLight extends Button {
    componentDidMount(){
        this.setColor(styles.colorDark);
        this.setBackground(styles.buttonLight);
    }
}

const underlayColor = '#00A4DC';

var styles = StyleSheet.create({
    colorWhite: {
        color: '#fff'
    },
    colorDark: {
        color: '#444'
    },
    buttonStable: {
        backgroundColor: '#f8f8f8'
    },
    buttonPositive: {
        backgroundColor: '#387ef5'
    },
    buttonCalm: {
        backgroundColor: '#11c1f3'
    },
    buttonBalanced: {
        backgroundColor: '#33cd5f'
    },
    buttonEnergized: {
        backgroundColor: '#ffc900'
    },
    buttonAssertive: {
        backgroundColor: '#ef473a'
    },
    buttonRoyal: {
        backgroundColor: '#886aea'
    },
    buttonDark: {
        backgroundColor: '#444444'
    },
    buttonLight: {
        backgroundColor: 'white'
    },
    highlight:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20
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
