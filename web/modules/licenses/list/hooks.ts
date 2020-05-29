import { useSelector } from 'react-redux';
import { modelLicense } from 'types/foundation';
import { licenseListSelectors } from './licenseList';

export const useLicenseList = (): [modelLicense[], boolean] => {
  const entity = useSelector(licenseListSelectors.getEntity);

  return [entity.getValue(), entity.isPending()];
};
