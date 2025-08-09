import {useEffect, useState } from 'react';
import * as consulta from '../../services/userService'
interface User{
    _id:string;
    username:string;
    email:string;
}
function grudUser(){
    const [users,setUsers] = useState<User[]>([]);
    useEffect(()=>{
        const data= async()=>{
            try{
                const res = await consulta.Users();
                setUsers(res.data);
            }catch(error){
                console.error(error);
            }
        };
        data();
    },[]);
    console.log(users)
    return (
        <div>
            <h1>Lista Usuarios</h1>
            <ul>
                {users.map(user=>(
                    <li key={user._id}>
                        {user.username} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default grudUser;