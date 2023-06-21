import { colors } from "@constants/colors";
import { fonts } from "@constants/fonts";
import { Pagination, PaginationItem, Table, TableBody, TableHead, TableRow } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import styles from "./CustomTable.module.scss";
import { ICustomTableProps } from "./CustomTable.type";
import { TableBodyCell } from "./CustomTableBodyCell/CustomTableBodyCell";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { EButtons } from "@enums/Button.enum";

export const CustomTable: FC<ICustomTableProps> = props => {
	const [page, setPage] = useState<number>(props.meta?.current_page || 1);
	const { headers } = props;
	const handleChangePagination = async (_event: ChangeEvent<unknown>, value: number) => {
		if (value != page) {
			await props.getUrl({ per_page: props.meta?.per_page, page: value });
			setPage(value);
		}
	};
	return (
		<div className={`${styles.CustomTable} e-standar-space`}>
			<Table size="medium" aria-label="Table">
				<TableHead>
					<TableRow>
						{headers.map((header, index) => (
							<TableBodyCell
								classes={{
									root: styles.TableCell,
								}}
								sx={{
									color: colors["primary"],
									fontFamily: fonts["primary"],
									fontWeight: 600,
									fontSize: 16,
								}}
								key={index}
								align="center"
								isMobileAllowed={header.isMobileAllowed}
							>
								{header.name}
							</TableBodyCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>{props.rows && props.rows}</TableBody>
			</Table>
			<div className={styles.Pagination}>
				<Pagination
					count={props.meta?.last_page}
					page={page}
					onChange={handleChangePagination}
					hidePrevButton={props.meta?.current_page == 1}
					hideNextButton={props.meta?.current_page == props.meta?.last_page}
					renderItem={item => (
						<div className={styles.PaginationItem}>
							<PaginationItem
								classes={{
									root: styles.RootItem,
									selected: styles.Selected,
								}}
								component={"button"}
								{...item}
								variant="text"
							/>
						</div>
					)}
				/>
			</div>
		</div>
	);
};
