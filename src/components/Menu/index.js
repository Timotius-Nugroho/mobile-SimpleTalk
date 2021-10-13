import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MAIN_COLOR} from '../../assets/constant';
import IconSetting from '../../assets/icons/Settings.svg';
import IconContact from '../../assets/icons/Contacts.svg';
import IconInvite from '../../assets/icons/Invite.svg';
import IconFaq from '../../assets/icons/Faq.svg';

const Menu = ({handleMenu}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginBottom: 15}}
          onPress={() => {
            handleMenu('SETTINGS');
          }}>
          <IconSetting height={28} width={28} />
          <Text style={styles.menuName}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginBottom: 10}}
          onPress={() => {
            handleMenu('CONTACTS');
          }}>
          <IconContact height={28} width={28} />
          <Text style={styles.menuName}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', marginBottom: 15}}
          onPress={() => {
            handleMenu('INVITE');
          }}>
          <IconInvite height={28} width={28} />
          <Text style={styles.menuName}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => {
            handleMenu('FAQ');
          }}>
          <IconFaq height={28} width={28} />
          <Text style={styles.menuName}>FAQ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    right: 0,
    marginTop: 70,
    top: 0,
    opacity: 0.9,
    backgroundColor: MAIN_COLOR,
    zIndex: 1,
    padding: 15,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  menuName: {
    marginTop: 4,
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
});
