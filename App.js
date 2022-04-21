import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home.js';
import Resultado from './src/pages/Resultado.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1c3c94',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Home"
          component={Home}
          options={
            { title: "Home" }
          }
        />

        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={
            { title: "Resultado" }
          }
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
