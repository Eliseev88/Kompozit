<section class="gallery" id="gallery">
    <h2 class="gallery__header">Галлерея</h2>
    <div class="container">
        <div class="gallery__slider">
            @foreach($gallery as $image)
                <img src="images/gallery/{{ $image }}" alt="photo" class="gallery__image">
            @endforeach
        </div> <!-- /.gallery__slider -->
        <div class="gallery__arrows pos-rel"></div>
    </div> <!-- /.container -->
</section>
