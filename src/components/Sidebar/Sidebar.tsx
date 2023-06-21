import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { classNames } from "../../toolbox/helpers/classnames";
import { colors } from "@constants/colors";
import { menuOptions } from "@constants/menu";
import styles from "./Sidebar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerHeader, DrawerStyled, classes } from "./Sidebar.style";

export const Sidebar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [optionSelected, setOptionSelected] = useState<string>("home");
	const location = useLocation();
	const navigator = useNavigate();
	const handleDrawerClose = () => {
		setOpen(!open);
	};
	const handleNavigator = (route: string) => {
		if (route != location.pathname) {
			navigator(route);
		}
	};

	useEffect(() => {
		const option = location.pathname.split("/").reverse()[0];
		setOptionSelected(option);
	}, [location]);
	return (
		<DrawerStyled
			variant="permanent"
			open={open}
			classes={{
				paper: classNames({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
				root: classNames({
					[classes.drawerBlock]: !open,
					[classes.drawerBlockOpen]: open,
				}),
			}}
		>
			<DrawerHeader>
				<IconButton
					classes={{
						root: styles.MenuIcon,
					}}
					onClick={handleDrawerClose}
				>
					{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</DrawerHeader>
			<List sx={{ width: "100%" }}>
				{menuOptions.map((option, index) => (
					<ListItem
						key={index}
						disablePadding
						sx={{ display: "block" }}
						selected={option.keyPath == optionSelected}
					>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? "initial" : "center",
								px: 2.5,
								":hover": {
									color: colors["primary"],
									backgroundColor: colors["tertiary"],
								},
							}}
							onClick={() => handleNavigator(option.path)}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 4 : "none",
									justifyContent: "center",
									color: `${colors["white"]}`,
								}}
							>
								{<option.Icon />}
							</ListItemIcon>
							<ListItemText
								primary={option.name}
								sx={{
									display: open ? "initial" : "none",
									color: `${colors["white"]}`,
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
		</DrawerStyled>
	);
};
