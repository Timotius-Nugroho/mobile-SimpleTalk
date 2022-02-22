import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {MAIN_COLOR, SCREEN_HEIGHT} from '../../assets/constant';
import ppDummy from '../../assets/images/dummyPP.jpg';
import IconPlus from '../../assets/icons/Plus.svg';

const InviteFriends = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Invite Friends</Text>
        <TextInput style={styles.input} placeholder="Search by email..." />
        <ScrollView style={{maxHeight: SCREEN_HEIGHT * 0.35}}>
          <TouchableOpacity style={{flexDirection: 'row', margin: 3}}>
            <Image source={ppDummy} style={styles.pp} />
            <View style={styles.contactBox}>
              <View>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.email}>some@gmail.com</Text>
              </View>
              <View style={styles.plus}>
                <IconPlus height={18} width={18} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', margin: 3}}>
            <Image source={ppDummy} style={styles.pp} />
            <View style={styles.contactBox}>
              <View>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.email}>some@gmail.com</Text>
              </View>
              <View style={styles.plus}>
                <IconPlus height={18} width={18} />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default InviteFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    padding: 15,
    backgroundColor: 'rgba(46, 49, 49, 0.3)',
    marginHorizontal: -15,
    marginTop: -15,
  },
  modal: {
    backgroundColor: 'white',
    width: '95%',
    padding: 10,
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    fontSize: 22,
    marginVertical: 10,
  },
  contactBox: {
    marginLeft: 20,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  pp: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  name: {
    marginTop: 8,
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
  },
  email: {fontSize: 15, marginTop: 1, color: MAIN_COLOR},
  plus: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
  },
});
