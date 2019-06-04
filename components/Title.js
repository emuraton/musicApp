import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Title({ artist, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.song}>{`${title}`}</Text>
      <Text style={styles.artist}>{` - ${artist}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  song: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  artist: {
    fontSize: 16,
    color: 'lightgrey'
  }
});
