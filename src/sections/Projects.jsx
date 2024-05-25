import React from 'react';
import dummyimg from '../assets/images/dummyimg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div className='w-full py-[4rem] mt-3 px-4 mb-20 text-white'>
        <div className='max-w-[1240px] mx-auto xs:px-10 text-center'>
        <h1 className='text-white md:text-4xl sm:text-2xl tracking-wide text-xl font-bold'>My Projects</h1>
          <div className='w-[100px] h-[4px] mx-auto bg-sky-300 rounded-md mt-2 mb-8'></div>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>

        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300' src={dummyimg} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Project 1</h2>
          <p className='text-base px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Projects;
