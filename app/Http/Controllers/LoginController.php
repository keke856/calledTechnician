<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller{


  public function index(Request $request) {

    return response()->json($request->request->get("email"));
}






}