import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({navItems}) => {
    const navigate = useNavigate();

  return (
    <header className='px-20 py-5 border-b border-zinc-800'>
      <div className='flex items-center justify-between'>
        {/* logo placeholder */}
        <div className='w-24 h-12 bg-zinc-800 rounded-full' />

        <nav>
            <ul className='flex items-center gap-10 text-lg font-semibold'>
                {navItems.map((item, index) => (
                    <li 
                        key={index}
                        onClick={() => navigate(item.link)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
