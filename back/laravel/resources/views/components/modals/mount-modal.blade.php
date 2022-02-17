<div class="modals modal-visible modal-mount">
    <div class="container">
        <div class="modal">
            <div class="modal-close">
                <button id="btn" class="close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                    </svg>
                </button>
            </div>
            <div class="modal-content">
                @foreach($content as $key => $item)
                <details open>
                    <summary>{{$item['title']}}</summary>
                    <div>
                        @foreach($item['text'] as $key => $text)
                        <p>{{$text}}</p>
                        @endforeach
                        @isset($item['img'])
                        <div class="details-img">
                            <img src={{ $item['img']['src'] }} alt={{ $item['img']['alt'] }}>
                        </div>
                        @endisset
                    </div>
                </details>
                @endforeach
            </div>
        </div>
    </div>
</div>