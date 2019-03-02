import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  VrButton,
} from 'react-360';
import styles from './styles';

export default class InfoView extends Component { 
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    fade: new Animated.Value(0),
  };

  componentDidUpdate() {
    const { open } = this.props;
    const value = open ? 1 : 0;
    Animated.timing(
      this.state.fade,
      {
        toValue: value,
        duration: 3000,
      }
    ).start();  
  }

  render() {
    const { name, onClick, open } = this.props;
    const { fade } = this.state;
    return (
      <View style={styles.root}>
        <Animated.Text style={[
          styles.rootText,
          { opacity: fade }
        ]}>
          {name}
        </Animated.Text>
        <VrButton
          style={[
            styles.rootButton,
            { backgroundColor: open ? 'red': 'green' },
          ]}
          onClick={onClick}
        />
      </View>
    );
  }
}
