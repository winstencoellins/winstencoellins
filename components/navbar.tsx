"use client"

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { handleClickScroll } from '@/lib/utils'

import { Download, Menu } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const navigationData = [
      {
        title: 'About',
        id: 'about'
      },
      {
        title: 'Technical Skills',
        id: 'technical-skills'
      },
      {
        title: 'Experience',
        id: 'experience'
      },
      {
        title: 'Projects',
        id: 'projects'
      },
      {
        title: 'Contact',
        id: 'contact'
      }
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = './public/files/resume_winstencoellins.pdf'
    link.download = 'winstencoellins_resume.pdf'
    link.click()
  }

  return (
    <header className='bg-[#101622] sticky top-0 z-50 py-5'>
      <div className='w-11/12 mx-auto flex justify-between items-center md:max-w-3xl md:px-0 lg:max-w-7xl'>
        <div>
          <div className='md:flex md:items-center md:text-lg'>
            <h3 className='bg-[#135bec] text-white px-1.5 py-1.5 rounded-lg font-bold md:mr-3 w-fit'>WC</h3>
            <h3 className='font-bold text-white hidden md:block'>Winsten Coellins</h3>
          </div>
        </div>

        <div className='hidden lg:block'>
          {
            navigationData.map((item, index) => (
              <Button key={index} variant="ghost" className='text-white font-semibold mx-2 hover:text-[#135bec] hover:cursor-pointer' onClick={() => handleClickScroll(item.id)}>
                { item.title }
              </Button>
            ))
          }
        </div>

        <div className='hidden lg:block'>
          <Button className='bg-[#135bec] text-white font-bold hover:bg-[#0f4bb8] hover:cursor-pointer' asChild>
            <Link href="/files/resume_winstencoellins.pdf" download={true}>
              <Download className='mr-2' />
              Resume
            </Link>
          </Button>
        </div>

        <div className='lg:hidden block'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Menu className='text-white w-20 h-30'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='bg-[#101622] w-10 text-white border border-gray-800 px-2 text-sm'>
              <DropdownMenuGroup>
                {
                  navigationData.map((item, index) => (
                    <DropdownMenuItem key={index} onClick={() => handleClickScroll(item.id)}>
                      { item.title }
                    </DropdownMenuItem>
                  ))
                }
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className='py-1'>
                <Button className='w-full bg-[#135bec]'>
                  <Download className='' />
                  Resume
                </Button>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

    </header>
  )
}

export default Navbar
