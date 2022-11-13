import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import store from './store/AppStore';
 

import ReduxDashBoard from './ReduxDashBoard';
import ToDoScreen from './ToDoScreen';
import CounterScreen from './CounterScreen';

const Tab = createBottomTabNavigator();

export default function ReduxToolHome(independent = true) {
    return (
        <Provider store={store} >
            <Tab.Navigator>
                <Tab.Screen name="DashBoard" component={ReduxDashBoard} />
                <Tab.Screen name="ToDo" component={ToDoScreen} />
                <Tab.Screen name="Counter" component={CounterScreen} />
            </Tab.Navigator>
        </Provider>
    );
}