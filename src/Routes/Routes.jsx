import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home.";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Task from "../Pages/Task/Task";
import Private from "../Components/Private/Private";

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
                element: <Private><Task /></Private>
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
    }
])

export default Routes;
