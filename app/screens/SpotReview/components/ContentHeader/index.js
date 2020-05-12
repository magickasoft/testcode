import { compose, onlyUpdateForKeys } from 'recompose';
import { withTheme } from '@utils/enhancers';
import ContentHeader from './ContentHeader';
import s from './styles';

const enhance = compose(
  onlyUpdateForKeys(['isLoading', 'isAddedToBookmark']),
  withTheme(s),
);

export default enhance(ContentHeader);
