import { FormFieldModel, FormModel } from 'utils/form/index';

export const annualReviewQuestionnaireFormFields = {
  transactions_vol_projected_exactly: new FormFieldModel(''),
  transactions_vol_projected: new FormFieldModel(''),
  transactions_transfer: new FormFieldModel(false),
  transactions_notes: new FormFieldModel(''),
  transactions_match_trans: new FormFieldModel(''),
  transactions_match_deposit: new FormFieldModel(''),
  transactions_expect_explain: new FormFieldModel(''),
  transactions_expect_exactly: new FormFieldModel('N/A'),
  transactions_check: new FormFieldModel(false),
  transactions_cash: new FormFieldModel(false),
  transactions_atm: new FormFieldModel(false),
  transactions_ach: new FormFieldModel(false),
  siteVisit_violation_rectified: new FormFieldModel(''),
  siteVisit_shutdown_risk: new FormFieldModel(''),
  siteVisit_scores_acceptable_exactly: new FormFieldModel(''),
  siteVisit_scores_acceptable: new FormFieldModel(''),
  siteVisit_last_date: new FormFieldModel(''),
  siteVisit_freq: new FormFieldModel(''),
  siteVisit_complying_regulations: new FormFieldModel(''),
  recom_status: new FormFieldModel(''),
  recom_recommended: new FormFieldModel(''),
  recom_change_visits: new FormFieldModel(''),
  ownership_provided_forms: new FormFieldModel(''),
  ownership_ofac_tlo_reviewed: new FormFieldModel(''),
  ownership_changes_approved: new FormFieldModel(''),
  ownership_changes: new FormFieldModel(''),
  ownership_bad_news_desc: new FormFieldModel(''),
  ownership_bad_news_cleared_explain: new FormFieldModel(''),
  ownership_bad_news_cleared: new FormFieldModel(''),
  ownership_bad_news: new FormFieldModel(''),
  licensing_name_prior: new FormFieldModel(''),
  licensing_name_changes_mmcc: new FormFieldModel(''),
  licensing_name_changes: new FormFieldModel(''),
  licensing_loc_changes_mmcc: new FormFieldModel(''),
  licensing_loc_changes: new FormFieldModel(''),
  financials_profitability_trend: new FormFieldModel(''),
  financials_period_collected: new FormFieldModel(''),
  financials_investor_debtholders: new FormFieldModel(''),
  financials_deposits_matching: new FormFieldModel(''),
  financials_business_condition: new FormFieldModel(''),
  financials_becoming_failing: new FormFieldModel(''),
  covenant_transparent: new FormFieldModel(''),
  covenant_non_compliance_desc: new FormFieldModel(''),
  covenant_complying: new FormFieldModel('')
};

const AnnualReviewQuestionnaireFormModel = FormModel.Factory(annualReviewQuestionnaireFormFields);

export const annualReviewFormFields = {
  company_id: new FormFieldModel(0),
  completed_date: new FormFieldModel(''),
  created_at: new FormFieldModel(''),
  deleted_at: new FormFieldModel(''),
  financials_end_date: new FormFieldModel(''),
  id: new FormFieldModel(0),
  last_ar_date: new FormFieldModel(''),
  questionnaire: new AnnualReviewQuestionnaireFormModel(),
  sf_external_id: new FormFieldModel(''),
  status: new FormFieldModel(''),
  updated_at: new FormFieldModel('')
};

const AnnualReviewFormModel = FormModel.Factory(annualReviewFormFields);

export { AnnualReviewFormModel };
