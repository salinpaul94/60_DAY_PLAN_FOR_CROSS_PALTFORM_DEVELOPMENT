import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.box }>
        <Text style={ styles.text }>Box 1</Text>
      </View>
      <View style={ styles.box }>
        <Text style={ styles.text }>
          Box 2
        </Text>
      </View>
      <View style={ styles.box }>
        <Text style={ styles.text }>
          Box 3
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  box: {
    height: 100,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;