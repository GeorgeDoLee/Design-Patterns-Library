import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/Main Layout/MainLayout'

const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <MainLayout>
        <section className='flex flex-col items-center gap-5 px-20 py-10 mx-auto w-fit text-primaryText'>
            <h1 className="text-center max-w-[40ch] text-5xl break-words font-semibold">
                Oops! Something Went Wrong
            </h1>

            <p className='text-center max-w-[100ch] break-words text-lg'>
                We couldn't find the page you're looking for. It might have been moved or deleted.
            </p>

            <div className='flex items-center gap-5'>
                <button 
                    className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText'
                    onClick={() => navigate('/')}
                >Go Back to Home</button>
                <button 
                    className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText'
                    onClick={() => navigate('/contact')}
                >Contact Support</button>
            </div>
        </section>
    </MainLayout>
  )
}

export default ErrorPage
