export interface UserModel {
  _id: string;
  username: string;
  name?: string;
  image?: string;
  avatar: string;
  status?: string;
  email?: email;
  phone?: string;
  address?: string;
  description?: string;
}

export interface PostModel {
  usernameId: string;
  image: string;
  description?: string;
  likes?: Array;
  date?: string;
}
