<?php

namespace App\View\Components\Modals;

use Illuminate\Support\Facades\Storage;
use Illuminate\View\Component;
// use App\View\Components\Modals\Storage;

class AppearanceModal extends Component
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
        $path = storage_path('app/json/modals/appearance.json');
        $content = json_decode(file_get_contents($path), true);

        return view('components.modals.appearance-modal', [
            'content' => $content
        ]);
    }
}
