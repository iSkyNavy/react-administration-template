export interface IUser {
    id: number;
    name: string;
    lastname: string;
    firebase_uid: string;
    phone: number;
    email: string;
    image_url: string | null;
}

export interface ILogin {
    user: IUser;
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_at: number;
    expires_at_refresh: number;
}

export interface ILogout {
    message?: string;
    data?: string | null;
    code: number;
}

export interface Authentication {
    data: IUser | null | undefined;
    message: string;
    status: string;
}
