import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './index.js';
import Detail from './detail/index.js';
export const navigator = StackNavigator({
	Home: {
		screen: Home
	},
	Detail:{
		screen: Detail,
	},
},
{
	mode : 'card',
    headerMode : 'none',
	navigationOptions: {
		
	}
});
