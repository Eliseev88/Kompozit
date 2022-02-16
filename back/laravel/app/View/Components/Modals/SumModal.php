<?php

namespace App\View\Components\Modals;

use Illuminate\View\Component;

class SumModal extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $path = storage_path('app/json/modals/sum.json');
        $content = json_decode(file_get_contents($path), true);

        return view('components.modals.sum-modal', [
            'content' => $content
        ]);   
    }
}
