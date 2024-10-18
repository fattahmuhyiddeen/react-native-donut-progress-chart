import React from 'react';
import DonutContainer from './DonutContainer';
import {View} from 'react-native';
const App = () => {
  return (
    <View style={{marginTop: 100}}>
      <DonutContainer
        total={1000}
        size={200}
        data={[
          {value: 100, color: 'green'},
          {value: 200, color: 'red'},
          {value: 100, color: 'blue'},
          {value: 400, color: 'orange'},
          {value: 100, color: 'black'},
          {value: 200, color: 'brown'},


          // {value: 500, color: 'green'},
          // {value: 500, color: 'red'},
        ]}
      />
    </View>
  );
};

export default App;
