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

export type UserSingupProps = {
    email?: string;
    password?: string;
    nickname?: string;
    profileImage?: string;    
}