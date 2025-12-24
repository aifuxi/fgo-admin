import type { Permission } from "./permission";
import type { User } from "./user";

export interface Role {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  code: string;
  description?: string;
  users?: User[];
  permissions?: Permission[];
}
