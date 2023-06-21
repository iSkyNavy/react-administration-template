import { ROUTE_LOGIN } from "@constants/routes";
import { authStorage } from "@storage/Auth.storage";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router";

interface IPrivateRouteProps {
	children: ReactNode;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
	const authCookie = authStorage.getAuthData();
	return authCookie ? children : <Navigate to={ROUTE_LOGIN} />;
};
