import heart from '../icons/w-heart.svg';
import msn from '../icons/message.svg';

function Post({ user, img, description,likes, postDate }) {
    return (
      <div className="card m-1" style={{ width: "100%", maxWidth: "23em" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
        <div className="d-flex container-fluid postStatus">
            <div className='postDate'><span>{postDate}</span></div>
            <div className='postLike'>
                <button className="btn btn-danger"><img className='icon' src={heart} alt="" /> {likes} likes</button>
            </div>
            
        </div>
            
          <h5 className="card-title">{user || "default title"}</h5>
          <p className="card-text">{description}</p>
          <p><span><img className='icon' src={msn} alt="" /> Comments</span> 0</p>
        </div>
      </div>
    );
  }
  
  export default Post;