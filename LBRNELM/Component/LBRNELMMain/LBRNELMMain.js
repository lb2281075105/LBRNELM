/**
 * Created by yunmei on 2017/6/1.
 */
/**
 * @author LB
 * @repo https://github.com/lb2281075105/LBRNELM.git
 */
'use strict';

import React, { Component } from 'react'
import {
    Text,
    Dimensions,
    StyleSheet,
    Animated,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';//导入组件不加分号也可以
import TabNavigator from 'react-native-tab-navigator';
import LBRNELMWaiMai from '../LBRNELMWaiMai/LBRNELMWaiMai';
import LBRNELMFind from '../LBRNELMFind/LBRNELMFind';
import LBRNELMOrder from '../LBRNELMOrder/LBRNELMOrder';
import LBRNELMMine from '../LBRNELMMine/LBRNELMMine';
import px2dp from '../util';
let {width, height} = Dimensions.get('window');

export default class LBRNELMMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentTab: 'LBRNELMWaiMai',
            //hideTabBar: false
        };
        this.tabNamesArray = [
            ['外卖', 'logo-google', 'LBRNELMWaiMai', <LBRNELMWaiMai {...this.props}/>],
            ['发现', 'ios-compass-outline', 'LBRNELMFind', <LBRNELMFind {...this.props}/>],
            ['订单', 'ios-list-box-outline', 'LBRNELMOrder', <LBRNELMOrder {...this.props}/>],
            ['我的', 'ios-contact-outline', 'LBRNELMMine', <LBRNELMMine {...this.props}/>]
        ];
        // LBRNELMMain.hideTabBar = LBRNELMMain.hideTabBar.bind(this);
        // LBRNELMMain.showTabBar = LBRNELMMain.showTabBar.bind(this);
    }
    // static showTabBar(time){
    //     this.setState({hideTabBar: false})
    // }
    // static hideTabBar(time){
    //     this.setState({hideTabBar: true})
    // }
    render(){
        return (
            <TabNavigator
                //hidesTabTouch={false}
                tabBarStyle={[styles.tabbar,
                    //(this.state.hideTabBar?styles.hide:{})
                ]}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                {
                    this.tabNamesArray.map((tabItem, i) => {//map遍历
                        return (
                            <TabNavigator.Item
                                key={i}
                                tabStyle={styles.tabStyle}
                                title={tabItem[0]}
                                selected={this.state.currentTab === tabItem[2]}
                                selectedTitleStyle={{color: '#3496f0'}}
                                renderIcon={() => <Icon name={tabItem[1]} size={px2dp(22)} color='#666' />}
                                renderSelectedIcon={() => <Icon name={tabItem[1].replace(/\-outline$/, '')} size={px2dp(22)} color='#3496f0' />}
                                onPress={() => this.setState({ currentTab: tabItem[2] })}>
                                {tabItem[3]}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: 46,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    hide: {
        transform: [
            {translateX:width}
        ]
    },
    tabStyle:{
        padding: px2dp(4)
    }
})
