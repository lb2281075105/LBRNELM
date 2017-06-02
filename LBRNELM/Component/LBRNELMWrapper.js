/**
 * Created by yunmei on 2017/6/1.
 */
import React, { Component } from 'react';
import { Navigator, View } from 'react-native';
import LBRNELMMain from './LBRNELMMain/LBRNELMMain';

export default class LBRNELMWrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <LBRNELMMain navigator={this.props.navigator}/>
            </View>
        )
    }
}