import {
  compose,
  hoistStatics,
} from 'recompose';

import People from './People';
import { withTheme } from '../../utils/enhancers';
import s from './style';

const enhance = compose(
  withTheme(s),
);

export default hoistStatics(enhance)(People);
