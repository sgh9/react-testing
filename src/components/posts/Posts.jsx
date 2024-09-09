import axios from "axios";
import { useEffect, useRef, useState } from "react"
import Post from "./Post";
import User from "./User";

const Posts = ({visible = false, isGetDataCalled, call="cs"})=> {
    const[posts, setPosts] =useState([]);
    const[user, setUser] =useState({});
    const[users, setUsers] =useState([]);
    const [userId, setUserId] =useState(1);
    const[err, setErr]=useState("");
    const callRef = useRef(0);
    // const[call, setCall] = useState();

    useEffect(()=> {
        getUsers();
        // setCall(true);
    },[])

    useEffect(()=> {
        getData();
        // getPosts()
    },[userId]);


    const getData = async()=> {
        if(!visible) return;
        callRef.current++;
        isGetDataCalled(callRef, userId);

        try {
            const newPosts = await getPosts();
    
            if(newPosts && newPosts.length && userId) {
                const newUser = await getUser();

                setPosts(newPosts);
                setUser(newUser);
            }
            if(!newPosts) throw new Error("err")

        } catch (error) {
            setErr("network err");
            console.log(error)
        }
        if(call) return;

    }

    const getPosts = async()=> {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?userId="+ userId);
            // console.log({response})
            const data = await response.data;
            // setPosts(data);
            return data;
            
        } catch (error) {
            console.log(error)
            setErr("network err");
        }
    }

    const getUser = async()=> {
        const finalUrl = "https://jsonplaceholder.typicode.com/users/" + userId;

        try {
            const response =await axios.get(finalUrl);
            const data = await response.data;
            return data;

        } catch (error) {
            console.log(error)
            setErr("network err")
        }
    }

    const getUsers = async()=> {
        const finalUrl = "https://jsonplaceholder.typicode.com/users/";

        try {
            const response =await axios.get(finalUrl);
            const data = await response.data;
           setUsers(data)

        } catch (error) {
            console.log(error)
            setErr("network err")
        }
    }

    const changeUser = (id)=> {
        setUserId(id);
    }

    if(err) return <h4 data-testid="err">{err}</h4>;

    console.log({ user:user?.name,users:users.length, posts: posts.length});
    console.log(callRef.current, "REFFFF")

    return (
        <div className="posts" data-testid="posts">
            <h2>Posts {call}</h2>
            {
                posts.length > 0 && posts.map((post, i)=> userId == post.userId && (
                    <Post post={post} key={post.id}/>
                ))
            }

            {
                users.length > 0 && users.map(user => {
                    return (
                        <button data-testid={`user-${user.id}`} key={user.id} className="btn-change-user" onClick={()=> changeUser(user.id)} style={{background: userId == user.id ? "blue": ""}}>
                        {user.username}
                    </button>
                    )
                })
            }
            <User user={user}/>

        </div>
    )
}

export default Posts;


// "jest": {
//     "testPathIgnorePatterns": [
//       "<rootDir/>src/components/posts",
//       "<rootDir/>src/components/user"
//     ]
//   }