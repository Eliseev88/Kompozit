<?php

namespace App\Http\Controllers;

use App\Mail\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function sendEmailNotification (Request $request)
    {
        $name = $request->input('name');
        $phone = $request->input('phone');
        $email = $request->input('email');
        Mail::to('sales@kompozit-plast.ru')->send(new Feedback($name, $phone, $email));

        return redirect()->route('index')
            ->with('success', 'Ваша заявка оставлена!');
    }
}
