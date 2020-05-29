import * as React from 'react';
import addDays from 'date-fns/addDays';
import { PageSection } from 'components/Page';
import { DOCUMENTS_LIST_PAGE_PATH } from 'modules/documents/list';
import { AlertedItem } from './AlertedItem';

interface Props {
  items: any[];
  firstAlert: number;
  lastAlert: number;
}

export const DocumentsDue = React.memo((props: Props) => {
  const { items, firstAlert, lastAlert } = props;
  const now = new Date();

  const pastItems = items.filter((i) => new Date(i.expiration_date).getTime() < Date.now());

  const firstAlertedItems = items.filter(
    (i) =>
      new Date(i.expiration_date) >= addDays(now, lastAlert) && new Date(i.expiration_date) <= addDays(now, firstAlert)
  );

  const lastAlertedItems = items.filter(
    (i) => new Date(i.expiration_date) >= now && new Date(i.expiration_date) <= addDays(now, lastAlert)
  );

  return (
    <PageSection title="Documents Due">
      <AlertedItem past count={pastItems.length} daysDue={0} url={`${DOCUMENTS_LIST_PAGE_PATH}?due_status=past-due`} />
      <AlertedItem
        past={false}
        count={firstAlertedItems.length}
        daysDue={firstAlert}
        url={`${DOCUMENTS_LIST_PAGE_PATH}?due_status=first-alert`}
      />
      <AlertedItem
        past={false}
        count={lastAlertedItems.length}
        daysDue={lastAlert}
        url={`${DOCUMENTS_LIST_PAGE_PATH}?due_status=last-alert`}
      />
    </PageSection>
  );
});
