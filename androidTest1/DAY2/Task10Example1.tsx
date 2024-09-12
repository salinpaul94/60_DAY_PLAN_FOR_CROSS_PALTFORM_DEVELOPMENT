import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        Centered Text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;