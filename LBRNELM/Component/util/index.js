'use strict';

import {Dimensions} from 'react-native'

const currentHeight = Dimensions.get('window').height;
const currentWidth = Dimensions.get('window').width;

const width = 375;

export default function px2dp(px) {
    return px *  currentWidth / width;
}
