interface JwtTokenModel {
  token: string;
}

export class JwtToken {
  token: string;
  constructor({ token }: JwtTokenModel) {
    this.token = token;
  }
}
