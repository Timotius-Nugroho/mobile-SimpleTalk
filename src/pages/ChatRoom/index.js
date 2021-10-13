import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HeadRoom from '../../components/HeadRoom';
import BubbleLeft from '../../components/Bubble/Left';
import BubbleRigth from '../../components/Bubble/Rigth';
import IconSend from '../../assets/icons/Send.svg';
import {SCREEN_HEIGHT} from '../../assets/constant';

const ChatRoom = () => {
  return (
    <View style={styles.container}>
      <HeadRoom name="Name" photo="ww.ex.cm" status="Online" />
      <ScrollView style={{height: SCREEN_HEIGHT - 200}}>
        <BubbleLeft msg="coba 1 2 3" />
        <BubbleRigth msg="coba 2 3 4dddddddddd dw   dw d aw daw  " />
        <BubbleLeft msg="coba 1 2 3" />
        <BubbleRigth msg="coba 2 3 4dddddddddd dw   dw d aw daw  " />
        <BubbleLeft msg="coba 1 2 3" />
      </ScrollView>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Type your message..." />
        <TouchableOpacity style={{marginTop: 8, marginRight: 10}}>
          <IconSend height={35} width={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 8,
    fontSize: 18,
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
  },
});
