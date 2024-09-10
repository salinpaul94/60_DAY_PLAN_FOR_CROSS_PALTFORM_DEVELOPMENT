import React from 'react';
import { View, Button } from 'react-native';

const index = () => {
  const handlePress = () => {
    console.log('Button Pressed!');
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button title='Press Me' onPress={ handlePress }/>
    </View>
  );
};

export default index;