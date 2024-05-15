import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export const socialAccounts = [
  {
    icon: <FiMail />,
    href: 'mailto:triplego313@gmail.com',
    title: 'Email',
    'aria-label': 'Email Icon',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://linkedin.com/in/irakli-svanidze-9770a430a',
    title: 'Linkedin',
    'aria-label': 'Linkedin Icon',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/dieetcola',
    title: 'Github',
    'aria-label': 'Github Icon',
  },
  {
    title: 'Toggle',
    'aria-label': 'Toggle Button',
  },
];

export const projects = [
  {
    name: 'Portfolio',
    desc: 'This site! My personal portfolio, Created with Next.js, Typescript and Chakra UI',
    href: 'https://github.com/dieetcola/next.js-portfolio',
  },
  {
    name: 'Favourite-Pubs',
    desc: 'List of my favourite Tbilsi pubs. Created with Next.js, MongoDB, Mongoose, GraphQL, Typescript and NextAuth for authentication',
    href: 'https://github.com/dieetcola/favourite-tbilisi-pubs',
  },
  {
    name: 'Reminder App',
    desc: 'A reminder app built Created with Next.js, Typescript, Sql, Prisma, Tailwincss, Clerk.js for authentication',
    href: 'https://github.com/dieetcola/remindme-app',
  },
];
