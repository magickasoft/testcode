import { compose, withHandlers, onlyUpdateForKeys, withState } from 'recompose';
import { withToggle, withTheme } from '@utils/enhancers';
import Comment from './Comment';
import { dimensions } from '../../styles';
import style from './styles';

const TWO_ROW_HEIGHT = dimensions.indent * 4.5;

const enhance = compose(
  withToggle('_isExpanded', '_setExpanded', '_onToggleExpanded'),
  withState('_hasExpanded', '_setHasExpanded', false),
  withHandlers({
    onUpdateLike: (props) => (value, type) => {
      props.onUpdateLike(props.index, props.item, value, type);
    },
    _onLayoutTextCalculations: (props) => ({ nativeEvent: { layout: { height } } }) => {
      if (height > TWO_ROW_HEIGHT) {
        props._setHasExpanded(true);
      }
    }
  }),
  onlyUpdateForKeys([
    'item',
    '_isExpanded',
    '_hasExpanded'
  ]),
  withTheme(style),
);

export default enhance(Comment);
