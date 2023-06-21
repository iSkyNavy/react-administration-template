import { ROUTE_DASHBOARD_HOME } from "@constants/routes";
import { authStorage } from "@storage/Auth.storage";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const navigator = useNavigate();
    const login = async (params: any) => {
        try {
            const data = JSON.stringify(params);
            authStorage.saveAuthData(data);
            navigator(ROUTE_DASHBOARD_HOME);
        } catch (error) {
            console.error(error);
        }
    };
    return {
        login,
    };
};
