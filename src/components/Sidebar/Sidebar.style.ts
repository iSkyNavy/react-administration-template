import { colors } from "@constants/colors";
import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "drawer";
export const classes = {
    drawerBlock: `${PREFIX}Block`,
    drawerBlockOpen: `${PREFIX}BlockOpen`,
    drawerOpen: `${PREFIX}Open`,
    drawerClose: `${PREFIX}Close`,
};
const drawerWidthOpen = 190;
const drawerWidthClose = 100;

export const DrawerStyled = styled(Drawer)(({ theme }) => ({
    ".MuiPaper-root": {
        backgroundColor: colors["primary"],
        top: "unset",
    },
    [`&.${classes.drawerBlock}`]: {
        width: drawerWidthClose,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    [`&.${classes.drawerBlockOpen}`]: {
        width: drawerWidthOpen,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    [`.${classes.drawerOpen}`]: {
        padding: "16px 0",
        width: drawerWidthOpen,
        alignItems: "flex-start",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    [`.${classes.drawerClose}`]: {
        padding: "16px 0",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: drawerWidthClose,
        display: "block",
    },
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: colors["white"],
    padding: theme.spacing(0, 1),
    minHeight: 48,
}));
