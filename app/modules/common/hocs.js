import { hoc } from '../../utils/helpers/graphQl';
import mutations from './mutations';

const mutationReport = hoc(mutations.REPORT, {
  name: 'report'
});

const mutationRequestGDPRData = hoc(mutations.GDPR_DATA_REQUEST, {
  name: 'requestGDPRData'
});

export default {
  mutationReport,
  mutationRequestGDPRData
};
