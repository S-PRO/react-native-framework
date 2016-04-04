import React, { Component, StyleSheet, View, Text, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default class Header extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[styles.header, this.props.styles]}>
                {this.props.children}
            </View>
        )
    }
}

var styles = StyleSheet.create({
        header:{
            paddingTop:20,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#3d3d3d',
            top:0,
            left:0,
            position:'absolute',
            width
        }
    }
);
