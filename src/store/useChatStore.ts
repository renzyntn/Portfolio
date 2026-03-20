import { create } from "zustand";
import type { ChatState } from "../types/proptypes";

const useChatStore = create<ChatState>((set) => ({
  // set the initial state as empty array '[]'
  chatHistory: [],

  // push the 'newChatObj' params inside the state array
  setChatHistory: (newChatObj) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, newChatObj],
    })),
}));

export { useChatStore };
