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
          {value: 200, color: 'green', onPress: () => alert('test')},
          {value: 450, color: 'yellow'},
          {value: 100, color: 'blue'},
        ]}
      />
    </View>
  );
};

export default App;
