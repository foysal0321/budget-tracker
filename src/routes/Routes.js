import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
//import Dashbord from "../Dashboard/dashbord/Dashbord";
import DashHeader from "../Dashboard/DashHeader/DashHeader";
import DashMain from "../Dashboard/DashMain";
import Incomes from "../Dashboard/incomes/Incomes";
import Inventment from "../Dashboard/Investment/Inventment";
import Myexpense from "../Dashboard/myExpense/Myexpense";
import Saving from "../Dashboard/saving/Saving";
import LogIn from "../log/LogIn";
import SignUp from "../log/SignUp";
import Main from "../lyout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <DashMain />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/dashbord',
                element: <DashHeader />
            },
            {
                path: '/dashbord/myexpense',
                element: <Myexpense />
            },
            {
                path: '/dashbord/income',
                element: <Incomes />
            },
           
            {
                path: '/dashbord/saving',
                element: <Saving />
            },
           
            {
                path: '/dashbord/invensment',
                element: <Inventment />
            },
           
            
        ]
    }
])