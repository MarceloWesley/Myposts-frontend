"user server";

import { cookies } from "next/headers";
import { create } from "zustand";

interface StoreState {
  token: any;
  isLogged: boolean;
}

const token = cookies().get("user-token");
console.log("token", token);
const useStore = create<StoreState>((set) => ({
  token,
  isLogged: !!token,
}));

export default useStore;
