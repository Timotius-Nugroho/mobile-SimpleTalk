import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MAIN_COLOR} from '../../assets/constant';

const BubbleRigth = ({msg}) => {
  return (
    <View style={{alignSelf: 'flex-end'}}>
      <Text style={styles.container}>{msg}</Text>
    </View>
  );
};

export default BubbleRigth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxWidth: '80%',
    padding: 12,
    marginVertical: 10,
    marginLeft: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    fontSize: 16.5,
    fontFamily: 'Rubik-Regular',
  },
});
