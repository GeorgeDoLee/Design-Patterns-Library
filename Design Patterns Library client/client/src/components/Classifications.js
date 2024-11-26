import React from 'react'
import useFetch from '../hooks/useFetch';

const Classification = ({classification}) => {
    return (
        <div 
            key={classification.id}
            className='p-4 border-2 rounded-sm border-zinc-800 text-zinc-800'
        >
            <div className='flex items-center justify-between gap-5'>
                <h1 className='text-3xl'>{classification.name}</h1>
                <div className='flex flex-col mt-2 text-sm'>
                    <p>
                        <span className='font-semibold'>purpose:</span> <span className='italic'>{classification.purpose}</span>
                    </p>
                    <p>
                        <span className='font-semibold'>scope:</span> <span className='italic'>{classification.scope}</span>
                    </p>
                </div>
            </div>
            <p className='mt-2 text-base italic'>{classification.description}</p>
        </div>
    )
}

const Classifications = () => {
    const {data: classifications, isLoading, error} = useFetch('/Classification');

  return (
    <div className='flex flex-wrap items-center gap-5'>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {classifications && classifications.map((classification) => (
            <Classification classification={classification} />
        ))}
    </div>
  )
}

export default Classifications
