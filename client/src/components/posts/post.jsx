import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { usePostContext } from '../../context/post-context';
import { useUserContext } from '../../context/user-context';
import UserCard from './userItem';

const PostComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createPostHandler } = usePostContext(); 

  const { user } = useUserContext(); 
  
  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePostSubmit = (e) => {
    createPostHandler(e);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-md border z-10 w-[33.4%]">
      <div className="flex items-center mb-4">
        <div className="pr-4">
          <UserCard user={user} />
        </div>
        
        <input 
          type="text"
          className="w-full border border-gray-400 rounded-full p-2 pl-6 placeholder:font-bold"
          placeholder="Start a post"
          onClick={handlePostClick}
        />
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            {/* User Profile img display */}
            <div className="flex justify-between items-center">

            <div className="mb-3">
              <UserCard user={user} />
            </div>

            <button
              className="text-gray-600 px-4 py-2 ml-2"
              onClick={handleModalClose}
            >
              X
            </button>
            
            </div>

            <form onSubmit={handlePostSubmit}>
                <label htmlFor="title"></label>
                <input
                  type="text"
                  className="w-full mb-2 p-2 placeholder:text-gray-400"
                  placeholder="Title"
                  name="title"
                  id="title"
                />

                <label htmlFor="content"></label>
                <textarea
                  className="w-full mb-2 p-2 placeholder:text-gray-400 placeholder:text-[20px] h-28"
                  placeholder="What do you want to talk about?"
                  name="content"
                  id="content"
                />

                <label htmlFor="post-image"></label>
                <div className="flex justify-between m-2">
                <label htmlFor="post-image" className="cursor-pointer">
                  <FontAwesomeIcon icon={faImage} className="mr-2 text-gray-500" />
                </label>
                <input
                  type="file"
                  id="post-image"
                  className="hidden"
                  name="post-image"
                />
                <button
                  className="bg-gray-200 font-bold text-gray-400 px-4 py-2 rounded-full"
                >
                  Post
                </button>
                
                </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
