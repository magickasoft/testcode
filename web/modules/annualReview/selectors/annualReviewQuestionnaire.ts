import { AnnualReviewQuestionnaire } from 'types/DTO/annualReviewQuestionnaire';
import { createSelector } from 'reselect';
import { dateFormat } from 'utils/moment';

export const annualReviewQuestionarieData = (data: string): AnnualReviewQuestionnaire => data && JSON.parse(data);
export const annualReviewQuestionarieString = (data: AnnualReviewQuestionnaire): string => data && JSON.stringify(data);

interface AnnualReviewQuestionnaireMappingProps {
  financials: {
    investorDebtholders: any;
    depositsMatching: any;
    becomingFailing: any;
    profitabilityTrend: any;
    periodCollected: any;
    businessCondition: any;
  };

  transactions: {
    notes: any;
    matchTrans: any;
    expectExplain: any;
    expectExactly: any;
    volProjected: any;
    type: any;
  };

  covenant: {
    transparent: any;
    nonComplianceDesc: any;
    complying: any;
  };

  siteVisit: {
    shutdownRisk: any;
    scoresAcceptable: any;
    violationRectified: any;
    complyingRegulations: any;
    lastDate: any;
    freq: any;
  };

  ownership: {
    badNewsClearedExplain: any;
    badNewsCleared: any;
    badNewsDesc: any;
    badNews: any;
    ofacTloReviewed: any;
    changesApproved: any;
    providedForms: any;
    changes: any;
  };

  recom: {
    changeVisits: any;
    status: any;
    recommended: any;
  };
}

export const annualReviewQuestionnaireMapping = (
  data: AnnualReviewQuestionnaireMappingProps,
  params: Record<string, any> = {}
) => {
  const { financials, transactions, covenant, siteVisit, ownership, recom } = data;

  return [
    {
      title: 'Financials',
      items: [
        /*
         financials_profitability_trend: any;
         financials_period_collected: any;
         financials_investor_debtholders: any;
         financials_deposits_matching: any;
         financials_business_condition: any;
         financials_becoming_failing: any;
         */
        ['Period Collected:', financials.periodCollected, params?.financials?.periodCollected],
        [
          'Current financial condition of business:',
          financials.businessCondition,
          params?.financials?.businessCondition
        ],
        ['Profitability trend:', financials.profitabilityTrend, params?.financials?.profitabilityTrend],
        [
          'If condition is unstable, likelihood of company becoming solvent or failing:',
          financials.becomingFailing,
          params?.financials?.becomingFailing
        ],
        ['Is deposit activity in line with sales?', financials.depositsMatching, params?.financials?.depositsMatching],
        ['Investors/Debtholders:', financials.investorDebtholders, params?.financials?.investorDebtholders]
      ]
    },
    {
      title: 'Transactions',
      items: [
        /**
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
         */
        ['Types of transactions performed:', transactions.type, params?.transactions?.type],
        ['Volumes as anticipated/projected?', transactions.volProjected, params?.transactions?.volProjected],
        ['Expected volume changes:', transactions.expectExactly, params?.transactions?.expectExactly],
        ['If unknown, explain:', transactions.expectExplain, params?.transactions?.expectExplain],
        ['Transaction activity matches sales?', transactions.matchTrans, params?.transactions?.matchTrans],
        ['Transaction Notes:', transactions.notes, params?.transactions?.notes]
      ]
    },
    {
      title: 'Covenants/Agreements',
      items: [
        /**
         covenant_transparent: any;
         covenant_non_compliance_desc: any;
         covenant_complying: any;
         */
        [
          'Is the company complying with bank covenants/account agreements?',
          covenant.complying,
          params?.covenant?.complying
        ],
        ['Describe any areas of non-compliance:', covenant.nonComplianceDesc, params?.covenant?.nonComplianceDesc],
        ['Is the company transparent about its operations?', covenant.transparent, params?.covenant?.transparent]
      ]
    },
    {
      title: 'Site Visits',
      items: [
        /**
         siteVisit_violation_rectified: any;
         siteVisit_shutdown_risk: any;
         siteVisit_scores_acceptable_exactly: any;
         siteVisit_scores_acceptable: any;
         siteVisit_last_date: any;
         siteVisit_freq: any;
         siteVisit_complying_regulations: any;
         */
        ['Frequency:', siteVisit.freq, params?.siteVisit?.freq],
        ['Date of last visit:', siteVisit.lastDate, params?.siteVisit?.lastDate],
        [
          'Is company complying with state and local cannabis regulations verified by bank?',
          siteVisit.complyingRegulations,
          params?.siteVisit?.complyingRegulations
        ],
        ['If violation found, was it rectified?', siteVisit.violationRectified, params?.siteVisit?.violationRectified],
        ['Company’s audit scores acceptable?', siteVisit.scoresAcceptable, params?.siteVisit?.scoresAcceptable],
        [
          'Based on site visits, is company at risk of being shut down?',
          siteVisit.shutdownRisk,
          params?.siteVisit?.shutdownRisk
        ]
      ]
    },
    {
      title: 'Ownership & Management',
      items: [
        /**
         ownership_provided_forms: any;
         ownership_ofac_tlo_reviewed: any;
         ownership_changes_approved: any;
         ownership_changes: any;
         ownership_bad_news_desc: any;
         ownership_bad_news_cleared_explain: any;
         ownership_bad_news_cleared: any;
         ownership_bad_news: any;
         */
        [
          'Has ownership of 5% or more of the company changed over the last year?',
          ownership.changes,
          params?.ownership?.changes
        ],
        [
          'Company provided Beneficial Ownership Certification?',
          ownership.providedForms,
          params?.ownership?.providedForms
        ],
        [
          'Have 5% or more ownership changes been approved by the commission?',
          ownership.changesApproved,
          params?.ownership?.changesApproved
        ],
        [
          'Have OFAC/TLO checks been reviewed for new owners with >=5% interest?',
          ownership.ofacTloReviewed,
          params?.ownership?.ofacTloReviewed
        ],
        [
          'Have there been any negative news posts about the company or its owners?',
          ownership.badNews,
          params?.ownership?.badNews
        ],
        ['If yes, please provide details:', ownership.badNewsDesc, params?.ownership?.badNewsDesc],
        [
          'Negative news alerts cleared by BSA/Compliance?',
          ownership.badNewsCleared,
          params?.ownership?.badNewsCleared
        ],
        ['If no, explain status:', ownership.badNewsClearedExplain, params?.ownership?.badNewsClearedExplain]
      ]
    },
    {
      title: 'Recommendations',
      items: [
        /**
         recom_status: any;
         recom_recommended: any;
         recom_change_visits: any;
         */
        [
          // eslint-disable-next-line max-len
          'Based on the above information, do you recommend that the bank continue to offer this customer banking services?',
          recom.recommended,
          params?.recom?.recommended
        ],
        [
          'What status do you believe the customer has operated over the last year?',
          recom.status,
          params?.recom?.status
        ],
        ['Recommended Site Visit Schedule:', recom.changeVisits, params?.recom?.changeVisits]
      ]
    }
  ];
};

