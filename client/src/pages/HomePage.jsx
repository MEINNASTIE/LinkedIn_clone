import Navbar from "../components/Navbar.jsx";
import PostComponent from "../components/posts/post.jsx";
import { usePostContext } from "../context/post-context.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import UserCard from "../components/posts/userItem.jsx";
import { useUserContext } from "../context/user-context.jsx";


export default function Homepage() {
  const { posts, deletePostHandler } = usePostContext();
  const { user } = useUserContext(); 

  const handleDelete = (postId) => {
    // Call your deletePost function from the context with the postId
    deletePostHandler(postId);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-2 mb-2">
      <PostComponent/>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="w-1/3 flex flex-col bg-white shadow-md rounded-md relative">
              <div className="pl-6 pt-2 mt-1">
                <h2>{post.title}</h2>
                <p className="text-sm font-medium text-gray-900">{post.author.username || 'Unknown user'}</p> 

                <p className="text-gray-700 mb-4">{post.content}</p>
              </div>
              {post.image && (
              <img
                className="max-w-full w-[60%] h-auto mx-auto"
                src={post.image}
                alt="Post"
              />
              
              
            )}

            <div className="pl-4">
            {/* <UserCard user={user} /> */}

            <hr className="mt-3"></hr>
            </div>
            <div className="flex justify-between mt-4 pr-5 pl-5 pb-4">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faHeart} className="text-gray-400 cursor-pointer" />
                  <FontAwesomeIcon icon={faComment} className="text-gray-400 cursor-pointer" />
                  <FontAwesomeIcon icon={faShare} className="text-gray-400 cursor-pointer" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-gray-400 cursor-pointer" />
                </div>
              </div>
              
             <div
                className="cursor-pointer px-2 rounded-md mt-2 absolute hover:rounded-full hover:bg-gray-100 transition duration-300 ease-in-out right-2 text-gray-600"
                onClick={() => handleDelete(post._id)}
              > X
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}



