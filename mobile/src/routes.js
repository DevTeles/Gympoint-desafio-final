import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Checkin from '~/pages/Checkin';
import Profile from '~/pages/Profile';

import List from '~/pages/HelpOrder/List';
import New from '~/pages/HelpOrder/New';
import Detail from '~/pages/HelpOrder/Detail';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Checkin,
            'Pedir Ajuda': {
              tabBarLabel: 'Pedir ajuda',
              screen: createStackNavigator(
                {
                  List,
                  Detail,
                  New,
                },
                {
                  defaultNavigationOptions: {
                    headerTintColor: '#FFF',
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                      top: 0,
                    },
                  },
                }
              ),
              navigationOptions: {
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
