import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {auth} from '../../firebase/firebasey.config';
import {signOut} from 'firebase/auth';

const Home = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
        <TouchableOpacity onPress={() => logOut()}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ),
    });
    const logOut = () => {
      signOut(auth)
        .then(() => {
          Alert.alert('Confermation', 'Are you want to Log Out', [
            {text: 'Yes', onPress: () => navigation.replace('Login')},
            {text: 'No'},
          ]);
        })
        .catch(error => {
          alert(error);
        });
    };
  });

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
