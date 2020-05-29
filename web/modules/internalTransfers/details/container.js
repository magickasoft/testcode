import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';
import { createDispatchers } from 'utils/redux';
import { licenseListSelectors } from 'modules/licenses/list';
import { companiesListSelectors } from 'modules/companies/list';
import { MAIN_INTERNAL_TRANSFERS_PATH } from 'modules/main';
import { InternalTransferPage } from './components/InternalTransferPage';
import { internalTransferActions } from './actions';
import { internalTransferSelector } from './selectors';

const Container = connect(
  (state, props) => {
    const { params } = props.match;
    const transferId = +params.id;
    const licenses = licenseListSelectors.getEntity(state);
    const companies = companiesListSelectors.getEntity(state);
    const { isPending, details } = internalTransferSelector(state);

    return {
      transferId,
      licenses,
      companies,
      isPending,
      details
    };
  },
  createDispatchers({
    onRead: internalTransferActions.read.call
  })
)(InternalTransferPage);

export const internalTransferRoute = <Route path={`${MAIN_INTERNAL_TRANSFERS_PATH}/:id`} component={Container} />;
