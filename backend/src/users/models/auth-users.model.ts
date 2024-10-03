interface AuthUserModelData {
  id: number;
  email: string;
  password: string;
}

export class AuthUser {
  id: number;
  email: string;
  password: string;
  constructor({ id, email, password }: AuthUserModelData) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
