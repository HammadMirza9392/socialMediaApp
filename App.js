import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Screens/Home';
import Profile from './components/Screens/Profile';
const Stack = createNativeStackNavigator();
import Login from './components/Screens/Login';
import Register from './components/Screens/Register';
import {auth} from './firebase/firebasey.config.js';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
