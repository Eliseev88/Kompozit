<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Feedback extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $phone;
    protected $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $phone, $email)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->subject('Поступил новый заказ');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.feedback', [
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
        ]);
    }
}
