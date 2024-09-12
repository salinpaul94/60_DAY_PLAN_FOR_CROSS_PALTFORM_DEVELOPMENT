import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Item 1</Text>
      <Text style={ styles.text }>Item 2</Text>
      <Text style={ styles.text }>Item 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    color: '#333',
  },
});

export default App;