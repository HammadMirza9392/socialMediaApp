import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {auth} from '../../firebase/firebasey.config.js';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        navigation.replace('Home');
      }
    });
  }, []);

  const loginFunctoin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        alert('User Login Successfully');
        navigation.replace('Home');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const passwordReset = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password Reset mail sent');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert('Invalid Email ' + email);
    }
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.subMainContainer}>
        <View style={styles.IconContainer}>
          <Image
            style={styles.LoginImageIcon}
            source={require('./../assests/loginIcon.png')}
          />
          <Text style={styles.LoginText}>Login Here</Text>
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
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => loginFunctoin()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnlogin}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => passwordReset()}>
            <Text>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
    paddingRight: 30,
    paddingLeft: 30,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
  },
});
