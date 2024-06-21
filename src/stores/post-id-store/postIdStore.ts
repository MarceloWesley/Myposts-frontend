import { create } from "zustand";

type PostStore = {
  id: string;
  addId: (id: string) => void;
};

export const usePostIdStore = create<PostStore>((set) => {
  return {
    id: "",
    addId: (item: string) => set((state) => ({ id: item })),
  };
});
