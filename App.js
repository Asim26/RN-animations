import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated ,{useAnimatedStyle, useSharedValue, withTiming, withSpring, useAnimatedGestureHandler} from 'react-native-reanimated'
import {PanGestureHandler} from 'react-native-gesture-handler'

const App =()=> {
  const progress = useSharedValue(0);
  const isPanning = useSharedValue(false);

  
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event,context) =>{
      console.log('Animation started...');
      context.startX = progress.value;
    },
    onActive: event =>{
      console.log('Animation is active...');
      isPanning.value=true;
      progress.value = event.translationX;
    },
    onEnd: (event, context)=>{
      console.log('Animation is ended...');
      isPanning.value=false;
      progress.value=withSpring(0,{
        velocity:event.velocityX,
      })
    }
  })
  
  const animatedStyles = useAnimatedStyle(()=>{
    return{
      backgroundColor: isPanning.value?'red':'green',
      opacity: isPanning.value?0.12:1,
      scale: withSpring(isPanning.value? 4 : 2 ),
      transform:[{translateX:progress.value}]
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
