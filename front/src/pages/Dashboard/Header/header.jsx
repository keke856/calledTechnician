
import Modal from "../../../components/Modal/Modal";
import Style from "./header.module.scss";
import userImg from "./user.png";
import logo from "./logo.svg";
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";

export default function header({setOpenModalUser}){

    const [dropdown,setDropdown] = useState(false);

    function dropdownActive(){
        setDropdown(!dropdown);
    }


    
    const navigate = useNavigate();


    function logout(){
      sessionStorage.removeItem('token');
        navigate("/login"); 
    }

   

    return(
       <> 
        <header>

        <div className={Style.container}>

             <div>
                logo
                  {/* <img src={logo} alt="logo" /> */}
                </div>

              
                              
                <div className={Style.user}>
                    <div onClick={()=>dropdownActive()}>
                        <img src={userImg} />
                    </div>

                    <ul className={`${dropdown ? "" : Style.hidden} ${Style.dropdownUser}`}>
                        <li onClick={()=>setOpenModalUser(true)}>  <Link to="/userClient"> Alterar dados</Link></li>
                        <li onClick={()=>logout()}>Logout</li>
                    </ul>
                </div>



            </div>
        </header>

       

        </>
    );
}