// ./pages
export type HomeProp = {
  theme: boolean;
  copyrightNote: string;
  toggleTheme: () => void;
};

export type ProjectsModalProp = {
  theme: boolean;
  copyrightNote: string;
};

// ../components
export type ProfileProp = {
  img: string;
};

export type AboutProp = {
  section: string;
  toggleTheme: () => void;
  theme: boolean;
};

export type ProjectsProp = {
  section: string;
};

export type ServicesProp = {
  section: string;
};

export type TechstackProp = ServicesProp;

export type EducationProp = ServicesProp;

export type CopyrightProp = {
  copyrightNote: string;
};

export type MainLayoutProp = {
  theme: boolean;
};

export type ChatButtonProp = {
  theme: boolean;
};

export type ChatPaneProp = {
  theme: boolean;
};

export type ChatType = {
  role: "ai" | "user";
  content: string;
};
export interface ChatState {
  chatHistory: ChatType[];
  setChatHistory: (newChatObj: ChatType) => void;
}
export interface ToggleState {
  isChat: boolean;
  setIsChat: (newVal: boolean) => void;
  toggleChat: () => void;
}
export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (newVal: boolean) => void;
}
