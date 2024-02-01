import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/api'; 
import { useUserContext } from '../../context/user-context'; 

export default function UserListComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUserContext();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const response = await axios.get('http://localhost:4500/user/getallusers'); // change PORT accordingly when needed :)
        const response = await axios.get(`${baseUrl}/user/getallusers`)

        console.log('Users received from the backend:', response.data);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user._id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={user.profileImage || 'default-profile-image.jpg'}  
              alt={user.username}
              className="w-16 h-16 rounded-full mb-2 mx-auto"
            />
            <h3 className="text-lg font-bold mb-2">{user.username}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <input type="text" name="jobtitle" placeholder="Job Title" value={user.jobtitle}  />
                <input type="text" name="company" placeholder="Company" value={user.company}  />
                <input type="text" name="skills" placeholder="Skills" value={user.skills}  />
                <textarea name="bio" placeholder="Bio" value={user.bio}  />
          </div>
        ))
      )}
    </div>
  );
}


