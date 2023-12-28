import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2012,
        title: 'Administrative Officer for Ministry of Goverment',
        duration: '4 years',
        details: 'Analyzed and approved budgets for goverment departments with the help of a legal and accounting team'
    },
    {
        year: 2015,
        title: 'Data Analyst for Yaky Sumaq Foundation',
        duration: '2 years',
        details: 'Collected and analyzed data on water sanitization and gender-based violence to create comprehensive reports'
    },
    {
        year: 2017,
        title: 'Admnistrator in Mamacucha Hostel',
        duration: '7 years',
        details: 'Managed day-to-day hostel operations, finances, and guest satisfaction, while also developing new programs and initiatives'
    },
    {
        year: 2022,
        title: 'Freelance Software Developer',
        duration: 'Present',
        details: 'Currently working on my own projects and web apps, while collaborating with partners'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-16'>Work</h1>
        {data.map((item, idx)=> (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))}
    </div>
  )
}

export default Work