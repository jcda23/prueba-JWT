/* export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  email?: string;
  token?: string;
  jwtToken?: string;
  message?: string;
}

export interface Usuario {
  name: string;
  email: string;
  password: string;
  clientSince?: Date;
  roles?: Role[];
  profileImg?: null | string;
  weight?: number | null;
  height?: number | null;
  sex?: Sex;
  age?: number;
  routines?: any[];
}

export enum Role {
  RoleAdmin = 'ROLE_ADMIN',
  RoleUser = 'ROLE_USER',
  RoleCoach = 'ROLE_COACH',
}

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
}
 */
export interface Credentials {
  email: string;
  password: string;
}
