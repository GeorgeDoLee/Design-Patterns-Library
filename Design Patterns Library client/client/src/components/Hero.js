import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

  return (
    <section className='flex flex-col items-center gap-5 px-4 py-5 mx-auto text-center md:px-20 w-fit text-primaryText'>
        <h1 className="max-w-[40ch] text-2xl md:text-5xl break-words font-semibold">
            Explore the Fundamental Design Patterns that Shape Object-Oriented Programming
        </h1>

        <p className='max-w-[100ch] break-words text-base md:text-lg'>
            This website is based on the iconic book <span className='text-accent'>Design Patterns: Elements of Reusable Object-Oriented Software</span>, providing in-depth explanations and examples of each pattern to help you implement them in your own projects.
        </p>

        <div className='flex items-center gap-2 md:gap-5'>
            {[
                { title: 'Classification Guide', link: '/classification-guide'},
                { title: 'Pattern Catalogue', link: '/patterns-catalogue'},
                { title: 'Download the Book', link: '/book'}
            ].map((item, index) => (
                <button 
                    key={index}
                    className='p-2 text-sm text-white transition-colors rounded-md font-semibld md:w-auto md:text-lg bg-primaryText hover:bg-accent'
                    onClick={() => navigate(item.link)}
                >{item.title}</button>
            ))}
        </div>
    </section>
  )
}

export default Hero
