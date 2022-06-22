@extends('layouts.app')
@section('content')
<x-header />
<x-intro />
<x-about />
<x-video />
<x-advantage />
<x-gallery />
<x-questions />
<x-calc />
<x-contacts />
<x-feedback />
<x-footer />
<x-modals.gallery-modal />
<x-modals.appearance-modal />
<x-modals.mount-modal />
<x-modals.sum-modal />

@if (session('success'))

    <script>
        document.body.style.overflow = 'hidden';
    </script>

    <div class="modals">
        <div class="container">
            <div class="modal modal--feedback">
                <div class="modal-close">
                    <button id="btn" class="close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                        </svg>
                    </button>
                </div>
                <div class="modal-content modal-content--feedback">
                    <h3 class="modal-title--feedback">{{ session('success') }}</h3>
                    <h4 class="modal-title--feedback-small">Спасибо за обращение!</h4>
                </div>
            </div>
        </div>
    </div>
@endif

@endsection
