import React, { useState } from 'react'
import { FaSortAlphaDown, FaSortAlphaUp, IoSearchOutline } from '../assets/ReactIcons'
import DesignPatterns from './DesignPatterns';

const Filters = () => {
    const filters = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Creational' },
        { id: 3, name: 'Structural' },
        { id: 4, name: 'Behavioral' },
    ]
    const [chosenFilter, setChosenFilter] = useState(1);
    const [sortAlpha, setSortAlpha] = useState(true);

    return (
        <div className='flex flex-col items-center justify-between border-b border-opacity-50 md:flex-row border-b-primaryText'>
            <div className='flex items-center w-full gap-4 overflow-x-auto md:gap-10'>
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => setChosenFilter(filter.id)}
                        className={`${chosenFilter === filter.id ? 'text-accent border-b-2 border-accent' : 'text-primaryText'} md:py-4 text-base font-semibold whitespace-nowrap`}
                    >
                        {filter.name}
                    </button>
                ))}
            </div>
            
            <div className='flex items-center w-full gap-3 py-4 md:py-0 md:flex-row md:w-auto'>
                <div className='flex items-center w-full gap-2 px-2 py-1 border border-opacity-50 rounded-md border-primaryText md:w-56 lg:w-auto'>
                    <IoSearchOutline className='w-auto h-5 text-primaryText' />
                    <input 
                        type="text" 
                        placeholder='Search for pattern...' 
                        className='w-full text-base outline-none lg:w-80 text-primaryText' 
                    />
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
    <section className='px-4 py-10 lg:px-20 text-primaryText'>
        <Filters />

        <div className='mt-8'>
            <DesignPatterns />
        </div>
    </section>
  )
}

export default PatternsCatalogue