import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
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

  render() {
    const { name, onClick, open } = this.props;
    return (
      <View style={styles.root}>
      <Text style={[
        styles.rootText,
        { opacity: open ? 1 : 0 }
      ]}>
        {name}
      </Text>
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
