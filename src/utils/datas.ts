import socialImg from '../assets/images/proj-1.png';
import timerImg from '../assets/images/proj-2.png';

const LoremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'

export const skillData = [
  {
    iconId: 'html',
    title: 'html5',
    description: LoremText,
  },
  {
    iconId: 'css',
    title: 'css3',
    description: LoremText,
  },
  {
    iconId: 'react',
    title: 'React',
    description: LoremText,
  },
  {
    iconId: 'typeScript',
    title: 'typescript',
    description: LoremText,
  },
  {
    iconId: 'styled',
    title: 'styled components',
    description: LoremText,
  },
  {
    iconId: 'web',
    title: 'WEB DESIgN',
    description: LoremText,
  },
];


// Works.tsx:

export const tabMenuItems = ['All', 'landing page', 'React', 'spa'];

export const workData = [
  {
    title: 'Social Network',
    text: LoremText,
    imageSrc: socialImg,
    alt: 'Social NetWork',
  },
  {
    title: 'Timer',
    text: LoremText,
    imageSrc: timerImg,
    alt: 'Timer',
  },
];

// Footer.tsx:
export const socialItemsData = [
  { iconId: 'instagram' },
  { iconId: 'telegram' },
  { iconId: 'vk' },
  { iconId: 'linked' },
];