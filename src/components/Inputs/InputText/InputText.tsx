import { BORDER_COLORS, BORDER_RADIUS, BORDER_WIDTHS } from "@constants/styles";
import { TextField } from "@mui/material";
import { FC } from "react";
import { TInputTextProps } from "./InputText.type";
import { colors } from "@constants/colors";

export const InputText: FC<TInputTextProps> = props => {
	const {
		borderColor = "gray",
		borderRadius = "xs",
		borderWidth = "xs",
		active = false,
		labelColor,
		...baseProps
	} = props;
	const customStyles = {
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: `${
				props?.error ? "#ef5350" : active ? BORDER_COLORS.blue : BORDER_COLORS[borderColor]
			} !important`,
			borderWidth: `${
				props["borderWidth"] !== undefined ? BORDER_WIDTHS[borderWidth] : "0"
			} !important`,
			borderStyle: "solid !important",
		},
		"& .MuiOutlinedInput-root": {
			borderRadius: `${BORDER_RADIUS[borderRadius]} !important`,
			color: "#EAEBEE",
		},
		"& 	.MuiFilledInput-root:before": {
			borderBottom: "none !important",
		},
		"& .MuiInputLabel-root": {
			color: !labelColor ? "#EAEBEE" : colors[labelColor],
		},
		"& .MuiInputLabel-root.Mui-disabled": {
			color: !labelColor ? "#EAEBEE" : colors[labelColor],
		},
		"& .Mui-focused": {
			border: "0px solid !important",
		},
		...(!props?.error &&
			!active && {
				"& .Mui-focused ": {
					border: "1px solid #07223B",
				},
			}),
	};

	return <TextField id={props.name} sx={customStyles} margin="normal" {...baseProps} />;
};
