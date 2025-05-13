import cn from "classnames";
import "./tableAccounts.scss";
import DotCircle from "@/components/DotCircle/DotCircle";
import { AccountTableData, ColumnKey } from "@/types/account";
import { useRouter } from "next/navigation";

type Props = {
  columns: ColumnKey[];
  data: AccountTableData[];
};

export default function TableAccounts({ columns, data }: Props) {
  const router = useRouter();

  const handleRowClick = (accountName: string) => {
    const encoded = encodeURIComponent(accountName);

    router.push(`/accounts/${encoded}`);
  }

  const renderCellContent = (col: ColumnKey, row: AccountTableData) => {
    switch (col) {
      case "account name/type":
        return (
          <>
            {row.accountName}
            <br />
            <span>{row.type}</span>
          </>
        );

      case "renewal date":
        return <div>{row.renewalDate}</div>;

      case "rated premium":
        return <div className="table-accounts__rated-premium-text">{row.ratedPremium}</div>;

      case "loss ratio":
        return (
          <div
            className={cn("table-accounts__ellipse", {
              "table-accounts__ellipse--red": row.lossRatio >= 50,
              "table-accounts__ellipse--yellow":
                row.lossRatio >= 35 && row.lossRatio < 50,
              "table-accounts__ellipse--green": row.lossRatio < 35,
            })}
          >
            {`${row.lossRatio}%`}
          </div>
        );

      case "appetite":
        return (
          <div className="table-accounts__ellipse table-accounts__ellipse--appetite">
            {row.appetite}
          </div>
        );

      case "status":
        return (
          <>
            <div
              className={cn("status-circle", {
                "status-circle--blue": row.status === "Under review",
                "status-circle--green": row.status === "Active",
              })}
            />
            <span>{row.status}</span>
          </>
        );

      case "triage":
        return <div className="table-accounts__triage">{row.triage}</div>;

      case "winnability":
        return (
          <div className="table-accounts__winnability">
            {
              <div className="table-accounts__winnability-circles">
                {[...Array(4)].map((_, index) => (
                  <span
                    key={index}
                    className="status-circle status-circle--blue"
                  />
                ))}
              </div>
            }

            <span className="table-accounts__winnability-text">{row.winnability}</span>
          </div>
        );

      default:
        // eslint-disable-next-line
        return (row as any)[col];
    }
  };

  const getCellClassName = (col: ColumnKey): string | undefined => {
    switch (col) {
      case "premium":
        return "table-accounts__premium";
      case "renewal date":
        return "table-accounts__renewalDate";
      case "rated premium":
        return "table-accounts__ratedPremium";
      case "loss ratio":
        return "table-accounts__lossratio-cell";
      case "status":
        return "table-accounts__status";
      default:
        return undefined;
    }
  };

  return (
    <table className="table table-accounts">
      <thead>
        <tr>
          {columns.map((col) => (
            <th className="head-name" key={col}>{col}</th>
          ))}
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <tr key={row.accountName} onClick={() => handleRowClick(row.accountName)}>
            {columns.map((col) => (
              <td key={col} className={getCellClassName(col)}>
                {renderCellContent(col, row)}
              </td>
            ))}
            <td>
              <DotCircle />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
