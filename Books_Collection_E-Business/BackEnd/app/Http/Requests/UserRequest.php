<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        //if it false the page will not accessable

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    //  public function rules()
    // {
    //     return [
    //         'oPass'=> 'required|min:5',
    //         'nPass'=> 'required'
    //     ];
    // }

   //  public function messages(){
   //      return [
   //          //more chnaging the defult message
   //          'uname.required' => 'cant left empty...',
   //          'uname.min' => 'at least 5 char ...',
   //          'password.required'=> 'test message ...'
   //      ];
    //}
   }
}