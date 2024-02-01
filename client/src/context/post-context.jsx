import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../utils/api.js"
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./user-context";

export const PostContext = createContext(null);

export const usePostContext = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/post`)
        // const response = await axios.get(`${baseUrl}/`);
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getPosts();
  }, []);

  const createPostHandler = async (e) => {

    const body = new FormData();
    body.append("title", e.target.title.value);
    body.append("author", user._id);
    body.append("content", e.target.content.value);
    body.append("post-image", e.target["post-image"].files[0]);
  
    try {
      const { data: newPost } = await axios.post(`${baseUrl}/post/create`, body);
  
      setPosts((prevPosts) => [...prevPosts, newPost.newPost]);
      e.target.reset();
      navigate("/homepage");
      console.log(newPost)
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  
  const deletePostHandler = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/post/delete/${id}`);
      alert(response.data.message);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const postContextValue = {
    createPostHandler,
    deletePostHandler,
    posts,
  };

  return (
    <PostContext.Provider value={postContextValue}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;