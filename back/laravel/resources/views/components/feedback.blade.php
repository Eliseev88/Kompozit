<section class="feedback" id="feedback">
        <div class="container">
            <form class="feedback__form" method="POST" action="{{ route('feedback') }}">
                @csrf
                <h4>Связатся с менеджером</h4>
                <p>Заполните форму и менеджер свяжется с вами в ближайшее время</p>

                <input type="text" placeholder="Ваше имя" name="name" id="name" class="feedback-input" required>
                <input class="feedback-input" type="text" placeholder="Ваш номер телефона" name="phone" id="phone" required>
                <input class="feedback-input" type="email" placeholder="Ваш email" name="email" id="email" required>

                <button class="feedback-btn" type="submit" id="send-feedback">Отправить</button>

                <div class="feedback-label">
                    <input type="checkbox" class="custom-checkbox" id="personalData" name="personalData" value="yes" required>
                    <label for="personalData">Согласие на обработку персональных данных</label>
                </div>

            </form>
        </div>
    </section>
