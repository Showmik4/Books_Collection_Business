<?php

namespace App\Http\Controllers;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use PDF;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Resources\Json\ResourceCollection;
class EmployeeController extends Controller
{
     //regEmployee
        public function create(){
        

        return view('Employee.regEmployee')->with('print',false)->with('msg','');

        }


        public function createSucess(Request $req){

                $ProPicNmae ='';
               
                $temp = DB::table('users')
                ->where('Email', $req->Email )
                ->get();
                
      
                // if(count($temp)>0){
                //         return 'Email Already exist!';
                //         //return view('Employee.regEmployee')->with('print',false)->with('msg','Email Aready Taken');
                // }

                // if($req->hasFile('image')){
                //         $file = $req->file('image');
                //        // echo "file name: ".."<br>";

                // if($file->getClientOriginalExtension()!='jpg') // || $file->getClientOriginalExtension()!='png')
                // {
                //         return 'Image should be JPG!';
                //         //return view('Employee.regEmployee')->with('print',false)->with('msg','Image should be JPG');
                //        // return view('Employee.regEmployee')->with('print',false)->with('msg',$file->getClientOriginalExtension());
                // }
                //         $ProPicNmae=$file->getClientOriginalName();
                //         $file->move('upload',$file->getClientOriginalName());

                // }else{
                //         //return view('Employee.regEmployee')->with('print',false)->with('msg','Have To Upload Valid Image!');
                //        // return 'Have To Upload Valid Image!';
                // }

                // if($req->Email == ''||$req->Address == ''||$req->Name == ''||$req->Amount == ''){
                //       //  return 'Failed!';
                //         //return view('Employee.regEmployee')->with('print',false)->with('msg','Please Fill All Text box');
                // }


               // return $ProPicNmae;

                $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                $pin = mt_rand(1000000, 9999999)
                        . mt_rand(1000000, 9999999)
                        . $characters[rand(0, strlen($characters) - 1)];
                        // shuffle the result
                $string = str_shuffle($pin);
             
                $data= DB::table('users')->insert(
                        ['Email' => $req->Email,
                        'Address' => $req->Address,
                        'Name' => $req->Name,
                        'DOB' => $req->DOB,
                        'Password' => $string,
                        'ProPic' =>  $req->ProPic,
                        //'ProPic' =>  $ProPicNmae,
                        'BanStatus' =>  false,
                        'Rank' => $req->Rank]);

                if( $data== true){
                        $temp = DB::table('users')
                        ->where('Email', $req->Email )
                        ->first();

                DB::table('employeesalary')->insert(
                                ['userId' => $temp->ID,
                                'userName' => $req->Name,
                                'Amount' => $req->Amount,
                                'Year'=>'2021']);

                       // return 'OK';
                       // return redirect('/emplpyee/print/'.$temp->ID)->with('print',true);
                
                       return $temp->ID;
                }

                return $temp->ID;
                //return view('Employee.regEmployee')->with('print',false)->with('msg','Reg failed!');
                return $req->Email;
        }
        public function createSucessPage($id){

                $temp = DB::table('users')
                ->where('ID',$id )
                ->get();
                $result = json_decode($temp, true);

               return view('Employee.printCreatedUser')->with('usersInfo', $result);
            

        
        }
        // public function createSucessPrint($id){

        //         $temp = DB::table('users')
        //         ->where('ID',$id)
        //         ->get();
        //         $result = json_decode($temp, true);

        //         $pdf = PDF :: loadView('Employee.printCreatedUser',['usersInfo'=> $result]);
        //         return $pdf->download('disney.pdf');


        //         return view('Employee.printCreatedUser')->with('usersInfo', $result)->with('msg','');
        
        
        // }

        public function editPage2($id){

                $usersInfo = DB::table('users')
                ->where('ID', $id )
                ->get(); 
                

                $result = json_decode($usersInfo, true);
                // if($usersInfo==''){
                //         return view('Employee.empolyeeEdit')->with('msg','Data Not Found');
                // }
               return view('Employee.employeeEditPage')->with('usersInfo', $result)->with('msg','');
             
        }
        public   function list(){
                return $this->listData('');
        }

        public  function listData($msg){

                $data = DB::table('users')
                        ->where('Rank', 'Admin' )
                        // ->where('Name', 'Admin')
                        ->orWhere('Rank', 'Moderator')
                        ->get(); 

                $result = json_decode($data, true);

                return $data ;
                // return view('Employee.employeeList')->with('usersList', $result)->with('msg',$msg);
        }

        public  function listSearch(Request $r){

                $msg='';
                $data ='';

                $data = DB::table('users')
                        ->where('ID',  $r->ID)
                        // ->where('Rank', 'Moderator' )
                        // ->orWhere('Rank', 'Admin')

                        ->get(); 
                
                if(count($data)<1){
                        $data = DB::table('users')
                        ->where('Email',  $r->ID)
                        ->get(); 
                        if(count($data)<1){
                                return  'notFound'; 
                        }
                
                }

                return $data;
                // $result = json_decode($data, true);
                // return view('Employee.employeeList')->with('usersList',  $result)->with('msg','');

        }



        public function chnageEmployeeAccess($value,$id){

             $msg='';
                
                if($value=='Admin'){
                        DB::table('users')
                        ->where('ID', $id)
                        ->update(['Rank' => 'Moderator']);
                        $msg='Rank Chnaged to Moderator';
                }else if($value=='Moderator'){
                        DB::table('users')
                        ->where('ID', $id)
                        ->update(['Rank' => 'Admin']);
                        $msg='Rank Chnaged to Admin';
                }else if($value=='false'|| $value==null) {
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
                }else if($value=='password') {
                        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        $pin = mt_rand(1000000, 9999999)
                                . mt_rand(1000000, 9999999)
                                . $characters[rand(0, strlen($characters) - 1)];
                                // shuffle the result
                        $string = str_shuffle($pin);
                        DB::table('users')
                        ->where('ID', $id)
                        ->update(['Password' =>$string]);
                        $msg='PAssword Reseted';
                }

                //return redirect('/emplpyee/update/'.$id)->with('msg',$msg);

                return $this->listData('');
        }


        public function updatePassPage(){

                return view('Employee.updatePassword')->with('msg', '');
        
        }

        public function updatePass(Request $r){
                $msg='';

                if($r->nPass=='' || $r->oPass==''){
                        return view('Employee.updatePassword')->with('msg', 'Fill Up All TextBox');
                }
                $email = $r->session()->get('Email');
                //$email = 'a@a.com';
                $data = DB::table('users')
                ->where('Email',  $email)
                ->where('Password',  $r->oPass)
                ->get(); 


                if(count($data)>0){

                DB::table('users')
                        ->where('Email', $email)
                        ->update(['Password' => $r->nPass]);
                        return view('Home.loginFrom')->with('msg', 'Pass Updated.Login Again.');
                        //return view('Employee.updatePassword')->with('msg', 'Password Updated!');
                }

                return view('Employee.updatePassword')->with('msg', 'Old Password is Wrong!');
                //return view('Employee.updatePassword')->with('msg', $email);
        }

        

}