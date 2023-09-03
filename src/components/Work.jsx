import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2022,
        title: 'Software Engineer',
        companylogo: 'https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png',
        company: 'Tech Mahindra',
        location: 'The Hague, Netherlands',
        duration: '6 months',
        details:
            'Led 12 software releases, ensuring punctual delivery and optimizing release workflows. Enhanced data security by implementing RBAC and precise user permissions. Additionally, Developed a Java Spring Boot microservice for seamless data integration.',
    },
    {
        year: 2021,
        title: 'Test Consultant',
        companylogo: 'https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png',
        company: 'Tech Mahindra',
        location: 'The Hague, Netherlands',
        duration: '3 months',
        details:
            'Analyzed and mapped legacy systems, mitigated migration risks, and managed 600,000 customer records migration. Conducted network stack tests, ensuring no disruptions during migration.',
    },
    {
        year: 2020,
        title: 'Software Engineer',
        companylogo: 'https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png',
        company: 'Tech Mahindra',
        location: 'Pune, India',
        duration: '10 months',
        details:
            'Expedited production deployment with Python scripts, reduced manual regression work by 75%, and managed test environments in Unix. Guided the operations team and resolved production issues effectively.',
    },
    {
        year: 2017,
        title: 'Software Engineer',
        companylogo: 'https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png',
        company: 'Tech Mahindra',
        location: 'The Hague, Netherlands',
        duration: '3 years',
        details:
            'Automated tasks by 80% using Python, Robot Framework, and PL/SQL scripts. Led cross-functional teams to consolidate functionality and successfully migrated millions of customer records.',
    },
    {
        year: 2016,
        title: 'Jr Software Engineer',
        companylogo: 'https://files.techmahindra.com/static/img/brandkit/logo/Logo-True-Colors-original.png',
        company: 'Tech Mahindra',
        location: 'Pune, India',
        duration: '1 year',
        details:
            'Extracted data from Oracle databases using Django ORM and Python. Conducted various tests, identifying over 600 defects within a year to ensure system quality.',
    },
]

function Work() {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 pl-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5eec]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    companylogo={item.companylogo}
                    company={item.company}
                    location={item.location}
                    duration={item.duration}
                    details={item.details} />
            ))}
        </div>
    )
}

export default Work