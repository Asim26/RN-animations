import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated ,{useAnimatedStyle, useSharedValue, withTiming, withSpring, useAnimatedGestureHandler} from 'react-native-reanimated'

const App =()=> {
  const translateX = useSharedValue(0);
  const removing = useSharedValue(false);

  const handleRemove = () =>{
    removing.value = true
  }
  
  
  const animatedStyles = useAnimatedStyle(()=>{
    if(removing.value){
      return{
        height: withTiming(0),
        transform:[{translateY: withTiming(-40)}]
      }  
    }
      return{
        height: withTiming(100),
        transform:[{translateX: translateX.value}]
      }
    
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box,animatedStyles]}/>
      <TouchableOpacity onPress={()=>{handleRemove()}}>
        <Text>remove</Text>
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
