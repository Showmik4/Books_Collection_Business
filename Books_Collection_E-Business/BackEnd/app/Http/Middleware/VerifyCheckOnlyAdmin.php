<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
class VerifyCheckOnlyAdmin
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


        if($request->session()->get('Rank') == 'Admin'){
            return $next($request);
        }else{
            return redirect('/');
        }

    }
}
