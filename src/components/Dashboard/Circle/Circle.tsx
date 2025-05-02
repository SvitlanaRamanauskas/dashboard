import "./circle.scss";

type Props = {
  abbr: string;
};

export default function Circle({ abbr }: Props) {
  return (
    <div className="circle">
      <p className="circle__text">{abbr}</p>
    </div>
  );
}
