import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth, db} from '../../firebase/firebasey.config';
import {collection, addDoc} from 'firebase/firestore';

const Profile = ({navigation}) => {
  const [fullname, setFullNamme] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const saveData = async () => {
    const docRef = await addDoc(collection(db, 'users'), {
      FullName: fullname,
      Phone: phone,
      Address: address,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <View>
          <Text style={styles.myProfileText}>My Profile</Text>
        </View>
        <View></View>
        <View style={styles.formContainer}>
          <Text style={styles.inptLabel}>Full Name</Text>
          <TextInput
            label={'Full Name'}
            onChange={text => setFullNamme(text)}
            style={styles.inptFields}
          />
          <Text style={styles.inptLabel}>Phone Number</Text>
          <TextInput
            label={'Phone Number'}
            onChange={text => setPhone(text)}
            style={styles.inptFields}
          />
          <Text style={styles.inptLabel}>Address</Text>
          <TextInput
            label={'Address'}
            onChange={text => setAddress(text)}
            style={styles.inptFields}
          />
          <TouchableOpacity style={styles.btnSubmit} onPress={() => saveData()}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  myProfileText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginVertical: 30,
  },
  formContainer: {},
  inptLabel: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  inptFields: {
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#ffff',
    padding: 20,
    alignItems: 'center',
  },
  btnSubmit: {
    backgroundColor: '#000',
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 18,
  },
});
