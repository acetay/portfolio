import { nanoid } from 'nanoid';
import { FaJs, FaJava } from 'react-icons/fa';
import { SiAzuredevops } from 'react-icons/si';
import vms from './assets/vms.png';
import mealDelivery from './assets/mealDelivery.png';
import carpark from './assets/carpark.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-sky-600' />,
    text: 'Learned JavaScript and TailwindCSS, and used them along with React and React Native to develop web frontends and mobile applications in various projects.',
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <FaJava className='h-16 w-16 text-sky-600' />,
    text: 'Developed foundational knowledge of Java and used Spring Boot to create basic API-based backend applications.',
  },
  {
    id: nanoid(),
    title: 'DevOps',
    icon: <SiAzuredevops className='h-16 w-16 text-sky-600' />,
    text: 'Got introduced to DevOps principles, focusing on CI/CD pipeline development. Created basic CI/CD pipeline scripts with AWS CodePipeline and CircleCI for deploying projects to AWS ECS.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: carpark,
    url: 'https://check-carpark-app.netlify.app/',
    github: 'https://github.com/acetay/mycarpark_app',
    title: 'Carpark Availability App',
    text: 'To search for available lots in HDB-run carparks near user current location or a location of their choosing by using APIs to harness data from a variety of sources.',
  },
  {
    id: nanoid(),
    img: vms,
    github: 'https://github.com/acetay/Volunteer_Management_System_VMS',
    title: 'Volunteer Management System',
    text: 'A full-stack digital platform for new volunteer signups along with a CRM dashboard to enable staff to administer new programs and enrol new volunteers',
  },
  {
    id: nanoid(),
    img: mealDelivery,
    github: 'https://github.com/acetay/Meals-Delivery-and-Event-Tracking-App',
    title: 'Meals Delivery and Task Tracking App',
    text: 'A react native (prototype) application designed to help charity organisations keep track of its events and completion statuses',
  },
];
