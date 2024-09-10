import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const index = () => {
  const [ count, setCount ] = useState(0);

  const handlePress = () => {
    setCount( count + 1 );
    console.log(`Button pressed ${ count + 1 } times!`);
  };

  return (
    <View style={{ marginTop: 50, alignItems: 'center' }}>
      <Button title='Press Me' onPress={ handlePress } />
      <Text>You pressed the button { count } times</Text>
    </View>
  );
};

export default index;