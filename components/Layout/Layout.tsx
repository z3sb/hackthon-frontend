import React, { ReactNode } from 'react'
import Sidebar from '../navigations/Sidebar'

interface IProps{
    children: ReactNode
}

function Layout({children}: IProps) {
  return (
    <div className='flex gap-4'>
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout