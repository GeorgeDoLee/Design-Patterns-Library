import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    <footer className='px-20 py-10'>
        <div className='flex flex-col gap-10'>
            <div className='flex gap-52'>
                <InfoColumn header='Navigation' items={navItems} />
                <InfoColumn header='Contact' items={contactItems} />
                <InfoColumn header='About' items={aboutUsItems} />
            </div>

            <div className='border-b border-primaryText' />

             {/* logo placeholder */}
            <div onCanPlay={() => navigate('/')} className='h-12 rounded-full w-36 bg-primaryText' />
        </div>
    </footer>
  )
}

export default Footer
