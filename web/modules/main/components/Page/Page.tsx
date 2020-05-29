import React, { PureComponent } from 'react';

import bem from 'utils/bem';
import { ElementPropTypes } from 'utils/prop-types';
import { filter, prefixBy, prefixed, unprefixed } from 'utils/props';

import { Bar, BarDefaultProps, BarPropTypes } from '../Bar';
import { Header, HeaderDefaultProps, HeaderPropTypes } from '../Header/index';
import { MainMenu, MainMenuDefaultProps, MainMenuItemsType, MainMenuPropTypes } from '../Menu';

import './MainPage.scss';

export const PagePropTypes = {
  ...ElementPropTypes,
  ...prefixBy('bar', BarPropTypes),
  ...prefixBy('header', HeaderPropTypes),
  ...prefixBy('menu', { ...MainMenuPropTypes, items: MainMenuItemsType })
};

export const PageDefaultProps = {
  ...prefixBy('bar', BarDefaultProps),
  ...prefixBy('header', HeaderDefaultProps),
  ...prefixBy('menu', { ...MainMenuDefaultProps, items: null })
};

export class Page extends PureComponent {
  static propTypes = PagePropTypes;

  static defaultProps = PageDefaultProps;

  static className = 'MainPage';

  renderMenu() {
    const { minimized } = prefixed(this.props, 'bar');
    const { items, ...menuProps } = prefixed(this.props, 'menu');

    if (items) {
      return (
        <MainMenu
          {...filter(menuProps, MainMenuPropTypes)}
          items={items}
          minimized={minimized}
          className={bem.element(this, 'menu')}
        />
      );
    }

    return null;
  }

  renderBar() {
    return (
      <Bar {...filter(prefixed(this.props, 'bar'), BarPropTypes)} className={bem.element(this, 'bar')}>
        {this.renderMenu()}
      </Bar>
    );
  }

  renderHeader() {
    return (
      <Header {...filter(prefixed(this.props, 'header'), HeaderPropTypes)} className={bem.element(this, 'header')} />
    );
  }

  render() {
    const { children, ...props } = this.props;
    const { minimized: barMinimized } = prefixed(props, 'bar');

    return (
      <div {...filter(unprefixed(props), ElementPropTypes)} className={bem.block(this, { barMinimized })}>
        {this.renderHeader()}
        {this.renderBar()}
        <div className={bem.element(this, 'content')}>{children}</div>
      </div>
    );
  }
}
