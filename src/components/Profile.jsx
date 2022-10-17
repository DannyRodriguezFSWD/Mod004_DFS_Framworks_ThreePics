import { useState,useEffect } from "react";
import { getUsers } from "../service/data-service";


function User({avatar, username, bio}) {

    
    return (
        <div id="profile" className={"container-fluid"}>
                <img src={avatar} className="rounded-circle shadow-4" style={{ width: "150px"}}  alt="Avatar" />

                <h5 className="mb-2"><strong>{username}</strong></h5>
                <p className="text-muted">{bio} <span className="badge bg-primary">PRO</span></p>
            </div>

        );
    }
    
const initialState = [];

function Profile({shwP}) {
    const [users, setUsers] = useState(initialState);

    useEffect(() =>{
        getUsers().then((users) =>{
            setUsers(users);
        });
    }, []);

    console.log(shwP)

    return(
        
        <div className={shwP===true ? "p-1 show":"p-1 hide"} >
            {users.map((user, i) => (
            <User
            key={i}
            avatar={user.avatar}
            username={user.username}
            bio={user.bio}
            />
            ))}
        </div>
       
    );
}

export default Profile;