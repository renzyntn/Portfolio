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
  toggleProjectsModal: () => void;
};

export type ServicesProp = {
  section: string;
};

export type TechstackProp = ServicesProp;

export type EducationProp = ServicesProp;

export type CopyrightProp = {
  copyrightNote: string;
};

export type ProjectsModalProp = {
  toggleProjectsModal: () => void;
  copyrightNote: string;
};
