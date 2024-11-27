import React from 'react'

const DownloadBook = () => {

  return (
    <section className="flex flex-col items-center gap-5 px-20 py-10 mx-auto mt-10 w-fit text-primaryText">

      <div className='flex items-center gap-10'>
        {/* change with img later */}
        <div className='rounded-sm w-36 bg-primaryText h-52' />
        
        <div>
            <h2 className="max-w-[30ch] text-2xl font-semibold text-accent">
                Design Patterns: Elements of Reusable Object-Oriented Software
            </h2>
            
            <p className='mt-5'>
                <strong>Authors:</strong> Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
            </p>

            <button
                className="px-4 py-2 mt-5 text-lg font-semibold text-white rounded-md bg-primaryText"
                // onClick={}
            >
                Download the Book
            </button>
        </div>
      </div>
      
        
        <p className="text-center max-w-[80ch] text-lg">
            A classic guide to object-oriented design, this book provides in-depth explanations and examples of design patterns used in software development. It helps developers understand how to apply reusable object-oriented solutions to common programming problems.
        </p>
    </section>
  )
}

export default DownloadBook
