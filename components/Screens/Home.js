import { StyleSheet, Text, View,Button, SafeAreaView } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Login')
       
      }
      /> 
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})