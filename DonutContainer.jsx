import React, {useState} from 'react';
import Donut from './Donut';
import {Pressable, StyleSheet, View} from 'react-native';

const Part = ({index, total, size, data, state}) => {
  const width = size / 2;
  const item = data[index];
  const percent = (item.value / total) * 100;
  let height = 0;
  if (percent >= 50) height = size;
  // TODO use parabolic function to get exact value
  else height = (percent / 50) * size;
  let top = 0;
  let cumulativePercent = 0;
  if (index) {
    data.slice(0, index).forEach(d => {
      const pcent = (d.value / total) * 100;
      cumulativePercent += pcent;
      // TODO use parabolic function to get exact value
      top += (pcent / 50) * size;
    });
  }

  const style = {
    // backgroundColor: item.color,
    // opacity: 0.5,
    width,
    position: 'absolute',
  };

  const props = {
    onPress: () => state[1](index),
  };

  const components = [];

  const acc = top + height;
  if (top >= size) {
    components.push(
      <Pressable
        {...props}
        style={[
          style,
          {
            height: acc > size * 2 ? acc - size * 2 : height,
            bottom: top - size,
          },
        ]}
      />,
    );
  } else {
    const part2Height = top < size && acc > size ? acc - size : 0;
    if (acc > size) height = size - top;

    components.push(
      <>
        <Pressable {...props} style={[style, {height, right: 0, top}]} />
        {!!part2Height && (
          <Pressable
            {...props}
            style={[style, {height: part2Height, bottom: 0}]}
          />
        )}
      </>,
    );
  }

  if (state[0] === index && item.legend) {

    const style = {};
    if (cumulativePercent + percent <= 25) {
      style.left = size;
      style.top = top;
    } else if (cumulativePercent + percent <= 50) {
      style.left = size;
      style.bottom = size - top - height;
    } else if (cumulativePercent + percent <= 75) {
      style.right = size;
      style.bottom = Math.max(0, top - size);
    } else {
      style.right = size;
      style.top = size * 2 - acc;
    }
    components.push(<View style={[styles.legend, style]}>{item.legend}</View>);
  }
  return components;
};

export default props => {
  const {size = 200, data} = props;
  const state = useState();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Donut {...props} />
      <View
        style={{
          position: 'absolute',
          height: size,
          width: size,
        }}>
        {data.map((d, i) => (
          <Part {...props} index={i} state={state} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  legend: {
    position: 'absolute',
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
