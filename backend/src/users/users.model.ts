interface UserModelData {
  id: number;
  email: string;
}

export class User {
  id: number;
  email: string;
  constructor({ id, email }: UserModelData) {
    this.id = id;
    this.email = email;
  }
}
