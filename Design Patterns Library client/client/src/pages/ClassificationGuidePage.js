import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import { IoConstructSharp } from '../assets/ReactIcons'

const Classification = ({ icon: Icon, name, description }) => {
  return (
    <div>
      <div className='flex items-center gap-3 py-2 border-b border-opacity-50 md:gap-5 border-primaryText'>
        <Icon className='w-auto h-6 md:h-8 text-primaryText' />
        <h1 className='text-lg font-semibold md:text-xl'>
          {name}
        </h1>
      </div>
      <p className='mt-2 text-base text-primaryText'>
        {description}
      </p>
    </div>
  )
}

const ClassificationGuidePage = () => {
  return (
    <MainLayout>
      <div className='px-4 py-5 md:px-20'>
        <section className='mb-10'>
          <h2 className='text-2xl font-semibold text-center md:text-3xl text-primaryText'>
            Understanding Design Pattern Classifications
          </h2>
          <p className='mt-4 text-base text-center md:text-lg text-primaryText'>
            Design patterns are essential tools in object-oriented programming, helping to solve common problems in software design. In this section, we will explore how design patterns are classified into three main categories: Structural, Creational, and Behavioral. These classifications serve to organize patterns based on their scope, purpose, and intent, making it easier to choose the right pattern for specific challenges in software development.
          </p>
        </section>

        <section className='flex flex-col gap-6 md:gap-10'>
          {[ 
            { icon: IoConstructSharp, name: 'Structural', description: 'Structural design patterns deal with object composition and how objects can be arranged to form larger structures.' },
            { icon: IoConstructSharp, name: 'Creational', description: 'Creational design patterns focus on object creation mechanisms, trying to create objects in a manner suitable for the situation.' },
            { icon: IoConstructSharp, name: 'Behavioral', description: 'Behavioral design patterns focus on communication between objects, defining the patterns of interaction.' },
          ].map((item, index) => (
            <Classification key={index} {...item} />
          ))}
        </section>
      </div>
    </MainLayout>
  )
}

export default ClassificationGuidePage