import React from 'react'
import MainLayout from '../components/Main Layout/MainLayout'
import useFetch from '../hooks/useFetch'
import DownloadBook from '../components/DownloadBook';

const Classification = ({ classification }) => {
  const descriptionLines = classification.description.split('\n');

  return (
    <div>
      <div className="flex items-center gap-3 py-2 border-b border-opacity-50 md:gap-5 border-primaryText">
        <img 
          src={`${process.env.REACT_APP_API_BASE_URL}/${classification.icon}`} 
          alt={classification.name} 
          className='w-auto h-8'
        />
        <h1 className="text-lg font-semibold md:text-xl">
          {classification.name}
        </h1>
      </div>
      <p className="mt-2 text-base text-primaryText">
        {descriptionLines.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};


const ClassificationGuidePage = () => {
  const {data: classifications, isLoading, error} = useFetch('/Classification');

  return (
    <MainLayout>
      <div className='px-4 py-5 md:px-20'>
        <h2 className='py-10 text-2xl font-semibold text-center md:text-3xl text-primaryText'>
          Understanding Design Pattern Classifications
        </h2>

        <section className='flex flex-col gap-6 md:gap-10'>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.messagee}</p>}
          {classifications && classifications.map((classification) => (
            <Classification key={classification.id} classification={classification} />
          ))}
        </section>

        <DownloadBook />
      </div>
    </MainLayout>
  )
}

export default ClassificationGuidePage