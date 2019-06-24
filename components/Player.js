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

export default class Player extends React.Component {
  state = {
    playing: false,
  };
  rotateThumbnail = new Animated.Value(0);

  spin = this.rotateThumbnail.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  rotateStyle = {
    transform: [{ rotate: this.spin }],
  };

  playMusic = () => {
    this.rotateThumbnail.setValue(0);
    Animated.timing(this.rotateThumbnail, {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear,
      // useNativeDriver: true,
    }).start(o => {
      if (o.finished) {
        this.playMusic();
      }
    });
  };

  revertTime = () => {
    this.rotateThumbnail.stopAnimation(value => {
      this.rotateThumbnail.setValue(value);
    });
    Animated.timing(this.rotateThumbnail, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear,
      // useNativeDriver: true,
    }).start();
  };

  onPress = () => {
    this.state.playing ? this.revertTime() : this.playMusic(0);

    this.setState(state => ({
      playing: !state.playing,
    }));
  };

  render() {
    const iconName = this.state.playing ? 'controller-paus' : 'controller-play';
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        <View>
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
          <Animated.Image
            style={[styles.thumbnail, this.rotateStyle]}
            resizeMode="contain"
            source={srcImage}
          />
        </View>
        <View style={styles.playButton}>
          <Icon name={iconName} color="white" size={40} />
        </View>
      </TouchableOpacity>
    );
  }
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
