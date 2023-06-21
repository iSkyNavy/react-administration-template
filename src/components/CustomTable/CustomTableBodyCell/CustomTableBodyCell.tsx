import { TableCell, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { FC } from "react";
import styles from "../CustomTable.module.scss";
import { ICustomTableBodyCellProps } from "./CustomTableBodyCell.type";
export const TableBodyCell: FC<ICustomTableBodyCellProps> = props => {
	const { isMobileAllowed = true, ...cellProps } = props;
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
	const render = (!isDesktop && isMobileAllowed) || isDesktop ? true : false;
	return render && <TableCell align="center" {...cellProps} className={styles.TableBodyCell} />;
};
