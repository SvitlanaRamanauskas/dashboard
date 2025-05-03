import { QueueTableData } from "@/types/queue";
import cn from "classnames";
import "./tableQueue.scss";
import Circle from "../Circle/Circle";
import DotCircle from "../../DotCircle/DotCircle";

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
          <th></th>
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
                    <Circle abbr={letters} diametr="small" />
                    <div>{row.originator}</div>
                  </td>
                );
              }
              if (col === "status") {
                console.log(row[col]);
                return (
                  <td key={col} className="table-queue__status">
                    <div
                      className={cn("table-queue__status-circle", {
                        "table-queue__status-circle--blue": row[col] === "New",
                        "table-queue__status-circle--yellow":
                          row[col] === "Pending Review",
                        "table-queue__status-circle--green":
                          row[col] === "Completed",
                      })}
                    ></div>
                    <span>{row.status}</span>
                  </td>
                );
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
