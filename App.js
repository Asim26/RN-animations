import { StyleSheet, View } from 'react-native'
import React from 'react'
import Animated ,{
  Layout,
  Keyframe, Easing
} from 'react-native-reanimated'

const App =()=> {

  const keyframe = new Keyframe({
    0: {
      originX: 150,
      transform: [{ rotate: '0deg' }],
    },
    45: {
      originX: 10,
      transform: [{ rotate: '100deg' }],
      // easing: Easing.exp,
    },
    100: {
      originX: 150,
      transform: [{ rotate: '45deg' }],
    },
  })

  return (
    <View style={styles.container}>
      <Animated.View style={{
        backgroundColor:'pink',
        height:100,width:100
      }} 
        entering={keyframe.duration(3000).delay(200)}
        layout={Layout.springify()}              
        >
      </Animated.View>
      <Animated.View style={{
        backgroundColor:'green',
        height:100,width:100
      }} 
        entering={keyframe.duration(3000).delay(200)}
        layout={Layout.springify()}              
        >
      </Animated.View>
      <Animated.View style={{
        backgroundColor:'blue',
        height:100,width:100
      }} 
        entering={keyframe.duration(3000).delay(200)}
        layout={Layout.springify()}              
        >
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    // backgroundColor:'blue',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    backgroundColor:'green',
    height:100,
    width:100,
    borderRadius:20
  },
  text:{
   marginTop:10,
   fontSize:30
  }
});

export default App;