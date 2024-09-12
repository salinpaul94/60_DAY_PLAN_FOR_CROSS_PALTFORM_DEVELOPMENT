import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [ isOn, setIsOn ] = useState( false );
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>The Switch is {isOn ? 'On': 'Off'}</Text>
      <Button title={ isOn ? 'Turn Off' : 'Turn On' } onPress={() => setIsOn(!isOn) } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;