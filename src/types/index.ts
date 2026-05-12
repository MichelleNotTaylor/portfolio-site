export type Page = 'home' | 'projects' | 'about' | 'contact';

export type Project = {
  title: string;
  description: string;
  githubUrl: string;
  tags: string[];
};

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export type SubmitStatus = '' | 'sending' | 'success' | 'error';
