import {createBrowserRouter} from "react-router";
import LayOuts from "@/layout";
import Login from "@/views/login/login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOuts />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]);
export default router;
