/* eslint-disable */
import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  lifecycle,
  withProps,
} from 'recompose';
import R from 'ramda';

import { restApi, googleSignIn, fb, instagram } from '@services';
import { withLoadingModal, withAlert } from '@utils/enhancers';

import ProfileVerification from './ProfileVerification';

const catcher = (props, err) => {
  props.setLoading(false);
  props.setError(R.pathOr(null, ['message'], err));
};

const tryCatch = (tryer, catcher = console.log) => props => async (...args) => {
  try {
    props.setLoading(true);
    await tryer(props, ...args);
  } catch (err) {
    props.setLoading(false);
    catcher(props, err);
  }
};

const getGoogle = soc => (
  R.pathOr(
  R.path(['google', 'data', 'name'], soc),
  ['google', 'data', 'displayName'],
   soc
));

const enhance = compose(
  withState('soc', 'setSoc', null),
  withState('isLoading', 'setLoading', false),
  withState('error', 'setError', null),
  withState('refInstagram', 'setRefInstagram', null),
  withLoadingModal.stateProp('isLoading'),
  withAlert(({ error, setError }) => ({
    isVisible: !!error,
    message: error,
    onChangeVisible: () => setError(null),
    delay: 4000,
  })),
  withHandlers({
    getSoc: tryCatch(async (props) => {
        const res = await restApi.socClients();
        await instagram.logout();

        props.setSoc(res.data);
        props.setLoading(false);
      }, catcher),
  }),
  withHandlers({
    onLoginSuccessInstagram: tryCatch(async (props, token) => {
      await instagram.auth(token);
      props.getSoc();
    }, catcher),
    onConnectInstagram: props => async () => {
      props.refInstagram && props.refInstagram.show();
    },
    onConnectGoogle: tryCatch(async (props) => {
      await googleSignIn.auth();
      props.getSoc();
    }, catcher),
    onConnectFacebook: tryCatch(async (props) => {
      await fb.auth();
      props.getSoc();
    }, catcher),
  }),
  withProps(({ soc }) => ({
    soc: {
      phone: null,
      facebook: R.path(['facebook', 'data', 'name'], soc),
      google: getGoogle(soc),
      instagram: R.path(['instagram', 'data', 'full_name'], soc),
      twitter: null,
    },
  })),
  lifecycle({
    componentDidMount(){
       this.props.getSoc();
    }
  })
);

export default hoistStatics(enhance)(ProfileVerification);
