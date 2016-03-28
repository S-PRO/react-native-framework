'use strict';

import React, { Component, StyleSheet, View, Picker } from 'react-native';

const Item = Picker.Item;

function generateOptionList(arrayOfOptions){
    var items = [];
    arrayOfOptions.forEach(function (item) {
        items.push(
            <Item style={styles.selectOption} key={item.name} label={item.name} value={item.value}></Item>
        );
    });
    return items;
}

export default class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            update:props.update,
            value: props.value,
            options:props.options
        };
    }

    componentWillReceiveProps(data){
        this.setState({value:data.value});
    }

    valueChanged(item){
        this.state.update(item);
        this.setState({value:item});
    }

    render(){
        return(
            <View style={styles.selectBoxWrapper}>
                <Picker style={styles.selectBox}
                        itemStyle={styles.selectOption}
                        selectedValue={this.state.value}
                        onValueChange={this.valueChanged.bind(this)}>
                    {generateOptionList(this.state.options)}
                </Picker>
            </View>
        )
    }
}

var styles = StyleSheet.create({
        selectBoxWrapper:{
            overflow:'hidden',
            height:100,
            alignItems:'center',
            justifyContent:'center'
        },
        selectBox:{
            width:300,
            borderColor: 'lightgrey'
        },
        selectOption:{
            textAlign:'center',
            fontSize:14
        }
    }
);
