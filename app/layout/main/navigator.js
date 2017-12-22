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

import Home			from 'app/layout/main/home';
import Create		from 'app/layout/main/create';
import Search		from 'app/layout/main/search';
import Profile		from 'app/layout/main/profile';
import Favorite		from 'app/layout/main/favorite';

export const navigator = TabNavigator({
	Home: {
		screen: Home,
		path: '/home',
		navigationOptions: ({ navigation, screenProps }) => ({
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon 
				name={focused ? "ios-home" : 'ios-home-outline'}
 				style={{ width:24, height:24,color: focused ? '#604c8d' : '#787878'}} 
				/>
				),
		}),
	},
	Search: {
		screen: Search,
		path: '/search',
		navigationOptions: ({ navigation, screenProps }) => ({
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon 
				name={focused ? "ios-search" :  "ios-search-outline"}
				style={{ width:24, height:24,color: focused ? '#604c8d' : '#787878'}} 
				/>
				),
		}),
	},
	Create: {
		screen: Create,
		path: '/create',
		navigationOptions: ({ navigation, screenProps }) => ({
			tabBarIcon: ({ tintColor, focused }) => (
				<View style={{width: 30, height: 30, borderRadius: 5, backgroundColor: focused ? '#604c8d' : '#787878', alignItems: 'center', justifyContent: 'center'}}>
					<Icon  name={focused ? 'ios-add-outline' : 'ios-add-outline'} style={{color:  'white'}}/>
				</View>
			),
		}),
	},
	Favorite: {
		screen: Favorite,
		path: '/favorite',
		navigationOptions: ({ navigation, screenProps }) => ({
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon 
				name={focused ? "ios-heart" :  "ios-heart-outline"}
				style={{ width:24, height:24, color: focused ? '#604c8d' : '#787878'}} 
				/>
				),
		}),
	},
	Profile: {
		screen: Profile,
		path: '/profile',
		navigationOptions: ({ navigation, screenProps }) => ({
			tabBarIcon: ({ tintColor, focused }) => (
				<Icon 
				name={focused ? "ios-person" :  "ios-person-outline"}
				style={{ width:24, height:24,color: focused ? '#604c8d' : '#787878'}} 
				/>
				),
		}),
	},
	
},{
	mode : 'card',
	initialRouteName : 'Home',
	swipeEnabled: false,
	tabBarPosition: 'bottom',
	animationEnabled: true,
	lazy: false,
	navigationOptions: {
        headerTintColor: 'white',
    },
	tabBarOptions: {
		activeTintColor: 'white',
		showIcon: true,
		showLabel: false,
		labelStyle: {
			fontSize: 9,
			padding: 0,
			margin: 0,
		},
		style: {
			backgroundColor: '#eee',
			borderTopWidth: 0,
			borderTopColor: '#eee',
			shadowOffset: { height: 0, width: 1 },
			height: 50,
			paddingTop: 0,
			paddingBottom: 0,
			marginTop: 0,
			marginBottom: 0
		},
		iconStyle: {
			marginTop: Platform.OS === 'ios' ? 10 : 0,
			height: 32,
			width: 120,
		},
		activeTintColor: '#604c8d',
		inactiveTintColor: '#444',
		indicatorStyle: {
			height: 0,
			backgroundColor: '#604c8d',
		},

	}	
}); 