import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Private({role}) {

  const usuarioLogado =  sessionStorage.getItem('token') ? true : false; 
  const UserType =  sessionStorage.getItem('type'); 

  if (usuarioLogado && role === UserType ) {
    
    return <Outlet />;
  }
  // Se o usuário estiver autenticado, renderize o conteúdo da rota protegida

  window.location.href = "/login";
  return null; 
}

export default Private;
