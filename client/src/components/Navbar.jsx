import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBriefcase, faCommentDots, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import DropdownProfile from './common/dropdown-profile';

export default function Navbar() {
  return (
    <div className='bg-white py-1 px-4 flex items-center justify-between pr-60 pl-60 shadow p-4'>
      {/* Left side of the Navbar */}
      <div className='flex items-center'>
        <span className='text-blue-800 text-xl font-bold'><img src="/assets/linkedin.png" alt="" className="w-8 h-8 mr-2" /></span>
        <div className='ml-1 relative'>
          <input
            type='text'
            placeholder='Search'
            className='pl-10 pr-3 py-1.5 rounded-md bg-blue-50 outline-none text-sm placeholder:text-gray-500'
          />
          <FontAwesomeIcon icon={faSearch} className='text-gray-600 ml-2 absolute left-3 top-1/2 transform -translate-y-1/2' />
        </div>
      </div>

      {/* Right side of the Navbar */}
      <div className='flex justify-center items-center '>
        <div className='flex items-center gap-8'>
          <Link className='flex flex-col items-center text-xs mt-1' to="/homepage">
            <FontAwesomeIcon icon={faHome} className='text-gray-500 text-xl cursor-pointer' />
            Home
          </Link>
         
          
          <Link className='flex flex-col items-center' to="/networkPage">
            <FontAwesomeIcon icon={faUsers} className='text-gray-500 text-xl cursor-pointer' />
            <span className='text-xs mt-1'>My Network</span>
          </Link>
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faBriefcase} className='text-gray-500 text-xl cursor-pointer' />
            <span className='text-xs mt-1'>Jobs</span>
          </div>
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faCommentDots} className='text-gray-500 text-xl cursor-pointer' />
            <span className='text-xs mt-1'>Messaging</span>
          </div>
          <div className='flex flex-col items-center mr-20'>
            <FontAwesomeIcon icon={faBell} className='text-gray-500 text-xl cursor-pointer' />
            <span className='text-xs mt-1'>Notifications</span>
          </div>
          <div className='flex flex-col items-center'>
            <DropdownProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
