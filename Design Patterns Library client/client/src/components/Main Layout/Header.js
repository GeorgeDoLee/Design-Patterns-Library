import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub, RxHamburgerMenu } from '../../assets/ReactIcons'

const Header = ({ navItems }) => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const handleNavigation = (link) => {
    navigate(link)
    setIsMenuOpen(false)
  }

  return (
    <header className='sticky top-0 z-50 px-4 py-5 shadow-md md:px-10 bg-backgroundWhite'>
      <div className='flex items-center justify-between'>
        {/* logo placeholder */}
        <h1 
          className='text-xl cursor-pointer md:text-2xl text-primaryText'
          onClick={() => navigate('/')}
        >
          {'{'} DesignPatterns<span className='text-accent'>Library</span> {'}'}
        </h1>

        <div className='lg:hidden'>
          <RxHamburgerMenu 
            className='w-6 h-6 cursor-pointer text-primaryText'
            onClick={toggleMenu}
          />
        </div>

        <div className='items-center hidden gap-5 lg:flex'>
          <nav>
            <ul className='flex items-center gap-10 text-base font-semibold text-primaryText'>
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  onClick={() => handleNavigation(item.link)}
                  className='transition-colors cursor-pointer hover:text-accent'
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>

          <div className='self-stretch border-r-2 border-opacity-50 border-zinc-800' />
          
          <div className='flex flex-col gap-2'>
            <FaGithub className='w-6 h-auto transition-colors cursor-pointer text-primaryText hover:text-accent' />
            <FaLinkedin className='w-6 h-auto transition-colors cursor-pointer text-primaryText hover:text-accent' />
          </div>
        </div>

        {isMenuOpen && (
          <div className='fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden' onClick={toggleMenu}>
            <div 
              className='absolute top-0 right-0 h-full p-6 shadow-lg w-fit bg-backgroundWhite'
              onClick={(e) => e.stopPropagation()}
            >
              <nav className='mt-10'>
                <ul className='flex flex-col gap-6 text-lg font-semibold text-primaryText'>
                  {navItems.map((item, index) => (
                    <li 
                      key={index}
                      onClick={() => handleNavigation(item.link)}
                      className='transition-colors cursor-pointer hover:text-accent'
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className='flex gap-4 mt-10'>
                <FaGithub className='h-auto transition-colors cursor-pointer w-7 text-primaryText hover:text-accent' />
                <FaLinkedin className='h-auto transition-colors cursor-pointer w-7 text-primaryText hover:text-accent' />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header