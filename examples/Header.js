import React, { Component, StyleSheet, View, Text } from 'react-native';

import Select from 'react-native-framework';


export default class TestTabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTab:1
        };
    }

    changeState(index){
        this.setState({
            currentTab:index
        });
    }

    render(){
        return(
            <View>
                <Text>
                    Chosen tab is: {this.state.currentTab}
                </Text>
                <TabBar>
                    <Text>First</Text>
                    <Text>Second</Text>
                    <Text>Third</Text>
                </TabBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundColor:'red'
});