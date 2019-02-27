import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import InfoView from './InfoView';

export default class Info extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  state = {
    open: false,
  };

  render() {
    const { name } = this.props
    const { open } = this.state;
    return (
      <InfoView
        name={name}
        open={open}
        onClick={this.handleClick}
      />
    );
  }

  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };
}
