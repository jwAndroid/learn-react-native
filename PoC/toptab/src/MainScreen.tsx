import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

const MainScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color}) => <Text style={{color: 'black'}}>a</Text>,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({color}) => <Text style={{color: 'black'}}>a</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
