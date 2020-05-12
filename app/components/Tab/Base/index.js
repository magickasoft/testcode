import {
  compose,
  hoistStatics,
} from 'recompose';

import TabView from './TabView';


const enhance = compose(
  // withState('index', 'setIndex', 0),

  // withTheme(s),
  // shouldUpdate((props, nextProps) => {
  //
  //   return false;
  // })
);

export default hoistStatics(enhance)(TabView);
