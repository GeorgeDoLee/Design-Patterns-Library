import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import PatternsCatalogue from '../components/PatternsCatalogue'
import { useNavigate } from 'react-router-dom'
import DownloadBook from '../components/DownloadBook'

const CheckOut = () => {
    const navigate = useNavigate()
  
    return (
      <section className="flex flex-col items-center gap-5 px-20 py-10 mx-auto w-fit text-primaryText">
        <h2 className="text-center max-w-[40ch] text-3xl font-semibold">
          Before You Explore the Patterns
        </h2>
        
        <p className="text-center max-w-[100ch] break-words text-lg">
          We recommend reviewing the <strong className="text-accent">Classification Guide</strong> for a deeper understanding of design patterns. The guide will help you grasp the core concepts, so you can better comprehend the patterns and how they apply to object-oriented programming.
        </p>
  
        <div className="flex items-center gap-5">
          <button 
            className="px-4 py-2 text-lg font-semibold text-white rounded-md bg-primaryText"
            onClick={() => navigate('/classification-guide')}
          >
            Go to Classification Guide
          </button>
        </div>
      </section>
    )
}

const PatternCataloguePage = () => {
  return (
    <MainLayout>
        <CheckOut />
        <PatternsCatalogue />
        <DownloadBook />
    </MainLayout>
  )
}

export default PatternCataloguePage
