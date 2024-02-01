import { useState } from 'react';
import { Link } from 'react-router-dom';

import UserCard from '../posts/userItem';
import { useUserContext } from '../../context/user-context';


export default function DropdownProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext(); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container relative inline-block">
      <button
        onClick={toggleDropdown}
        className="text-[14px]"
      >
       <UserCard user={user} />
      </button>
      {isOpen && (
        <div className="dropdown-list absolute mt-2 p-4 bg-white border rounded shadow w-[200px]">
          <ul>
            <li className="mb-2">
                <Link to="/profilePage">
                <button className="border border-blue-600 rounded-full font-bold text-blue-600 px-5 hover:bg-gray-100 transition duration-300 ease-in-out w-full text-[14px] mb-2">View Profile</button>
                </Link>
            </li>
            <hr></hr>
            <li className="mb-2">
                <h3 className="font-bold">Account</h3>
                <div className="font-light text-gray-500">
                  <p>Settings & Privacy</p>
                  <p>Help</p>
                  <p>Language</p>  
                </div>
            </li>
            <hr></hr>
            <li className="mb-2">
                <h3 className="font-bold">Manage</h3>
                <div className="font-light text-gray-500">
                   <p>Posts & Activity</p>
                   <p>Job Posting Account</p> 
                </div>
            </li>
            <hr></hr>
            <li className="mt-2">
                <Link to="/" className="hover:underline text-gray-500">Sign Out</Link> 
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

