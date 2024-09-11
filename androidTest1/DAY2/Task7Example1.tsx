import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Welcome to my App</Text>
      <Text style={ styles.subtitle }>This is a custom styled component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C96868',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FADFA1',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF4EA',
  },
});

export default App;