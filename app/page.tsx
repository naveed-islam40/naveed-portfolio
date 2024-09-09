import Nav from '@/components/Nav';
import About from '@/components/About';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import Skills from '@/components/Skills';
import HireMe from '@/components/HireMe';
import Footer from '@/components/Footer';

const Page = () => {
  const buttonBaseStyle = 'relative px-8 py-2 rounded-md bg-white z-10 border-2 border-[#AD92F6] text-black';
  const buttonHoverStyle = 'before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#C8B2F2] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 overflow-hidden';
  
  return (
    <div className='overflow-hidden'>
      <Nav />
      <section className='h-full w-full bg-gradient-to-r from-[#FDF0E9] to-[#815EFD] mt-[90px] overflow-hidden'>
       
        <div className='flex justify-around items-center md:m-7 max-sm:m-7'>
          <div className='flex flex-col gap-5 max-sm:w-[250px]'>
            <h1 className='w-[400px] leading-[70px] font-nerko sm:text-[30px] md:text-[40px] lg:text-[50px] max-sm:leading-6'>
              Hire Me To Develop Your <p className='text-[#815EFD]'>Website</p> 
            </h1>
            <div className='flex'>
              <Link href="/contact" className={`${buttonBaseStyle} ${buttonHoverStyle}`}>
                Get in Touch
              </Link>
            </div>
          </div>
          <div className='border-b-2 border-[#cec3e0] rounded-md'>
            <Image src="/naveed.png" alt='Profile picture of Naveed' width={200} height={200} className='w-[400px]'/>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='w-[400px] my-6 mr-[-10px] rounded-md p-8 text-white bg-[#6B41FE]'>
            <h1 className='text-[40px] mb-3 max-sm:text-[20px]'>- Web Developer</h1>
            <p className='my-4'>Hi there! I’m Naveed Islam, a passionate web developer who loves to take challenges and create stunning web application.</p>
            <div className='flex items-center gap-5'>
              < FaPhoneAlt  className=' text-[#6B41FE] p-2 h-[30px] w-[30px] rounded-[50%] cursor-pointer bg-[#fff] '/>
              <p>03010771731</p>
            </div>
          </div> 

        </div>
      </section>
      <About />
      <Skills />
      <HireMe />
      <Footer />

    </div>
  );
}

export default Page;
