import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile')
       
      }
      /> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})