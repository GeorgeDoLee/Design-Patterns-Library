import React from 'react'
import MainLayout from '../../components/Main Layout/MainLayout';
import Classifications from '../../components/Classifications';
import DesignPatterns from '../../components/DesignPatterns';

const AdminPage = () => {
  return (
    <MainLayout>
        <section className='px-10 py-5'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center justify-between text-base font-semibold '>
                    <div>
                        <button className='px-4 py-2 border-2 rounded-sm border-zinc-800'>Add Classification</button>
                        <button className='px-4 py-2 ml-5 border-2 rounded-sm border-zinc-800'>Add Design Pattern</button>
                    </div>
                    <button className='px-4 py-2 text-white border-2 rounded-sm border-zinc-800 bg-zinc-800'>Log Out</button>
                </div>

                <div className='border-b border-zinc-800' />
                
                <Classifications />

                <div className='border-b border-zinc-800' />

                <DesignPatterns />
            </div>
        </section>
    </MainLayout>
  )
}

export default AdminPage
