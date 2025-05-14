'use client';

import { useEffect, useState } from 'react';
import './accounts.scss';
import Table from '@/components/Dashboard/TableAccounts/TableAccounts';
import FilterPanel from '../FilterPannel/FilterPanel';
import { AccountTableData } from '@/types/account';

export default function Accounts() {
  const [accTableColumns, setAccTableColumns] = useState([]);
  const [accTableData, setAccTableData] = useState<AccountTableData[]>([]);

  useEffect(() => {
    fetch('/mockData/tableAccounts.json')
      .then((res) => res.json())
      .then((data) => {
        setAccTableColumns(data.accounts.columns);
        setAccTableData(data.accounts.data);
      });
  }, []);

  return (
    <article className="accounts">
      <FilterPanel />

      <Table columns={accTableColumns} data={accTableData} />
    </article>
  );
}
