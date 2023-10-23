import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact ,FaNodeJs,FaGithub } from 'react-icons/fa';
import { BiLogoMongodb } from 'react-icons/bi';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node js',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Github',
    icon: <FaGithub className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'MongoDb',
    icon: <BiLogoMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'projectKeepfit.jpg',
    url: 'https://keepfit-react.vercel.app/',
    github: 'https://github.com/peth12/keepfit-react',
    title: 'Exercise Tracking Keepfit',

  },
  {
    id: nanoid(),
    img: 'todolist.jpg',
    url: 'https://todo-list-test-peth.netlify.app/',
    github: 'https://github.com/peth12/todo-list-html',
    title: 'Todo lIst pure javascript',
  },
  {
    id: nanoid(),
    img: 'todolist.jpg',
    url: 'https://todo-list-test-peth.netlify.app/',
    github: 'https://github.com/peth12/todo-list-html',
    title: 'Todo lIst pure javascript',
  },
];
