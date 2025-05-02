import NavBarDash from "@/components/Dashboard/NavBarDash/Slider";
import Queue from "@/components/Dashboard/Queue/Queue";

export default function Home() {
  return (
    <div className="container">
      <NavBarDash />
      <Queue />
    </div>
  );
}
