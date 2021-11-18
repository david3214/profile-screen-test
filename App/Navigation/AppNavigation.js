import {createAppContainer, createBottomTabNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileScreen from '../Containers/ProfileScreen'
import { Icon } from 'react-native-elements'
import React from 'react'

import ScheduleScreen from '../Containers/ScheduleScreen'
import TimeScreen from '../Containers/TimeScreen'
import SuitecaseScreen from '../Containers/SuitecaseScreen'
import TaskScreen from '../Containers/TaskScreen'

const TabNav = createBottomTabNavigator(
  {
    TimeScreen: TimeScreen,
    SuitcaseScreen: SuitecaseScreen,
    TaskScreen: TaskScreen,
    ScheduleScreen: ScheduleScreen,
    ProfileScreen: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        // Decide icon type base on screen
        if (focused)
          iconName = 'angle-double-up'
        else {
          switch (routeName){
            case 'ProfileScreen':
              iconName = `user`;
              break
            case 'TimeScreen':
              iconName = 'clock';
              break
            case 'SuitcaseScreen':
              iconName = 'suitcase';
              break
            case 'TaskScreen':
              iconName = 'tasks'
              break
            case 'ScheduleScreen':
              iconName = 'th-list'
              break
          }
        }

        return <Icon type='font-awesome-5' name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4d7cfe',
      inactiveTintColor: 'gray',
      showLabel: false
    },
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'ProfileScreen'
  },
)
export default createAppContainer(TabNav)
