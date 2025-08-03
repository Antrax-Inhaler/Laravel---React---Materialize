<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class AuthController extends Controller
{
    use AuthenticatesUsers, RegistersUsers, SendsPasswordResetEmails, ResetsPasswords {
        AuthenticatesUsers::redirectPath insteadof RegistersUsers;
        AuthenticatesUsers::redirectPath insteadof SendsPasswordResetEmails;
        AuthenticatesUsers::redirectPath insteadof ResetsPasswords;
    }

    /**
     * Where to redirect users after login/registration/password reset.
     *
     * @var string
     */
    protected $redirectTo = '/dashboard';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}