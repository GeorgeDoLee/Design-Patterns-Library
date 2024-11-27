import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLinkedin, FaGithub } from '../../assets/ReactIcons'

const InfoColumn = ({header, items}) => {
    const navigate = useNavigate();

    return (
        <div className='text-base text-primaryText'>
            <h1 className='font-semibold'>{header}</h1>
            <ul className='flex flex-col gap-3 mt-3'>
                {items && items.map((item, index) => (
                    <li 
                        key={index}
                        onClick={() => navigate(item.link)}
                        className='transition-colors cursor-pointer hover:text-accent'
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Footer = ({navItems}) => {
    const navigate = useNavigate();
    const contactItems = [
        {
            name: 'LinkedIn',
            link: '/'
        },
        {
            name: 'GitHub',
            link: '/'
        },
        {
            name: 'Contact Info',
            link: '/'
        }
    ]

    const aboutUsItems = [
        {
            name: 'About Us',
            link: '/'
        },
        {
            name: 'Credits',
            link: '/'
        },
    ]

  return (
    <footer className='px-10 py-10 lg:px-20 mt-36'>
        <div className='flex flex-col gap-5 md:gap-10'>
            <div className='flex flex-col gap-10 md:flex-row md:gap-32 lg:gap-52'>
                <InfoColumn header='Navigation' items={navItems} />
                <InfoColumn header='Contact' items={contactItems} />
                <InfoColumn header='About' items={aboutUsItems} />
            </div>

            <div className='border-b border-opacity-50 border-primaryText' />

            <div className='flex flex-col items-center justify-between md:flex-row'>
                {/* logo placeholder */}
                <h1 
                    className='mb-4 text-xl cursor-pointer md:text-2xl text-primaryText md:mb-0'
                    onClick={() => navigate('/')}
                >
                    {'{'} DesignPatterns<span className='text-accent'>Library</span> {'}'}
                </h1>

                <div className='flex gap-4'>
                    <FaGithub className='w-6 h-6 transition-colors cursor-pointer text-primaryText hover:text-accent' />
                    <FaLinkedin className='w-6 h-6 transition-colors cursor-pointer text-primaryText hover:text-accent' />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer