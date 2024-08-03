import React from 'react';
import img2 from '../images/blackWhite.jpeg';
import img3 from '../images/FresherResume1.jpg';
import img4 from '../images/ExpreinceResume1.png';
import img5 from '../images/one.png';
import img6 from '../images/two.png';
import img7 from '../images/three3.png';
import img8 from '../images/four.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-around items-center lg:items-start mt-16 px-5'>
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl lg:text-6xl lg:mt-20 lg:text-center font-bold text-shadow shadow-slate-600'>AI Resume Builder</h1>
          <p className='mt-4 text-lg lg:text-xl text-shadow-sm shadow-slate-600 lg:text-center'>Create a standout resume with our intuitive builder! Choose from sleek templates, customize effortlessly, and impress employers. Elevate your job search and land your dream job today!</p>
          <Link to={'/login'}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 mt-10 lg:translate-x-96 lg:ml-16 font-bold'>Get Started Now</button>
          </Link>
        </div>
        <div className='mt-10 lg:mt-0'>
          <img src={img2} alt="Resume example" className='rounded-3xl shadow-xl shadow-black hover:shadow-md hover:shadow-black'/>
        </div>
      </div>
      <div className='mt-16 px-5'>
        <h1 className='text-4xl lg:text-7xl font-bold text-center text-shadow shadow-slate-600'>Resume Templates for Every Career Path</h1>
        <p className='mt-8 text-lg lg:text-xl text-center text-shadow-sm shadow-slate-600'>You can pick one of our handcrafted resume templates above. Start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. Customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume before!</p>
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='flex flex-col items-center m-4'>
            <img src={img3} alt="Fresher Resume" className='h-96 object-cover' />
            <h3 className='text-2xl font-bold mt-4 text-blue-500'>Fresher Resume Template</h3>
            <p className='text-blue-400'>No experience? No problem!</p>
          </div>
          <div className='flex flex-col items-center m-4'>
            <img src={img4} alt="Experience Resume" className='h-96 object-cover' />
            <h3 className='text-2xl font-bold mt-4 text-blue-500'>Experienced Template</h3>
            <p className='text-blue-400 text-center'>Put your best foot forward with a professional resume template.</p>
          </div>
        </div>
      </div>
      <div className='mt-16 px-5'>
        <h1 className='text-4xl lg:text-7xl font-bold text-center text-shadow shadow-slate-600'>Build Your Resume Fast and Easy</h1>
        <p className='mt-8 text-lg lg:text-xl text-center text-shadow-sm shadow-slate-600'>Resume Builder is lightning fast. No software to download. No multi-part sign-up form. No long-winded tutorials. Just a straightforward process.</p>
        <div className='mt-10'>
          <div className='flex flex-col lg:flex-row justify-center items-center bg-slate-400 p-4'>
            <img src={img5} alt="Step 1" className='h-28' />
            <div className='lg:ml-10'>
              <h3 className='text-4xl font-bold text-shadow-sm shadow-slate-600'>Pick a Template</h3>
              <p className='mt-2 text-lg text-shadow-sm shadow-slate-600'>Choose from our ATS-friendly, hand-crafted resume templates.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center mt-10 p-4'>
            <img src={img6} alt="Step 2" className='h-28' />
            <div className='lg:ml-10'>
              <h3 className='text-4xl font-bold text-shadow-sm shadow-slate-600'>Customize Your Layout</h3>
              <p className='mt-2 text-lg text-shadow-sm shadow-slate-600'>Make the resume template truly your own. Customize the layout based on your experience level.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center bg-slate-400 p-4 mt-10'>
            <img src={img7} alt="Step 3" className='h-28' />
            <div className='lg:ml-10'>
              <h3 className='text-4xl font-bold text-shadow-sm shadow-slate-600'>Fill in the Blanks</h3>
              <p className='mt-2 text-lg text-shadow-sm shadow-slate-600'>Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center mt-10 p-4'>
            <img src={img8} alt="Step 4" className='h-28' />
            <div className='lg:ml-10'>
              <h3 className='text-4xl font-bold text-shadow-sm shadow-slate-600'>Hit 'Download!'</h3>
              <p className='mt-2 text-lg text-shadow-sm shadow-slate-600'>And yes, it's free! We don't hit you with a paywall once you've completed your resume. If you use any premium features, the software will let you know.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16 px-5'>
        <h1 className='text-4xl lg:text-7xl font-bold text-shadow shadow-slate-600 text-center'>Why Us?</h1>
        <div className='flex flex-wrap justify-evenly mt-10'>
          <div className='w-full lg:w-1/3 p-4'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>Free</h2>
            <p className='mt-2 text-lg text-slate-700'>Create your resume for free.</p>
          </div>
          <div className='w-full lg:w-1/3 p-4'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>Creative and Professional Resume Templates</h2>
            <p className='mt-2 text-lg text-slate-700'>Whether it's a classic template or something more unique, we have what you need!</p>
          </div>
          <div className='w-full lg:w-1/3 p-4'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>Edit Your Resume in Real Time</h2>
            <p className='mt-2 text-lg text-slate-700'>See changes to your resume instantly as you edit.</p>
          </div>
          <div className='w-full lg:w-1/3 p-4 mt-10 lg:mt-0'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>AI Assistant</h2>
            <p className='mt-2 text-lg text-slate-700'>Receive real-time feedback to improve your resume content.</p>
          </div>
          <div className='w-full lg:w-1/3 p-4 mt-10 lg:mt-0'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>ATS-Friendly</h2>
            <p className='mt-2 text-lg text-slate-700'>Our templates are ATS-friendly, ensuring your resume gets noticed.</p>
          </div>
          <div className='w-full lg:w-1/3 p-4 mt-10 lg:mt-0'>
            <h2 className='text-2xl font-bold text-shadow-sm shadow-slate-600'>No Hidden Fees</h2>
            <p className='mt-2 text-lg text-slate-700'>No surprise charges. Know upfront if you're using any premium features.</p>
          </div>
        </div>
      </div>
      <div className='mt-16 text-center'>
        <h1 className='text-4xl font-bold text-shadow-sm shadow-slate-600'>Ready to Jump-Start Your Career?</h1>
        <Link to={'/login'}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 mt-10 font-bold'>Get Started Now</button>
        </Link>
      </div>
    </>
  )
}

export default Home;
