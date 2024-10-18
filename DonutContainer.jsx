import React from 'react';
import Donut from './Donut';
import {Pressable, View} from 'react-native';

const Part = ({index, total, size, data}) => {
  const width = size / 2;
  const {value, color} = data[index];
  const percent = (value / total) * 100;
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
    // backgroundColor: color,
    width,
    position: 'absolute',
  };

  if (top >= size) {
    return (
      <Pressable
        onPress={() => alert(color)}
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
      <Pressable
        onPress={() => alert(color)}
        style={[
          style,
          {
            height,
            right: 0,
            top,
          },
        ]}
      />
      {!!part2Height && (
        <Pressable
          onPress={() => alert(color)}
          style={[
            style,
            {
              height: part2Height,
              bottom: 0,
            },
          ]}
        />
      )}
    </>
  );
};

export default (props) => {
  const {size = 200, total, data} = props;
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
          <Part
            {...d}
            total={total}
            size={size}
            index={i}
            data={data}
            // acc={data
            //   .slice(0, i + 1)
            //   .reduce(
            //     (acc, d, i) => (i === 0 ? 0 : data[i - 1].value + acc),
            //     0,
            //   )}
          />
        ))}
      </View>
    </View>
  );
};
