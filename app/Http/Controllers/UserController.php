<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{


    public function index(User $user){
        
        $user = $user::find(auth()->user()->id);
        return response()->json(["usuario"=>$user]);
    }


    public function update(User $user, Request $request)
    {
           $user = $user::find(auth()->user()->id);
           $user->name = $request->request->get('userName');
           $user->email = $request->request->get('userEmail');
           $validated = $this->validatePassword($request->request->get('userNewPassword'),$request->request->get('userConfirmedPassword'));

           if($validated){
                if($validated === "validated"){
                    $user->password = bcrypt($request->request->get('userNewPassword'));
                }
             }

           $user->save();

          return response()->json(["usuario"=>$user]);
    }




    protected function validatePassword($newPassword,$confirmedPassword)
    {
        if( strlen($newPassword) !== 0 && strlen($confirmedPassword) !== 0 ){

        if( strlen($newPassword) >= 4 && strlen($confirmedPassword) >= 4){

            if($newPassword == $confirmedPassword){

               return "validated";
            }

            return "invalid_password";
        }

        return "less_than_four";


        }

        return false;
    }

   
    
}


