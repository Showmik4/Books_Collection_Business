<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class ReportsController extends Controller
{

    public function reportList(){
        $data = DB::table('reports')
        ->get(); 



    return  $data;
    //return view('Customer.checkReportList')->with('reportlist', $result)->with('msg','');
    }
    public function userReports($id){
        $userInfo = DB::table('users')
        ->where('ID', $id )
        ->get();

        $hisALLReports = DB::table('reports')
        ->where('gotReported', $id )
        ->get();

        // $usersInfo2 = json_decode($userInfo, true);
        // $reports = json_decode($hisALLReports, true);

        return response()->json(['userReports' => $hisALLReports,
                                'userInfo' => $userInfo ]);

        //return view('Customer.checkGotReportedUserInfo')->with('reports', $reports)->with('usersInfo', $usersInfo2)->with('msg', '');
   }

   public function userInfo(){
    $users = $this->getUserInfo();
    return view('userInfo')->with('userInfo', $users);
}

   public function banAccount($value,$id){

             $msg='';
                
                if($value=='false'|| $value==null) {
                        DB::table('users')
                        ->where('ID', $id)
                        ->update(['BanStatus' => 'true']);
                        $msg='Account Disabled!';
                }
                else if($value=='true') {
                        DB::table('users')
                        ->where('ID', $id)
                        ->update(['BanStatus' => 'false']);
                        $msg='Account Enabled!';
                }

                return $this->userReports($id);
                
                //return redirect('/reportList/'.$id)->with('msg',$msg);
        }
    
}