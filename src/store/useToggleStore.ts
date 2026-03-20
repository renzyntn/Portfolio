import { create } from "zustand";
import type { ToggleState } from "../types/proptypes";

const useToggleStore = create<ToggleState>((set) => ({
  // set initial state value to 'false'
  isChat: false,

  // change and set the new value as 'true'
  setIsChat: (newVal) => set({ isChat: newVal }),
  // this is basically a toggleChat function that sets the state to the opposite value (true)
  toggleChat: () => set((state) => ({ isChat: !state.isChat })),
}));

export { useToggleStore };
