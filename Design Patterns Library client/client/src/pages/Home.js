import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import Hero from '../components/Hero'
import PatternsCatalogue from '../components/PatternsCatalogue'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <PatternsCatalogue />
    </MainLayout>
  )
}

export default Home
