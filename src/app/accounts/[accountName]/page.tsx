import AccountInfo from '@/components/Account/AccountInfo/AccountInfo';
import Breadcrumbs from '@/components/Account/Breadcrumbs/Breadcrumbs';
import NavBarAcc from '@/components/Account/NavBarAcc/NavBarAcc';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    accountName: string;
  };
};

export default async function AccountName({ params }: Props) {
  const { accountName } = await params;
  const allowedAccounts = ['Maritime Logistics Corp'];
  const decodedName = decodeURIComponent(accountName);

  if (!allowedAccounts.includes(decodedName)) {
    notFound();
  }
  return (
    <div className="container">
      <NavBarAcc />
      <Breadcrumbs accountName={decodedName} />
      <AccountInfo accountName={decodedName} />
    </div>
  );
}
