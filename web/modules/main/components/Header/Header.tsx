import React, { PureComponent } from 'react';
import bem from 'utils/bem';
import { ElementPropTypes } from 'utils/prop-types';
import { filter } from 'utils/props';

import './Header.scss';

export const HeaderPropTypes = {
  ...ElementPropTypes
};

export const HeaderDefaultProps = {};

export class Header extends PureComponent<typeof HeaderPropTypes> {
  static propTypes = HeaderPropTypes;

  static defaultProps = HeaderDefaultProps;

  static className = 'MainHeader';

  render() {
    const { className, ...props } = this.props;

    return <div {...filter(props, ElementPropTypes)} className={`${bem.block(Header)} ${className || ''}`} />;
  }
}
