import React from 'react'

const WorkItem = ({year, title, companylogo, company, location, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-m' >
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md' >{year}</span>
                <img src={companylogo} alt={company} className='inline-block w-20 h-5' />
                <span className='text-lg font-bold' >{title}</span>
                <span className='text-lg font-normal ' >{location}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-400' >{duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-stone-500' >{details}</p >
        </li>
    </ol>
  )
}

export default WorkItem