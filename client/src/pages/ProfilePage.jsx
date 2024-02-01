// import Navbar from '../components/Navbar';
// import RightBar from './RightBar';
// import { useUserContext } from '../context/user-context'; 

// export default function ProfilePage() {
//   const { user } = useUserContext(); 

//   return (
//     <>
//       <Navbar />
//       <div className='profile bg-gray-200 w-1/2 h-full ml-12 rounded-lg'>
//         <div className='images'>
//           <img src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='contain w-full h-[200px] rounded-md mt-12' />
//           <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='profilePic w-32 h-32 rounded-full object-cover absolute left-12 mx-auto top-[23%]' />
//         </div>
//         <div className='profileContainer p-14 rounded-2xl mt-4'>
//           <div className='flex flex-col gap-5'>
//             <h2 className='text-3xl font-medium'>{user.username}</h2>
//             <p>{user.jobtitle ? user.jobtitle : ''}</p>
//             <p>{user.company ? user.company : ''}</p>
//             <p>{user.skills ? user.skills : ''}</p>
//             <span className='block'>{user.bio ? user.bio : ''}</span>
//             <div className='buttonP'>
//               <button className='button1 py-1 px-2 bg-blue-500 text-white mr-2 rounded-full'>Complete profile</button>
//               <button className='button3 py-1 px-3 border border-gray-500 text-gray-500 rounded-full'>More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <RightBar />
//     </>
//   )
// }
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RightBar from './RightBar';
import { useUserContext } from '../context/user-context';

export default function ProfilePage() {
  const { user, updateUserProfile } = useUserContext();  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    jobtitle: user.jobtitle || '',
    company: user.company || '',
    skills: user.skills || '',
    bio: user.bio || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(formData); 
    setShowForm(false);
  };

  return (
    <>
      <Navbar />
      <div className='profile bg-gray-200 w-1/2 h-full ml-12 rounded-lg'>
        <div className='images'>
          {/* Your images here */}
       <img src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='contain w-full h-[200px] rounded-md mt-12' />
       <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='profilePic w-32 h-32 rounded-full object-cover absolute left-12 mx-auto top-[23%]' />

        </div>
        <div className='profileContainer p-14 rounded-2xl mt-4'>
          <div className='flex flex-col gap-5'>
            {/* Display user information here */}
            <h2 className='text-3xl font-medium'>{user.username}</h2>
                 <p>{user.jobtitle ? user.jobtitle : ''}</p>
                 <p>{user.company ? user.company : ''}</p>
                 <p>{user.skills ? user.skills : ''}</p>
                <span className='block'>{user.bio ? user.bio : ''}</span>
            <button className='button1 py-1 px-2 bg-blue-500 text-white mr-2 rounded-full' onClick={() => setShowForm(!showForm)}>Complete profile</button>
            {showForm && (
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input type="text" name="jobtitle" placeholder="Job Title" value={formData.jobtitle} onChange={handleChange} />
                <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} />
                <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} />
                <button type="submit" className='py-1 px-3 bg-green-500 text-white rounded-full'>Save Profile</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <RightBar />
    </>
  );
}
