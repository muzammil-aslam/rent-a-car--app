import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Login({navigation}) {
  const goToRegisterPage = () => {
    navigation.navigate('Sigin');
  };

  function submitFunc() {
    if (email == '' || password == '') {
      setError(a => !a);
    } else {
      navigation.navigate('Home');
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  return (
    <View style={{height: '100%', backgroundColor: 'lightgray'}}>
      <View>
        <View style={{backgroundColor: 'green', paddingVertical: 30}}>
          <Text style={{textAlign: 'center', fontSize: 25, color: 'white'}}>
            LOGIN
          </Text>
        </View>
        <View style={{marginTop: 30, alignItems: 'center'}}></View>
        <View style={{marginTop: 15, alignItems: 'center'}}>
          <Ionicons name="person-circle-outline" size={100} color="green" />
        </View>
        <View style={{marginTop: 15}}>
          <TextInput
            value={email}
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginHorizontal: 45,
              marginTop: 14,
              backgroundColor: 'white',
              color: 'green',
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
              marginHorizontal: 45,
              marginTop: 20,
              backgroundColor: 'white',
              color: 'green',
              backgroundColor: 'white',
              width: '75%',
            }}
            onChange={a => setPassword(a.target.value)}
            placeholder="Enter your Password"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              textAlign: 'center',
              borderRadius: 10,
              marginTop: 10,
              padding: 12,
              backgroundColor: 'white',
              width: '40%',
            }}
            onPress={submitFunc}>
            <Text
              style={{
                textAlign: 'center',
                color: 'green',
                justifyContent: 'center',
              }}>
              Login
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
          style={{marginTop: 30}}>
          <Text>Don't have account </Text>
          <TouchableOpacity onPress={goToRegisterPage}>
            <Text style={{color: 'green'}}>Login now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Login;
