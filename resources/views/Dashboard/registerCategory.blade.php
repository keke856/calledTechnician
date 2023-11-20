@extends('Dashboard.master')

@section('content')
<div class="d-flex">
      
          
    @include('Dashboard.menu')

    <section class="dashboard-content col-10">

        <div style="background-color: #FFF;">
            <div class="dashboard-content__menuTop d-flex justify-content-between align-items-center  p-4">
                <div class="d-flex justify-content-between align-items-center">
                    <span><strong>Dashboard > Dashboard</strong></span>
                  </div>
                

                  <div class="d-flex justify-content-around align-items-center">

                    
                    
                    <div class="dropdown ">

                      <a href="#" class="dropdown-toggle p-3" style="text-decoration: none; color:#000;" data-bs-toggle="dropdown" aria-expanded="false" >
                        <img src="./assets/imagens/icones/user.svg" class="figure-img img-fluid rounded" alt="...">

                        Clayton Augusto 
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                    </div>

               </div>
            </div>


              <div class="formCategory">

                   <form>


                    <div class="mb-3">
                        <label for="title-main" class="title-main">Preencha o H1 da página</label>
                        <input type="text" class="form-control" id="title-main" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                        <label for="content-main" class="form-label">Conteudo</label>
                        <textarea class="form-control" id="content-main" rows="3"></textarea>
                      </div>
                         


                     </form>

 
              </div>
    </section>

</div>
@endsection