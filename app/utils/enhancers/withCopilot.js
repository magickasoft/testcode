import { compose, withState, lifecycle } from 'recompose';
import { copilot } from '@okgrow/react-native-copilot';

import { tutorials } from '@services';

export default (
  screenName,
  onStepChange,
) => compose(
  withState('displayCopilot', 'setDisplayCopilot', false),
  copilot(),
  lifecycle({
    async componentDidMount() {
      const completed = await tutorials.isCompleted(screenName);
      if (!completed) {
        this.props.setDisplayCopilot(true);
        setTimeout(() => {
          this.props.start();
        }, 1000);

        this.props.copilotEvents.on('stop', () => {
          tutorials.addToCompleted(screenName);
        });

        if (onStepChange) {
          this.props.copilotEvents.on('stepChange', (s) => onStepChange(this.props, s));
        }
      }
    },
    componentWillUnmount() {
      this.props.copilotEvents.off('stop');
      this.props.copilotEvents.off('stepChange');
    }
  }),
);
