import * as React from 'react';
import { push } from 'modules/router/effects';
import { USERS_LIST_PAGE_PATH } from 'modules/users/list';
import { contactDetailsActions, ContactDetailsFilterModel } from 'modules/companies/details';
import { useDispatch, useSelector } from 'react-redux';
import { RouterComponentProps } from 'react-router-dom';
import { contactFormActions } from '../actions';
import { ContactFormModel } from '../models';
import { contactFormSelector } from '../selectors';
import { EditContactForm } from '../components/EditContactForm';

export const EditContactDialog = (properties: RouterComponentProps) => {
  const dispatch = useDispatch();
  const {
    match: {
      params: { contactId }
    }
  } = properties;
  const value = useSelector(contactFormSelector.getEntity);
  const plainValue = value.getValue();

  React.useEffect(() => {
    if (+contactId) {
      dispatch(contactDetailsActions.read.call(new ContactDetailsFilterModel().setValue({ id: +contactId })));
    } else {
      dispatch(contactFormActions.value.set(new ContactFormModel()));
    }
  }, []);

  const onChange = React.useCallback(
    (form) => {
      dispatch(contactFormActions.value.set(form));
    },
    [plainValue]
  );

  const onSubmit = React.useCallback(() => {
    dispatch(contactFormActions.write.call(value));
  }, [value]);

  const onCancel = React.useCallback(() => push(USERS_LIST_PAGE_PATH), [value]);

  return <EditContactForm value={value} onChange={onChange} onSubmit={onSubmit} onCancel={onCancel} />;
};
