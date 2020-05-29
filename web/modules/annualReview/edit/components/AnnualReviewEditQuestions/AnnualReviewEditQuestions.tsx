import * as React from 'react';
import { Delimiter } from 'components/Delimiter';
import { InputText } from 'components/Input';
import { PageSection } from 'components/Page';
import { AnnualReviewQuestionList } from 'modules/annualReview/components';
import { FieldGroup } from 'components/Field/FieldGroup';
import { AnnualReviewFormModel } from 'modules/annualReview/edit';
import { FieldYesNo } from '../FieldYesNo/FieldYesNo';
import { FieldYesNoNA } from '../FieldYesNoNA/FieldYesNoNA';
import { FieldDate } from '../FieldDate/FieldDate';
import { FieldCheckbox } from '../FieldCheckbox/FieldCheckbox';
import { FieldRadio } from '../FieldRadio/FieldRadio';

import { annualReviewQuestionnaireMapping } from '../../../selectors/annualReviewQuestionnaire';

import styles from './annualReviewEditQuestions.module.css';

export interface AnnualReviewEditQuestionsProps {
  Field: any;
  value: typeof AnnualReviewFormModel;
}

export const AnnualReviewEditQuestions = ({ Field, value }: AnnualReviewEditQuestionsProps) => {
  const questionnaire = value.getField('questionnaire').getValue();

  const items = annualReviewQuestionnaireMapping(
    {
      financials: {
        profitabilityTrend: (
          <Field
            className={styles.textarea}
            name="questionnaire.financials_profitability_trend"
            input={InputText}
            input-multiline
          />
        ),
        periodCollected: <Field name="questionnaire.financials_period_collected" input={InputText} />,
        investorDebtholders: (
          <Field
            className={styles.textarea}
            name="questionnaire.financials_investor_debtholders"
            input={InputText}
            input-multiline
          />
        ),
        depositsMatching: <FieldYesNo Field={Field} name="questionnaire.financials_deposits_matching" />,
        businessCondition: (
          <Field
            className={styles.textarea}
            name="questionnaire.financials_business_condition"
            input={InputText}
            input-multiline
          />
        ),
        becomingFailing: (
          <Field
            className={styles.textarea}
            name="questionnaire.financials_becoming_failing"
            input={InputText}
            input-multiline
          />
        )
      },
      transactions: {
        type: (
          <FieldGroup>
            <FieldCheckbox Field={Field} key="cash" name="questionnaire.transactions_cash" value="false" label="Cash" />
            <FieldCheckbox Field={Field} key="atm" name="questionnaire.transactions_atm" value="false" label="ATM" />
            <FieldCheckbox Field={Field} key="ach" name="questionnaire.transactions_ach" value="false" label="ACH" />
            <FieldCheckbox
              Field={Field}
              key="check"
              name="questionnaire.transactions_check"
              value="false"
              label="Check Deposit"
            />
          </FieldGroup>
        ),
        volProjected: (
          <FieldGroup>
            <FieldGroup>
              <FieldRadio
                Field={Field}
                key="yes"
                name="questionnaire.transactions_vol_projected"
                value="Yes"
                label="Yes"
              />
              <FieldRadio
                Field={Field}
                key="no"
                name="questionnaire.transactions_vol_projected"
                value="No"
                label="No"
              />
            </FieldGroup>
            <FieldGroup>
              <i className={styles.caption}>(</i>
              <FieldRadio
                name="questionnaire.transactions_vol_projected_exactly"
                Field={Field}
                value="Higher"
                label="Higher"
              />
              <i className={styles.caption}>or</i>
              <FieldRadio
                name="questionnaire.transactions_vol_projected_exactly"
                Field={Field}
                value="Lower"
                label="Lower"
              />
              <i className={styles.caption}>)</i>
            </FieldGroup>
          </FieldGroup>
        ),
        expectExactly: (
          <FieldGroup>
            <FieldRadio
              key="Increase"
              name="questionnaire.transactions_expect_exactly"
              Field={Field}
              value="Increase"
              label="Increase"
            />
            <FieldRadio
              key="Decrease"
              name="questionnaire.transactions_expect_exactly"
              Field={Field}
              value="Decrease"
              label="Decrease"
            />
            <FieldRadio
              key="Stable"
              name="questionnaire.transactions_expect_exactly"
              Field={Field}
              value="Stable"
              label="Stable"
            />
            <FieldRadio
              key="Unknown"
              name="questionnaire.transactions_expect_exactly"
              Field={Field}
              value="Unknown"
              label="Unknown"
            />
          </FieldGroup>
        ),
        expectExplain: (
          <Field
            className={styles.textarea}
            name="questionnaire.transactions_expect_explain"
            label="If unknown, explain:"
            disabled={questionnaire.transactions_expect_exactly !== 'Unknown'}
            input={InputText}
            input-multiline
          />
        ),
        matchTrans: <FieldYesNo Field={Field} name="questionnaire.transactions_match_trans" />,
        notes: (
          <Field
            className={styles.textarea}
            name="questionnaire.transactions_notes"
            disabled={questionnaire.transactions_match_trans !== 'No'}
            input={InputText}
            input-multiline
          />
        )
      },
      covenant: {
        complying: <FieldYesNo Field={Field} name="questionnaire.covenant_complying" />,
        nonComplianceDesc: (
          <Field
            className={styles.textarea}
            name="questionnaire.covenant_non_compliance_desc"
            input={InputText}
            input-multiline
          />
        ),
        transparent: <FieldYesNo Field={Field} name="questionnaire.covenant_transparent" />
      },
      siteVisit: {
        freq: (
          <FieldGroup>
            <FieldRadio
              key="Quarterly"
              name="questionnaire.siteVisit_freq"
              Field={Field}
              value="Quarterly"
              label="Quarterly"
            />
            <FieldRadio
              key="Semi-Annual"
              name="questionnaire.siteVisit_freq"
              Field={Field}
              value="Semi-Annual"
              label="Semi-Annual"
            />
          </FieldGroup>
        ),
        lastDate: <FieldDate Field={Field} name="questionnaire.last_ar_date" />,
        complyingRegulations: <FieldYesNo Field={Field} name="questionnaire.siteVisit_complying_regulations" />,
        violationRectified: <FieldYesNoNA name="questionnaire.siteVisit_violation_rectified" Field={Field} />,
        scoresAcceptable: (
          <FieldGroup>
            <FieldRadio
              key="Yes"
              name="questionnaire.siteVisit_scores_acceptable_exactly"
              Field={Field}
              value="Yes"
              label="Yes"
            />
            <FieldRadio
              key="No"
              name="questionnaire.siteVisit_scores_acceptable_exactly"
              Field={Field}
              value="No"
              label="No"
            />
            <FieldRadio
              key="Improving"
              name="questionnaire.siteVisit_scores_acceptable"
              Field={Field}
              value="Improving"
              label="Improving"
            />
            <FieldRadio
              key="Declining"
              name="questionnaire.siteVisit_scores_acceptable"
              Field={Field}
              value="Declining"
              label="Declining"
            />
            <FieldRadio
              key="Stable"
              name="questionnaire.siteVisit_scores_acceptable"
              Field={Field}
              value="Stable"
              label="Stable"
            />
          </FieldGroup>
        ),
        shutdownRisk: <FieldYesNo Field={Field} name="questionnaire.siteVisit_shutdown_risk" />
      },
      ownership: {
        changes: <FieldYesNo Field={Field} name="questionnaire.ownership_changes" />,
        providedForms: <FieldYesNo Field={Field} name="questionnaire.ownership_provided_forms" />,
        changesApproved: <FieldYesNoNA name="questionnaire.ownership_changes_approved" Field={Field} />,
        ofacTloReviewed: <FieldYesNoNA name="questionnaire.ownership_ofac_tlo_reviewed" Field={Field} />,
        badNews: <FieldYesNo Field={Field} name="questionnaire.ownership_bad_news" />,
        badNewsDesc: (
          <Field
            className={styles.textarea}
            name="questionnaire.ownership_bad_news_desc"
            input={InputText}
            input-multiline
          />
        ),
        badNewsCleared: <FieldYesNo Field={Field} name="questionnaire.ownership_bad_news_cleared" />,
        badNewsClearedExplain: (
          <Field
            className={styles.textarea}
            name="questionnaire.ownership_bad_news_cleared_explain"
            input={InputText}
            input-multiline
          />
        )
      },
      recom: {
        recommended: <FieldYesNo Field={Field} name="questionnaire.recom_recommended" />,
        status: (
          <FieldGroup>
            <FieldRadio
              key="Satisfactory"
              name="questionnaire.recom_status"
              Field={Field}
              value="Satisfactory"
              label="Satisfactory"
            />
            <FieldRadio
              key="Requires Additional Monitoring"
              name="questionnaire.recom_status"
              Field={Field}
              value="Requires Additional Monitoring"
              label="Requires Additional Monitoring"
            />
            <FieldRadio
              key="Unsatisfactory"
              name="questionnaire.recom_status"
              Field={Field}
              value="Unsatisfactory"
              label="Unsatisfactory"
            />
          </FieldGroup>
        ),
        changeVisits: (
          <FieldGroup>
            <FieldRadio
              key="Quarterly"
              name="questionnaire.recom_change_visits"
              Field={Field}
              value="Quarterly"
              label="Quarterly"
            />
            <FieldRadio
              key="Semi-Annual"
              name="questionnaire.recom_change_visits"
              Field={Field}
              value="Semi-Annual"
              label="Semi-Annual"
            />
          </FieldGroup>
        )
      }
    },
    {
      financials: {
        profitabilityTrend: {
          multiline: true
        },
        investorDebtholders: {
          multiline: true
        },
        businessCondition: {
          multiline: true
        },
        becomingFailing: {
          multiline: true
        }
      },
      transactions: {
        expectExplain: {
          multiline: true
        },
        notes: {
          multiline: true
        }
      },
      covenant: {
        nonComplianceDesc: {
          multiline: true
        }
      },
      ownership: {
        badNewsDesc: {
          multiline: true
        },
        badNewsClearedExplain: {
          multiline: true
        }
      }
    }
  );

  return (
    <>
      {items.map((data) => (
        <section key={data.title}>
          <PageSection key={`${data.title}-0`} title={data.title}>
            <AnnualReviewQuestionList items={data.items} bottomIndent={false} />
          </PageSection>
          <Delimiter key={`${data.title}-1`} />
        </section>
      ))}
    </>
  );
};
