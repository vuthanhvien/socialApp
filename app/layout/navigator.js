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

import Login 		from 'app/layout/login';
import {navigator as Home } 		from 'app/layout/main/navigator';
import Setting 		from 'app/layout/setting';

export const NoAuthNavigator = TabNavigator({
	Login: {
		screen: Login
	},
},{
	initialRouteName : 'Login',
	swipeEnabled: false,
	lazy: false,
})

export const MainNavigator = StackNavigator({
	Home: {
		screen: Home,
	},
	Setting: {
		screen : Setting,
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
