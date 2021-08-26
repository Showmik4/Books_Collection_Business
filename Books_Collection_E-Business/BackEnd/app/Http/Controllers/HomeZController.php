<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class HomeZController extends Controller
{

    public function bookSearcWithResults(Request $data){

        $temp = DB::table('books')
       // ->where('Name', $data->search)
       ->where('Name', 'like', '%'.$data->search.'%')
        ->get();
        
        return $temp;

    }

    //public function login(){
    //   return view('Home.loginFrom')->with('msg', '');
    // }

    
    public function loginPost(Request $data){

       // return $data->Password;
        $temp = DB::table('users')
            ->where('Email',$data->Email)
            ->where('Password',$data->Password)
            ->first();

        if($temp==null){

            //return view('Home.loginFrom')->with('msg', 'Invalid Data!');
            return response()->json(['Email' => '','ID' => '','Rank'=>'','msg' => 'Invalid Data!']);

        }

        $temp2 = DB::table('users')
            ->where('Email',$data->Email)
            ->where('BanStatus','true')
            // ->orwhere('BanStatus','')
            ->get();

        if(count($temp2)>0){

            //return view('Home.loginFrom')->with('msg', 'Account Is Disabled!');
            return response()->json(['Email' => '','ID' => '','Rank'=>'','msg' => 'Account Is Disabled!']);

        }



        return response()->json(['Email'=>$temp->Email,'ID'=>$temp->ID,'Rank'=>$temp->Rank,'msg' => 'OK']);

    }

    public function logOut(Request $req){

        $req->session()->flush();

        return redirect('/login');
        

    }

    //contactusPost

    public function contactus(){
        $data = DB::table('contact_us')
            ->get();

        return $data;
    }

    public function contactusPost(Request $req){

        DB::table('contact_us')->insert(
            ['Name' => $req->Name,
            'Email' => $req->Email,
            'Msg'=>$req->Msg]);

            return 'OK';

    }

    public function verifyUser(Request $req){

        //return  $req->Email;
        $data = DB::table('users')
            ->where('ID',$req->ID)
            ->where('Email' , $req->Email)
            ->where('Rank' , $req->Rank)
            ->first();

        if($data!=null)
            {
                return 'OK';
            }
        
        return 'notOK';

    }


    public function getLoginHistory($userID){
        $data =  DB::table('loginhistory')
                    ->where('UserID',$userID)
                    ->get();

        return $data;
    }

    public function setLoginHistory(Request $req){


        $data = DB::table('loginhistory')
            ->where('UserID',$req->UserID)
            ->where('IP' , $req->IP)
            ->get();

        if(count($data)<1){
            DB::table('loginhistory')->insert(
                ['IP' => $req->IP,
                'UserID' => $req->UserID,
                'Location'=>$req->Location,
                'Time'=>date('Y-m-d H:i:s')]);
        }
        return 'OK';
    }

    public function deleteLoginHistory($id){
        DB::table('loginhistory')
                    ->where('ID',$id)
                    ->delete();

        return 'ok';
    }


}
