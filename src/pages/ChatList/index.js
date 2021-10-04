import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ChatList = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.tmbl}
        onPress={() => {
          navigation.navigate('ChatRoom');
        }}>
        <Text>ChatList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  tmbl: {
    backgroundColor: 'red',
  },
});
