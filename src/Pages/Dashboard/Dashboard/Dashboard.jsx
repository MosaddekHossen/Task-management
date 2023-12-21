import { FaClipboard, FaHome, FaRegQuestionCircle, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {

    return (
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto">
            {/* Dashboard side bar */}
            <div className="md:w-4/12 lg:w-80 w-full pb-10 md:pb-0 max-h-full md:min-h-screen bg-indigo-300">
                <ul className="menu space-y-4 mt-5 grid justify-center">

                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'profile'}><FaUser />Profile</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard/teacherRequest'}><FaRegQuestionCircle />Teacher Request</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard/adminAllClasses'}><FaClipboard />All Classes</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/dashboard/users'}><SiGoogleclassroom />Users</NavLink>

                    {/* Shared nav link */}
                    <div className="divider divider-success">Back to ...</div>
                    <NavLink className={({ isActive }) => isActive ? "btn btn-primary text-[16px] font-semibold" : "btn btn-info text-[16px] font-semibold"}
                        to={'/'}><FaHome></FaHome>Home</NavLink>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="md:w-8/12 flex-1 p-5 md:pl-10 md:py-10 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;