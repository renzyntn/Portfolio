import { create } from "zustand";
import type { LoadingState } from "../types/proptypes";

const useLoadingStore = create<LoadingState>((set) => ({
  // set initial state value to 'false'
  isLoading: false,

  // change and set the new value as 'true'
  setIsLoading: (newVal) => set({ isLoading: newVal }),
}));

export { useLoadingStore };
