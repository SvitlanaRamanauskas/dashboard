import "./circle.scss";
import cn from "classnames";

type Props = {
  abbr: string;
  diametr?: string;
};

export default function Circle({ abbr, diametr }: Props) {
  return (
    <div
      className={cn("circle", {
        "circle circle--small": diametr === "small",
      })}
    >
      <p className={cn("circle__text", {
        "circle__text circle__text--small": diametr === "small",
      })}>{abbr}</p>
    </div>
  );
}
