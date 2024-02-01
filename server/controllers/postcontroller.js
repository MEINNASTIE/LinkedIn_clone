import Post from "../models/PostModel.js"



// GET ALL POSTS ****************
export const handlegetposts = async (req, res) => {
    try{
        const posts = await Post.find()
        res.json({success: true, posts})
    } catch (error) {
        console.error("Error getting all posts:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
}

// CREATE A NEW POST *****************

export const handlecreate = async (req, res) => {
    try{
        const post = req.body;
        if (req.file) { // Check if the file exists
            post.image = req.file.path;
        }
        const newPost = new Post(post);
        await newPost.save();
        res.json({ success: true, newPost });

    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }

}

// DELETE POST *****************
export const handledelete = async (req, res) => {
    
    try{
        const { postId } = req.params
    const findPost = await Post.findByIdAndDelete(postId)
    res.json({success: true,  message: "Blog deleted successfully!" })

    } catch (error) {
        console.error("error delete post", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
}