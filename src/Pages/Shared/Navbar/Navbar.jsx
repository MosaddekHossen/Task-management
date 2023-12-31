import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Headroom from "react-headroom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Sign Out
    const handleLogout = () => {
        logOut()
            .then(() => Swal.fire('Oops!', 'LogOut Successful!', 'success'))
            .catch((err) => Swal.fire('Oops!', err.message, 'error'))
    }

    const navLinkMd = <>
        <ul className="menu flex flex-col gap-2 menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-slate-400 text-white">
            <NavLink
                to={'/'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}>
                Home
            </NavLink>

            <NavLink to={'/dashboard'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}                       >
                Dashboard
            </NavLink>

            <NavLink to={'/signUp'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}                      >
                Sign Up
            </NavLink>
        </ul>
    </>

    const navLink = <>
        <ul className="menu menu-horizontal px-1 lg:flex gap-1 hidden">

            <NavLink
                to={'/'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}>
                Home
            </NavLink>

            <NavLink to={'/dashboard'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}                       >
                Dashboard
            </NavLink>

            <NavLink to={'/signUp'}
                className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}                      >
                Sign Up
            </NavLink>
        </ul>
    </>

    // Dark Mode
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            setIsDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleToggle = () => {
        toggleDarkMode();
    };

    return (
        <Headroom className="absolute top-0 right-0 left-0">
            <div className="bg-[#8e8e94c3]">
                <div className="max-w-7xl mx-auto">
                    <div className="navbar p-0 px-4 flex justify-between">
                        <div className="lg:navbar-start lg:w-auto w-3/2">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <div className="avatar hidden md:block mr-1">
                                        <div className="md:w-12 w-10 rounded-full">
                                            <Link to='/'>
                                                <img src="https://img.freepik.com/free-vector/creative-project-management-concept-flat-style_23-2147792531.jpg?w=740&t=st=1703093078~exp=1703093678~hmac=c7e39163839241961e7c30d687158c1ea395de4e8d32ba5f2d43e8b80cab5c43" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <label tabIndex={0} className="btn-ghost lg:hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                        </label>
                                        {navLinkMd}
                                    </div>
                                </div>
                                <Link to='/'><button className="normal-case ml-2 text-[24px] md:text-3xl font-bold text-white">TaskManagement</button></Link>
                            </div>
                        </div>
                        <div>
                            {navLink}
                            <div onClick={() => setIsOpen(!isOpen)}>
                                {
                                    user ? <>
                                        <label tabIndex={0} className="btn btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <label>
                                                    <div>
                                                        <img className="w-10 rounded-full cursor-pointer" src={user?.photoURL} />
                                                    </div>
                                                </label>
                                            </div>
                                        </label>
                                    </>
                                        : <NavLink to={'/login'}
                                            className={({ isPending, isActive }) => isPending ? "bg-[#92a1eb] hover:bg-[#92a1eb] text-white btn text-[14px] font-semibold" : isActive ? "btn bg-[#fff] text-[14px] font-semibold border-none" : "btn bg-[#616d7b81] border-none hover:bg-[#2d3434] text-white text-[14px] font-semibold"}>
                                            Sign In
                                        </NavLink>
                                }
                            </div>
                            {user && isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] p-2 md:p-2 lg:w-[10vw] mr-2 md:w-[20vw] bg-[#514e9ab8] right-0 top-20'>
                                    <div className='flex flex-col py-2 justify-center items-center'>
                                        <h3 className="font-bold text-center text-white disabled">{user?.displayName}</h3>
                                        {/* Dark Mode button */}
                                        <input
                                            type="checkbox"
                                            className="toggle mt-2"
                                            checked={isDarkMode}
                                            onChange={handleToggle}
                                        />
                                        <button onClick={handleLogout} className="lg:px-5 px-3 mt-2 hover:bg-gray-500 text-white lg:mt-3 rounded-lg text-[14px] font-bold py-3  bg-violet-400">Login Out</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Headroom>
    );
};

export default Header;
