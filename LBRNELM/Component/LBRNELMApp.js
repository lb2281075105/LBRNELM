/**
 * Created by yunmei on 2017/6/1.
 */
'use strict';

import React, { Component } from 'react'
import {
    Navigator,
    View,
    StatusBar,
    Platform
} from 'react-native'
import LBRNELMWrapper from './LBRNELMWrapper';

export default class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render(){

        return Platform.OS == 'ios'?(
            <Navigator
                initialRoute={{component: LBRNELMWrapper}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                }
                }
            />
        ):(
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor='#0398ff'
                    barStyle='light-content'
                />
                <Navigator
                    initialRoute={{component: LBRNELMWrapper}}
                    configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} {...route.args}/>
                    }
                    }
                />
            </View>
        )
    }
}