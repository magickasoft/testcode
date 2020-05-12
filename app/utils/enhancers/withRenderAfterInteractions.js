import { InteractionManager } from 'react-native';
import { compose, lifecycle, withState } from 'recompose';


const withRenderAfterInteractions = (
  stateName = 'isLoadingUI',
) => compose(
  withState(stateName, '_toggleLoadingUI', true),
  lifecycle({
    componentDidMount() {
      InteractionManager.runAfterInteractions(() => {
        this.props._toggleLoadingUI(false);
      });
    },
  }),
);

export default withRenderAfterInteractions;
