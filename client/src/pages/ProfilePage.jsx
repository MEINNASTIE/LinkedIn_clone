import Navbar from '../components/Navbar';
import RightBar from './RightBar';

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className='profile bg-gray-200 w-1/2 h-full ml-12 rounded-lg'>
        <div className='images'>
          <img src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='contain w-full h-[200px] rounded-md mt-12' />
          <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='profilePic w-32 h-32 rounded-full object-cover absolute left-12 mx-auto top-[23%]' />
        </div>
        <div className='profileContainer p-14 rounded-2xl mt-4'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-medium'>John Doe</h2>
            <p>Front-End Developer</p>
            <span className='block'>Developer looking to implement her coding skills <br /> Open to work</span>
            <div className='buttonP'>
              <button className='button1 py-1 px-2 bg-blue-500 text-white mr-2 rounded-full'>Open to</button>
              <button className='button2 py-1 px-2 border border-blue-500 text-blue-500 mr-2 rounded-full'>Add profile section</button>
              <button className='button3 py-1 px-3 border border-gray-500 text-gray-500 rounded-full'>More</button>
            </div>
          </div>
        </div>
      </div>
      <RightBar />
    </>
  )
}
