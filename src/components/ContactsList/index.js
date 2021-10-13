import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MAIN_COLOR, SCREEN_HEIGHT} from '../../assets/constant';
import ppDummy from '../../assets/images/dummyPP.jpg';

const ContactsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>My Contact</Text>
        <ScrollView style={{maxHeight: SCREEN_HEIGHT * 0.35}}>
          <TouchableOpacity style={{flexDirection: 'row', margin: 3}}>
            <Image source={ppDummy} style={styles.pp} />
            <View style={{marginLeft: 20}}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.status}>Online</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', margin: 3}}>
            <Image source={ppDummy} style={styles.pp} />
            <View style={{marginLeft: 20}}>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.status}>Online</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default ContactsList;

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
  status: {
    fontSize: 15,
    marginTop: 1,
    color: MAIN_COLOR,
  },
});
