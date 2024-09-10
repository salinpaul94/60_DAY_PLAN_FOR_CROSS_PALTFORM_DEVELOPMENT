import React from 'react';
import { View, Text } from 'react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

const App = () => {
  return <Greeting name="John Doe" />;
};

export default App;