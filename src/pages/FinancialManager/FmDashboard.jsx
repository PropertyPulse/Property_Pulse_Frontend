import React, {useEffect, useState} from "react";
import { Card } from "flowbite-react";
import DashboardCard from "../../Components/FinancialManager/DashboardCard";
import Calander from "../../Components/FinancialManager/Calander";
import RecentTransaction from "../../Components/FinancialManager/RecentTransaction";
import IncomeChart from "../../Components/FinancialManager/IncomeChart";
import { faChartBar, faUsers, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const FmDashboard = () => {

  const axiosPrivate = useAxiosPrivate();

  const[income,setIncome] =useState(0);
  const[outcome,setOutcome] =useState(0);


  const fetchData = async () => {
    try {
      const income = await axiosPrivate.get('/api/v1/payments/getTotalIncome');
      const outcome = await axiosPrivate.get('/api/v1/payments/getTotalOutcome');
      setIncome(income.data); // Store response data in state
      setOutcome(outcome.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(income);
  console.log(outcome);

  var balance = income - outcome;
    console.log(balance);

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div className="flex flex-col-1">
      <div className="w-5/7">
        <Card className="max-w-screen m-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10">
            <div>
              <DashboardCard
              icon={faChartBar}
                topic="Total Income"
                number={income}
                link="/fm/receivable-payment"
              />
            </div>
            <div>
              <DashboardCard
              icon={faUsers}
                topic="Total Expenses"
                number={outcome}
                link="/fm/payble-payment"
              />
            </div>
            <div>
              <DashboardCard
              icon={faShoppingCart}
                topic="Balance"
                number={balance}
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
