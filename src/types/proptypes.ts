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
