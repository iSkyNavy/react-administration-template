import { FC, SVGProps } from "react";

export interface IActionMenuOption {
    name: string;
    action: () => void;
    Icon?: FC<SVGProps<SVGSVGElement>>
}
