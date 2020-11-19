import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategScreen from '../screens/CategScreen';
import CategMealScreen from '../screens/CategMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';
//----------------------------------------------------------------------------------

const defaultStackNavigatorOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.orange : '',
    },
    headerTitleStyle: {
        fontFamily: 'open-s'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-s'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.purple
}

const MealNavigator = createStackNavigator(
    {
        // order is very importent 
        Category: {       // long form can add config 
            screen: CategScreen,
            navigationOptions: { headerTitle: 'Meals Categories' }
        },
        CategMeal: CategMealScreen,// short form
        MealDetail: MealDetailScreen,
    },
    { defaultNavigationOptions: defaultStackNavigatorOptions }
);

const FavNavigator = createStackNavigator(
    { Favorites: FavoritesScreen, MealDetail: MealDetailScreen },
    { defaultNavigationOptions: defaultStackNavigatorOptions }
)

const FilterNavigator = createStackNavigator({
    Filter: FilterScreen
}, {
    NavigationOptions: {
        drawerLabel: 'Filter'
    },
    defaultNavigationOptions: defaultStackNavigatorOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.orange,
            tabBarLabel: Platform.OS === 'android' ? (<Text style={{ fontFamily: 'open-s' }}>Meals</Text>) : ('Meals')
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarLabel: Platform.OS === 'android' ? (<Text style={{ fontFamily: 'open-s' }}>Favorites</Text>) : ('Favorites'),
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.yellow,
            activeColor: Colors.black
        }
    },
}

const AppNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.white,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.orange
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: { fontFamily: 'open-s' },
            activeTintColor: Colors.orange
        }
    });

const mainNav = createDrawerNavigator({
    AppNav: {
        screen: AppNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    FilterNav: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: 'Filter'
        }
    },
}, {
    contentOptions: {
        activeTintColor: Colors.orange,
        labelStyle: {
            fontFamily: 'open-s'
        },
        barStyle: {
            backgroundColor: Colors.orange
        }
    }
});

export default createAppContainer(mainNav);