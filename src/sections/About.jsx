import React from 'react';
import me2 from '../assets/images/me2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className='w-full h-screen py-24 px-4 mt-20 text-white md:text-justify xs:text-center'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img 
          className='md:w-[500px] md:h-[500px] xs:h-[370px] mx-auto my-4 rounded-full border-solid border-[8px] border-slate-800 shadow-lg shadow-slate-400' 
          src={me2}
          style={{ borderRightWidth: '32px', borderBottomWidth: '32px' }} 
        />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-5xl xs:text-2xl font-[Tahoma] tracking-wider font-bold py-4'>Jolony Tim N. Tangpuz</h1>
          <div className='md:w-[170px] xs:w-[100px] h-[4px] bg-sky-300 rounded-md mb-5 md:mx-0 xs:mx-auto'></div>
          <p className='md:text-justify mb-6 md:text-2xl xs:text-lg xs:text-center ml-2'>
            Aspiring Full-Stack Software Developer
          </p>
          <div className='flex space-x-8 mb-6 md:ml-2 md:justify-start xs:justify-center'>
            <a href='' className='text-white hover:text-gray-400'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
            <a href='' className='text-white hover:text-gray-400'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a href='' className='text-white hover:text-gray-400'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
            <a href='' className='text-white hover:text-gray-400'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </div>
          <span className='font-medium'>
            <Link to='contact'  spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300} className='border-solid mr-6 rounded-full py-3 px-5 bg-neutral-200 cursor-pointer hover:bg-neutral-100 text-black'>
              Contact Me
              <FontAwesomeIcon icon={faContactBook} className='ml-2' />
            </Link>
            <button className='border-solid rounded-full py-3 px-5 bg-sky-700 hover:bg-sky-600'>
              Download CV
              <FontAwesomeIcon icon={faDownload} className='ml-2' />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
