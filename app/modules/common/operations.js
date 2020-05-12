import { Alert } from 'react-native';

const report = ({
  mutate,
  variables
}) => {
  Alert.alert('Report', 'Are you sure you want to report this as inappropriate?', [
    {
      text: 'Yes',
      onPress: () => {
        mutate({ variables });

        Alert.alert(
          'Flagged',
          'This has been flagged as inappropriate. We will review and take measures in less than 24 hours. Thank you for your help!', // eslint-disable-line
          [{ text: 'ok' }]
        );
      }
    },
    { text: 'Cancel' }
  ]);
};

const requestGDPRData = ({
  mutate
}) => {
  const onPress = async () => {
    await mutate();
    Alert.alert(
      'We have received your request.',
      'We will notify you when your data is available.',
      [{ text: 'Ok' }]
    );
  };
  Alert.alert(
    'Request all my data',
    'Request a copy of all the data that SPECTRA stores on me.',
    [
      { text: 'Confirm', onPress },
      { text: 'Cancel', style: 'destructive' }
    ],
  );
};

export default {
  report,
  requestGDPRData
};
