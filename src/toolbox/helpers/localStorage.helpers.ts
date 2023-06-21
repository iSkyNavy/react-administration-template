class LocalStorageHelpers {
    private keySecret: string;
    constructor(keySecret: string) {
        this.keySecret = keySecret;
    }
    public saveLocalStorage(data: string) {
        const dataSaved = localStorage.setItem(this.keySecret, data);
        return dataSaved;
    }
    public readLocalStorage() {
        try {
            const data = localStorage.getItem(this.keySecret);
            return data;
        } catch (e) {
            return null;
        }
    }
    public removeLocalStorage() {
        localStorage.removeItem(this.keySecret);
    }
}

export default LocalStorageHelpers;
