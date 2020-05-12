/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import {
  compose,
  defaultProps,
  withHandlers,
  setPropTypes,
  withState,
  shouldUpdate,
} from 'recompose';

import { withLocale } from '@utils/enhancers';
import Search from './Search';

let timer = null;

const enhance = compose(
  withLocale(),
  shouldUpdate(({ locale }, { localeNext }) => locale !== localeNext),
  setPropTypes({
    timeToUpdate: T.number,
  }),
  defaultProps({
    onClear: () => null,
    timeToUpdate: 400,
  }),
  withState('value', 'setValue', null),
  withState('inputRef', 'setInputRef', null),
  withHandlers({
    updateSearch: props => value => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        props.onChangeText(value)
      }, props.timeToUpdate);

    },
  }),
  withHandlers({
    onClear: props => () => {
      if(!props.value) {
        return null;
      }

      props.inputRef && props.inputRef.setNativeProps({ text: '' });
      props.setValue('');

      setTimeout(() => {
        props.onClear();
        props.onChangeText('');
      }, 0);
    },
    onChangeText: props => value => {
      props.inputRef && props.inputRef.setNativeProps({ text: value });
      props.setValue(value);

      props.updateSearch(value);
    },
  })
);

export default enhance(Search);
