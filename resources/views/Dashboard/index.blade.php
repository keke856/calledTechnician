
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


                      <div class="dashboard__content">


                              <div class="d-flex justify-content-center gap-3">
                                  
                                
                                <div class="dashboard__count" id="count_1"> 
                                       
                                       <div class="d-flex justify-content-between align-items-center ">
                                        <span class="dashboard__count__value">15</span>
                                        <svg fill="#dfdfdf" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.5 15h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0 3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-6h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-8-1c-.822 0-1.5.678-1.5 1.5v6c0 .822.678 1.5 1.5 1.5h4c.822 0 1.5-.678 1.5-1.5v-6c0-.822-.678-1.5-1.5-1.5zm0 1h4c.286 0 .5.214.5.5v6c0 .286-.214.5-.5.5h-4c-.286 0-.5-.214-.5-.5v-6c0-.286.214-.5.5-.5zm2-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 6.777 6 6.5v-4c0-.277.223-.5.5-.5zm17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-22 2C.678 4 0 4.678 0 5.5v20c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-20c0-.822-.678-1.5-1.5-1.5h-3c-.66 0-.664 1 0 1h3c.286 0 .5.214.5.5v20c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-20c0-.286.214-.5.5-.5h3c.67 0 .654-1 0-1zm7 0c-.63 0-.683 1 0 1h13c.66 0 .66-1 0-1z"></path></g></svg>
                                      </div>
                                      <p class="mt-2">Leads</p>
                                     
                                     </div>


                                     <div class="dashboard__count" id="count_2"> 
                                       
                                      <div class="d-flex justify-content-between align-items-center">
                                          <span class="dashboard__count__value">25</span>
                                          <svg fill="#dfdfdf" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z"></path></g></svg>
                                          </div>
                                          <p class="mt-2 ">Imóvies alugados</p>
                                    
                                     </div>


                                     <div class="dashboard__count" id="count_3"> 
                                       
                                      <div class="d-flex justify-content-between align-items-center">
                                          <span class="dashboard__count__value">40</span>
                                          <svg fill="#dfdfdf" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.5 19h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-16 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8-6h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-16 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm18-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 7.777 6 7.5v-4c0-.277.223-.5.5-.5zm-5 2C.678 5 0 5.678 0 6.5v19c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5h-3c-.656 0-.664 1 0 1h3c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h3c.672 0 .66-1 0-1zm7 0c-.65 0-.66 1 0 1h13c.656 0 .668-1 0-1z"></path></g></svg>
                                        </div>
                                         <p class="mt-2">Teste</p>
                                     </div>

                                     <div class="dashboard__count" id="count_4"> 
                                       
                                      <div class="d-flex justify-content-between align-items-center">
                                          <span class="dashboard__count__value">40</span>
                                          <svg fill="#dfdfdf" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.5 19h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-16 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8-6h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm8 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-16 0h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm18-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 7.777 6 7.5v-4c0-.277.223-.5.5-.5zm-5 2C.678 5 0 5.678 0 6.5v19c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5h-3c-.656 0-.664 1 0 1h3c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5h3c.672 0 .66-1 0-1zm7 0c-.65 0-.66 1 0 1h13c.656 0 .668-1 0-1z"></path></g></svg>
                                        </div>
                                         <p class="mt-2">Teste</p>
                                     </div>

                                  

                                </div>


                               <div class="dashboard-content__grafico d-flex gap-3 mt-5 justify-content-center container">

                                     <div id="chart_div" style="width: 45%; height: 300px;"></div>

                                     <div id="piechart" style="width: 45%; height: 300px;"></div>
                                 

                                </div>

                        </div>


                 </section>
            
 

         </div>


         <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


         <script type="text/javascript">
           google.charts.load('current', {'packages':['corechart']});
           google.charts.setOnLoadCallback(drawChart);
     
           function drawChart() {
             var data = google.visualization.arrayToDataTable([
               ['Year', 'Sales', 'Expenses'],
               ['2013',  1000,      400],
               ['2014',  1170,      460],
               ['2015',  660,       1120],
               ['2016',  1030,      540]
             ]);
     
             var options = {
               title: 'Company Performance',
               hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
               vAxis: {minValue: 0}
             };
     
             var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
             chart.draw(data, options);
           }
          </script>


<script type="text/javascript">
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }
</script>

@endsection