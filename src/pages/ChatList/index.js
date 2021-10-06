import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {MAIN_COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../assets/constant';
import ChatBox from '../../components/ChatBox';
import IconMenu from '../../assets/icons/Menu.svg';
import IconPlus from '../../assets/icons/Plus.svg';
import IconSearch from '../../assets/icons/Search.svg';

const ChatList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>SimpleTalk</Text>
        <TouchableOpacity>
          <IconMenu height={28} width={28} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.iconPlus}>
          <IconSearch height={20} width={20} />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Type your message..." />
        <TouchableOpacity style={styles.iconPlus}>
          <IconPlus height={20} width={20} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 40}}>
        <ChatBox name="Kevin" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin5" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin4" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin3" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin2" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin4" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin3" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="Kevin2" newMsg="Hei..." num={20} time="20:10" />
        <ChatBox name="No One" newMsg="Hei come..." num={20} time="20:10" />
      </ScrollView>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    height: SCREEN_HEIGHT,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: 25,
  },
  title: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 30,
    color: MAIN_COLOR,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
  },
  iconPlus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
});
