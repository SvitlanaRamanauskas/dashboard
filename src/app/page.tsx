import NavBarDash from "@/components/Dashboard/Slider/Slider";
import Queue from "@/components/Dashboard/Queue/Queue";
import Accounts from "@/components/Dashboard/Accounts/Accounts";
import Goals from "@/components/Dashboard/Goals/Goals";

export default function Home() {
  return (
    <div className="container">
      <NavBarDash />

      <div className="dashboard">
        <div className="dashboard__queue">
          <Queue />
        </div>

        <div className="dashboard__goals">
         <Goals />
        </div>

        <div className="dashboard__actions">
          
        </div>
        
        <div className="dashboard__intelligence">
          
        </div>

        <div className="dashboard__accounts">
          <Accounts />
        </div>
    
      </div>
    </div>
  );
}
