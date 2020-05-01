import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import New from '../pages/New';

const Tabs = createBottomTabNavigator();

function tabBarIcon(color, iconName) {
  return <Icon name={iconName} color={color} size={26} />;
}

export default function AppRoutes() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#8d41a8',
          height: 60,
          borderWidth: 0,
        },
        tabStyle: {
          paddingVertical: 6,
        },
        labelStyle: {
          fontSize: 14,
        },
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.6)',
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'event'),
        }}
      />
      <Tabs.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: 'Agendar',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'add-circle-outline'),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => tabBarIcon(color, 'person'),
        }}
      />
    </Tabs.Navigator>
  );
}
