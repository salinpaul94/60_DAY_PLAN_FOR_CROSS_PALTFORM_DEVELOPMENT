import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>Header Text</Text>
      <Text style={ styles.subHeader }>Subheader Text</Text>
      <Text style={ styles.body }>This is the body test with a different style</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
  },
  body: {
    fontSize: 14,
    color: '#999',
  },
});

export default App;