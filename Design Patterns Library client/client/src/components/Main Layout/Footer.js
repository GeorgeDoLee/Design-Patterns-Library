import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({navItems}) => {
    const navigate = useNavigate();

  return (
    <footer className='bg-zinc-800 px-20 py-10'>
        <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
                <nav>
                    <ul className='grid grid-cols-3 gap-10 text-base font-semibold text-white'>
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

                {/* logo placeholder */}
                <div className='bg-white w-36 h-16 rounded-full' />
            </div>

            <div className='border-b border-white' />
                        
            <p className='text-base text-white italic self-end'>
                &copy; Digital Property Of George Dolidze
            </p>
        </div>
    </footer>
  )
}

export default Footer
