import { IUser } from "../types/user"

export const setUser = (user: IUser) => {
  return {
    type: 'USER/SET_USER',
    payload: user
  }
}

export const setAccessToken = (accessToken: string) => {
  return {
    type: 'USER/SET_ACCESS_TOKEN',
    payload: accessToken
  }
}