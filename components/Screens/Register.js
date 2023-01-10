import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebasey.config';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert('User Created Successfully');
        navigation.replace('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.subMainContainer}>
        <View style={styles.IconContainer}>
          <Image
            style={styles.LoginImageIcon}
            source={require('./../assests/loginIcon.png')}
          />
          <Text style={styles.LoginText}>Register Here</Text>
        </View>
        <View style={styles.TextFieldContainer}>
          <TextInput
            style={styles.InputField}
            label="Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.InputField}
            label="Password"
            secureTextEntry={true}
            onChangeText={text => setpassword(text)}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.btnlogin} onPress={() => signUp()}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btnGooglelogin}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  subMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconContainer: {
    marginTop: 100,
  },
  LoginImageIcon: {
    height: 200,
    width: 200,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  TextFieldContainer: {
    width: '80%',
    margin: 20,
  },
  InputField: {
    margin: 10,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnlogin: {
    backgroundColor: '#000',
    width: '30%',
    margin: 10,
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
  },
  btnGooglelogin: {
    backgroundColor: '#000',
    width: '80%',
    margin: 10,
    padding: 15,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
