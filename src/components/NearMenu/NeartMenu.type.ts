import { IActionMenuOption } from "@interfaces/ActionMenuOptions";
import { Dispatch, SetStateAction } from "react";

export interface INearMenuProps {
    options: IActionMenuOption[];
    openNextElement: null | HTMLElement;
    setOpen: Dispatch<SetStateAction<null | HTMLElement>>;
}
