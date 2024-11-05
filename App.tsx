import React, {useState} from 'react';
import DonutContainer from 'react-native-multi-layer-donut-chart';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const cssColors = [
  'red',
  'blue',
  'orange',
  'black',
  'yellow',
  // 'aliceblue',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  // 'black',
  // 'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'gold',
  'goldenrod',
  'gray',
  'greenyellow',
  // 'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'yellowgreen',
];

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
  const [total, setTotal] = useState('1000');
  const [values, setValues] = useState([{color: 'green', value: '100'}]);
  return (
    <View style={{marginTop: 100}}>
      <DonutContainer
        total={total} // if this props not defined, it will take total sum of value in data. and also, if this prop is lesser than total sum in data, total sum in data will be used
        size={150} // default 200
        thickness={10} // default is 10% from value of size
        data={values.map(v => ({
          ...v,
          legend: Legend('description', v.color),
        }))}>
        <Text style={{fontWeight: 'bold'}}>Title</Text>
        <Text>Subtitle</Text>
      </DonutContainer>

      <View style={styles.inputRow}>
        <Text>Total:</Text>
        <TextInput
          onChangeText={setTotal}
          value={total}
          keyboardType="numeric"
          style={styles.textInput}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          borderTopWidth: 1,
        }}>
        <Text style={{fontWeight: 'bold'}}>Items</Text>
        <TouchableOpacity
          onPress={() =>
            setValues(v => [
              {
                color: cssColors.filter(
                  c => !values.map(v => v.color).includes(c),
                )[0],
                value: 0,
              },
              ...v,
            ])
          }>
          <Text style={{color: '#007AFF', fontWeight: 'bold'}}>Add Item</Text>
        </TouchableOpacity>
      </View>
      {values.map((v, index, arr) => (
        <View style={styles.inputRow}>
          <Text>{v.color}</Text>
          <TextInput
            onChangeText={t =>
              setValues(oldV => {
                const newV = [...oldV];
                newV[index].value = t;
                return newV;
              })
            }
            keyboardType="numeric"
            value={v.value}
            style={styles.textInput}
          />
          {arr.length > 1 && (
            <TouchableOpacity
              onPress={() => {
                setValues(v => v.filter((_, i) => i !== index));
              }}>
              <Text style={{color: 'red'}}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
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
  textInput: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    flex: 1,
  },
  inputRow: {flexDirection: 'row', gap: 10, padding: 10, alignItems: 'center'},
});
