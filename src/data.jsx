import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiVuedotjs, SiMongodb, SiMysql, SiLaravel, SiDotnet, SiGo, SiJavascript, SiGraphql } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
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
    title: 'Vue.js',
    icon: <SiVuedotjs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Vue.js, creating dynamic and scalable front-end applications with a focus on simplicity and ease of use.',
  },
  {
    id: nanoid(),
    title: 'Express.js',
    icon: <SiNodedotjs className='h-16 w-16 text-emerald-500' />,
    text: 'Experience with Express.js, building fast and scalable server-side applications and APIs with Node.js.',
  },
  {
    id: nanoid(),
    title: 'Prisma',
    icon: <SiNodedotjs className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Prisma, simplifying database access and management in Node.js applications with a type-safe ORM.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Experience with MongoDB, designing and implementing efficient and scalable NoSQL databases for various applications.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in MySQL, developing and managing relational databases for storing and retrieving data in web applications.',
  },
  {
    id: nanoid(),
    title: 'Laravel',
    icon: <SiLaravel className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in Laravel, building robust and secure web applications with PHP framework focusing on clean and elegant syntax.',
  },
  {
    id: nanoid(),
    title: '.NET',
    icon: <SiDotnet className='h-16 w-16 text-emerald-500' />,
    text: 'Experience with .NET framework, developing scalable and reliable web applications with C# for various industries.',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: <SiGo className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Go, building fast and efficient web services and APIs with a focus on simplicity and concurrency.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <SiJavascript className='h-16 w-16 text-emerald-500' />,
    text: 'Experience with Java, developing enterprise-grade web applications and services with a focus on scalability and performance.',
  },
  {
    id: nanoid(),
    title: 'GraphQL',
    icon: <SiGraphql className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in GraphQL, creating efficient and flexible APIs for web applications, enabling clients to request only the data they need.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
