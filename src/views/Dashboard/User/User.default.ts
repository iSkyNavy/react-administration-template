import { IHeaderTableProps } from "@components/CustomTable/CustomTable.type";

export const userTableHeaders: IHeaderTableProps[] = [
    { name: "Usuario", isMobileAllowed: true },
    { name: "Role", isMobileAllowed: true },
    { name: "Last connection", isMobileAllowed: false },
    { name: "Active", isMobileAllowed: false },
    { name: "Actions", isMobileAllowed: true },
];

export const optionsMenu = [
    {
        name: "Ver",
        action: () => console.log("verrrr"),
        // Icon: TrashIcon,
    },
    {
        name: "Editar",
        action: () => console.log("editar"),
        // Icon: TrashIcon,
    },
    {
        name: "Deshabilitar",
        action: () => console.log("desss"),
        // Icon: TrashIcon,
    },
    {
        name: "Eliminar",
        action: () => console.log("deleteee"),
        // Icon: TrashIcon,
    },
];
export const usersDataFake = [
    {
        username: "diego01",
        role: "admin",
        lastConnection: "01-05-23",
        active: "true"
    },
    {
        username: "user2",
        role: "admin",
        lastConnection: "01-05-23",
        active: "true"
    },
    {
        username: "user3",
        role: "admin",
        lastConnection: "01-05-23",
        active: "true"
    },
    {
        username: "user4",
        role: "admin",
        lastConnection: "01-05-23",
        active: "false"
    }
];
