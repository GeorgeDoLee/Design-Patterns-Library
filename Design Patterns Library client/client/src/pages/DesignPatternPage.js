import React from 'react'
import useFetch from '../hooks/useFetch';
import { IoConstructSharp, PiTreeStructure } from '../assets/ReactIcons'
import { useNavigate } from 'react-router-dom';

const DesignPattern = ({designPattern}) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/design-pattern/${designPattern.name}/${designPattern.id}`)}
            className='flex flex-col items-center gap-4 p-4 transition-colors rounded-md cursor-pointer md:flex-row md:gap-10 text-primaryText hover:bg-gray-100'
        >
            <div className='flex flex-col items-center justify-center w-32 gap-2 text-center'>
                <IoConstructSharp className='w-auto h-10 text-primaryText' />
                <h1 className='text-xl font-semibold break-words'>{designPattern.name}</h1>
            </div>

            <div className='self-stretch hidden border-r border-opacity-50 md:block border-primaryText' />

            <p className='text-base md:text-lg break-words text-center md:text-left w-full md:w-[80ch]'>
                {designPattern.intent}
            </p>

            <div className='self-stretch hidden border-r border-opacity-50 md:block border-primaryText' />
            
            <div className='flex items-center gap-2'>
                <PiTreeStructure className='w-auto h-8 text-primaryText' />
                <p className='text-base md:text-lg'>
                    Structural
                </p>
            </div>
        </div>
    )
}

const DesignPatterns = () => {
    const {data: designPatterns, isLoading, error} = useFetch('/DesignPattern');

  return (
    <div className='flex flex-col gap-4 md:gap-10'>
        {isLoading && <p className='text-center'>Loading...</p>}
        {error && <p className='text-center text-red-500'>{error.message}</p>}
        {designPatterns && designPatterns.map((designPattern) => (
            <DesignPattern key={designPattern.id} designPattern={designPattern} />
        ))}
    </div>
  )
}

export default DesignPatterns