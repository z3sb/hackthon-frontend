import { IconBrandYoutube, IconUpload, IconPlayerPlay } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface IProps{
  id:string,
  title:string,
  icon:ReactNode,
  navLink:string,
  policy:string
}
export const sidebareLinkes : IProps[] = [
    {
      id: 'home',
      title: 'streaming',
      icon:<IconBrandYoutube />,
      navLink: '/home',
    // if you need to add permisions
      policy: ''
    },
    {
      id: 'upload',
      title: 'upload video',
      icon:<IconUpload />,
      navLink: '/upload-video',
    // if you need to add permisions
      policy: ''
    },
    {
      id: 'startStream',
      title: 'start your Stream',
      icon:<IconPlayerPlay />,
      navLink: '/start-stream',
    // if you need to add permisions
      policy: ''
    }
]