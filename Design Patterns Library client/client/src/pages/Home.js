import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import Hero from '../components/Hero'
import PatternsCatalogue from '../components/PatternsCatalogue'
import DownloadBook from '../components/DownloadBook'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <PatternsCatalogue />
      <DownloadBook />
    </MainLayout>
  )
}

export default Home