export const annualReviewQuestionnaireQuestions = (data: AnnualReviewQuestionnaire) =>
  annualReviewQuestionnaireMapping({
    financials: {
      profitabilityTrend: data.financials_profitability_trend,
      periodCollected: data.financials_period_collected,
      investorDebtholders: data.financials_investor_debtholders,
      depositsMatching: data.financials_deposits_matching,
      businessCondition: data.financials_business_condition,
      becomingFailing: data.financials_becoming_failing
    },
    transactions: {
      type: [
        data.transactions_cash && 'Cash',
        data.transactions_atm && 'ATM',
        data.transactions_ach && 'ACH',
        data.transactions_check && 'Check Deposit'
      ]
        .filter(Boolean)
        .join(', '),
      volProjected: data.transactions_vol_projected,
      expectExactly: data.transactions_expect_exactly,
      expectExplain: data.transactions_expect_explain,
      matchTrans: data.transactions_match_trans,
      notes: data.transactions_notes
    },
    covenant: {
      complying: data.covenant_complying,
      nonComplianceDesc: data.covenant_non_compliance_desc,
      transparent: data.covenant_transparent
    },
    siteVisit: {
      freq: data.siteVisit_freq,
      lastDate: dateFormat(data.siteVisit_last_date),
      complyingRegulations: data.siteVisit_complying_regulations,
      violationRectified: data.siteVisit_violation_rectified,
      scoresAcceptable: data.siteVisit_scores_acceptable,
      shutdownRisk: data.siteVisit_scores_acceptable
    },
    ownership: {
      changes: data.ownership_changes,
      providedForms: data.ownership_provided_forms,
      changesApproved: data.ownership_changes_approved,
      ofacTloReviewed: data.ownership_ofac_tlo_reviewed,
      badNews: data.ownership_bad_news,
      badNewsDesc: data.ownership_bad_news_desc,
      badNewsCleared: data.ownership_bad_news_cleared,
      badNewsClearedExplain: data.ownership_bad_news_cleared_explain
    },
    recom: {
      recommended: data.recom_recommended,
      status: data.recom_status,
      changeVisits: data.recom_change_visits
    }
  });

export const annualReviewQuestionarieItems = createSelector([annualReviewQuestionarieData], (data) => {
  if (!data) {
    return [];
  }

  return annualReviewQuestionnaireQuestions(data);
});
