export interface THackathon {
    id?: string;
    firstName: string;
    lastName: string;
    country: string;
    location: string;
    team: string;
    description: string;
  }

  export interface ProfileRow {
    _id: string;
    firstName: string;
    lastName: string;
  }
  
  export type UserInfo = ProfileRow & {
    location: string;
    team: string;
    description: string;
  }
  
  export type Error = {
    firstName: boolean;
    lastName: boolean;
    location: boolean;
    team: boolean;
    description: boolean;
  }
  
  export type Field =
    | "firstName"
    | "lastName"
    | "location"
    | "team"
    | "description";
  