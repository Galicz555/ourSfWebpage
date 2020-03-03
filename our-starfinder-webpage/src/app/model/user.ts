export class User {
  name: string;
  username: string;
  phone: number;
  role: string;
  id: number;
  DOB: number;

  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.phone = user.phone;
    this.DOB = user.DOB;
  }
}

export interface ICurrentUser {
  accessToken: string;
  refreshToken: string;
}