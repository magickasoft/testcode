import React from 'react';
import { View } from 'react-native';
import R from 'ramda';

import styles from '@styles';
import { ActionSheet } from '@components';

// withActionSheet(props => [{
//   name: '',
//   handler: '',
// }, {
//   name: '',
//   handler: '',
// }], {
//
// });


const withActionSheet = (
  options,
  actionSheetProps,
  openDialogName = 'openDialogOptions'
) => Component => (
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.actionSheetRef = null;

      this.options = [];
      this.getOptions().forEach(el => this.options.push(el.name));
    }

    getOptions = () => (R.is(Array, options) ? options : options(this.props));

    setRef = ref => {
      if (ref) {
        this.actionSheetRef = ref;
      }
    };

    openPressItemMenu = index => {
      if (index !== actionSheetProps.cancelButtonIndex) {
        (this.getOptions())[index].handler();
      }
    };

    openDialogOptions = () => {
      if (this.actionSheetRef) {
        // setTimeout(() => {
        this.actionSheetRef.show();
        // });
      }
    };

    render() {
      const componentProps = {
        [openDialogName]: this.openDialogOptions,
      };

      return (
        <View style={styles.fillAll}>
          <Component
            {...componentProps}
            {...this.props}
          />
          <ActionSheet
            {...actionSheetProps}
            setRef={this.setRef}
            options={this.options}
            onPress={this.openPressItemMenu}
          />
        </View>

      );
    }
  }
);

export default withActionSheet;
