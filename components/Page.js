import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    marginTop:40
  }
});

export default Page;