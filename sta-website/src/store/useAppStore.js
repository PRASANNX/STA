import { create } from "zustand";

const useAppStore = create((set) => ({
  // 'tennis' | 'pickleball' | 'tt'
  activeSport: "tennis",
  setActiveSport: (sport) => set({ activeSport: sport }),
}));

export default useAppStore;
