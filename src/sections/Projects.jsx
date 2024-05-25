import React from 'react';
import interasian from '../assets/images/interasian.jpg';
import carolhub from '../assets/images/carolhub.jpg'
import bazura from '../assets/images/bazura.jpg'
import foodtrips from '../assets/images/foodtrips.jpg'
import parokyano from '../assets/images/parokyano.jpg'
import saad from '../assets/images/saad.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Projects = () => {
  return (
    <div className='w-full py-[4rem] mt-3 px-4 mb-18 text-white'>
        <div className='max-w-[1240px] mx-auto xs:px-10 text-center'>
        <h1 className='text-white md:text-4xl sm:text-2xl tracking-wide text-xl font-bold'>My Projects</h1>
          <div className='w-[100px] h-[4px] mx-auto bg-sky-300 rounded-md mt-4 mb-12'></div>
        </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>

        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={carolhub} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>CarolHub</h2>
          <p className='text-base px-4'>A chat app with Google Sign-In and dynamic chat rooms. </p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={bazura} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>BAZURA</h2>
          <p className='text-base px-4'>A showcasing website for the Bazura Grill with CRUD capabilities for the admin.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={foodtrips} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>FoodTrips</h2>
          <p className='text-base px-4'>A restaurant note tracking app, allowing me to remember potential restaurants and cafes to go to.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={saad} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>DCISM Inventory System</h2>
          <p className='text-base px-4'>Final Project for CIS 2201. Inventory System for the CS/IT/IS Department.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={interasian} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>Real Estate Website</h2>
          <p className='text-base px-4'>A website that displays real-estate properties through CRUD functionalities.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 rounded-lg bg-slate-800'>
          <img className='mx-auto rounded-md mt-[-1.5rem] hover:scale-105 duration-300 w-full h-48' src={parokyano} alt='/' />
          <h2 className='text-2xl font-bold px-4 py-5'>PAROKYANO <span className='text-gray-400 text-sm'>(Ongoing)</span></h2>
          <p className='text-base px-4'>A web-based, mobile responsive church management system.</p>
          <a href='' className='flex justify-end px-4 py-2'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl hover:text-sky-300' />
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Projects;
