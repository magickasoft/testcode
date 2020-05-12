import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { PopoverController, Popover as PopoverModal } from 'react-native-modal-popover';
import { AnimatedTitle, IconVector, Touchable } from '@components';
import s from './styles';

const Popover = ({
  icon,
  title,
  titleStyle,
  onPress,
  children,
  titleProps,
  ...props
}) => (
  <View>
    <PopoverController>
      {({
        openPopover,
        closePopover,
        popoverVisible,
        setPopoverAnchor,
        popoverAnchorRect
      }) => (
        <React.Fragment>
          <Touchable
            refTouchable={setPopoverAnchor}
            onPress={() => {
              openPopover();
              !!onPress && onPress();
            }}
          >
            {!!icon && (
              <IconVector
                style={s.icon}
                {...icon}
              />
            )}
            {!!title && (
              <AnimatedTitle
                isAbsolute={false}
                title={title}
                titleStyle={titleStyle}
                {...titleProps}
              />
            )}
          </Touchable>
          <PopoverModal
            // contentStyle={styles.content}
            // arrowStyle={styles.arrow}
            // backgroundStyle={styles.background}
            supportedOrientations={['portrait', 'landscape']}
            {...props}
            visible={popoverVisible}
            onClose={closePopover}
            fromRect={popoverAnchorRect}
          >
            {children}
          </PopoverModal>
        </React.Fragment>
      )}
    </PopoverController>
  </View>
);


Popover.propTypes = {
  children: T.element,
  icon: T.object,
  onPress: T.func,
  title: T.string,
  titleProps: T.object,
  titleStyle: T.oneOfType([T.array, T.object])
};

export default Popover;
