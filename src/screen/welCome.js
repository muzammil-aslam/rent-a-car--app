import React, {useEffect, useState} from 'react';
import Input from './Navber';

import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollViewComponent,
  ScrollView,
} from 'react-native';
import {cardArry} from '../component/carsArrayData';

export default function Homepage({navigation}) {
  const [dataArray, setDataArray] = React.useState([]);

  useEffect(() => {
    setDataArray(cardArry);
  }, []);

  const onChangeHandle = e => {
    const filteredArray = cardArry.filter(
      element =>
        e.toLowerCase() === element.carName.slice(0, e.length).toLowerCase(),
    );
    setDataArray(filteredArray);
  };

  return (
    <View>
      <Input onChangeHandle={onChangeHandle} />
      {dataArray.length > 0 ? (
        <ScrollView vertical>
          {dataArray.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                  height: 250,
                }}>
                <View
                  style={{
                    padding: 10,
                    height: 190,
                    backgroundColor: 'white',
                    elevation: 7,
                    borderRadius: 7,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'red', fontSize: 16}}>Price:</Text>
                    <Text style={{color: 'black', color: 'green'}}>
                      {item.price}
                    </Text>
                  </View>
                  <Image style={{width: 130, height: 80}} source={item.img1} />
                  <Text
                    style={{textAlign: 'center', fontSize: 15, color: 'green'}}>
                    {item.carName}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'green',
                        color: 'white',
                        width: '60%',
                        marginHorizontal: 25,
                        marginTop: 18,
                        borderRadius: 5,
                        padding: 4,
                        fontSize: 15,
                      }}
                      onPress={a => navigation.navigate('Detail', item)}>
                      Detail
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: 'white',
                    elevation: 5,
                    borderRadius: 7,
                    height: 190,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'red', fontSize: 16}}>Price:</Text>
                    <Text style={{color: 'black', color: 'green'}}>
                      {' '}
                      {item.price}
                    </Text>
                  </View>
                  <Image style={{width: 130, height: 83}} source={item.img1} />
                  <Text
                    style={{textAlign: 'center', fontSize: 15, color: 'green'}}>
                    {item.carName}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        textAlign: 'center',
                        backgroundColor: 'green',
                        color: 'white',
                        width: '60%',
                        marginHorizontal: 30,
                        marginTop: 15,
                        padding: 4,
                        borderRadius: 5,
                        fontSize: 15,
                      }}
                      onPress={a => navigation.navigate('Detail', item)}>
                      Detail
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <View style={{marginVertical: 30}}>
          <Text style={{textAlign: 'center', color: 'red', fontSize: 18}}>
            Search Data not found!
          </Text>
        </View>
      )}
    </View>
  );
}
