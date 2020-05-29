import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { Confirm } from 'components/Dialog';
import { documentPeriodFormActions, DocumentPeriodFormModel } from 'modules/documents/edit';
import { documentPeriodsSelector } from 'modules/documents/details/selectors';

interface Properties {
  closePath: string;
}

export const ApproveDialog = React.memo((properties: RouterComponentProps & Properties) => {
  const {
    history,
    match: {
      params: { periodId }
    },
    closePath
  } = properties;

  const dispatch = useDispatch();
  const period = useSelector(documentPeriodsSelector.getEntity);
  const plainPeriod =
    period && Array.isArray(period.getValue())
      ? period.getValue().find((i) => +i.id === +periodId) || period.getValue()[0]
      : {};

  const approvePeriod = React.useCallback(() => {
    dispatch(
      documentPeriodFormActions.write.call(
        new DocumentPeriodFormModel().setValue({
          ...plainPeriod,
          status: 'approved',
          return_path: closePath
        })
      )
    );
  }, [plainPeriod]);

  const closeDialog = React.useCallback(() => {
    history.push(closePath);
  }, []);

  return (
    <Confirm value={null} onClose={closeDialog} onSubmit={approvePeriod} buttons-submit-children="Approve">
      Are you sure want to approve this period?
    </Confirm>
  );
});
