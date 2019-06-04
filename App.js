/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Title from './components/Title';
import Player from './components/Player';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Title artist="Orelsan" title="San" />
          <Player />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});
