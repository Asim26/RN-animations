import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const [data, setData] = useState([
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eighth Item',
    },
    {
      id: '9',
      title: 'Ninth Item',
    },
    {
      id: '10',
      title: 'Tenth Item',
    },
  ]);

  const renderItem = (index, item) => {
    return (
      <Animatable.View
        animation={'fadeInUp'}
        duration={1000}
        delay={index * 300}
        style={styles.itemStyle}>
        <Text style={styles.text}>{index + 1}</Text>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({index, item}) => renderItem(index, item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 4,
  },
  itemStyle: {
    backgroundColor: 'green',
    height: 80,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 20,
    flex: 1,
    width: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default App;
