import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const image = require('../assets/san.jpeg');

// function drawCircle(CX, CY, R) {
//   // M(CX - R), CY
//   // a R, R 0 1, 0 (R * 2), 0
//   // a R, R 0 1, 0 - (R * 2), 0
//   return (
//     <Path
//       d={`
//         M 0, 100
//         a 10,10 0 1,0 198,0
//         a 10,10 0 1,0 -198,0
//       `}
//       fill="transparent"
//       stroke="white"
//       strokeWidth={2}
//     />
//   );
// };

export default function Player() {
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
            a 100,100 0 0,1 100, -100
        `}
          fill="transparent"
          stroke="red"
          strokeWidth={2}
        />
      </Svg>
      <Image style={styles.thumbnail} resizeMode="contain" source={image} />
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
    borderWidth: 15,
    borderColor: 'rgb(30, 32, 32)'
  }
});
