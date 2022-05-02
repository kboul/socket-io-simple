import create from "zustand";

import { posts } from "./constants";

const useStore = create((set) => ({
  posts,
  socket: null,
  user: "",
  setGlobalState: (data) => set({ ...data }),
}));

export default useStore;
