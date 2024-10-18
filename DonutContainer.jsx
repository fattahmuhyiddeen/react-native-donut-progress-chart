import React, {useState} from 'react';
import Donut from './Donut';
import {Pressable, View} from 'react-native';

const Part = ({index, total, size, data, state}) => {
  const width = size / 2;
  const percent = (data[index].value / total) * 100;
  let height = 0;
  if (percent >= 50) height = size;
  // TODO use parabolic function to get exact value
  else height = (percent / 50) * size;
  let top = 0;
  if (index) {
    data.slice(0, index).forEach(d => {
      // TODO use parabolic function to get exact value
      top += (((d.value / total) * 100) / 50) * size;
    });
  }

  const style = {
    // backgroundColor: data[index].color,
    // opacity: 0.5,
    width,
    position: 'absolute',
  };

  const props = {
    onPress: () => state[1](index),
  };

  if (top >= size) {
    return (
      <Pressable
        {...props}
        style={[
          style,
          {
            height: height + top > size * 2 ? height + top - size * 2 : height,
            bottom: top - size,
          },
        ]}
      />
    );
  }

  const part2Height =
    top < size && top + height > size ? top + height - size : 0;

  if (height + top > size) height = size - top;

  return (
    <>
      <Pressable {...props} style={[style, {height, right: 0, top}]} />
      {!!part2Height && (
        <Pressable
          {...props}
          style={[style, {height: part2Height, bottom: 0}]}
        />
      )}
    </>
  );
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
