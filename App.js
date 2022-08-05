import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper';

import Onboarding from './src/containers/Onboarding'
import CreateAccount from './src/containers/CreateAccount'
import Login from './src/containers/Login'
import Welcome from './src/Welcome'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='Welcome' component={Welcome} /> */}
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='CreateAccount' component={CreateAccount} />
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

