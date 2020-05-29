import { node, oneOf } from 'prop-types';
import React, { PureComponent } from 'react';
import cn from 'classnames';

import { ElementPropTypes } from 'utils/prop-types';
import { filter, prefixBy, prefixed, unprefixed } from 'utils/props';

import styles from './infoSet.module.css';

const DIRECTION_ROW = 'row';
const DIRECTION_COLUMN = 'column';

const DIRECTIONS = [DIRECTION_ROW, DIRECTION_COLUMN];

const SIZE_MD = 'md';
const SIZE_LG = 'lg';

const SIZES = [SIZE_MD, SIZE_LG];

export const InfoSetPropTypes = {
  children: node,
  legend: node,
  direction: oneOf(DIRECTIONS),
  size: oneOf(SIZES),
  ...prefixBy('legend', ElementPropTypes)
};

export const InfoSetDefaultProps = {
  children: null,
  legend: null,
  direction: DIRECTION_COLUMN,
  size: null
};

export class InfoSet extends PureComponent {
  static propTypes = InfoSetPropTypes;

  static defaultProps = InfoSetDefaultProps;

  static className = 'InfoSet';

  static DIRECTION_ROW = DIRECTION_ROW;

  static DIRECTION_COLUMN = DIRECTION_COLUMN;

  static DIRECTIONS = DIRECTIONS;

  static SIZES = SIZES;

  static SIZE_MD = SIZE_MD;

  static SIZE_LG = SIZE_LG;

  renderLegend() {
    const { legend, ...props } = this.props;
    const legendProps = prefixed(props, 'legend');

    return (
      <legend {...legendProps} className={cn(styles.legend, legendProps.className)}>
        {legend}
      </legend>
    );
  }

  render() {
    const { legend, children, direction, size, ...props } = unprefixed(this.props, 'legend');
    return (
      <div
        {...filter(props, ElementPropTypes)}
        className={cn(styles.infoSet, {
          [styles.legend]: !!legend,
          [styles[direction]]: !!direction,
          [styles[size]]: !!size
        })}
      >
        {legend ? this.renderLegend() : null}
        {children}
      </div>
    );
  }
}
