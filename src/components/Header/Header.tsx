import { Container, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.scss";
import { UserMenu } from "./UserMenu/UserMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "@components/Menu/Menu";
import { HeaderBase } from "@components/HeaderBase/HeaderBase";
import { ROUTE_DASHBOARD_HOME } from "@constants/routes";
import { StyledEngineProvider } from "@mui/material/styles";

export const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [optionSelected, setOptionSelected] = useState<string>();
	const navigator = useNavigate();
	const location = useLocation();
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};
	useEffect(() => {
		const option = location.pathname.split("/").reverse()[0];
		setOptionSelected(option);
	}, [location]);
	return (
		<StyledEngineProvider injectFirst>
			<HeaderBase>
				<Toolbar
					className="e-max-width"
					classes={{
						root: styles.Toolbar,
					}}
				>
					{!isDesktop ? (
						<>
							<h2
								className={styles.Title}
								onClick={() => navigator(ROUTE_DASHBOARD_HOME)}
							>
								Panel de administración
							</h2>
							<IconButton
								size="large"
								edge="start"
								aria-label="menu"
								sx={{
									width: "28px",
									height: "28px",
									color: "inherit",
								}}
								onClick={handleOpenMenu}
							>
								{!openMenu ? (
									<MenuIcon
										sx={{
											width: 28,
											height: 28,
										}}
									/>
								) : (
									<CloseIcon />
								)}
							</IconButton>
						</>
					) : (
						<Container
							component={"div"}
							sx={{
								display: "flex",
								margin: 0,
							}}
							className={styles.MenuContainer}
						>
							<h2
								className={styles.Title}
								onClick={() => navigator(ROUTE_DASHBOARD_HOME)}
							>
								Panel de administración
							</h2>
							<UserMenu
								className={styles.UserMenu}
								requiredArrawIcon={false}
								data={"xd"}
							/>
						</Container>
					)}
				</Toolbar>
				<Menu
					handleOpenMenu={handleOpenMenu}
					openMenu={openMenu}
					optionSelected={optionSelected}
				/>
			</HeaderBase>
		</StyledEngineProvider>
	);
};
