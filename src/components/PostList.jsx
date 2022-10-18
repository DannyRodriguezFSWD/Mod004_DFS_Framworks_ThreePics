import { useState,useEffect } from "react";
import { getPosts } from "../service/data-service";
import Post from "./Post";

const initialState = [];

function PostList({searchI,shwL}) {
    const [posts, setPosts] = useState(initialState);
    
    useEffect(() =>{
        getPosts().then((posts) =>{
            setPosts(posts);
        });
    }, []);    
   
    return (
        <div className={shwL===true ? "p-1 d-flex flex-wrap justify-content-center": "hide"}>
        {posts === initialState 
        ? "Loading..." 
        : posts
        .filter((e) => e.description.includes(searchI))
        .map((post, i) => (
                <Post
                key={i}
                image={post.image}
                autor={post.autor}
                description={post.description}
                createdAt = {post.createdAt}
                likes={post.likes}
                comments={post.comments}
                />
        ))}
        </div>
    );
}

export default PostList;