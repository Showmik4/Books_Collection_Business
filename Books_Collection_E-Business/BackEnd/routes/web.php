<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Employee.home');
});

// Route::group(['middleware'=>['verifyUser']], function(){


    //Employee

    Route::get('/emplpyee/updatePassword', 'EmployeeController@updatePassPage');
    Route::post('/emplpyee/updatePassword', 'EmployeeController@updatePass');

    //Home
    //Route::get('/logout', 'HomeZController@logOut');
    
    //Shop

    //Subscription
   
    

    //Economic
   

    //done
    Route::get('/user/economic/{year}', 'EconomicController@earningData');
    Route::get('/shop/list', 'CustomerController@shopList');
    Route::get('/shop/details/{id}', 'CustomerController@shopVerify');
    Route::post('/shop/details/{id}/{status}', 'CustomerController@shopVerifyConfirm');
    Route::get('/user/subscription/pieChart', 'CustomerController@pieChart');
    Route::get('/user/subscription/list/{value}', 'CustomerController@SubscriptionUsersList');



    //Route::get('/user/economic/{year}', 'EconomicController@earningDataByYear');
// });
//Route::get('/emplpyee/add', 'EmployeeController@create');

// Route::group(['middleware'=>['verifyUsrerOnlyAdmin']], function(){


    //done
    Route::get('/emplpyee/list', 'EmployeeController@list');
    Route::get('/chnageEmployeeAccess/{value}/{id}', 'EmployeeController@chnageEmployeeAccess');
    Route::get('/emplpyee/salaryList', 'EmployeeV2Contorller@salaryList');
    Route::get('/employee/giveSalary/{id}', 'EmployeeV2Contorller@giveSalaryOption');
    Route::post('/employee/giveSalary/{id}', 'EmployeeV2Contorller@confirmSalary');
    Route::post('/emplpyee/list', 'EmployeeController@listSearch');
    Route::post('/emplpyee/add', 'EmployeeController@createSucess');
    Route::get('/userInfoLoad/{id}', 'ReportsController@userReports');

    Route::get('/reportList', 'ReportsController@reportList');
    Route::get('/reportList/{id}', 'ReportsController@userReports');
    Route::get('/banAccount/{value}/{id}', 'ReportsController@banAccount');
    Route::get('/chatting', 'EmployeeV2Contorller@getMsg');
    Route::post('/chatting', 'EmployeeV2Contorller@setMsg');


    Route::get('/login_history/{userID}', 'HomeZController@getLoginHistory');
    Route::post('/login_history', 'HomeZController@setLoginHistory');
    Route::delete('/login_history/{id}', 'HomeZController@deleteLoginHistory');

    //Route::get('/emplpyee/add', 'EmployeeController@create');

    // Route::get('/user/subscription', 'CustomerController@subscription');
    // Route::post('/user/subscription', 'CustomerController@subscriptionUpdate');

    // Route::get('/emplpyee/print/{id}', 'EmployeeController@createSucessPage');
    // Route::post('/emplpyee/print/{id}', 'EmployeeController@createSucessPrint');
    //Employee


    // Route::get('/emplpyee/print/{id}', 'EmployeeController@createSucessPage');
    // Route::post('/emplpyee/print/{id}', 'EmployeeController@createSucessPrint');

    // Route::get('/emplpyee/edit', 'EmployeeController@edit');
    // Route::post('/emplpyee/edit', 'EmployeeController@editPage');

    

    // Route::get('/emplpyee/update/{id}', 'EmployeeController@editPage2');



// });

//HOme







//Done
Route::post('/verify', 'HomeZController@verifyUser');
Route::post('/login', 'HomeZController@loginPost');
Route::post('/bookSearch', 'HomeZController@bookSearcWithResults');
Route::get('/contactus', 'HomeZController@contactus');
Route::post('/contactus', 'HomeZController@contactusPost');
// Route::get('/bookSearch', 'HomeZController@bookSearch');