export type THackathon = {
    id?: string;
    nickname: string;
    discord: string;
    country: string;
    description: string;
    age: string;
    userinterest: string;
  }

  export type ProfileRow = {
    _id: string;
    nickname: string;
    discord: string;
  }
  
  export type UserInfo = ProfileRow & {
    description: string;
    age: string;
    userinterest: string;
  }
  
  export type Error = {
    nickname: boolean;
    discord: boolean;
    description: boolean;
    age: boolean;
    userinterest: boolean;
  }
  
  export type Field =
    | "nickname"
    | "discord"
    | "description"
    | "age"
    | "userinterest";
  