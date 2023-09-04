import React from 'react'
import ProjectItem from './ProjectItem'
import auctionSystemImg from '../assets/AuctionSystem.png'
import ghostsInTheMazeImg from '../assets/GhostsInTheMaze.png'

const data = [
    {
        projectName: 'Auction System',
        imgUrl: auctionSystemImg,
        techStack: 'Java, MySQL, PL/SQL, HTML/CSS, JavaScript, Bootstrap',
        gitHubUrl: 'https://github.com/kunjanvaghela/AuctionSystem',
    },
    {
        projectName: 'Ghosts in the Maze',
        imgUrl: ghostsInTheMazeImg,
        techStack: 'Python, PyTorch',
        gitHubUrl: 'https://github.com/kunjanvaghela/GhostsInTheMaze',
    },
]

function Projects() {
  return ( 
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] py-5'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
            {data.map((item, idx) => (
                <ProjectItem
                    key={idx}
                    title={item.projectName}
                    img={item.imgUrl}
                    techStack={item.techStack}
                    gitHubUrl={item.gitHubUrl}
                    />
            ))}
        </div>

    </div>
  )
}

export default Projects 