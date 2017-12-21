import React, { Component } from 'react';
import {
	Text, Image, Platform
} from 'react-native';
import { Icon, View } from 'native-base';
import { 
	addNavigationHelpers, 
	NavigationActions, 
	StackNavigator, 
	TabNavigator 
} from 'react-navigation';

// import {Icons, Colors, Settings }  from 'app/config';

import Login 		from 'app/layout/login';
import Home 		from 'app/layout/home';
// import Register 	from 'app/layouts/register';

// import { navigator as Dashboard} 			from 'app/layouts/dashboard/navigator';

// import { navigator as ChannelNavigator } 	from 'app/layouts/channel/navigator';

export const NoAuthNavigator = TabNavigator({
	Login: {
		screen: Login
	},
	// Register: {
		// screen: Register
	// }
},{
	initialRouteName : 'Login',
	swipeEnabled: false,
	lazy: false,
})

export const MainNavigator = StackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	}
},{
	initialRouteName : 'Home',
	lazy: true,
	tabBarVisible: false
})


export const AppNavigator = TabNavigator({
	NoAuth: {
		screen: NoAuthNavigator
	},
	Main: {
		screen: MainNavigator
	}
},{
	initialRouteName : 'NoAuth',
	lazy: true,
	header: null,
	headerStyle: {
	},
})
