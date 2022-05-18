import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Sigin({navigation}) {
  const goToLoginPage = () => {
    navigation.navigate('Login');
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function subFunc() {
    if (name == '' || email == '' || password == '') {
      setError(a => !a);
    } else {
      navigation.navigate('Home');
    }
  }
  return (
    <View style={{height: '100%', backgroundColor: 'lightgray'}}>
      <View>
        <View style={{backgroundColor: 'green', paddingVertical: 30}}>
          <Text style={{textAlign: 'center', fontSize: 25, color: 'white'}}>
            SIGN UP
          </Text>
        </View>

        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Ionicons name="person-circle-outline" size={100} color="green" />
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            value={name}
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginHorizontal: 40,
              marginTop: 10,
              backgroundColor: 'white',
              color: 'black',
              width: '75%',
            }}
            onChange={a => setName(a.target.value)}
            placeholder="Enter your Name"
          />
          <TextInput
            value={email}
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginHorizontal: 40,
              marginTop: 14,
              backgroundColor: 'white',
              width: '75%',
            }}
            onChange={a => setEmail(a.target.value)}
            placeholder="Enter your Email"
          />
          <TextInput
            value={password}
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginHorizontal: 40,
              marginTop: 14,
              backgroundColor: 'white',
              color: 'black',
              width: '75%',
            }}
            onChange={a => setPassword(a.target.value)}
            placeholder="Enter your Password"
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginTop: 30,
              padding: 12,
              backgroundColor: 'white',
              width: '40%',
            }}
            onPress={subFunc}>
            <Text
              style={{
                textAlign: 'center',
                color: 'green',
                justifyContent: 'center',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {error && (
          <Text
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 18,
              marginTop: 15,
            }}>
            Fill the text
          </Text>
        )}
        <View
          flexDirection="row"
          justifyContent="center"
          style={{marginTop: 35}}>
          <Text>Already have account </Text>
          <TouchableOpacity onPress={goToLoginPage}>
            <Text style={{color: 'green'}}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Sigin;
