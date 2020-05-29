import * as React from 'react';
import { PageSection } from 'components/Page';
import { Layer } from 'components/Layer';
import { Table } from 'components/Table';
import { useLicenseList } from 'modules/licenses/list';
import { AnnualReviewStatusLabel } from 'components/Labels';
import { AnnualReviewActions } from '../AnnualReviewActions';
import { AnnualReviewSummaryTableTitle } from './AnnualReviewSummaryTableTitle';
import { createSalesDataSources, createDepositDataSources } from './dataSource';
import { createColumns } from './columns';
import { useAnualReviewSalesDeposits } from '../../hooks';

export interface AnnualReviewSummaryTablesProps {
  id: number;
}

const getLicense = (licenses, id) => licenses.find((li) => li.id === id);

const getLicenseTitle = (licenses, id) => {
  const license = getLicense(licenses, id);

  return `${license?.name} ${license?.subtype} (${license?.license_number})`;
};

export const AnnualReviewSummaryTables = ({ id }: AnnualReviewSummaryTablesProps) => {
  const [anualReviewSalesDeposits, isPending] = useAnualReviewSalesDeposits({ id });
  const [licenses] = useLicenseList();

  return (
    <PageSection title="Sales & Deposit Summary Tables" face={PageSection.FACE_THIRD} isPending={isPending}>
      {!isPending &&
        anualReviewSalesDeposits.map((item) => (
          <section key={item.id}>
            <PageSection
              title={getLicenseTitle(licenses, item.license_id)}
              title-before={
                <AnnualReviewStatusLabel
                  name={item?.status}
                  created={Date.parse(item?.created_at)}
                  updated={Date.parse(item?.updated_at)}
                />
              }
              face={PageSection.FACE_SECONDARY}
              actions={<AnnualReviewActions editUrl="path/to" />}
            >
              <Layer rounded shadowed>
                <AnnualReviewSummaryTableTitle>Sales Summary</AnnualReviewSummaryTableTitle>
                <Table
                  columns={createColumns(item)}
                  dataSource={createSalesDataSources(item, getLicense(licenses, item.license_id)?.subtype)}
                />
                <AnnualReviewSummaryTableTitle>Deposit Detail</AnnualReviewSummaryTableTitle>
                <Table
                  columns={createColumns(item)}
                  dataSource={createDepositDataSources(item, getLicense(licenses, item.license_id)?.subtype)}
                />
              </Layer>
            </PageSection>
          </section>
        ))}
    </PageSection>
  );
};
