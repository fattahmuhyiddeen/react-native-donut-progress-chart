import React from 'react';
import Donut from './Donut';
import {View} from 'react-native';
const App = () => {
  return (
    <View style={{padding: 50}}>
      <Donut
        total={1000}
        size={200}
        data={[
          {value: 200, color: 'green', onPress: () => alert('green')},
          {value: 450, color: 'yellow', onPress: () => alert('yellow')},
          {value: 100, color: 'blue'},
          {value: 1, color: 'red'},
        ]}
      />
    </View>
  );
};

export default App;
