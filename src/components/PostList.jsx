import { useState,useEffect } from "react";
import { getPosts } from "../service/data-service";
import Post from "./Post";

const initialState = [];

function PostList({searchI}) {
    const [posts, setPosts] = useState(initialState);
    
    useEffect(() =>{
        getPosts().then((posts) =>{
            setPosts(posts);
        });
    }, []);    
   
    return (
        <div className="p-1 d-flex flex-wrap justify-content-center">
        {posts === initialState 
        ? "Loading..." 
        : posts
        .filter((e) => e.description.includes(searchI))
        .map((post, i) => (
                <Post
                key={i}
                image={post.image}
                autor={post.author}
                text={post.text}
                createdAt = {post.updatedAt}
                likes={post.likes}
                comments={post.comments}
                />
        ))}
        </div>
    );
}

export default PostList;