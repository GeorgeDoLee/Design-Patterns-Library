import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

const MainLayout = ({children}) => {
    const navItems = [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Classification Guide',
        link: '/classification-guide'
      },
      {
        name: 'Patterns Catalogue',
        link: '/patterns-catalogue'
      },
      {
        name: 'Download Book',
        link: '/book'
      }
    ];

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div className='flex flex-col min-h-screen bg-backgroundWhite'>
        <Header navItems={navItems} />
        <div className='flex-grow '>
          {children}
        </div>
        <Footer navItems={navItems} />
      </div>
    )
}

export default MainLayout
