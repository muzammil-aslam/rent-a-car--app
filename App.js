/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screen/Home';
import Sigin from './src/screen/Sigin';
import Login from './src/screen/Login';
import Detail from './src/screen/Detail';
import New from './src/screen/welCome';
import Booking from './src/screen/Order';
import Loader from './src/screen/Loader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Loader"
          component={Loader}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Sigin"
          component={Sigin}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Homepage"
          component={New}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Booking"
          component={Booking}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
