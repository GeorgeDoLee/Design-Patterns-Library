import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

  return (
    <section className='flex flex-col items-center gap-5 px-20 py-10 mx-auto w-fit text-primaryText'>
        <h1 className="text-center max-w-[40ch] text-5xl break-words font-semibold">
            Explore the Fundamental Design Patterns that Shape Object-Oriented Programming
        </h1>

        <p className='text-center max-w-[100ch] break-words text-lg'>
            This website is based on the iconic book <span className='text-accent'>Design Patterns: Elements of Reusable Object-Oriented Software</span>, providing in-depth explanations and examples of each pattern to help you implement them in your own projects.
        </p>

        <div className='flex items-center gap-5'>
            <button 
                className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText'
                onClick={() => navigate('/classification-guide')}
            >Classification Guide</button>
            <button 
                className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText'
                onClick={() => navigate('/pattern-catalogue')}
            >Pattern Catalogue</button>
            <button 
                className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText'
                onClick={() => navigate('/book')}
            >Download the Book</button>
        </div>
    </section>
  )
}

export default Hero
