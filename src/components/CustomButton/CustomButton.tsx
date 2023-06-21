import { colors } from "@constants/colors";
import { styled, useMediaQuery, useTheme } from "@mui/material";
import {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	CSSProperties,
	DetailedHTMLProps,
	FC,
} from "react";

enum EButtonType {
	OUTLINE = "OUTLINE",
	FULL = "FULL",
	NORMAL = "NORMAL",
}

interface ICommonButtonProps {
	variant?: keyof typeof EButtonType;
	typeTag?: "button" | "a";
}
interface ICustomButton
	extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		ICommonButtonProps {}
interface ICustomAnchor
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
		ICommonButtonProps {}

const generalButtonProps: CSSProperties | any = {
	width: "150px",
	borderRadius: "5px",
	height: "34px",
	fontStyle: "normal",
	fontWeight: 500,
	fontSize: "18px",
	lineHeight: "26px",
	cursor: "pointer",
	transition: "all 0.22s ease-out",
	textTransform: "capitalize",
	margin: 0,
	"&::first-letter": {
		textTransform: "capitalize",
	},
	"@media only screen and (min-width: 600px)": {
		height: "36px",
	},
	fontFamily: "'Roboto', sans-serif",
};
const buttonVariables: Record<EButtonType, CSSProperties> = {
	OUTLINE: {
		...generalButtonProps,
		border: "2px solid " + colors["secondary"],
		color: colors["secondary"],
		background: "transparent",
		"&:hover": {
			background: colors["secondary"],
			color: colors["white"],
		},
	},
	FULL: {
		...generalButtonProps,
		background: colors["primary"],
		color: colors["white"],
		"&:hover": {
			background: "transparent",
			border: "2px solid " + colors["secondary"],
			color: colors["secondary"],
		},
	},
	NORMAL: {
		...generalButtonProps,
		background: colors["primary"],
		color: colors["white"],
		borderRadius: "0",
		border: "0.2px solid" + colors["white"],
		"&:hover": {
			opacity: "0.9",
		},
	},
};
interface BUTTONPROPS {
	ismovile: string;
	variant: keyof typeof EButtonType;
}
const BUTTON = styled("button")<CSSProperties & BUTTONPROPS>(props => ({
	...generalButtonProps,
	...buttonVariables[props.variant as EButtonType],
}));
const BUTTONA = styled("a")<BUTTONPROPS & CSSProperties>(props => ({
	...generalButtonProps,
	...buttonVariables[props.variant as EButtonType],
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
const handleComponent = (props: ICustomButton & ICustomAnchor, isMobile: boolean) => {
	const { children, variant = "FULL", typeTag = "button", ...baseProps } = props;
	if (typeTag == "a") {
		return (
			<BUTTONA {...baseProps} variant={variant} ismovile={isMobile.toString()}>
				{children}
			</BUTTONA>
		);
	}
	return (
		<BUTTON {...baseProps} variant={variant} ismovile={isMobile.toString()}>
			{children}
		</BUTTON>
	);
};
export const CustomButton: FC<ICustomButton & ICustomAnchor> = props => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	return handleComponent(props, isMobile);
};
