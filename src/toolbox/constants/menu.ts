import {
    ROUTE_DASHBOARD_EMPLOYEE,
    ROUTE_DASHBOARD_USER,
} from "./routes";
import FaceIcon from "@mui/icons-material/Face";
export const menuOptions = [
    {
        name: "Empleados",
        path: ROUTE_DASHBOARD_EMPLOYEE,
        keyPath: "employees",
        Icon: FaceIcon,
    },
    {
        name: "Usuarios",
        path: ROUTE_DASHBOARD_USER,
        keyPath: "users",
        Icon: FaceIcon,
    },

];
