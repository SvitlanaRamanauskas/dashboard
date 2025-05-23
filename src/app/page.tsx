import NavBarDash from '@/components/Dashboard/Slider/Slider';
import Queue from '@/components/Dashboard/Queue/Queue';
import Accounts from '@/components/Dashboard/Accounts/Accounts';
import Goals from '@/components/Dashboard/Goals/Goals';
import Actions from '@/components/Dashboard/Actions/Actions';
import Intelligence from '@/components/Dashboard/Intelligence/Intelligence';
import { NoAdaptation } from '@/components/NoAdaptation/NoAdaptation';

export default function Home() {
  return (
    <div className="container">
      <NavBarDash />

      <div className="container__no-adaptation">
        <NoAdaptation />
      </div>

      <div className="dashboard">
        <div className="dashboard__queue">
          <Queue />
        </div>

        <div className="dashboard__goals">
          <Goals />
        </div>

        <div className="dashboard__actions">
          <Actions />
        </div>

        <div className="dashboard__intelligence">
          <Intelligence />
        </div>

        <div className="dashboard__accounts">
          <Accounts />
        </div>
      </div>
    </div>
  );
}
