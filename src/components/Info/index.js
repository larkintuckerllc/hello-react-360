import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-360';

class Info extends PureComponent {
  render() {
    return(
      <View style={styles.root} />
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 100,
    height: 100,
    backgroundColor: 'rgb(255, 0, 0)',
  }
});

AppRegistry.registerComponent('Info', () => Info);
