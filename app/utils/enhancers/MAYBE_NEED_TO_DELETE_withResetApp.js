import React from 'react';
import { tokens } from '../../services';
import { RootSpinner } from '../../components';

const MAYBE_NEED_TO_DELETE_withResetApp = Component => (
  class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.prevProfileId = null;
      this.currentProfileId = null;

      this.state = {
        renderView: false,
      };
    }
    componentDidMount() {
      tokens.onChange(values => {
        if (values.ID_PROFILE) {
          this.prevProfileId = this.currentProfileId;
          this.currentProfileId = values.ID_PROFILE;

          if (this.currentProfileId !== this.prevProfileId && !!this.prevProfileId) {
            this.setState({ renderView: true }, () => {
              setTimeout(() => {
                this.setState({ renderView: false });
              }, 0);
            });
          }
        }
      });
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
);

export default MAYBE_NEED_TO_DELETE_withResetApp;
