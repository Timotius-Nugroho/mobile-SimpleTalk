import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import dummmyPp from '../../assets/images/dummyPP.jpg';
import IconBack from '../../assets/icons/Back.svg';
import {MAIN_COLOR, SCREEN_WIDTH} from '../../assets/constant';

const FriendProfile = ({route, navigation}) => {
  const {id} = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation.navigate('ChatList')}>
          <IconBack width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.friendName}>Friend name</Text>
        <View style={{width: 30, height: 30}}></View>
      </View>
      <View style={styles.ppContainer}>
        <Image source={dummmyPp} style={styles.pp} />
      </View>
      <Text style={styles.sectionTitle}>Phone number</Text>
      <Text style={styles.sectionText}>09998877676</Text>
      <Text style={styles.sectionTitle}>Bio</Text>
      <Text style={styles.sectionText}>Welcome to the jungle</Text>
    </ScrollView>
  );
};

export default FriendProfile;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
  },
  friendName: {
    fontFamily: 'Rubik-Medium',
    fontSize: 22,
    marginTop: 2,
    color: MAIN_COLOR,
  },
  ppContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  pp: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7,
    borderRadius: (SCREEN_WIDTH * 0.7) / 2,
  },
  sectionTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    color: 'black',
  },
  sectionText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
    marginTop: 4,
    marginBottom: 20,
  },
});
