<?php

namespace App\Http\Controllers;

use App\Models\Called;
use Illuminate\Http\Request;

class ControllerAdmin extends Controller
{
    public function index(){

         $calleds = new Called();
         
     return response()->json($calleds::all());
    }
}
