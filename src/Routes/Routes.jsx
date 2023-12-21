import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home.";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Task from "../Pages/Task/Task";
import Private from "../Components/Private/Private";
import IntroDashboard from "../Pages/Dashboard/IntroDashboard/IntroDashboard";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile/Profile";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tasks",
                element: <Task />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/logIn",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Private><Dashboard /></Private>,
        children: [
            {
                path: "/dashboard",
                element: <IntroDashboard />
            },
            {
                path: "profile",
                element: <Profile />
            }
        ]
    }
])

export default Routes;
