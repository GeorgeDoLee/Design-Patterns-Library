import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import PatternsCatalogue from '../components/PatternsCatalogue'
import { useNavigate } from 'react-router-dom'
import DownloadBook from '../components/DownloadBook'

const CheckOut = () => {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col items-center gap-5 px-4 py-5 mx-auto text-center md:px-20 w-fit text-primaryText">
      <h2 className="max-w-[40ch] text-2xl md:text-3xl break-words font-semibold">
        Before You Explore the Patterns
      </h2>
      
      <p className="max-w-[100ch] break-words text-base md:text-lg">
        We recommend reviewing the <strong className="text-accent">Classification Guide</strong> for a deeper understanding of design patterns. The guide will help you grasp the core concepts, so you can better comprehend the patterns and how they apply to object-oriented programming.
      </p>

      <div className="flex items-center gap-5">
        <button 
          className="w-full px-4 py-2 text-base font-semibold text-white transition-colors rounded-md md:w-auto md:text-lg bg-primaryText hover:bg-accent"
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
