import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import Home from './Tabs/Home';
import Test from './Tabs/Test';
import CheckUps from './Tabs/CheckUps';
import Records from './Tabs/Records';
import Profile from './Tabs/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Test':
              iconName = focused ? 'flask' : 'flask-outline';
              break;
            case 'CheckUps':
              iconName = focused ? 'clipboard' : 'clipboard-outline';
              break;
            case 'Records':
              iconName = focused ? 'folder' : 'folder-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'circle';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="CheckUps" component={CheckUps} />
      <Tab.Screen name="Records" component={Records} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
