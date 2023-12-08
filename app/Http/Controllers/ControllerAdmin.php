<?php

namespace App\Http\Controllers;

use App\Models\Called;
use App\Models\User;
use Illuminate\Contracts\Auth\Access\Authorizable;
use Illuminate\Http\Request;

class ControllerAdmin extends Controller
{
    public function index(Request $request){

    
        $usersWithCalleds = Called::with('user')->paginate(7); 

         return response()->json($usersWithCalleds);        
    }


    public function store(Request $resquest){

         $id = $resquest->request->get('id');
         $status = $resquest->request->get('status');

         $called = Called::find($id);
         $called->status = $status;

         $called->save();

        return response()->json($called);
    }



}
