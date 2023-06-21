import { ReactNode } from "react";

export interface INavRouteProps {
    name: string;
    path: string;
    Component: () => ReactNode;
    merge?: string;
}
