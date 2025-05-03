import NavBarDash from "@/components/Dashboard/Slider/Slider";
import Queue from "@/components/Dashboard/Queue/Queue";

export default function Home() {
  return (
    <div className="container">
      <NavBarDash />

      <div className="dashboard">
        <div className="dashboard__queue">
          <Queue />
        </div>

        <div className="dashboard__goals">

        </div>

        <div className="dashboard__actions">
          
        </div>
        
        <div className="dashboard__intelligence">
          
        </div>

        <div className="dashboard__accounts">

        </div>
    
      </div>
    </div>
  );
}
