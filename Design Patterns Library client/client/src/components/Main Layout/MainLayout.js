import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({children}) => {
    const navItems = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Patterns Catalogue',
        link: '/patterns-catalogue'
      },
      {
        name: 'Book',
        link: '/book'
      },
      {
        name: 'About us',
        link: '/about-us'
      },
      {
        name: 'Contact us',
        link: '/contact-us'
      }
    ];

    return (
      <div className='flex flex-col min-h-screen'>
        <Header navItems={navItems} />
        <div className='flex-grow '>
          {children}
        </div>
        <Footer navItems={navItems} />
      </div>
    )
  }

export default MainLayout