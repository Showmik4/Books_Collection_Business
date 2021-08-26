<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
class VerifyCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle( Request $request, Closure $next)
    {
        //$request->session()->put('password', 55);


        if($request->session()->get('Rank') == 'Admin' || $request->session()->get('Rank') == 'Moderator'){
            return $next($request);
           
        }else{
            return redirect('/');
        }

    }
}
