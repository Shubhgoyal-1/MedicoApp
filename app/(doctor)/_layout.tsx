import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import TabBarIcon from '@/Components/TabBarIcon';
export default function PatientLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        sceneStyle: {
          backgroundColor: 'transparent'
        },
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 12,
          height: 71,
          position: 'absolute',
          bottom: 16,
          backgroundColor: '#0492ffff',
          shadowColor: '#2196f3',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5
        },
        tabBarItemStyle: {
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
        },
      }}

    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon="home-outline"
              title="Dashboard"
              offsetX={-4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon="pie-chart"
              title="Statistics"
              offsetX={-4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              icon="person"
              title="Profile"
              offsetX={-4}
            />
          ),
        }}
      />
    </Tabs>
  );
}
