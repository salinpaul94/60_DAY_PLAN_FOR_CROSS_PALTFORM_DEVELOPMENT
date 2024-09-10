import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const index = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Styled View and Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
});

export default index;