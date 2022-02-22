import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {SCREEN_WIDTH, MAIN_COLOR} from '../../assets/constant';
import noPp from '../../assets/images/noImg.png';
import IconPassword from '../../assets/icons/Password.svg';
import IconLogout from '../../assets/icons/Logout.svg';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    bio: '',
    photo: null,
  });
  const [isUpdate, setIsUpdate] = useState(false);

  const changeUserData = (field, data) => {
    setUserData({...userData, [field]: data});
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setUserData({...userData, photo: res});
    } catch (err) {
      setUserData({...userData, photo: null});
      if (DocumentPicker.isCancel(err)) {
        alert('Change photo canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const updateDataUser = () => {
    const {name, phone, bio, photo} = userData;
    const setData = new FormData();
    setData.append('name', name);
    setData.append('phone', phone);
    setData.append('bio', bio);
    if (photo !== null) {
      setData.append('photo', photo);
    }
    // console.log(setData);
  };

  useEffect(() => {
    const {name, phone, bio, photo} = userData;
    if (name !== '' || phone !== '' || bio !== '' || photo !== null) {
      setIsUpdate(true);
    } else if (name === '' && phone === '' && bio === '' && photo === null) {
      setIsUpdate(false);
    }
  }, [JSON.stringify(userData)]);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          selectFile();
        }}
        style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          source={userData.photo ? {uri: userData.photo[0].uri} : noPp}
          style={styles.pp}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input(25, 'center', 'SemiBold')}
        onChangeText={text => changeUserData('name', text)}
        placeholder="My Name"
      />
      <View style={{marginVertical: 20}}>
        <Text style={styles.sectionTitle}>Phone number</Text>
        <TextInput
          style={styles.input(17, 'left', 'Medium')}
          onChangeText={text => changeUserData('phone', text)}
          placeholder="085523232"
        />
        <Text style={styles.sectionTitle}>Bio</Text>
        <TextInput
          style={styles.input(17, 'left', 'Medium')}
          onChangeText={text => changeUserData('bio', text)}
          placeholder="Welcome to the wild"
        />
      </View>
      {isUpdate ? (
        <TouchableOpacity
          style={styles.buttonSaveCnt}
          onPress={() => {
            updateDataUser();
          }}>
          <Text style={styles.buttonSaveText}>Save</Text>
        </TouchableOpacity>
      ) : null}
      <View style={{marginLeft: 5}}>
        <Text style={styles.settingsTitle}>Settings</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <IconPassword />
          <Text style={styles.settingsText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
          <IconLogout />
          <Text style={styles.settingsText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 50,
  },
  pp: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    marginLeft: 5,
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    marginBottom: -5,
  },
  input: (size, align, type) => ({
    textAlign: align,
    width: '100%',
    borderRadius: 8,
    fontFamily: `Rubik-${type}`,
    fontSize: size,
    marginBottom: 10,
  }),
  settingsTitle: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 22,
    marginBottom: 20,
  },
  settingsText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 4,
  },
  buttonSaveCnt: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 8,
    padding: 10,
    marginTop: -15,
    marginBottom: 25,
  },
  buttonSaveText: {
    fontFamily: 'Rubik-Medium',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
