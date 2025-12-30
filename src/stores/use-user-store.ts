import type { UserResp } from "@/api/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
  userInfo: UserResp | null;
  setUserInfo: (userInfo: UserResp | null) => void;
}

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        userInfo: null,
        setUserInfo: (userInfo) => set({ userInfo }),
      }),
      { name: "fgo:userStore" }
    )
  )
);

export default useUserStore;
