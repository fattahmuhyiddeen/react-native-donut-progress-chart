import React from 'react';
import DonutContainer from './DonutContainer';
import {Text, View} from 'react-native';

const Legend = (title, subtitle, backgroundColor) => (
  <View>
    <Text>{title}</Text>
    <Text>{subtitle}</Text>
    <View
      style={{
        backgroundColor,
        width: 20,
        height: 5,
        borderRadius: 10,
      }}
    />
  </View>
);
const App = () => {
  return (
    <View style={{marginTop: 100}}>
      <DonutContainer
        total={1000}
        size={150}
        data={[
          {
            value: 100,
            color: 'green',
            legend: Legend('Desmond', '24GB used', 'green'),
          },
          {
            value: 200,
            color: 'red',
            legend: Legend('Desmond', '24GB used', 'red'),
          },
          {
            value: 100,
            color: 'blue',
            legend: Legend('Desmond', '24GB used', 'blue'),
          },
          {
            value: 300,
            color: 'orange',
            legend: Legend('Desmond', '24GB used', 'orange'),
          },
          {
            value: 100,
            color: 'black',
            legend: Legend('Desmond', '24GB used', 'black'),
          },
          {
            value: 100,
            color: 'brown',
            legend: Legend('Desmond', '24GB used', 'brown'),
          },
          {
            value: 100,
            color: 'turquoise',
            legend: Legend('Desmond', '24GB used', 'turquoise'),
          },

          // {value: 500, color: 'green'},
          // {value: 500, color: 'red'},
        ]}
      />
    </View>
  );
};

export default App;
