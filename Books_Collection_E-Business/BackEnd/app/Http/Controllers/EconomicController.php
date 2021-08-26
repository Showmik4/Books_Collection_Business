<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class EconomicController extends Controller
{
    public function earningData($year){

        $allEesult = DB::table('earnings_data')
        ->where('Year',  $year)
        ->get();  

        return  $allEesult;
        // $result = json_decode($allEesult, true);

        // return view('Economic.earningTable')->with('allEesult',$result);
    }
}
