import { KEY_STORAGE_USER_DATA } from "@constants/app";
import LocalStorageHelpers from "@helpers/localStorage.helpers";

class AuthStorage {
    private localStorageHelpers = new LocalStorageHelpers(KEY_STORAGE_USER_DATA);
    public getAuthData() {
        const authData = this.localStorageHelpers.readLocalStorage();
        if (authData) {
            return authData;
        }
        return null;
    }
    public saveAuthData(data: string) {
        const authData = this.localStorageHelpers.saveLocalStorage(data);
        return authData;
    }

    public clearAuthData() {
        this.localStorageHelpers.removeLocalStorage();
    }
}

export const authStorage = new AuthStorage();
