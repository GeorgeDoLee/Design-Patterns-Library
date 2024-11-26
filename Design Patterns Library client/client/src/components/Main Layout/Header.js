import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const Header = ({navItems}) => {
    const navigate = useNavigate();

  return (
    <header className='px-10 py-5'>
      <div className='flex items-center justify-between'>
        {/* logo placeholder */}
        <div onCanPlay={() => navigate('/')} className='h-12 rounded-full w-36 bg-primaryText' />

        <div className='flex items-center gap-5'>
          <nav>
              <ul className='flex items-center gap-10 text-base font-semibold text-primaryText'>
                  {navItems.map((item, index) => (
                      <li 
                          key={index}
                          onClick={() => navigate(item.link)}
                          className='cursor-pointer'
                      >
                          {item.name}
                      </li>
                  ))}
              </ul>
          </nav>

          <div className='self-stretch border-r-2 border-opacity-50 border-zinc-800' />
          
          <div className='flex flex-col gap-2'>
            <FaGithub className='w-6 h-auto text-primaryText' />
            <FaLinkedin className='w-6 h-auto text-primaryText' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
