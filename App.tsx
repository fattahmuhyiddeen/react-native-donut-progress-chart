import React from 'react';
import DonutContainer from 'react-native-multi-layer-donut-chart';
import {StyleSheet, Text, View} from 'react-native';

const Legend = (subtitle, backgroundColor) => (
  <View style={styles.legend}>
    <Text style={{fontWeight: 'bold'}}>{backgroundColor.toUpperCase()}</Text>
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
            value: 60,
            color: 'green',
            legend: Legend('24GB used', 'green'),
          },
          {
            value: 60,
            color: 'gray',
            legend: Legend('24GB used', 'gray'),
          },
          {
            value: 200,
            color: 'red',
            legend: Legend('24GB used', 'red'),
          },
          {
            value: 100,
            color: 'blue',
            legend: Legend('24GB used', 'blue'),
          },
          {
            value: 300,
            color: 'orange',
            legend: Legend('24GB used', 'orange'),
          },
          {
            value: 100,
            color: 'black',
            legend: Legend('24GB used', 'black'),
          },
          {
            value: 100,
            color: 'brown',
            legend: Legend('24GB used', 'brown'),
          },
          {
            value: 100,
            color: 'turquoise',
            legend: Legend('24GB used', 'turquoise'),
          },

          // {
          //   value: 500,
          //   color: 'green',
          //   legend: Legend('24GB used', 'green'),
          // },
          // {
          //   value: 500,
          //   color: 'red',
          //   legend: Legend('24GB used', 'red'),
          // },

          // {
          //   value: 250,
          //   color: 'green',
          //   legend: Legend('24GB used', 'green'),
          // },
          // {
          //   value: 250,
          //   color: 'red',
          //   legend: Legend('24GB used', 'red'),
          // },
          // {
          //   value: 250,
          //   color: 'green',
          //   legend: Legend('24GB used', 'green'),
          // },
          // {
          //   value: 250,
          //   color: 'red',
          //   legend: Legend('24GB used', 'red'),
          // },
        ]}>
        <Text style={{fontWeight: 'bold'}}>Title</Text>
        <Text>Subtitle</Text>
      </DonutContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  legend: {
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 10,
  },
});
