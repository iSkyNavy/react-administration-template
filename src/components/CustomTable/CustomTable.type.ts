 
import { ReactNode } from "react";

interface IMetaLink {
    url: string;
    label: string;
    active: boolean
}
interface IMetaPagination {
    current_page: number;
    from: number;
    last_page: number;
    links: IMetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number
}
export interface ICustomTableProps {
    headers: Array<IHeaderTableProps>;
    rows: ReactNode;
    meta: IMetaPagination;
    getUrl: (params: any) => Promise<void>;
}
export interface IHeaderTableProps {
    name: string;
    isMobileAllowed?: boolean;
}
