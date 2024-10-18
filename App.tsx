import React from 'react';
import DonutContainer from './DonutContainer';
import {Text, View} from 'react-native';
const App = () => {
  return (
    <View style={{marginTop: 100}}>
      <DonutContainer
        total={1000}
        size={200}
        data={[
          {
            value: 100,
            color: 'green',
            legend: (
              <View>
                <Text>Desmond</Text>
                <Text>24GB used</Text>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 20,
                    height: 5,
                    borderRadius: 10,
                  }}
                />
              </View>
            ),
          },
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
