/**
 * Created by yunmei on 2017/6/1.
 */
'use strict';

import React, { Component } from 'react'
import Navigation from './LBRNELMApp'
import { View, Platform } from 'react-native'

export default class RootApp extends Component {
    render() {
        return (
            <View style={{backgroundColor: Platform.OS == 'ios'?'#000':'#0398ff', flex: 1}}>
                <Navigation />
            </View>
        )
    }
}