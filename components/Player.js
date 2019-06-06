import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const srcImage = require('../assets/san.jpeg');

export default function Player() {
  let rotateThumbnail = new Animated.Value(0);

  playMusic = () => {
    rotateThumbnail.setValue(0);
    Animated.timing(rotateThumbnail, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(o => {
      if (o.finished) playMusic();
    });
  };

  playMusic();

  const spin = rotateThumbnail.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  console.log(spin);

  const styleTest = { transform: [{ rotate: spin }] };

  return (
    <View style={styles.container}>
      <Svg
        width={200}
        height={200}
        style={{
          position: 'absolute',
          zIndex: 99
        }}
      >
        <Path
          d={`
            M 0, 100
            a 10,10 0 1,0 198,0
            a 10,10 0 1,0 -198,0
          `}
          fill="transparent"
          stroke="white"
          strokeWidth={2}
        />
        <Path
          d={`
            M 0, 100
            a 100,100 0 0,1 100, -100
        `}
          fill="transparent"
          stroke="red"
          strokeWidth={2}
          strokeDasharray="100, 800"
        />
      </Svg>
      <TouchableOpacity onPress={playMusic}>
        <Animated.Image
          style={[styles.thumbnail, styleTest]}
          resizeMode="contain"
          source={srcImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  thumbnail: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: 'rgb(30, 32, 32)'
  }
});
