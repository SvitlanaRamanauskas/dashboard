import AccountInfo from "@/components/Account/AccountInfo/AccountInfo";
import Breadcrumbs from "@/components/Account/Breadcrumbs/Breadcrumbs";
import NavBarAcc from "@/components/Account/NavBarAcc/NavBarAcc";

type Props = {
  params: {
    accountName: string;
  };
};

export default function Account({ params }: Props) {
  return (
    <div className="container">
      <NavBarAcc />
      <Breadcrumbs />
      <AccountInfo accountName={params.accountName} />
    </div>
  );
}
