import getMoviesImage from '../images/getMoviesImage.png';
import jitaProfileImage from '../images/jitaProfileImage.png';
import getPokemonsImage from '../images/getPokemonsImage.png';
import immersiveDashboardImage from '../images/immersiveDashboardImage.png';
import taskifyImage from '../images/taskifyImage.png';
import betamartImage from '../images/betamart.png';

export const projects = [
  {
    name: 'betty.id',
    image:
      'https://res.cloudinary.com/ddxvpxy6d/image/upload/v1723219587/uploads/bettyid_1723219584128.png.png',
    sourceCode: null,
    demo: 'https://www.betty.id/',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'React Icons',
      'React Scroll',
      'Git/GitHub',
    ],
    description:
      'I worked on a landing page project for a cashier application called Betty. This landing page is designed to explain what Betty is, showcase its advantages, and provide a user guide for the application.',
  },
  {
    name: 'rekadigi.id',
    image:
      'https://res.cloudinary.com/ddxvpxy6d/image/upload/v1723219530/uploads/desk1_1723219527189.png.png',
    sourceCode: null,
    demo: 'https://www.rekadigi.id/',
    tech: [
      'React JS',
      'Tailwind CSS',
      'React Icons',
      'React Scroll',
      'Email JS',
      'Git/GitHub',
    ],
    description:
      'I worked on a landing page project for rekadigi.id, the digital marketing division of my company. This landing page is designed to explain what rekadigi.id is, showcase its portfolio, and detail the services offered.',
  },
  {
    name: 'Taskify',
    image: taskifyImage,
    sourceCode: 'https://github.com/argianardi/taskify',
    demo: 'https://taskifynet.vercel.app/',
    tech: ['React JS', 'Tailwind CSS', 'Redux', 'React Icons'],
    description: 'This project is my personal project. This is a simple todo list application built with React and Redux. It allows users to add, delete tasks and filter them by category',
  },
  {
    name: 'getMovies',
    image: getMoviesImage,
    sourceCode:
      'https://github.com/ALTA-FE07-ArgianArdiPrasetya/getMovies/tree/release-4',
    demo: 'https://bukanbioskop.vercel.app/',
    tech: ['React JS', 'React Bootstrap', 'axios', 'React Icons', 'Git/GitHub'],
    description:
      'This project is my personal project. I build a web movie named getMovies using API consumption from The Movies Database (TMDB).',
  },
  {
    name: 'Jita Profile',
    image: jitaProfileImage,
    sourceCode: 'https://github.com/argianardi/JitaCom-Profile',
    demo: 'https://jitacom.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'React Icons', 'Git/GitHub'],
    description: 'I developed a simple, elegant, and responsive website to showcase the company profile and product catalog of Jita Computer.',
  },
  {
    name: 'Get Pokemons',
    image: getPokemonsImage,
    sourceCode: 'https://github.com/argianardi/getPokemons',
    demo: 'https://get-pokemons.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'React Icons', 'axios', 'Git/GitHub'],
    description: 'This is my personal project. I build a web Pokemon encyclopedia using PokeAPI with search and filter.',
  },
  {
    name: 'Immersive Dashboard',
    image: immersiveDashboardImage,
    sourceCode: 'https://github.com/argianardi/Immersive-Dashboard',
    demo: 'https://immersive-dashboard-ten.vercel.app/',
    tech: ['NextJS', 'TailwindCSS', 'axios', 'React Icons', 'JS-Cookie', 'Figma', 'Git/GitHub'],
    description: 'Immersive Dashboard is an immersive student data management application at Alterra Academy. This project is a team collaboration between the Backend and Frontend Developers.',
  },
  {
    name: 'Betamart',
    image: betamartImage,
    sourceCode: 'https://github.com/argianardi/betaMart',
    demo: 'https://betamart.vercel.app/',
    tech: ['React JS', 'Tailwind CSS', 'Redux', 'React Icons'],
    description: 'This is my personal project. I built a fully functional e-commerce web application for online shopping with various features to provide a seamless and convenient shopping experience.',
  },
];