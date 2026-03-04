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
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  toggleChat: () => void;
  chatHistory: ChatType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatType[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ChatButtonProp = {
  theme: boolean;
  isChat: boolean;
  toggleChat: () => void;
};

export type ChatPaneProp = {
  theme: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  chatHistory: ChatType[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatType[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ChatType = {
  role: "ai" | "user";
  content: string;
};
