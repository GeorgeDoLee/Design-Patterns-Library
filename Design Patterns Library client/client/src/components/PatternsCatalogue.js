import React, { useState } from 'react'
import { FaSortAlphaDown, FaSortAlphaUp, IoSearchOutline } from '../assets/ReactIcons'
import DesignPatterns from './DesignPatterns';

const Filters = () => {
    const filters = [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'Creational'
        },
        {
            id: 3,
            name: 'Structural'
        },
        {
            id: 4,
            name: 'Behavioral'
        },
    ]
    const [chosenFilter, setChosenFilter] = useState(1);
    const [sortAlpha, setSortAlpha] = useState(true);

    return (
        <div 
            className='flex items-center justify-between border-b border-opacity-50 border-b-primaryText'
        >
            <div className='flex items-center gap-10'>
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        onClick={() => setChosenFilter(filter.id)}
                        className={`${chosenFilter === filter.id ? 'text-accent border-b-2 border-accent' : 'text-primaryText'} py-4 text-base font-semibold`}
                    >
                        {filter.name}
                    </button>
                ))}
            </div>
            
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2 px-2 py-1 border border-opacity-50 rounded-md border-primaryText'>
                    <IoSearchOutline className='w-auto h-5 text-primaryText' />
                    <input type="text" placeholder='Search for pattern...' className='text-base outline-none w-80 text-primaryText' />
                </div>

                <div>
                    {sortAlpha ? 
                        <FaSortAlphaDown 
                            className='w-auto h-5 cursor-pointer text-primaryText' 
                            onClick={() => setSortAlpha(prev => !prev)}
                        />
                        :
                        <FaSortAlphaUp 
                            className='w-auto h-5 cursor-pointer text-primaryText' 
                            onClick={() => setSortAlpha(prev => !prev)}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

const PatternsCatalogue = () => {
  return (
    <section className='px-20 py-10 text-primaryText'>
        <Filters />

        <div className='mt-8'>
            <DesignPatterns />
        </div>
    </section>
  )
}

export default PatternsCatalogue
