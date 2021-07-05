<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use DB;

class UserController extends Controller
{
    //
    function register(Request $request){

        $user=new User;

        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=Hash::make($request->input('password'));

        $user->save();

        return $user;
    }

    function login(Request $request){

        $user=User::where('email',$request->email)->first();

        if(!$user||!Hash::check($request->password, $user->password)){
            return ["error"=>"Wrong email or password"];
        }
        
        return $user;
    }

    function update(Request $request){

        $user=User::where('name',$request->n)->first();

        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=Hash::make($request->input('password'));
        //!empty($request->input('field'))
        if ($request->input('field')!=null) {
        $user->services=$request->input('field');}

        $user->save();

        return $user;
    }

    function appointment(Request $request){

        $user=User::where('name',$request->n)->first();

        $user->appointmentDate=$request->input('appointmentDate');
        $user->appointmentDoctor=$request->input('appointmentDoctor');

        $user->save();

        return $user;
    }

    function services(Request $request){

        $user=User::where('email',$request->mail)->first();

        return $user;
 
    }


    function getAppointmentsForDoctor($doctor){

        $users = User::where('appointmentDoctor', $doctor)->get();

        return $users->toJson();
       
    }

    function getAppointmentsForGraphic($doctor){

        $app = User::whereBetween(DB::raw('date(appointmentDate)'),[Carbon::now()->startOfMonth()->subMonth()->format('Y-m-d'),Carbon::now()])
        ->where('appointmentDoctor', $doctor)
        ->groupBy('appointmentDate')
         ->orderBy('date', 'ASC')
        ->get(array(
            DB::raw('Date(appointmentDate) as date'),
            DB::raw('COUNT(*) as "count"')
        ))
        ;
       
        return $app;
    
    }

}
