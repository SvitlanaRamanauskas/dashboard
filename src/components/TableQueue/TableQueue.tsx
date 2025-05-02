import { QueueTableData } from "@/types/queue";
import cn from "classnames";
import "./tableQueue.scss";
import Circle from "../Dashboard/Circle/Circle";
import DotCircle from "../DotCircle/DotCircle";

type Props = {
  columns: string[];
  data: QueueTableData[];
};

export default function TableQueue({ columns, data }: Props) {
  const getLetters = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <table className="table table-queue">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => {
              if (col === "client/line") {
                return (
                  <td key={col}>
                    {row.client} <br />
                    <span>{row.line}</span>
                  </td>
                );
              }
              if (col === "originator") {
                const letters = getLetters(row[col]);
                return (
                  <td key={col} className="table-queue__originator">
                    <Circle abbr={letters} />
                    <div>{row.originator}</div>
                  </td>
                );
              }
              if (col === "status") {
                <td key={col} className="table__status">
                  <div
                    className={cn(
                      {
                        "table__status-circle table__status-circle--blue":
                          row[col] === "New",
                      },
                      {
                        "table__status-circle table__status-circle--yellow":
                          row[col] === "Pending Review",
                      },
                      {
                        "table__status-circle table__status-circle--green":
                          row[col] === "Completed",
                      }
                    )}
                  ></div>
                  <span>{row.status}</span>
                </td>;
              }
              // eslint-disable-next-line
              return <td key={col}>{(row as any)[col]}</td>;
            })}
            <td>
              <DotCircle />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
