import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <section className='bg-gradient-to-r from-[#FBEEE9] to-[#8D6DFB]'>
       <div className='p-7 flex items-center flex-col'>
       <div className='flex justify-between items-start w-full max-custom:flex-col max-custom:items-start max-custom:gap-5 max-custom:my-5'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-[30px] font-[600]'>Naveed Islam</h1>
                <p className='w-[400px] my-3 max-custom:w-full'>I am a senior software engineer with 1 year of experience in industry standards. I have completed multiple real-time projects for clients and have deep knowledge of HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.</p>
                <div className='flex items-center gap-5 mt-5 text-[30px]'>
                <a href="https://www.instagram.com/naveed_islam20/" target='_blank'> <FaInstagramSquare className='text-[#FD16B7]' /></a>
                <a href="https://www.linkedin.com/in/naveed-islam-2a3a3a324/" target='_blank'><CiLinkedin className='text-[#0077B5]' /></a>
                </div>
                
            </div>
            <div>
                <h1 className='text-[30px] font-[600]'>Contact Me</h1>
                <p>Email:  <a href="mailto:naveedislam20ni@gmail.com">naveedislam20ni@gmail.com</a></p>
                <p className='my-3'>Phone: 03010771731</p>
                <p>Address: Johr Town, Molana shoukat Ali Road Lahore</p>
            </div>
        </div>
        <p className='font-[500]'>2024 Naveed Islam. All rights reserved.</p>
       </div>
    </section>
  )
}

export default Footer