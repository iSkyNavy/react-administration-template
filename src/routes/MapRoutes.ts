import {
    ROUTE_DASHBOARD_HOME,
    ROUTE_DASHBOARD_USER,
    ROUTE_LOGIN,
} from "@constants/routes";
import { INavRouteProps } from "@interfaces/NavRoutes.interface";
import HomeView from "@views/Dashboard/Home/Home.view";
import UserView from "@views/Dashboard/User/User.view";
import LoginView from "@views/Login/Login.view";

export const publicRoutes: INavRouteProps[] = [
    {
        name: "login",
        path: ROUTE_LOGIN,
        Component: LoginView,
    },
];

export const privateRoutes = [
    {
        name: "home",
        path: ROUTE_DASHBOARD_HOME,
        Component: HomeView,
    },
    {
        name: "user",
        path: ROUTE_DASHBOARD_USER,
        Component: UserView,
    },
];

export const navRoutes: INavRouteProps[] = [
    ...publicRoutes,
    ...privateRoutes,
];
