import React from 'react';
import T from 'prop-types';
import { compose, pure } from 'recompose';
import { withTheme, withLocale } from '@utils/enhancers';
import { Button } from '@components';
import style from './style';

const Btn = ({
  theme: { s },
  label,
  ...props
}) => (
  <Button
    title={label}
    titleStyle={s.titleBtn}
    containerStyle={s.containerBtn}
    {...props}
  />
);

Btn.propTypes = {
  label: T.string,
  theme: T.object
};

export default compose(
  withLocale(),
  pure,
  withTheme(style),
)(Btn);
