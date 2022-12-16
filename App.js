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
      progress.value = event.value;
    }
  })
  
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box,animatedStyles]}/>
        <TouchableOpacity style={[styles.text]} onPress={()=>{ progress.value=withSpring(Math.random()*100)}}>
          <Text style={styles.text}>Touch</Text>
        </TouchableOpacity>
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
