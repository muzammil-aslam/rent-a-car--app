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
} from 'react-native';
import React, {useState} from 'react';

export default function Input({onChangeHandle}) {
  const [search, setSearch] = useState('');
  return (
    <View>
      <View style={{backgroundColor: 'green', padding: 30}}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          Car Categories
        </Text>
        <TextInput
          style={{
            width: '80%',
            marginHorizontal: 2,
            padding: 2,
            borderRadius: 10,
            marginRight: 18,
            textAlign: 'center',
            marginTop: 10,
            color: 'green',
            backgroundColor: 'white',
            fontSize: 20,
          }}
          // value={search}
          onChangeText={onChangeHandle}
          placeholder="search"
        />
      </View>
      <View style={{marginTop: 30}}>
        <Text style={{marginHorizontal: 20, fontSize: 20, color: 'green'}}>
          Browse Car Category
        </Text>
        <View style={{}}>
          <Image
            style={{width: '90%', height: 120, marginHorizontal: 20}}
            source={require('../component/img/21.png')}
          />
        </View>
      </View>
    </View>
  );
}
