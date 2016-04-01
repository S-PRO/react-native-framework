import React, { Component, View, Text, Image } from 'react-native';

import { Form, FormInput} from '../src/Form'


export default class TestForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'John',
            lastname:'Test',
            email:'john@testmail.com'
        }
    }
    render(){
        return(
            <View style={{marginTop:100, marginLeft:10, marginRight:10}}>
                <Form ref="form">
                    <FormInput
                        required={true}
                        value={this.state.firstname}
                        textChanged={this.textChanged.bind(this)}
                        key="firstname"/>
                    <FormInput
                        required={true}
                        value={this.state.lastname}
                        textChanged={this.textChanged.bind(this)}
                        key="lastname"/>
                    <FormInput
                        required={true}
                        value={this.state.email}
                        textChanged={this.textChanged.bind(this)}
                        key="email"/>

                </Form>
            </View>
        )
    }
}