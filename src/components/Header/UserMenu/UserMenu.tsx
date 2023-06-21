import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./UserMenu.module.scss";
import { FC, useState } from "react";
import { DialogUserMenu } from "./DialogUserMenu/DialogUserMenu";
import { IUserMenuProps } from "./UserMenu.type";
import { UserDefaultIcon } from "@constants/icons";

export const UserMenu: FC<IUserMenuProps> = props => {
	const [openMenuDesktop, setOpenMenuDesktop] = useState<boolean>(false);
	const handleSetOpenMenuDesktop = () => {
		setOpenMenuDesktop(!openMenuDesktop);
	};

	return (
		<>
			<IconButton
				className={props.className}
				color="inherit"
				onClick={handleSetOpenMenuDesktop}
			>
				<UserDefaultIcon
					className={styles.Icon}
					fontSize="large"
					width={"clamp(34px, 3vw, 36px)"}
				/>
				<span className={styles.Name}>{"Usuario"}</span>
				{props.requiredArrawIcon &&
					(!openMenuDesktop ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />)}
			</IconButton>

			<DialogUserMenu open={openMenuDesktop} switchOpen={setOpenMenuDesktop} type={"panel"} />
		</>
	);
};
