import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
import {Link} from "react-router-dom";
import AdminPieChart from "./AdminPieChart";
import AdminLineChart from "./AdminLineChart";

const SystemAdminDashboard = () => {
    return (
        <div className='row-auto h-screen bg-background-blue'>

            <div className='w-full'>
                <NavbarWithoutSidebar name="Surani Sooriyaarachchi" userRole="System Admin" />
            </div>

            <div className='row'>

                <div className="row flex items-center justify-center px-14 pt-24">
                    <div className='card cursor-pointer hover:bg-selected bg-white'>
                        <Link to="./add-top-managers">
                            <h1 className='title font-semibold text-3xl'>Add Internal Users</h1>
                        </Link>
                    </div>
                    <div className='card cursor-pointer hover:bg-selected bg-white'>
                        <Link to="./add-external-users">
                            <h1 className='title font-semibold text-3xl'>Add External Users</h1>
                        </Link>
                    </div>
                    <div className='card cursor-pointer hover:bg-selected bg-white'>
                        <Link to="./view-user-profiles">
                            <h1 className='title font-semibold text-3xl'>View User Profiles</h1>
                        </Link>
                    </div>
                </div>

                <div className='row w-full flex py-16 px-28 space-x-16'>
                    <section className='w-2/5 px-2 card h-auto bg-white'>
                        <h2 className='sub-title text-center'>User Distribution</h2>
                        <AdminPieChart />
                    </section>
                    {/*<section className='w-3/5 card h-auto bg-white'>*/}
                    {/*    <h2 className='sub-title text-center'>Profit Analysis</h2>*/}
                    {/*    <AdminLineChart />*/}
                    {/*</section>*/}
                </div>

            </div>
        </div>
    )
}

export default SystemAdminDashboard;