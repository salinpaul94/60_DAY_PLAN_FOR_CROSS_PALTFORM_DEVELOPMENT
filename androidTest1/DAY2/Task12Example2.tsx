import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        This is an
        <Text style={ styles.bold }> important </Text>
        message with nested styles.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 50,
    color: '#333'
  },
  bold: {
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});

export default App;