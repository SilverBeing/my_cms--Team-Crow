<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\userInfo;
use Illuminate\Support\Facades\Hash;

class login extends Controller
{

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registerUser(Request $request){

        $request->validate([
            'username' => 'required',
            'email' => 'required|email|unique:user_infos',
            'password' => 'required|min:5|max:15', 'user_password',
            'confirmpassword' => 'required|min:5|max:15',
            
        ]);

        $user = new userInfo();
        $user->name = $request->username;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        if($user){
            if(Hash::check($request->confirmpassword, $user->password)){
                $user->confirmpassword = $user->password;
            }else{
                return back()->withErrors([
                    "Passwords does not match"
                ]);
            }
        }
        
   
        $response = $user->save();
        if($response == true){

           return response()->json(['status'=>'success',
            'message'=> 'login successful']);
        }else{
            return  response()->json(['status'=>'failed',
            'message'=> 'login not successful']);
        }
    }
     /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required|email|unique:user_infos'],
            'password' => ['required|min:5|max:15'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response()->json(['status'=>'success',
            'message'=> 'login successful',
            'data' => ['email' =>  $request->email, 'password' =>  $request->password],
        ]);
        }

        return back()->withErrors([
                'This email is not register',
                ]);
 
       
    }


}
