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
  FlatList,
} from 'react-native';
{
}
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import img1 from '../component/img/1.jpg';
function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
      <View style={{marginTop: 100}}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 111,
          }}>
          Porsche Rental Car
        </Text>
        <Image
          style={{
            width: '70%',
            height: 170,
            borderRadius: 30,
            marginHorizontal: 50,
            marginTop: 50,
          }}
          source={img1}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-around',
          marginTop: 130,
        }}>
        <FontAwesome
          onPress={a => navigation.navigate('Homepage')}
          name="home"
          size={50}
          color="white"
          style={{marginHorizontal: 8}}
        />
        <Ionicons
          onPress={a => navigation.navigate('Login')}
          name="person-circle-outline"
          size={55}
          color="white"
        />
        <Ionicons
          onPress={a => navigation.navigate('Sigin')}
          name="person-circle-outline"
          size={55}
          color="white"
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text style={{color: 'white', fontSize: 15}}>Home</Text>
        <Text style={{color: 'white', fontSize: 15, marginHorizontal: -5}}>
          Login
        </Text>
        <Text style={{color: 'white', fontSize: 15}}>Sign</Text>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 210,
    height: 160,
    marginHorizontal: 65,
    borderRadius: 30,
    marginTop: 10,
    color: 'darkblue',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
