import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function header(){

const [activeMenuUser,setActiveMenuUser] = useState(false);


 return (
    <div className="bg-slate-50 p-5 rounded-xl shadow-md ">
         <div className="flex justify-between m-3 items-center ">
            <span> <FontAwesomeIcon icon={faHouse} /> Home / Chamados</span>
               
               <div>
                    {/* <div className="w-16 bg-white rounded-full h-16" onClick={()=>setActiveMenuUser(!activeMenuUser)}> */}
                    <div className="" onClick={()=>setActiveMenuUser(!activeMenuUser)}>

                        <FontAwesomeIcon icon={faUser} style={{fontSize: "1.5rem",}} />
                    </div>

                   
                    <div className={` ${activeMenuUser?"":"hidden"}  w-28 drop-shadow-md rounded absolute  bg-white right-3.5`} >

                        <ul className="text-center">
                            <li className=" p-2 hover:bg-slate-500 hover:text-white"><a href=" ">Perfil</a></li>
                            <li className=" p-2 hover:bg-slate-500 hover:text-white"><a href=" ">Logout</a></li>
                        </ul>
                    </div>
                </div>

                
         </div>
    </div>

 );

}