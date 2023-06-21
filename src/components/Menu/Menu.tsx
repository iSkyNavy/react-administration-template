import { UserMenu } from "@components/Header/UserMenu/UserMenu";
import { ExitIcon } from "@constants/icons";
import { Box, Button, Drawer, List, ListItem } from "@mui/material";
import { FC } from "react";
import styles from "./Menu.module.scss";
import { menuOptions } from "@constants/menu";
import { useNavigate } from "react-router-dom";

interface IMenuProps {
	openMenu: any;
	handleOpenMenu: any;
	optionSelected: any;
}

export const Menu: FC<IMenuProps> = ({ handleOpenMenu, openMenu, optionSelected }) => {
	const navigator = useNavigate();
	const handleNavigator = (route: string) => {
		if (route != location.pathname) {
			navigator(route);
		}
	};
	return (
		<Drawer
			variant="temporary"
			anchor="left"
			open={openMenu}
			onClose={handleOpenMenu}
			BackdropProps={{ style: { opacity: 0 } }}
			classes={{
				paper: styles.MenuPaper,
			}}
		>
			<Box role="presentation" onKeyDown={handleOpenMenu} className={styles.MenuBox}>
				<List sx={{ padding: 0 }}>
					<div className={styles.ListContainerItem}>
						<UserMenu
							className={styles.UserMenu}
							requiredArrawIcon={false}
							data={"xd"}
						/>
					</div>
					<div className={styles.ListContainerItem}>
						<Button key={"cs"} variant="text" color="inherit">
							<ExitIcon className={styles.ExitIcon} />
							Cerrar sesión
						</Button>
					</div>
					<div className={styles.ListContainerItemOptions}>
						{menuOptions.map((option, index) => (
							<ListItem
								key={index}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
								selected={option.keyPath == optionSelected}
								onClick={() => handleNavigator(option.path)}
							>
								<option.Icon />
								<Button key={index} variant="text" color="inherit">
									{option.name}
								</Button>
							</ListItem>
						))}
					</div>
				</List>
			</Box>
		</Drawer>
	);
};
