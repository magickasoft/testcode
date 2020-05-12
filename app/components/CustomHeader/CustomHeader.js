import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ViewPropTypes as RNViewPropTypes
} from 'react-native';
import { Icon } from '@components';
import styles from './styles';
import { renderNode, nodeType } from './helpers';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center'
};

const Children = ({ style, placement, children }) => (
  <View
    style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}
  >
    {children == null || children === false
      ? null
      : children.text
        ? renderNode(Text, children.text, { numberOfLines: 1, ...children })
        : children.icon
          ? renderNode(Icon, {
            ...children,
            name: children.icon,
            containerStyle: StyleSheet.flatten([
              { alignItems: ALIGN_STYLE[placement] },
              children.containerStyle
            ])
          })
          : renderNode(Text, children)}
  </View>
);

Children.propTypes = {
  children: PropTypes.oneOfType([nodeType, PropTypes.node]),
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  style: ViewPropTypes.style
};

export default class Header extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: Image.propTypes.source,
    backgroundImageStyle: Image.propTypes.style,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    centerComponent: nodeType,
    centerContainerStyle: ViewPropTypes.style,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    containerStyle: ViewPropTypes.style,
    leftComponent: nodeType,
    leftContainerStyle: ViewPropTypes.style,
    placement: PropTypes.oneOf(['left', 'center', 'right']),
    rightComponent: nodeType,
    rightContainerStyle: ViewPropTypes.style,
    statusBarProps: PropTypes.object,
    ViewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  };

  static defaultProps = {
    placement: 'center',
    children: []
  };

  state = {};

  render() {
    const {
      statusBarProps,
      leftComponent,
      centerComponent,
      rightComponent,
      leftContainerStyle,
      centerContainerStyle,
      rightContainerStyle,
      backgroundColor,
      backgroundImage,
      backgroundImageStyle,
      containerStyle,
      placement,
      barStyle,
      children,
      ViewComponent = ImageBackground,
      ...attributes
    } = this.props;

    return (
      <ViewComponent
        {...attributes}
        style={StyleSheet.flatten([
          styles.container,
          backgroundColor && { backgroundColor },
          containerStyle
        ])}
        source={backgroundImage}
        imageStyle={backgroundImageStyle}
      >
        <StatusBar barStyle={barStyle} {...statusBarProps} />
        <Children
          style={StyleSheet.flatten([
            placement === 'center' && styles.rightLeftContainer,
            leftContainerStyle
          ])}
          placement="left"
        >
          {(React.isValidElement(children) && children) ||
          children[0] ||
          leftComponent}
        </Children>

        <Children
          style={StyleSheet.flatten([
            styles.centerContainer,
            placement !== 'center' && {
              paddingHorizontal: Platform.select({
                android: 16,
                default: 15
              })
            },
            centerContainerStyle
          ])}
          placement={placement}
        >
          {children[1] || centerComponent}
        </Children>

        <Children
          style={StyleSheet.flatten([
            placement === 'center' && styles.rightLeftContainer,
            rightContainerStyle
          ])}
          placement="right"
        >
          {children[2] || rightComponent}
        </Children>
      </ViewComponent>
    );
  }
}
