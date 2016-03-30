'use strict';

import React, { Component, StyleSheet, View } from 'react-native';

export default class ButtonBar extends Component{
    render(){
        var results = this.props.children;
        return(
            <View style={styles.buttonBarContainer}>
                {results.map(function(result, index) {
                  return <View style={{flex: results.length}}
                               key={index}>{result}</View>;
                })}
            </View>
        )
    }
}


var styles = StyleSheet.create({
    buttonBarContainer: {
        flexDirection: 'row',
        flex: 1
    }
});
