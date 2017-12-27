<?php

namespace App\Http\Controllers;

use JavaScript;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        JavaScript::put([
            'lang' => trans('react'),
            'user' => Auth::user(),
        ]);
        return view('welcome');
    }
}
