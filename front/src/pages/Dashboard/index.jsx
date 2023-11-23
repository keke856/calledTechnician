
import Style from "./dashboard.module.scss";
import Modal from "../../components/Modal/Modal";
import ModalCalled from "../../components/Modal/Modal";
import Header from "./Header/header";

import SyncLoader from "react-spinners/SyncLoader";

import { useEffect, useState } from "react";
import { GrView } from 'react-icons/gr';
import { FiSearch } from "react-icons/fi";


import axios from 'axios';
export default function Dashboard(){
     
    const [openModalCalled, setOpeModalCalled] = useState(false);

    const [detailsModalCalled, setDetailsModalCalled] = useState(false);
    const [dataCalled,setDataCalled] = useState([]);

    const [typeCalled,setTypeCalled] = useState('');
    const [typeDescription,setTypeDescription] = useState('');
    const [token,setToken] = useState(sessionStorage.getItem('token')||null)

    const [listCalled,setListCalled] = useState([]);

    const [loadin,setLoadin] = useState(false);

    const [paginateLink,setPaginateLink] = useState("");

   const [routerApi,setRouterApi] = useState("");


   const [filter,setFilter] = useState([]);
   

   console.log(listCalled);
   

    function requestApi(){
       // setLoadin(true);
        axios.get(`${paginateLink?paginateLink:'http://192.168.0.118:9090/api/lisCalled?page=1'}${filter.dateFilterStart ? '&filterDate='+filter.dateFilterStart : ""}${filter.search ?'&search='+filter.search : ""}`,{ headers: {'Authorization': `Bearer ${token}` }})
        .then(function (response) {
            console.log(response);
          
            setListCalled({...listCalled,data:response.data.data,paginate:response.data.links,lastPage:response.data.last_page_url,firstPage:response.data.first_page_url});

            if(response.data){
                setLoadin(false);
            }
        })
     }


  

      useEffect(()=>{requestApi();},[paginateLink,filter])

               



     
     function cleanForm(){
        requestApi();
        setTypeCalled("");
        setTypeDescription("");
        setOpeModalCalled(false);   
     }


   

    function openCalled(e){
          
        setLoadin(true);
         e.preventDefault();
       
         axios({
            method: 'POST',
            url: 'http://192.168.0.118:9090/api/registerCalled',
            data: {
                type: typeCalled,
                description: typeDescription
            },
            headers: {'Authorization': `Bearer ${token}` }
          })
            .then(function (response) {
                console.log(response['data']);
                if(response['data'])
                {
                      
                   cleanForm()
                }
               
            });

    }

    function detailsCalled(item)
    {
        setDetailsModalCalled(true)
        setDataCalled(item);
    }




    return(
      <>    

          
                <Header/>


              <div className={Style.menuTop}>
                     <button className={Style.newCalled} onClick={()=>setOpeModalCalled(true)}> Novo Chamado</button>
                     
                   <div className={Style.filter}>
                       
                       <input type="date"  onChange={(item)=>setFilter({...filter,dateFilterStart:item.target.value})} />

                        <div  className={Style.filterSearch}>
                          <FiSearch />
                          <input type="search" onChange={(item)=>setFilter({...filter,search:item.target.value})} placeholder="ID #12345"/>
                        </div>
                     </div>

                   
                 </div>


                 
     
    
              {
                
                listCalled.data &&(
                  listCalled.data.map((item,key)=>(
                        
                <div key={key} className={Style.calledList}>

                        <div className={Style.called}>
                           <div className={Style.info__company}> 
                                <div className={Style.called__company}>
                                    <h2>#{item.idCalled}</h2>
                                    <p><strong>Tipo de chamado:</strong> {item.type}</p>
                                </div>

                                <div className={Style.viewCalled} onClick={()=>detailsCalled([{"idCalled":item.idCalled,"type":item.type,"status":item.status,"description":item.description,"create":item.create,"createTime":item.createTime}])}>
                                   <GrView />
                                </div>
                              </div>
                            <div  className={Style.called__info}>
                            <span><strong> Status: </strong>{item.status} </span>  <span> <strong>Data de abertura: </strong> {item.create} {item.createTime}</span> <span><strong> Data de Encerramento: </strong>  02/11/2023 </span>
                            </div>
                         
                        </div>
                     
                   </div>
                   ))
                   

                )
             }


                {/* <table className={Style.tableCalleds}>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Status</th>
                    <th>Abertura</th>
                    <th>Encerramento</th>
                    <th>Detalhes</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td><GrView /></td>
                </tr>
                <tr>
                   <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td><GrView /></td>
                </tr>
                </table> */}


                         
              {

              //  console.log(listCalled.paginate)
                        listCalled.paginate &&(
                          
                         <div className={Style.paginateContainer}>
                              <ul className={Style.paginate}>
                                     {/* <li onClick={()=>paginateRoutes(paginate.first_page_url)}>Inicio</li> */}

                                     <li onClick={()=>setPaginateLink(listCalled.firstPage)}>Inicio</li>
                                     {
                                    listCalled.paginate.map( (links,key)=>(
                                
                                      
                                     <li className={`${ links.active && Style.itemActive}`} onClick={()=>setPaginateLink(links.url)}>{links.label}</li>
                                     ))
                                     }

                                    <li onClick={()=>setPaginateLink(listCalled.lastPage)}>Fim</li>
                               </ul>
                              </div>  
                          )
                    } 






            <ModalCalled nameModal="Detalhes do Chamado" closeModal={detailsModalCalled} actionModal={setDetailsModalCalled} >
               
                  {
                    dataCalled.map(item=>(
                        <div className={Style.ModalCalled}>
                         <h3>Cod do Chamado: #{item.idCalled}</h3>
                         <p><strong>Tipo do Chamado: </strong> {item.type}</p>
                         <p><strong>Abertura do Chamado: </strong>{item.create} {item.createTime}</p>
                         <p><strong>Encerramento: </strong> --- </p>

                           <div className={Style.ModalCalled__description}>
                            <p><strong>Descrição do Chamado:</strong></p>
                             <p className={Style.ModalCalled__description__data}>{item.description}</p>
                            </div>
                        </div>
                    ))
                  }
                  
               </ModalCalled>





             <Modal nameModal="Chamado Técnico" closeModal={openModalCalled} classModal={"chamado__tecnico"} actionModal={setOpeModalCalled}>
                <form className={Style.form} onSubmit={openCalled}>
                    <div className={Style.formControl}>
                      
                            <select onChange={(e)=>setTypeCalled(e.target.value)} >
                                <option>Selecione o tipo de chamado</option>
                                <option>Site</option>
                                <option>Sistemas</option>
                                <option>Ambiente Cloud</option>
                                <option>Sistema de Arquivos em nuvem</option>

                            </select>
                     
                    </div>

                      <div className={Style.formControl}>
                            <textarea onChange={(e)=>setTypeDescription(e.target.value)} defaultValue={typeDescription} placeholder="Insira a descrição do seu problema aqui"></textarea>
                         </div>

                         <button type="submit">Abrir Chamado</button>
                   </form>

             </Modal>

       { loadin &&
             <div className={Style.loading}>
                 <div className={Style.loadingComponent}>
                   <SyncLoader color="#04BF45" />
                   <p>Carregando..</p>
                   </div>
             </div>
            }
        </>

    );
}