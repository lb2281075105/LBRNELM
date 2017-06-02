/**
 * Created by yunmei on 2017/6/1.
 */
'use strict';

import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'


export default class Discover extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3",justifyContent:'center',alignItems:'center'}}>
                <Text>我的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})