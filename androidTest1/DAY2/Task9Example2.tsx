import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.column }>
        <Text style={ styles.text }>
          Column 1
        </Text>
      </View>
      <View style={ styles.column }>
        <Text style={ styles.text }>
          Column 2
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  column: {
    backgroundColor: '#FFC107',
    padding: 30,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900'
  },
});

export default App;