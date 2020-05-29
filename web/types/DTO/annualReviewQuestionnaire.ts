/* eslint-disable camelcase */

/**
 public void getRadioButtonsValues() {
      yesNoSelect = new List<SelectOption>();
      yesNoSelect.add(new SelectOption('Yes', 'Yes'));
      yesNoSelect.add(new SelectOption('No', 'No'));
      yesNoNaSelect = new List<SelectOption>();
      yesNoNaSelect.add(new SelectOption('Yes', 'Yes'));
      yesNoNaSelect.add(new SelectOption('No', 'No'));
      yesNoNaSelect.add(new SelectOption('N/A', 'N/A'));
      transProjectedSelect = new List<SelectOption>();
      transProjectedSelect.add(new SelectOption('Higher', 'Higher or '));
      transProjectedSelect.add(new SelectOption('Lower', 'Lower than expected'));
      transExpectVolSelect = new List<SelectOption>();
      transExpectVolSelect.add(new SelectOption('Increase', 'Increase'));
      transExpectVolSelect.add(new SelectOption('Decrease', 'Decrease'));
      transExpectVolSelect.add(new SelectOption('Stable', 'Stable'));
      transExpectVolSelect.add(new SelectOption('Unknown', 'Unknown'));
      siteVisitFreqSelect = new List<SelectOption>();
      siteVisitFreqSelect.add(new SelectOption('Quarterly', 'Quarterly'));
      siteVisitFreqSelect.add(new SelectOption('Semi-Annual', 'Semi-Annual'));
      siteVisitScoresSelect = new List<SelectOption>();
      siteVisitScoresSelect.add(new SelectOption('Improving', 'Improving'));
      siteVisitScoresSelect.add(new SelectOption('Declining', 'Declining'));
      siteVisitScoresSelect.add(new SelectOption('Stable', 'Stable'));
      recomStatusSelect = new List<SelectOption>();
      recomStatusSelect.add(new SelectOption('Satisfactory', 'Satisfactory'));
      recomStatusSelect.add(new SelectOption('Requires Additional Monitoring', 'Requires Additional Monitoring'));
      recomStatusSelect.add(new SelectOption('Unsatisfactory', 'Unsatisfactory'));
  }
 */

export interface AnnualReviewQuestionnaire {
  transactions_vol_projected_exactly: any;
  transactions_vol_projected: any;
  transactions_transfer: boolean;
  transactions_notes: any;
  transactions_match_trans: any;
  transactions_match_deposit: any;
  transactions_expect_explain: any;
  transactions_expect_exactly: any;
  transactions_check: boolean;
  transactions_cash: boolean;
  transactions_atm: boolean;
  transactions_ach: boolean;
  siteVisit_violation_rectified: any;
  siteVisit_shutdown_risk: any;
  siteVisit_scores_acceptable_exactly: any;
  siteVisit_scores_acceptable: any;
  siteVisit_last_date: any;
  siteVisit_freq: any;
  siteVisit_complying_regulations: any;
  recom_status: any;
  recom_recommended: any;
  recom_change_visits: any;
  ownership_provided_forms: any;
  ownership_ofac_tlo_reviewed: any;
  ownership_changes_approved: any;
  ownership_changes: any;
  ownership_bad_news_desc: any;
  ownership_bad_news_cleared_explain: any;
  ownership_bad_news_cleared: any;
  ownership_bad_news: any;
  licensing_name_prior: any;
  licensing_name_changes_mmcc: any;
  licensing_name_changes: any;
  licensing_loc_changes_mmcc: any;
  licensing_loc_changes: any;
  financials_profitability_trend: any;
  financials_period_collected: any;
  financials_investor_debtholders: any;
  financials_deposits_matching: any;
  financials_business_condition: any;
  financials_becoming_failing: any;
  covenant_transparent: any;
  covenant_non_compliance_desc: any;
  covenant_complying: any;
}
