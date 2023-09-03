import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
        <img className='w-full h-screen object-cover object-right scale-x-[-1]' src="https://i.pinimg.com/originals/10/85/9d/10859d48896041068ada4c5a0a3f212a.jpg" alt="Image Issue" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Kunjan Vaghela</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I am a Tech Enthusiast',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I am a Coder',
                            1000,
                            'I am a Full Stack Developer',
                            1000,
                            'I am a Tester',
                            1000,
                            'AI Engineer',
                            1000
                        ]}
                        wrapper="div"
                        speed={50}
                        cursor={true}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                        />
                </h2>
                <div className='flex pt-6 justify-between w-full max-w-[200px]'>
                    <FaLinkedin size={20} className='cursor-pointer' onClick={ () => window.open('https://www.linkedin.com/in/kunjan-vaghela/') } />
                    <FaGithub size={20} className='cursor-pointer' onClick={ () => window.open('https://github.com/kunjanvaghela/') } />
                    <FaInstagram size={20} className='cursor-pointer' onClick={ () => window.open('https://www.instagram.com/kunjanvaghela/') } />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main