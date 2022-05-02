import create from "zustand";

import { posts } from "./constants";

const useStore = create((set) => ({
  notifications: [],
  notificationsPanelOpen: false,
  posts,
  socket: null,
  user: "",
  setGlobalState: (data) => set({ ...data }),
}));

export default useStore;
