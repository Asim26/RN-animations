import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Animated, {
  BounceInRight,
  BounceInLeft,
  useAnimatedStyle,
} from 'react-native-reanimated';

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

  const checkOddEven = number => {
    if (number % 2 == 0) {
      return 'even';
    } else {
      return 'odd';
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'green',
      height: 100,
      marginVertical: 5,
      marginHorizontal: 5,
      borderRadius: 20,
    };
  });

  const renderItem = (index, item) => {
    checkOddEven(index);
    return (
      <Animated.View
        style={animatedStyle}
        entering={
          checkOddEven(index) == 'odd'
            ? BounceInLeft.duration(2000).delay(item * 8000)
            : BounceInRight.duration(2000).delay(item * 8000)
        }
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        onViewableItemsChanged={() => {}}
        renderItem={({index, item}) => renderItem(index, item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 40,
  },
});

export default App;
