import React from "react";
import { Card } from "flowbite-react";
import DashboardCard from "../../Components/TopManager/DashboardCard";
import Calander from "../../Components/FinancialManager/Calander";
import { faChartBar, faUsers, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TmChart from "./TmChart";
import TopPeformance from "../../Components/TopManager/TopPeformance";


const TmDashboard = () => {
  // const labels = ['2023-01', '2023-02', '2023-03', /* ... */];
  // const inflows = [2000, 2500, 2200, /* ... */];
  // const outflows = [1500, 1800, 2000, /* ... */];

  return (
    <div className="flex flex-col-1">
      <div className="w-5/7">
        <Card className="max-w-screen m-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10">
            <div>
              <DashboardCard
              icon={faChartBar}
                topic="Property Request"
                number="10"
                link="/tm/new-property"
              />
            </div>
            <div>
              <DashboardCard
              icon={faUsers}
                topic="Valualtion Report"
                number="10"
                link="/tm/valuation-reports"
              />
            </div>
            <div>
              <DashboardCard
              icon={faShoppingCart}
                topic="Complain"
                number="10"
                link="/tm/complain"
              />
            </div>
          </div>
          </Card>
          <Card className="max-w-screen m-4 mt-12">
          <div>
            <TmChart />
          </div>
          </Card>
        
      </div>
      <div className="w-2/7">
        <div>
          <Calander />
        </div>
        <div>
          <TopPeformance />
        </div>
      </div>
    </div>
  );
};
export default TmDashboard;
