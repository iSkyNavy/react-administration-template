import { Menu } from "@mui/material";
import { FC } from "react";
import { INearMenuProps } from "./NeartMenu.type";
import styles from "./NearMenu.module.scss";
import { CustomButton } from "@components/CustomButton/CustomButton";

export const NextMenu: FC<INearMenuProps> = ({ openNextElement, setOpen, options }) => {
	const open = Boolean(openNextElement);
	const handleClose = () => {
		setOpen(null);
	};
	const handleAction = (action: () => void) => {
		handleClose();
		action();
	};
	return (
		<Menu
			id="long-menu"
			MenuListProps={{
				"aria-labelledby": "long-button",
				style: { backgroundColor: "red !important" },
			}}
			sx={{
				backgroundColor: "transparent !important",
			}}
			open={open}
			onKeyDown={handleClose}
			onClose={handleClose}
			anchorEl={openNextElement}
			BackdropProps={{ style: { opacity: 0 } }}
			PaperProps={{
				sx: {
					height: "auto",
					width: "auto",
					borderRadius: "10px",
					padding: "0px",
					// backgroundColor: "red !important",
				},
			}}
			classes={{ list: styles.MenuList, root: styles.Modal }}
		>
			{options.map(({ action, name }, index) => (
				<CustomButton
					// startIcon={Icon && <Icon className={styles.IconGray} />}
					className={styles.MenuCustomButton}
					variant={"NORMAL"}
					key={index}
					onClick={() => handleAction(action)}
				>
					{name}
				</CustomButton>
			))}
		</Menu>
	);
};
