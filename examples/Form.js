import React, { Component, View, Text, Image } from 'react-native';

import { Form, FormInput} from '../src/Form'


export default class TestForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:''
        }
    }

    textChanged(text){
        this.setState({firstname:text});
    }

    render(){
        return(
            <View>
                <Form>
                    <FormInput textChanged={this.textChanged.bind(this)} value={this.state.firstname}/>
                    <FormInput textChanged={this.textChanged.bind(this)} value={this.state.lastname}/>
                </Form>
            </View>
        )
    }
}