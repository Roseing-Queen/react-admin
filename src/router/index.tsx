import {createBrowserRouter} from "react-router";
import layout from "@/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: layout(),
    }
]);
export default router;
