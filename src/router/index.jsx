import Dashboard from "../pages/dashboard/index.jsx";
import Peoples from "../pages/warga/index.jsx";

export const routes = [
    {
        path: '',
        element: <Dashboard/>
    }, 
    {
        path: '/warga',
        element: <Peoples />
    }, 
]