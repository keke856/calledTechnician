import { react,useEffect, useState } from "react";
import Header from "../components/Header/header";
import MenuLeft from "../components/Menu/MenuLeft";
import api from "../../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";




export default function index() {

  const [calleds,setCalleds ] = useState([]);

  useEffect(() => {

    const fetchData =  async ()=>{
       await api.get('/api/admin/dashboard')
        .then((response)=>setCalleds({...calleds,calleds:response.data}))
    }

 fetchData();
},[])


    return (
        <>
            

            <div className="flex ">
                <MenuLeft />

                <div className="w-screen p-3 ">
                  <Header />

                   <div className="p-5 flex flex justify-between items-center mb-4" >
                      <h2 className="font-bold">Chamado Técnico</h2>
                       <div className="flex gap-2">
                         <button className="border-red-600 text-red-600  border-2 rounded p-1"> Em Aberto</button>
                         <button className="border-yellow-600 text-yellow-600  border-2 rounded  p-1"> Em Andamento</button>
                         <button className="border-green-600 text-green-600  border-2 rounded  p-1"> Concluido</button>

                       </div>
                     </div>

                    <div class="relative overflow-x-auto h-max drop-shadow-md">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-center">
                                       ID
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Cliente
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Solicitação
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        Abertura
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-center">
                                        Visualizar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                      calleds.calleds && (
                                        calleds.calleds.map((item)=>(

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {item.idCalled}
                                            </th>
                                            <td class="px-6 py-4 text-center">Silver</td>
                                            <td class="px-6 py-4 text-center"> {item.type}</td>
                                            <td class="px-6 py-4 text-center"> {item.status}</td>
                                            <td class="px-6 py-4 text-center">{item.create} {item.createTime}</td>
                                            <td class="px-6 py-4 text-center "><FontAwesomeIcon icon={faEye} /></td>
                                        </tr>

                                        ))
                                         

                                        )
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>

                     <div className="flex justify-center mt-5"> 
                         <ul className="flex m-auto">
                            <li className=" p-1 border">inicio</li>
                            <li className=" p-1 border">1</li>
                            <li className=" p-1 border">2</li>
                            <li className=" p-1 border">3</li>
                            <li className=" p-1 border">4</li>
                            <li className=" p-1 border">5</li>
                            <li className=" p-1 border">Fim</li>
                         </ul>
                     </div>
                </div>
            </div>
        </>
    );
}
