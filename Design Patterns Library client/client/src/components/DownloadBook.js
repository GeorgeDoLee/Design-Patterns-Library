import React from 'react'

const DownloadBook = () => {

  return (
    <section className="flex flex-col items-center gap-5 px-4 py-10 mx-auto mt-10 md:px-20 w-fit text-primaryText">

      <div className='flex flex-col items-center gap-6 md:flex-row md:gap-10'>
        {/* change with img later */}
        <div className='w-32 h-48 rounded-sm md:w-44 bg-primaryText md:h-60' />
        
        <div className='text-center md:text-left'>
            <h2 className="max-w-[30ch] text-xl md:text-2xl font-semibold text-accent">
                Design Patterns: Elements of Reusable Object-Oriented Software
            </h2>
            
            <p className='mt-3 md:mt-5'>
                <strong>Authors:</strong> Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
            </p>

            <button
                className="px-4 py-2 mt-4 text-base font-semibold text-white transition-colors rounded-md md:mt-5 md:text-lg bg-primaryText hover:bg-accent"
            >
                Download the Book
            </button>
        </div>
      </div>
      
      <p className="text-center max-w-[80ch] text-base md:text-lg">
          A classic guide to object-oriented design, this book provides in-depth explanations and examples of design patterns used in software development. It helps developers understand how to apply reusable object-oriented solutions to common programming problems.
      </p>
    </section>
  )
}

export default DownloadBook