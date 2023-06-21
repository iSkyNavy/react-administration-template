import { ROUTE_LOGIN } from "@constants/routes";
import { useNavigate } from "react-router-dom";

export const useHeader = () => {
    const navigator = useNavigate();
    const logout = async () => {
        navigator(ROUTE_LOGIN);
    };

    return { logout };
};
