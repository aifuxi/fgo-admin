import request from "@/libs/request";
import type { CommonResponse, ListReq } from "./common";
import type { Role } from "./role";

export interface User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nickname: string;
  email: string;
  password?: string;
  roles?: Role[];
}

export interface UserRegisterReq {
  nickname: string;
  email: string;
  password: string;
}

export interface UserLoginReq {
  email: string;
  password: string;
}

export interface UserUpdateReq {
  nickname?: string;
  email?: string;
  roleIDs?: string[];
}

export interface UserListReq extends ListReq {
  nickname?: string;
  email?: string;
}

export interface UserResp {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nickname: string;
  email: string;
  roles?: Role[];
}

export interface UserListResp {
  total: string;
  lists: UserResp[];
}

export interface UserFindByIDReq {
  id: string;
}

const API_BASE_PATH = "/api/v1/users";

/** 获取当前登录用户信息 */
export async function getUserInfo(): Promise<CommonResponse<UserResp>> {
  const res = await request.get<CommonResponse<UserResp>>(
    `${API_BASE_PATH}/info`
  );
  return res.data;
}
