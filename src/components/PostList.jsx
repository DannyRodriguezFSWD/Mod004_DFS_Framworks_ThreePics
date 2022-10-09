import Post from "./Post";

const posts = [
    {
      img: "https://via.placeholder.com/300x250?text=300x250+MPU",
      user: "@Dan",
      description: "Example of comment for have some text",
      postDate: "3 days ago",
      likes: 25,
      comments: [],
    },
  ];
  
  function PostList() {
    return (
      <div className="d-flex p-1">
        {posts.map((post, i) => (
          <Post
            key={i}
            img={post.img}
            user={post.user}
            description={post.description}
            postDate = {post.postDate}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    );
  }
  
  export default PostList;