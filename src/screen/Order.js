import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
// import img13 from './img/13.jpg';
import img22 from '../component/img/22.png';
export default function Booking({navigation}) {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Image
        style={{
          width: '50%',
          height: 160,
          marginHorizontal: 80,
          marginTop: 50,
          borderRadius: 100,
        }}
        source={img22}
      />
      <View style={{marginTop: -50}}>
        <TextInput
          style={{
            width: '70%',
            marginTop: 80,
            marginHorizontal: 50,
            elevation: 5,
            fontSize: 15,
            borderRadius: 10,
            backgroundColor: 'white',
            color: 'green',
            textAlign: 'center',
          }}
          placeholder="Enter your Name"
        />
        <TextInput
          style={{
            width: '70%',
            marginTop: 20,
            marginHorizontal: 50,
            backgroundColor: 'white',
            elevation: 10,
            fontSize: 15,
            borderRadius: 10,
            color: 'green',
            textAlign: 'center',
          }}
          placeholder="Enter your From"
        />

        <TextInput
          style={{
            width: '70%',
            marginTop: 20,
            marginHorizontal: 50,
            backgroundColor: 'white',
            elevation: 10,
            fontSize: 15,
            borderRadius: 10,
            textAlign: 'center',
          }}
          placeholder="Enter your Product Name"
        />
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 25,
              backgroundColor: 'white',
              padding: 10,
              color: 'green',
              width: '40%',
              marginHorizontal: 105,
              borderRadius: 10,
            }}
            onPress={a => navigation.navigate('Homepage')}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
