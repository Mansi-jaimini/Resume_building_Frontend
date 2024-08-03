import React from 'react';
import img3 from '../images/Footerlogo.png';

function Footer() {
  return (
    <footer className=" dark:bg-gray-900 mt-20 border-t-2 bg-slate-200">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0 flex items-center">
            <img src={img3} className="h-10 mr-3 mt-2 rounded-t-sm" alt="Resume Builder Logo" />
            <span className="text-2xl font-semibold dark:text-white">Resume Builder</span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.entrepreneurshipnetwork.net/" target='blank' className="hover:underline">The Entrepreneurship Network</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/the-entrepreneurship-network/mycompany/" target='blank' className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" target='blank' className="hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="#" target='blank' className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
