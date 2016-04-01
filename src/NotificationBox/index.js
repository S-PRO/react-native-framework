import React, { Component, View, Text, StyleSheet } from 'react-native';
/**
 * NotificationBox props:
 * success, failure, message
 */
class NotificationBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <View style={[styles.messageBox, this.props.success ? styles.successMessageBorder : styles.errorMessageBorder]}>
            <View style={[styles.leftBlock, this.props.success ? styles.successMessageLeftBlock : styles.errorMessageLeftBlock]}>
            </View>
            <View style={[styles.rightBlock, this.props.success ? styles.successMessage : styles.errorMessage]}>
                <Text>{this.props.message}</Text>
            </View>
        </View>
        )
    }
}

class SuccessMessage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[styles.messageBox, styles.successMessageBorder]}>
                <View style={[styles.leftBlock, styles.successMessageLeftBlock]}>
                </View>
                <View style={[styles.rightBlock, styles.successMessage]}>
                    <Text>{this.props.message}</Text>
                </View>
            </View>
        )
    }
}

class ErrorMessage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[styles.messageBox, styles.errorMessageBorder]}>
                <View style={[styles.leftBlock, styles.errorMessageLeftBlock]}>
                </View>
                <View style={[styles.rightBlock, styles.errorMessage]}>
                    <Text>{this.props.message}</Text>
                </View>
            </View>
        )
    }
}

class SystemMessage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={[styles.messageBox, styles.systemMessageBorder]}>
                <View style={[styles.leftBlock, styles.systemMessageLeftBlock]}>
                </View>
                <View style={[styles.rightBlock, styles.systemMessage]}>
                    <Text>{this.props.message}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    messageBox:{
        marginTop:10,
        borderWidth:1,
        borderRadius:2,
        flex:1,
        flexDirection:'row'
    },
    successMessageBorder:{
        borderColor:'#2ecc71'
    },
    errorMessageBorder:{
        borderColor:'#d04437'
    },
    systemMessageBorder:{
        borderColor:'#205081'
    },
    successMessage:{
        padding:10,
        borderColor:"#2ecc71",
        paddingLeft:50
    },
    errorMessage:{
        padding:10,
        borderColor:'#d04437',
        paddingLeft:50
    },
    systemMessage:{
        padding:10,
        borderColor:'#205081',
        paddingLeft:50
    },
    successMessageLeftBlock:{
        backgroundColor:'#2ecc71'
    },
    errorMessageLeftBlock:{
        backgroundColor:'#d04437'
    },
    systemMessageLeftBlock:{
        backgroundColor:'#205081'
    },
    leftBlock:{
        width:40,
        position:'absolute',
        top:0,
        bottom:0,
        alignItems:'center',
        padding:10,
        flex:0.2
    },
    rightBlock:{
        flex:4
    }
});

export{
    NotificationBox,
    SuccessMessage,
    ErrorMessage,
    SystemMessage
}