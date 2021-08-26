<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class EmployeeV2Contorller extends Controller
{
    public function salaryList(){

        $data = DB::table('employeesalary')
                        ->get(); 

        return  $data;
       // $result = json_decode($data, true);

        // return view('Employee.employeeSalaryList')->with('salaryList', $result)->with('giveSalaryOption', '')->with('userName', '')->with('salaryAmont', '')
        //             ->with('userId','')->with('showPart','')->with('msg','');

    }


    public function confirmSalaryPageData($id){

        $salaryInfo=DB::table('employeesalary')
            ->where('ID',$id)
            ->get(); 

        return $salaryInfo;

         //$result = json_decode($data, true);

        // return view('Employee.employeeSalaryList')->with('salaryList', $result)->with('giveSalaryOption', $id)->with('userName', $salaryInfo->userName)
        // ->with('salaryAmont',$salaryInfo->Amount)->with('userId',$salaryInfo->userId)->with('showPart','add')->with('msg',$msg);
    }

    public function giveSalaryOption($id){

       return  $this->confirmSalaryPageData($id);

    }



    public function confirmSalary(Request $data,$id){

        //return $data->month;


        $temp = DB::table('employeesalary')
        ->where('userId',  $data->userID)
        ->where('Year',$data->year)
        ->get(); 
        if(count($temp)<1){
            DB::table('employeesalary')->insert(
                ['userId' => $data->userID,
                'userName' => $data->userName,
                'Year' => $data->year,
                'Amount' =>  $data->salaryAmount,
                $data->month => 'true']);
    
        }

        if($data->action=='REMOVE'){

            DB::table('employeesalary')
                ->where('userId', $data->userID)
                ->where('Year',$data->year)
                ->update([$data->month => 'false']);
        }
        else{

            DB::table('employeesalary')
                ->where('userId', $data->userID)
                ->where('Year',$data->year)
                ->update([$data->month => 'true']);
           
        }

        return "OK";

        //return  $this->confirmSalaryPageData($id,'Data Updated!');
    }


    public function getMsg(){
        return  DB::table('chattingmsg')
                ->get();
    }
    public function setMsg(Request $data){

        $temp=DB::table('users')
            ->where('ID', $data->UserID)
            ->first();

            //return $data->Msg;

        DB::table('chattingmsg')->insert(
            ['UserID' => $data->UserID,
            'Name' => $temp->Name,
            'Msg' => $data->Msg,
            'Rank' =>  $temp->Rank]);

        return 'OK';
    }

}
