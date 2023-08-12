import React from "react";
import { Card } from "flowbite-react";
import DashboardCard from "../../Components/FinancialManager/DashboardCard";
import Calander from "../../Components/FinancialManager/Calander";
import RecentTransaction from "../../Components/FinancialManager/RecentTransaction";
import IncomeChart from "../../Components/FinancialManager/IncomeChart";
import { faChartBar, faUsers, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const FmDashboard = () => {
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
                topic="Total In"
                number="10"
                link="/fm/receivable-payment"
              />
            </div>
            <div>
              <DashboardCard
              icon={faUsers}
                topic="Payble Out"
                number="10"
                link="/fm/payble-payment"
              />
            </div>
            <div>
              <DashboardCard
              icon={faShoppingCart}
                topic="Balance"
                number="10"
                link="fm/transaction-history"
              />
            </div>
          </div>
          </Card>
          <Card className="max-w-screen m-4 mt-12">
          <div>
            <IncomeChart />
          </div>
          </Card>
        
      </div>
      <div className="w-2/7">
        <div>
          <Calander />
        </div>
        <div>
          <RecentTransaction />
        </div>
      </div>
    </div>
  );
};
export default FmDashboard;
