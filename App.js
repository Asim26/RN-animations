import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ring from './components/Ring';

const App = () => {
  let duration = 4000;

  return (
    <View style={styles.mainContainer}>
      <Ring delay={0} duration={duration} />
      <Ring delay={1000} duration={duration} />
      <Ring delay={2000} duration={duration} />
      <Ring delay={3000} duration={duration} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
