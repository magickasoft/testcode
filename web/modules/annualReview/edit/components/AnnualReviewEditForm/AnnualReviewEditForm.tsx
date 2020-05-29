import * as React from 'react';
import { withForm, FormButtons } from 'components/Form';
import { Page, PageDefaultProps } from 'components/Page';
import { Delimiter } from 'components/Delimiter';
import { Panel } from 'components/Panel';
import { Layer } from 'components/Layer';
import { addPrefix } from 'utils/common';
import { AnnualReviewFormModel } from 'modules/annualReview/edit';
import { modelAnnualReview } from 'types/foundation';
import {
  AnnualReviewEditOverview,
  AnnualReviewEditOverviewProps
} from '../AnnualReviewEditOverview/AnnualReviewEditOverview';
import { AnnualReviewEditLicensing } from '../AnnualReviewEditLicensing/AnnualReviewEditLicensing';
import { AnnualReviewEditQuestions } from '../AnnualReviewEditQuestions/AnnualReviewEditQuestions';

import styles from './annualReviewEditForm.module.css';

export interface AnnualReviewEditFormProps {
  children: React.ReactNode;
  id: number;
  companyId: number;
  isPending: boolean;
  annualReview: modelAnnualReview;
  value: typeof AnnualReviewFormModel;
  onCancel: () => void;
  onSubmit: () => void;
  onDelete: () => void;
  hasChanges: boolean;
}

const isStart = (annualReview) => annualReview?.created_at === annualReview?.updated_at;

export const [AnnualReviewEditForm] = withForm(
  ({
    onCancel,
    onSubmit, // onDelete,
    children,
    hasChanges,
    annualReview,
    companyId,
    company,
    value,
    Field,
    id,
    ...props
  }: AnnualReviewEditFormProps & AnnualReviewEditOverviewProps) => (
    <Page {...props} face={Page.FACE_SECONDARY} subTitle={addPrefix('AR')(id)} isPending={!id}>
      {children}
      <Layer rounded shadowed>
        <Panel
          collapsible={false}
          title={isStart(annualReview) ? 'Start Annual Review' : 'Edit Annual Review'}
          content-className={styles.content}
        >
          <AnnualReviewEditOverview key={0} annualReview={annualReview} company={company} Field={Field} />
          <Delimiter key={1} />
          <AnnualReviewEditLicensing key={2} companyId={companyId} Field={Field} />
          <Delimiter key={3} />
          <AnnualReviewEditQuestions key={4} Field={Field} value={value} />
        </Panel>
      </Layer>
      <div className={styles.buttons}>
        <FormButtons
          cancel-disabled={value.isPending()}
          cancel-onClick={onCancel}
          submit-pending={value.isPending()}
          submit-disabled={!hasChanges || value.isPending() || value.hasError()}
          submit-onClick={onSubmit}
          // delete-isHidden={!+id}
          // delete-children="Delete"
          // delete-onClick={onDelete}
        />
      </div>
    </Page>
  )
);

AnnualReviewEditForm.defaultProps = {
  ...PageDefaultProps,
  title: 'Start Annual Review',
  face: Page.FACE_SECONDARY
};
