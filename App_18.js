import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // Import your Home Page component
import AboutPage from './AboutPage'; // Import your About Page component
import ContactPage from './ContactPage';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
