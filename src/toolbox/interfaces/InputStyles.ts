import { colors } from "@constants/colors";
import { BORDER_COLORS, BORDER_RADIUS, BORDER_WIDTHS } from "@constants/styles";

export interface IGenericInputStyles {
    active?: boolean;
    borderColor?: keyof typeof BORDER_COLORS;
    borderRadius?: keyof typeof BORDER_RADIUS;
    borderWidth?: keyof typeof BORDER_WIDTHS;
    disabled?: boolean;
    labelColor?: keyof typeof colors;
}
