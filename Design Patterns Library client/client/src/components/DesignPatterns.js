import React from 'react'
import useFetch from '../hooks/useFetch';
import { IoConstructSharp, PiTreeStructure } from '../assets/ReactIcons'
import { useNavigate } from 'react-router-dom';

const DesignPattern = ({designPattern}) => {
    const navigate = useNavigate();

    return (
        <div 
            key={designPattern.id}
            onClick={() => navigate(`/design-pattern/${designPattern.name}/${designPattern.id}`)}
            className='flex items-center gap-10 cursor-pointer text-primaryText'
        >
            <div className='flex flex-col items-center justify-center w-32 gap-2'>
                <IoConstructSharp className='w-auto h-10 text-primaryText' />
                <h1 className='text-xl font-semibold text-center break-words cursor-text'>{designPattern.name}</h1>
            </div>

            <div className='self-stretch border-r border-opacity-50 border-primaryText' />

            <p className='text-lg break-words w-[80ch] cursor-text'>
                {designPattern.intent}
            </p>

            <div className='self-stretch border-r border-opacity-50 border-primaryText' />
            
            <div className='flex items-center gap-2'>
                <PiTreeStructure className='w-auto h-8 text-primaryText' />
                <p className='text-lg cursor-text'>
                    Structural
                </p>
            </div>
        </div>
    )
}

const DesignPatterns = () => {
    const {data: designPatterns, isLoading, error} = useFetch('/DesignPattern');

  return (
    <div className='flex flex-col gap-10'>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {designPatterns && designPatterns.map((designPattern) => (
            <DesignPattern designPattern={designPattern} />
        ))}
    </div>
  )
}

export default DesignPatterns
