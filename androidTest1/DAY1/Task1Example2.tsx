import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text1 }>Hello, World!</Text>
      <Text style={ styles.text2 }>Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text1: {
    fontSize: 24,
    color: 'blue',
  },
  text2: {
    fontSize: 18,
    color: 'green',
  },
});

export default App;