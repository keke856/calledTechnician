import { useEffect, useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';



// import {
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   useNavigate, 
//   Outlet,
//   redirect ,
//   BrowserRouter
// } from "react-router-dom";

import { useNavigate } from "react-router-dom";


export default function  Teste(){

   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [token, setToken] = useState('');
   const navigate = useNavigate();

   useEffect(()=>{
      const saveToken = localStorage.getItem('token');

      if(saveToken)
      {
        setToken(saveToken);
      }

   },[]);




function login(e){

  e.preventDefault();


  axios({
    method: 'POST',
    url: process.env.REACT_APP_API+'login',
    data: {
      email: email,
      password: password
    }
  })
    .then(function (response) {
        console.log(response['data']['access_token'])
      
        localStorage.setItem('token', response['data']['access_token']);
       navigate("/dashboard");
    });

   

}



 
  return(

      <form onSubmit={login}>
             <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email"/>
             <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Senha" />

             <button type="submit">Logar</button>
        </form>
  );


}