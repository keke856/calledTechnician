<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Called;
use Illuminate\Http\Request;
use Carbon\Carbon;




class CalledController extends Controller{



    public function index(User $user,Request $request)
    {

      $filterDate = $request->query('filterDate');
      $search = $request->query('search');


      try {

        if(!empty($filterDate) && isset($filterDate)){
          $filterDate = Carbon::createFromFormat('Y-m-d', $filterDate)->format('d-m-Y');
        }

        

      }  catch (\Exception $e) {
        
       
      return response()->json( ["error"=>$e->getMessage()]);

    }
      

        // $user = $user::find(auth()->user()->id);
        // $user->called()->orderBy('created_at', 'desc')->paginate(5)
  
       $user = $user::find(auth()->user()->id);
        $data = $user->called()->where('create',"LIKE",$filterDate??null)->orderBy('created_at', 'desc')->where('idCalled',"LIKE","%".$search."%")->orderBy('create', 'desc')->orderBy('createTime', 'desc')->paginate(5);
        
      return response()->json($data);
    //  return response()->json($filterDate);
       
    }



      public function store(User $user,Request $request)
      {
          $user = $user::find(auth()->user()->id);
          date_default_timezone_set('America/Sao_Paulo');

          
            $idcalled = rand(999,999999);
               $user->called()->create([
                 "idCalled"=>"$idcalled",
                 "type"=>$request->request->get('type'),
                 "description"=>$request->request->get('description'),
                 "status"=>"Aguardando",
                 "create"=> date('d-m-Y'),
                 'createTime'=>date('H:m:s'),
                ]);

          $user->save();
          
        return response()->json(['sucess'=>'sucess','message'=>"Chamado criado com sucesso"],201);
      }


      public function search(User $user,Request $request)
      {
       $called = $request->query('called');
       $typeCalled =$request->query('type');
       $filterDate =$request->query('filterDate');


        //  $data =  Called::where('user_id',auth()->user()->id)->where('idCalled',"LIKE","%".$called)->get();

          // if(count($data) == 0){
                 $user = $user::find(auth()->user()->id);
                 $data = $user->called()->where('type',"LIKE",$typeCalled)->orderBy('created_at', 'desc')->paginate(5);

                 if(count($data) == 0){
                     $data = "Nenhum Chamado Encontrado !";
                 }
        //   }
        
         return response()->json($filterDate);
      }

}

