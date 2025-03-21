import {createBrowserRouter, Navigate} from "react-router-dom";
import {AppLayout} from "./pages/_layout/app.tsx";
import {Lecturers} from "./pages/app/lecturers";
import {Students} from "./pages/app/students";
import {Schedules} from "./pages/app/schedules";
import {AuthLayout} from "./pages/_layout/auth.tsx";
import {SignIn} from "./pages/auth/signIn";
import {SignUp} from "./pages/auth/signUp";


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
            },
            {
                path: "/schedules/add",
                element: <div>Formulario criar nova aula privada</div>
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
                element: <SignUp/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/sign-in" replace />,
    },
])