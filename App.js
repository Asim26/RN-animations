import { StyleSheet, View } from 'react-native'
import React from 'react'
import Animated ,{
  Layout,
  SlideInLeft, SlideInRight,
  FlipInYRight,FlipInYLeft,
  BounceInLeft,BounceInRight
} from 'react-native-reanimated'

const App =()=> {

  return (
    <View style={styles.container}>
      <Animated.View style={{
        backgroundColor:'pink',
        height:100,width:100
      }} 
        entering={SlideInLeft.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>

      <Animated.View style={{
        backgroundColor:'green',
        height:100,width:100
      }} 
        entering={SlideInRight.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>

      <Animated.View style={{
        backgroundColor:'yellow',
        height:100,width:100
      }} 
        entering={FlipInYLeft.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>
      <Animated.View style={{
        backgroundColor:'orange',
        height:100,width:100
      }} 
        entering={FlipInYRight.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>

      <Animated.View style={{
        backgroundColor:'red',
        height:100,width:100
      }} 
        entering={BounceInLeft.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>
      <Animated.View style={{
        backgroundColor:'blue',
        height:100,width:100
      }} 
        entering={BounceInRight.duration(2000)}
        layout={Layout.springify()}              
        >
        <View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    // backgroundColor:'blue',
    // flex:1,
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