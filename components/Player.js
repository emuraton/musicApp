import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Entypo';

const srcImage = require('../assets/san.jpeg');

export default function Player() {
  let rotateThumbnail = new Animated.Value(0);

  playMusic = () => {
    rotateThumbnail.setValue(0);
    Animated.timing(rotateThumbnail, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(o => {
      if (o.finished) playMusic();
    });
  };

  playMusic();

  const spin = rotateThumbnail.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotateStyle = { transform: [{ rotate: spin }] };

  return (
    <View style={styles.container}>
      <Svg
        width={200}
        height={200}
        style={{
          position: 'absolute',
          zIndex: 99,
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
          style={[styles.thumbnail, rotateStyle]}
          resizeMode="contain"
          source={srcImage}
        />
      </TouchableOpacity>
      <View style={styles.playButton}>
        <Icon name="controller-play" color="white" size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  thumbnail: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: 'rgb(30, 32, 32)',
  },
  playButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(250, 74, 77)',
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginLeft: 50,
  },
});
