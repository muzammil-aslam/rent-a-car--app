import React, {useEffect} from 'react';

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
function Loader({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1200);
  }, []);

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text
        style={{
          marginTop: 50,
          textAlign: 'center',
          fontSize: 23,
          color: 'white',
        }}>
        Loader
      </Text>
    </View>
  );
}

export default Loader;
