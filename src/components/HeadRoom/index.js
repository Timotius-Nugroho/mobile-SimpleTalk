import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import dummyPP from '../../assets/images/dummyPP.jpg';
import {MAIN_COLOR} from '../../assets/constant';

const HeadRoom = ({photo, name, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={dummyPP} style={styles.pp} />
      <View style={{marginLeft: 15}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeadRoom;

const styles = StyleSheet.create({
  container: {
    elevation: 20,
    height: 80,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  pp: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  name: {
    marginTop: 6,
    fontFamily: 'Rubik-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  status: {
    fontSize: 16,
    marginTop: 2,
    color: MAIN_COLOR,
  },
});
