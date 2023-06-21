import { FC } from "react";
import { IDialogUserMenuProps } from "./DialogUserMenu.type";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import styles from "./DialogUserMenu.module.scss";
import { ExitIcon } from "@constants/icons";
import { ROUTE_LOGIN } from "@constants/routes";
import { authStorage } from "@storage/Auth.storage";

export const DialogUserMenu: FC<IDialogUserMenuProps> = ({ open, switchOpen, type }) => {
	const handleOnCloseMenu = (openMenu: boolean) => () => {
		switchOpen(openMenu);
	};
	const handleSingOut = () => {
		authStorage.clearAuthData();
		window.location.replace(ROUTE_LOGIN);
	};
	const headerItems = [
		{
			title: "Cerrar sesion",
			Icon: <ExitIcon className={styles.Icon} />,
			action: handleSingOut,
		},
	];
	return (
		<>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleOnCloseMenu(false)}
				classes={{
					paper: type == "panel" ? styles.MenuPanelPaper : styles.MenuIntranetPaper,
				}}
			>
				<Box
					sx={{ width: 300 }}
					role="presentation"
					onKeyDown={handleOnCloseMenu(false)}
					className={styles.MenuBox}
				>
					<List classes={{ root: styles.MenuList }}>
						{headerItems.map((item, index) => (
							<Button
								onClick={item.action}
								key={index}
								classes={{ root: styles.MenuButton }}
							>
								<ListItem button component="a">
									{item.Icon}
									<span className={styles.Item}>{item.title}</span>
								</ListItem>
							</Button>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};
