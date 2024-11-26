import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';

const DesignPattern = ({designPattern}) => {
    return (
        <div 
            key={designPattern.id}
            className='text-zinc-800 w-fit'
        >
            <div className='flex items-center justify-between gap-10'>
                <div>
                    <h1 className='text-3xl'>{designPattern.name}</h1>
                    <h2 className='mt-1 text-base italic'>AKA: {designPattern.alsoKnownAs}</h2>
                </div>

                <div className='flex flex-col items-end'>
                    <h1 className='text-base italic'>classification: {designPattern.classification.name}</h1>
                    <div className='flex gap-5'>
                        <p className='text-sm italic'>purpose: {designPattern.classification.purpose}</p>
                        <p className='text-sm italic'>scope: {designPattern.classification.scope}</p>
                    </div>
                </div>
            </div>

            <p className='mt-1 text-lg'>{designPattern.intent}</p>
        </div>
    )
}

const DesignPatterns = () => {
    const {data: designPatterns, isLoading, error} = useFetch('/DesignPattern');

  return (
    <div className='grid grid-cols-2 gap-10'>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {designPatterns && designPatterns.map((designPattern) => (
            <DesignPattern designPattern={designPattern} />
        ))}
    </div>
  )
}

export default DesignPatterns
