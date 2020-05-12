import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker, Dimensions } from 'react-native';
import { isObject, head, nth, castArray } from 'lodash';
import I18n from 'react-native-i18n';
import { Modal, LinearGradientButton } from '@components';
import styles from './styles';

const { width } = Dimensions.get('window');

export default class DataPicker extends Component {
  static propTypes = {
    onPickerCancel: PropTypes.func.isRequired,
    onPickerConfirm: PropTypes.func.isRequired,
    onPickerSelect: PropTypes.func.isRequired
  };

  static defaultProps = {
    onPickerCancel: () => {},
    onPickerConfirm: () => {},
    onPickerSelect: () => {}
  };

  state = {
    isVisible: false
  };

  onValueChange = (itemValue, index) => {
    // eslint-disable-next-line prefer-const
    let selected = this.state.selected;
    selected[index] = itemValue;
    this.setState({ selected });
    this.props.onPickerSelect(selected);
  };

  init = ({ data, selectedValue }) => {
    this.setState({
      data: data || [],
      selected: selectedValue || data.map((item) => (head(item).id || String(head(item))))
    });
  };

  open = () => this.setState({ isVisible: true });

  close = () => {
    const { selected } = this.state;
    this.setState({ isVisible: false });
    this.props.onPickerCancel(selected);
  };

  handleDataSubmit = () => {
    const { selected } = this.state;
    this.setState({ isVisible: false });
    this.props.onPickerConfirm(selected);
  };

  renderSelectedValue = (item, index) => <Text key={index} style={styles.date}>{item}</Text>;

  renderSelected = () => {
    const { selected } = this.state;
    return (
      <View style={styles.selectedWrapper}>
        {selected.map(this.renderSelectedValue)}
      </View>
    );
  };

  renderButtonsBlock = (buttons, style = {}) => {
    const buttonsArray = castArray(buttons);

    return (
      <View style={[styles.row, styles.controlsWrapper, style]}>
        {buttonsArray.map(this.renderButton)}
      </View>
    );
  };

  renderButton = ({ title = '', onPress = () => {}, ...props }, index) => (
    <LinearGradientButton
      {...props}
      key={index}
      styleContainer={[styles.flex, styles.btnStyle]}
      title={title}
      onClick={onPress}
    />
  );

  renderPickerItem = (item, index) => (isObject(item)
    ? <Picker.Item key={index} label={item.name} value={String(item.id)} />
    : <Picker.Item key={index} label={String(item)} value={String(item)} />
  );

  renderPicker = (item, index, array) => (
    <Picker
      key={index}
      style={{ width: (width / array.length) }}
      selectedValue={nth(this.state.selected, index)}
      onValueChange={(itemValue) => this.onValueChange(itemValue, index)}
    >
      {item.map(this.renderPickerItem)}
    </Picker>
  );

  render() {
    const { isVisible, data, selected } = this.state;
    return (
      <Modal isVisible={isVisible} onClose={this.close}>
        {data && selected && this.renderSelected()}
        {data && (
          <View style={[styles.TDPickerWrapper, styles.row]}>
            {data.map(this.renderPicker)}
          </View>
        )}
        {this.renderButtonsBlock({ title: I18n.t('modal.label.set'), onPress: () => this.handleDataSubmit() })}
      </Modal>
    );
  }
}
