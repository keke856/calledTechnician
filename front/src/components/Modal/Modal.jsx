import { useState } from "react";
import Style from "./modal.module.scss";


const Modal = ({children,nameModal,closeModal,actionModal,classModal})=>{

  
  if(closeModal){
      return(

        <div className={Style.container}>
          
          <div className={`${Style.modalContainer} ${classModal}`}>
          <div className={Style.modalHeader}>
                <h2>{nameModal}</h2>   <span onClick={()=>actionModal(false)} className={Style.modalClose}>X</span>
            </div>

            <div className={Style.modalBody}>
                {children}
            </div>
          
          </div>
        </div>

      );
    }
}

export default Modal;