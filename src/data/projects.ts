import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Dojo Blog',
    description:
      'This project was part of an effort to master Typescript so I could apply my knowledge to my professional work.',
    githubUrl: 'https://github.com/MichelleNotTaylor/net-ninja-react',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'Alien Image Generator',
    description: 'An art generator that creates pixel images in random colors.',
    githubUrl: 'https://github.com/MichelleNotTaylor/shiny-image-generator',
    tags: ['Python'],
  },
  {
    title: 'Billing App',
    description: 'A basic billing application to create and save bills for a cafe.',
    githubUrl: 'https://github.com/MichelleNotTaylor/net-ninja-golang',
    tags: ['Golang'],
  },
];
