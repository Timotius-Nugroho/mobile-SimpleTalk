import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MAIN_COLOR} from '../../assets/constant';

const BubbleLeft = ({msg}) => {
  return (
    <View style={{alignSelf: 'flex-start'}}>
      <Text style={styles.container}>{msg}</Text>
    </View>
  );
};

export default BubbleLeft;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLOR,
    maxWidth: '80%',
    padding: 12,
    marginVertical: 10,
    marginLeft: 10,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    color: 'white',
    fontSize: 16.5,
    fontFamily: 'Rubik-Regular',
  },
});
