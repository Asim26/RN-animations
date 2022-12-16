import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated ,{useAnimatedStyle, useSharedValue, withTiming, withSpring, useAnimatedGestureHandler} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'

const App =()=> {
  const progress = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(()=>{
    return{
      transform:[{translateX:progress.value}]
    }
  })

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event =>{
      progress.value = event.translationX;
    }
  })
  
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.box,animatedStyles]}/>
      </PanGestureHandler>
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