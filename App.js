// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import SideBar from './SideBar';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SideBar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
