import PropTypes from 'prop-types';
import React from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-360';
import styles from './styles';

const InfoView = ({ name, onClick, open }) => (
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

InfoView.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default InfoView;
