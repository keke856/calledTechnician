import { Link } from "react-router-dom";
import Style from "./style.module.scss";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import axios from 'axios';
import api from "../../api/api";



export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [token, setToken] = useState('');
  const [startLoadin,setStartLoadin] = useState(false);

  const navigate = useNavigate();
  
  useEffect(()=>{
     const saveToken = sessionStorage.getItem('token');
  
     if(saveToken)
     {
       setToken(saveToken);
     }
  
  },[]);
  
   function sendForm(e){

       e.preventDefault();

       setStartLoadin(true);


       api.post(
        'api/login',
         {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
        .then(function (response) {
            console.log(response['data']['access_token'])
          
            sessionStorage.setItem('token', response['data']['access_token']);

            sessionStorage.setItem('User',response['data']['userName']);
            sessionStorage.setItem('type',response['data']['type']);

              switch(response['data']['type']){
                case 'user':
                    navigate("/dashboard");
                  break;

                  case 'admin':
                     navigate("/dashboardAdmin");
                      break;
              }


        });

   }




 return(

     <section className={Style.main}>

           <div  className={Style.container}>
                 <form onSubmit={sendForm}>

                     <div className={Style.formControl}>
                      <label>E-mail </label>  
                        <input type="email"  onChange={(e)=>setEmail(e.target.value)} value={email} required  />
                       </div>

                       <div  className={Style.formControl}>
                           <label>Senha </label>  
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                       </div>
                       
                       <div  className={Style.formOptions}>
                         <label>
                           <input id={Style.remenberMe} type="checkbox"/>
                            Lembrar senha 
                          </label>  
                           <Link to="/register"> Esqueceu a senha? </Link>
                        </div>

                      <button className={Style.submit} >Logar</button>
                   </form>
             </div>

 
          { startLoadin &&  <div className={Style.loadin}> <SyncLoader color="#04BF45" /><p>Logando ...</p></div>}

       
       </section>
 );


}