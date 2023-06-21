import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./MapRoutes";
import { Layout } from "@components/Layout/Layout";
import { ROUTE_DASHBOARD } from "@constants/routes";
import { PrivateRoute } from "./PrivateRoute";

const RouteProvider = () => {
	const modulePublic = publicRoutes.map(({ name, path, Component }, index) => (
		<Route path={path} key={`${index}-${name.split(" ").join("-")}`} element={<Component />} />
	));

	const modulePrivate = privateRoutes.map(({ name, path, Component }, index) => (
		<Route path={path} key={`${index}-${name.split(" ").join("-")}`} element={<Component />} />
	));

	return (
		<Routes>
			{modulePublic}
			<Route
				path={ROUTE_DASHBOARD}
				element={
					<PrivateRoute>
						<Layout />
					</PrivateRoute>
				}
			>
				{modulePrivate}
			</Route>
		</Routes>
	);
};

export default RouteProvider;
