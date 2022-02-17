<main class="about" id="about">
        <div class="container">
            <div class="about__header">
                <button class="about__btn active" id="appearance_btn">Внешний вид</button>
                <button class="about__btn" id="hold_btn">Крепеж</button>
                <button class="about__btn" id="cage_btn">Обрешетка</button>
                <button class="about__btn" id="mount_btn">Монтаж</button>
                <button class="about__btn" id="sum_btn">Расчет</button>
            </div> <!-- /.about__header -->


            <div class="about__inner">

                <!-- appearance_block -->
                <div class="description show" id="appearance_block">
                    <div class="description__photo">

                        <!-- CSS Slider -->
                        <div class="chair_slider">

                            <input type="radio" class="chair_radio" name="slide_img" id="img_1" checked>
                            <input type="radio" class="chair_radio" name="slide_img" id="img_2">
                            <input type="radio" class="chair_radio" name="slide_img" id="img_3">
                            <input type="radio" class="chair_radio" name="slide_img" id="img_4">
                            <input type="radio" class="chair_radio" name="slide_img" id="img_5">

                            <div class="chair_item">
                                <div class="chair_images">
                                    <div class="switcher_slide" id="first">
                                        <img src="images/%D0%9A%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9.jpg"
                                            alt="#">
                                    </div>
                                    <div class="switcher_slide" id="second">
                                        <img src="images/%D0%A8%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                                            alt="#">
                                    </div>
                                    <div class="switcher_slide" id="third">
                                        <img src="images/%D0%A1%D0%B5%D1%80%D0%BE-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                                            alt="#">
                                    </div>
                                    <div class="switcher_slide" id="fourth">
                                        <img src="images/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D1%82%D0%BE%D0%B2%D1%8B%D0%B9-%D1%81%D0%B5%D1%80%D0%B2%D1%8B%D0%B9.jpg"
                                            alt="#">
                                    </div>
                                    <div class="switcher_slide" id="fifth">
                                        <img src="images/%D0%A7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.jpg" alt="#">
                                    </div>
                                </div> <!-- /.chair_images -->

                                <div class="chair__buttons">
                                    <div class="chair_button  chair_button--second">
                                        <label class="switcher" id="switcher2" for="img_2"><img class="chair_color"
                                                src="images/brown.jpg" alt=""><span>Шоколадно-коричневый</span></label>
                                    </div>
                                    <div class="chair_button">
                                        <label class="switcher" id="switcher1" for="img_1"><img class="chair_color"
                                                src="images/terrakot.jpg" alt=""><span>Коричнево-красный</span></label>
                                    </div>
                                    <div class="chair_button  chair_button--third">
                                        <label class="switcher" id="switcher3" for="img_3"><img class="chair_color"
                                                src="images/chokolad.jpg" alt=""><span>Серо-коричневый</span></label>
                                    </div>
                                    <div class="chair_button  chair_button--fourth">
                                        <label class="switcher" id="switcher4" for="img_4"><img class="chair_color"
                                                src="images/Gray_graphit.jpg"
                                                alt=""><span>Графитовый-серый</span></label>
                                    </div>
                                    <div class="chair_button  chair_button--fifth">
                                        <label class="switcher" id="switcher5" for="img_5"><img class="chair_color"
                                                src="images/dark_gray.jpg" alt=""><span>Черный</span></label>
                                    </div>
                                </div> <!-- /.chair__buttons -->
                            </div> <!-- /.chair_item -->
                        </div> <!-- /.chair_slider -->
                    </div> <!-- /.description__photo -->
                    <div class="description__content description__content--appearance">
                        <h3 class="description__title">Внешний вид КОМПОЗИТПЛАСТ</h3>
                        <div class="description__text">
                            <p>Представляет собой кровельный лист формы черепицы, в состав которого входит
                                высококачественное сырьё особо устойчивое к механическим, атмосферным и температурным
                                воздействиям.</p>
                            <p>Доступно несколько цветовых решений.</p>
                        </div>
                        <div class="description__elements">
                            <h5 class="description__info">Доборные элементы:</h5>
                            <div class="description__box">
                                <div class="description__element">
                                    <img src="images/Konjok.jpg" alt="photo">
                                    <div class="description__el-title">Конек</div>
                                </div>
                                <div class="description__element">
                                    <img src="images/Endova.jpg" alt="photo">
                                    <div class="description__el-title">Ендова</div>
                                </div>
                                <div class="description__element">
                                    <img src="images/Kapelnik.jpg" alt="photo">
                                    <div class="description__el-title">Капельник</div>
                                </div>
                                <div class="description__element">
                                    <img src="images/Vetrovaja.jpg" alt="photo">
                                    <div class="description__el-title">Ветровая планка</div>
                                </div>
                                <div class="description__element">
                                    <img src="images/Planka_prim.jpg" alt="photo">
                                    <div class="description__el-title">Планка примыкания</div>
                                </div>
                            </div> <!-- /.description__box -->
                        </div> <!-- /.description__elements -->
                        <button id="modal-appearance" class="intro__btn intro__btn--link">Подробнее</button>
                    </div>
                </div> <!-- /#appearance_block -->


                <!-- hold_block -->
                <div class="description" id="hold_block">
                    <div class="description__photo description__photo--hold">
                        <img src="images/krepej_lista342.jpg" alt="photo">
                    </div>
                    <div class="description__content">
                        <h3 class="description__title description__title--hold">Крепление листа КОМПОЗИТПЛАСТ</h3>
                        <div class="description__text description__text--hold">
                            <ul>
                                <li>Размер листа 2200х1050 мм.</li>
                                <li>Полезная площадь листа - 2 кв.м.</li>
                                <li>Вес одного кв.м. - 3,5 кг.</li>
                                <li>При монтаже используются кровельные саморезы размером 4,8х35 мм.</li>
                                <li>На один лист рекомендуется 34 шт. кровельных саморезов согласно схемы крепления.
                                </li>
                            </ul>
                        </div>
                        <div class="description__elements description__elements--hold">
                            <h5 class="description__info">Саморезы:</h5>
                            <div class="description__box">
                                <div class="description__element description__element--hold">
                                    <img src="images/Samorez35.jpg" alt="photo">
                                    <div class="description__el-title">Саморез кровельный 4.8х35мм</div>
                                </div>
                                <div class="description__element description__element--hold">
                                    <img src="images/Samorez70.jpg" alt="photo">
                                    <div class="description__el-title">Саморез кровельный 4.8х70мм</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- /#hold_block -->


                <!-- cage_block -->
                <div class="description" id="cage_block">
                    <div class="description__photo description__photo--hold">
                        <img src="images/obreshetka342.jpg" alt="photo">
                    </div>
                    <div class="description__content">
                        <h3 class="description__title description__title--hold">Обрешетка под лист КОМПОЗИТПЛАСТ</h3>
                        <div class="description__text">
                            <ul>
                                <li>Рекомендованный размер доски для обрешетки - 100х32 мм.</li>
                                <li>Шаг обрешетки рассчитывается от центра одной доски до центра другой и равен 342 мм.
                                </li>
                                <li>Шаг между стартовой и второй доской принято считать от нижнего края стартовой до
                                    центра второй и равен 320 мм.</li>
                                <li>Вынос кровли относительно стартовой доски обрешетки равен 50 мм.</li>
                            </ul>
                        </div>
                    </div>
                </div> <!-- /#cage_block -->


                <!-- mount_block -->
                <div class="description" id="mount_block">
                    <div class="description__photo">
                        <img class="w100" src="images/correctOverlap_mini.jpg" alt="photo">
                    </div>
                    <div class="description__content">
                        <h3 class="description__title">Схема укладки листов КОМПОЗИТПЛАСТ по горизонтали</h3>
                        <div class="description__text description__text--other">
                            <p class="description__paragraph--mount">Чередуем нахлёст верх-низ для листов (рядов) по
                                горизонтали путем одинакового наложения крайней широкой 8 см. волны листа слева и справа
                                листа только поверх (либо только под низ) такой же смежной с ним волны следующего листа
                                (ряда) по всей ширине кровли.</p>
                            <button id="modal-mount" class="intro__btn intro__btn--link">Подробнее</button>
                        </div>
                    </div>
                </div> <!-- /#mount_block -->


                <!-- sum_block -->
                <div class="description" id="sum_block">
                    <div class="description__photo description__photo--hold">
                        <img src="images/setting_size.jpg" alt="photo">
                    </div>
                    <div class="description__content">
                        <h3 class="description__title">Подсчёт количества листов кровли КОМПОЗИТПЛАСТ</h3>
                        <div class="description__text description__text--other">
                            <p class="description__paragraph--mount">Данный блок информации поможет вам подсчитать
                                минимально необходимое количество листов для кровли.
                                Переходите в раздел нажав кнопку "Подробнее".
                                Изучите дополнительные схемы с возможными вариантами по делению (распилу) кровельного
                                листа нажав кнопку "Смотреть пример на схеме"
                                или воспользуйтесь нашим <a href="#" data-scroll="#calc">калькулятором</a>.</p>
                            <button id="modal-sum" class="intro__btn intro__btn--link">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div> <!-- /#sum_block -->
        </div> <!-- /.container -->
    </main>
