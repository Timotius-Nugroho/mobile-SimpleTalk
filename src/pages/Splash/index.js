import React, {useEffect} from 'react';
import {StyleSheet, View, Animated, Easing, Dimensions} from 'react-native';
import {MAIN_COLOR, SCREEN_WIDTH} from '../../assets/constant';
import splashLogo from '../../assets/images/splash.png';

const Splash = ({navigation}) => {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ChatList');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.contaner}>
      <Animated.Image
        style={styles.logo(spin, SCREEN_WIDTH)}
        source={splashLogo}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MAIN_COLOR,
  },

  logo: (spin, SCREEN_WIDTH) => ({
    transform: [{rotate: spin}],
    width: 0.25 * SCREEN_WIDTH,
    height: 0.25 * SCREEN_WIDTH,
  }),
});
