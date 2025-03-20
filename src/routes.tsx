import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "./pages/_layout/app.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>
    }
])