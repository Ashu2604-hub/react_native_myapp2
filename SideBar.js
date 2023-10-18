// components/SideBar.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function SideBar({ navigation }) {
  return (
    <View>
      <Text>Sidebar</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default SideBar;
