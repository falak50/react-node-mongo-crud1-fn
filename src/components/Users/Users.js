import React , {useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
     const [users,setUsers] = useState([]);
     useEffect(()=>{
         fetch('http://localhost:5000/users')
         .then(res=>res.json())
         .then(data => setUsers(data));
     },[])

     // DELETE AN USE 
     const  heandleDeleteUser = id =>{
          const proceed = window.confirm('Are you sure , you want to delete?');
          if(proceed){
            const url=`http://localhost:5000/users/${id}`    
            fetch(url,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount>0){
               alert('deleted succesfully ')
               const remainingUser = users.filter(user=> user._id !== id);
               setUsers(remainingUser); 
                }
            })
          }

     }

    return (
        <div>
            <h1>Users Available :{users.length} </h1>
            <ul>
                {
                    users.map(user=> <li
                     key={user._id}
                    >{user.name} : {user.email}
                    <Link to={`/users/update/${user._id}`}><button>update</button></Link>
                    <button onClick={()=>heandleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;