import { Header } from "@components/Header/Header";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { createElement } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<>
			<Header />
			<Box display={"flex"}>
				{isDesktop && createElement(Sidebar, {})}
				<div className="e-full-width e-full-height pd-20">
					<Outlet />
				</div>
			</Box>
		</>
	);
};
