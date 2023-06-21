import { Api } from "./Api";
import { AxiosRequestConfig } from "axios";
import { API_URL } from "@constants/app";

export class PublicApi extends Api {
    public version = "v1";

    public constructor(config?: AxiosRequestConfig) {
        super({ ...config, baseURL: API_URL });

        this.api.interceptors.request.use(async (param: any) => {
            return {
                ...param,
                url: `${this.version}/${param.url}`
            };
        });
    }
}
