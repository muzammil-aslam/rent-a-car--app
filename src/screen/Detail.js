import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {cardArry} from '../component/carsArrayData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import img23 from '../component/img/23.png';

export default function Detail(props) {
  const obj = props.route.params;
  const navigation = props.navigation;

  return (
    <View style={{height: '100%', backgroundColor: 'lightgray'}}>
      <View style={{marginTop: 20}}>
        <View style={{backgroundColor: 'white', paddingVertical: 15}}>
          <Image
            style={{
              width: '70%',
              height: 170,
              marginHorizontal: 50,
              marginTop: 10,
              borderRadius: 10,
            }}
            source={obj.img1}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              marginHorizontal: 20,
              // marginTop: 10,
              fontSize: 20,
              color: 'blue',
            }}>
            {obj.carName} Benz C -Class 3.0
          </Text>
          <Text style={{marginHorizontal: 30, color: 'green'}}>
            IDR 769.000
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginHorizontal: 15, marginTop: 10}}>
          <Image
            style={{width: '7%', height: 20, marginHorizontal: 3}}
            source={img23}
          />
          <Image
            style={{width: '7%', height: 20, marginHorizontal: 3}}
            source={img23}
          />
          <Image
            style={{width: '7%', height: 20, marginHorizontal: 3}}
            source={img23}
          />
          <Image
            style={{width: '7%', height: 20, marginHorizontal: 3}}
            source={img23}
          />
          <Image
            style={{width: '7%', height: 20, marginHorizontal: 3}}
            source={img23}
          />
          <Text style={{marginHorizontal: 3}}>5.0</Text>
          <Text style={{marginHorizontal: 8}}>125 reviews</Text>
        </View>
        <Text
          style={{
            marginTop: 10,
            marginHorizontal: 18,
            fontSize: 18,
            color: 'red',
          }}>
          specification
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={{marginHorizontal: 40, marginTop: 14}}
            name="person-circle-outline"
            size={20}
            color="black"
          />
          <MaterialCommunityIcons
            style={{marginHorizontal: 40, marginTop: 10}}
            name="seat-recline-normal"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            style={{marginHorizontal: 20, marginTop: 10}}
            name="speedometer"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            style={{marginHorizontal: 45, marginTop: 10}}
            name="car-turbocharger"
            size={24}
            color="black"
          />
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: 'green'}}>Automatic</Text>
          <Text style={{color: 'green'}}>{obj.set} Seats</Text>
          <Text style={{color: 'green'}}>2,999.cc</Text>
          <Text style={{color: 'green'}}>{obj.carName}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'green',
              color: 'white',
              width: '40%',
              marginHorizontal: 100,
              marginTop: 30,
              marginBottom: 10,
              borderRadius: 5,
              padding: 8,
            }}
            onPress={a => navigation.navigate('Booking')}>
            BOOK NOW
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView horizontal>
          {cardArry.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginVertical: 20,
                  paddingBottom: 25,
                  height: 250,
                }}>
                <View
                  style={{
                    padding: 10,
                    height: 190,
                    backgroundColor: 'white',
                    elevation: 7,
                    borderRadius: 7,
                    marginHorizontal: 10,
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
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
