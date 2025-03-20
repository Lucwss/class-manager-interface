import {createBrowserRouter, Navigate} from "react-router-dom";
import {AppLayout} from "./pages/_layout/app.tsx";
import {Lecturers} from "./pages/app/lecturers";
import {Students} from "./pages/app/students";
import {Schedules} from "./pages/app/schedules";
import {AuthLayout} from "./pages/_layout/auth.tsx";
import {SignIn} from "./pages/auth/signIn";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/lecturers",
                element: <Lecturers/>
            },
            {
                path: "/students",
                element: <Students/>
            },
            {
                path: "/schedules",
                element: <Schedules/>
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout/>,
        children: [
            {
                path: "/sign-in",
                element: <SignIn/>
            },
            {
                path: "/sign-up",
                element: <div>Sign up</div>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/sign-in" replace />,
    },
])