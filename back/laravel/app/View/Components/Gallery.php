<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Gallery extends Component
{
    public $gallery;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->gallery = $this->getGallery();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.gallery');
    }

    public function getGallery() {
        $files = scandir("images/gallery/");
        $gallery_files = [];
        $types = ['jpg', 'png', 'gif', 'bmp', 'jpeg',];
        foreach ($files as $key => $file) {
            if (filetype("images/gallery/" . $file) == "file") {
                $getMime = explode('.', $file);
                $mime = strtolower(end($getMime));
                if(in_array($mime, $types)) $gallery_files[] = $file;
            }
        }
        return $gallery_files;
    }
}
