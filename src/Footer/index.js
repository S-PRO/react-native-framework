import React, { Component, StyleSheet, View, Text } from 'react-native';
import Dimensions from 'Dimensions';
const width = Dimensions.get('window').width;
export default class Footer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[styles.footer, this.props.styles]}>
                {this.props.children}
            </View>
        )
    }
}

var styles = StyleSheet.create({
        footer:{
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#3d3d3d',
            bottom:0,
            left:0,
            position:'absolute',
            height:50,
            width

        }
    }
);
