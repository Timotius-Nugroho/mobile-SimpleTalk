import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import dummyPP from '../../assets/images/dummyPP.jpg';
import {MAIN_COLOR} from '../../assets/constant';
import {useNavigation} from '@react-navigation/native';

const ChatBox = ({name, newMsg, num, time}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ChatRoom');
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image source={dummyPP} style={styles.pp} />
        <View style={{padding: 10}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.msg}>{newMsg}</Text>
        </View>
      </View>
      <View style={{paddingTop: 5}}>
        <Text>{time}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.unread}>
            <Text>{num}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pp: {
    width: 70,
    height: 70,
    borderRadius: 15,
  },
  name: {
    fontFamily: 'Rubik-SemiBold',
    color: 'black',
    fontSize: 18,
    paddingLeft: 10,
  },
  msg: {
    color: MAIN_COLOR,
    paddingLeft: 10,
  },
  unread: {
    backgroundColor: MAIN_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 13,
    marginTop: 2,
  },
});
