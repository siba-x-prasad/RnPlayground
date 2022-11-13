import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReduxLoginComponent from './ReduxLoginComponent';
import ReduxDashBoardCompoent from './ReduxDashBoardCompoent';
import { Provider } from 'react-redux';

import configureStore from './stores/stores';

const store = configureStore()

const Tab = createBottomTabNavigator();

export default function ReduxHome(independent = true) {
  return (
    <Provider store = { store } >
      <Tab.Navigator>
        <Tab.Screen name="Login" component={ReduxLoginComponent} />
        <Tab.Screen name="DashBoard" component={ReduxDashBoardCompoent} />
      </Tab.Navigator>
    </Provider>
  );
}