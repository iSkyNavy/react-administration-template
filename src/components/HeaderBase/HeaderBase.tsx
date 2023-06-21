import { FC } from "react";
import { IHeaderBaseProps } from "./HeaderBase.type";
import styles from "./HeaderBase.module.scss";
import { Toolbar } from "@mui/material";

export const HeaderBase: FC<IHeaderBaseProps> = ({ children }) => {
	return (
		<>
			<header className={styles.HeaderBase}>{children}</header>
			<Toolbar />
		</>
	);
};
