export type UserProps = {
    id: number;
    email?: string;
    password?: string;
    nickname?: string;
    profileImage?: string;
    api_id?: number;
}

export type UserLoginProps = {
    email: string;
    password: string;
}