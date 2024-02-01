import UserListComponent from "../components/posts/userList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faUser, faUsers, faCalendarDays, faFile, faNewspaper, faHashtag } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";

export default function NetworkPage() {
  return (
    <>
    <Navbar />
    <div className="flex mt-10 gap-4 mr-56 ml-56 ">
      <div className="w-64 p-4 shadow-md bg-white rounded-md">
        <h1 className="text-[18px] font-light">Manage my network</h1>
        <ul className="pt-3 flex flex-col gap-3 text-gray-500">
          <li ><FontAwesomeIcon icon={faUserGroup} className="pr-3" /> Connections</li>
          <li><FontAwesomeIcon icon={faUser} className="pr-3" /> Following & followers</li>
          <li><FontAwesomeIcon icon={faUsers} className="pr-3"/> Groups</li>
          <li><FontAwesomeIcon icon={faCalendarDays} className="pr-3" /> Events</li>
          <li><FontAwesomeIcon icon={faFile} className="pr-3"/> Pages</li>
          <li><FontAwesomeIcon icon={faNewspaper} className="pr-3"/> Newsletters</li>
          <li><FontAwesomeIcon icon={faHashtag} className="pr-3"/> Hashtags</li>
        </ul>
        <hr className="mt-4"></hr>

        <div className="flex items-center mt-4">
          <h3 className="text-[12px] font-bold text-[#0077b7] mr-1">Linked</h3>
          <img src="/assets/linkedin.png" alt="Logo" className="w-3 h-3" />
          <p className="text-[12px] pl-4">LinkedIn Corporation 2024</p>
        </div>
      </div>

      <div className="flex-1 p-4 shadow-md bg-white rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-light">People that you might know</p>
          <p className="font-bold text-gray-500">See all</p> 
        </div>
        {/* Items list component here */}
        <UserListComponent />
      </div>
    </div>
    </>
    )
}