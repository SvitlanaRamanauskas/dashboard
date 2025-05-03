import cn from "classnames";
import "./tableAccounts.scss";
import { AccountTableData } from "@/types/account";

type Props = {
  columns: string[];
  data: AccountTableData[];
};

export default function TableAccounts({ columns, data }: Props) {

  return (
    <table className="table table-accounts">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
          <th></th>
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              if (col === "account name/type") {
                return (
                  <td key={col}>
                    {row.accountName} <br />
                    <span>{row.type}</span>
                  </td>
                );
              }

              if (col === "premium") {
                return (
                  <td key={col} className="table-accounts__premium">
                    <div>{row.premium}</div>
                  </td>
                );
              }

              if (col === "lossRatio") {
  
                return (
                  <td key={col} className="table-accounts__lossratio">
                    <div
                      className={cn("table-accounts__lossratio", {
                        "table-accounts__lossratio--red": row[col] >= 50,
                        "table-accounts__lossratio--yellow":
                          row[col] >= 30 && row[col] < 50,
                        "table-accounts__lossratio--green":
                          row[col] < 30,
                      })}
                    >{`${row[col]}$`}</div>
                  </td>
                );
              }

              if (col === "status") {
  
                return (
                  <td key={col} className="table-accounts__status">
                    <div
                      className={cn("table-accounts__status-circle", {
                        "table-accounts__status-circle--blue": row[col] === "Under review",
                        "table-accounts__status-circle--green":
                          row[col] === "Ative",
                      })}
                    ></div>
                    <span>{row.status}</span>
                  </td>
                );
              }
              // eslint-disable-next-line
              return <td key={col}>{(row as any)[col]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
