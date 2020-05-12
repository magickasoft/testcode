import {
  compose,
  withState,
  lifecycle,
  withContext,
} from 'recompose';
import T from 'prop-types';
import { Navigation } from 'react-native-navigation';

import { theme } from '@services';

const enhance = compose(
  withState('colorsTheme', 'setColorsTheme', theme.get()),
  withContext(
    { colorsTheme: T.object },
    props => ({ colorsTheme: props.colorsTheme })
  ),
  lifecycle({
    componentDidMount() {
      theme.subscribe('change', newTheme => {
        Navigation.mergeOptions(this.props.componentId, {
          bottomTab: {
            iconColor: newTheme.textInert,
            textColor: newTheme.textInert,
            selectedIconColor: newTheme.activePrimary,
            selectedTextColor: newTheme.activePrimary,
          },
          bottomTabs: {
            backgroundColor: newTheme.bottomTabs,
          },
        });
        this.props.setColorsTheme(newTheme);
      });
    },
  }),
);

export default enhance;
