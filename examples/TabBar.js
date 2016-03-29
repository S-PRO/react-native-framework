import React, { Component, StyleSheet, View, Text } from 'react-native';

import TabBar from 'react-native-framework';


export default class TestTabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            page:'FIRST'
        };
    }

    onSelect(name){
        this.setState({
            page:name
        });
    }

    render(){
        return(
            <View>
                <TabBar selected={this.state.page} style={{backgroundColor:'white'}}
                        selectedStyle={{color:'red'}} onSelect={el=>this.onSelect(el.props.name)}>
                    <Text name="FIRST">1</Text>
                    <Text name="SECOND">2</Text>
                    <Text name="THIRD">3</Text>
                    <Text name="FOURTH">4</Text>
                    <Text name="FIFTH">5</Text>
                </TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundColor:'red'
});