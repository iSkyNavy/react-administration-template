import { CustomTable } from "@components/CustomTable/CustomTable";
import { Title } from "@components/Title/Title";
import { optionsMenu, userTableHeaders, usersDataFake } from "./User.default";
import { TableBodyCell } from "@components/CustomTable/CustomTableBodyCell/CustomTableBodyCell";
import { TableRow, IconButton } from "@mui/material";
import { CustomButton } from "@components/CustomButton/CustomButton";
import ListIcon from "@mui/icons-material/List";
import { NextMenu } from "@components/NearMenu/NearMenu";
import { MouseEvent, useState } from "react";

export const UserView = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	async function getUsers(_le: string): Promise<void> {
		/* new Promise(function (myResolve, myReject) {
			setTimeout(function () {
				myResolve("I love You !!");
			}, 3000);
		}); */
	}
	const handleNextMenu = (_row: any, event: MouseEvent<HTMLElement>) => {
		// setRowSelected(row);
		setAnchorEl(event.currentTarget);
	};
	return (
		<div>
			<Title title="Users" />
			<CustomButton
				className="e-standar-button"
				variant={"FULL"}
				onClick={() => console.log("crear")}
			>
				Crear
			</CustomButton>
			<CustomTable
				headers={userTableHeaders}
				meta={{
					total: 4,
					current_page: 1,
					last_page: 10,
					per_page: 2,
					to: 2,
					from: 1,
					path: "",
					links: [],
				}}
				getUrl={getUsers}
				rows={usersDataFake?.map((item, index) => (
					<TableRow hover key={index}>
						<TableBodyCell>{item.username}</TableBodyCell>
						<TableBodyCell>{item.role}</TableBodyCell>
						<TableBodyCell isMobileAllowed={false}>{item.lastConnection}</TableBodyCell>
						<TableBodyCell isMobileAllowed={false}>{item.active}</TableBodyCell>
						<TableBodyCell align="center">
							<IconButton onClick={e => handleNextMenu(item, e)}>
								<ListIcon />
							</IconButton>
						</TableBodyCell>
					</TableRow>
				))}
			/>
			<NextMenu openNextElement={anchorEl} setOpen={setAnchorEl} options={optionsMenu} />
		</div>
	);
};

export default UserView;
