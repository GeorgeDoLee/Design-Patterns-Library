import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/Main Layout/MainLayout'

const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <MainLayout>
        <section className='flex flex-col items-center gap-5 px-4 py-10 mx-auto md:px-20 w-fit text-primaryText'>
            <h1 className="text-center max-w-[40ch] text-3xl md:text-5xl break-words font-semibold">
                Oops! Something Went Wrong
            </h1>

            <p className='text-center max-w-[100ch] break-words text-base md:text-lg'>
                We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>

            <div className='flex flex-col items-center gap-4 md:flex-row md:gap-5'>
                <button 
                    className='w-full px-4 py-2 text-base font-semibold text-white transition-colors rounded-md md:w-auto md:text-lg bg-primaryText hover:bg-accent'
                    onClick={() => navigate('/')}
                >Go Back to Home</button>
                <button 
                    className='w-full px-4 py-2 text-base font-semibold text-white transition-colors rounded-md md:w-auto md:text-lg bg-primaryText hover:bg-accent'
                    onClick={() => navigate('/contact')}
                >Contact Support</button>
            </div>
        </section>
    </MainLayout>
  )
}

export default ErrorPage
