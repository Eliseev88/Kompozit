<div class="calc" id="calc">
        <div class="container">
            <h2 class="calc__header">Калькулятор</h2>
            <div class="calc__text">
                <p>Расчет площади крыши позволит вам узнать необходимое количество листов Композитпласта, а также
                    саморезов и дополнительных элементов.</p>
            </div>
            <div class="calc__wrapper">
                <div class="calc__col">
                    <img class="calc__img active" id='img-double' src="images/house.png" alt="house">
                    <img class="calc__img" id='img-single' src="images/house-single.png" alt="house">
                    <img class="calc__img" id='img-hip' src="images/house-hip.png" alt="house">
                    <img class="calc__img" id='img-tent' src="images/house-tent.png" alt="house">
                </div>
                <div class="calc__col calc__col--input">
                    <form action="">
                        <h5 class="calc__title">Выберите тип крыши</h5>
                        <select class="calc__select" name="roof_type" id="roof_type">
                            <option value="double">Двухскатная</option>
                            <option value="single">Односкатная</option>
                            <option value="hip">Вальмовая</option>
                            <option value="tent">Шатровая</option>
                        </select>


                        <div class="calc__box active" id="double-roof">
                            <label class="calc__label">Длина ската (А)<input type="text"
                                    id="double_a"><span>м</span></label>
                            <label class="calc__label">Длина ската (B)<input type="text"
                                    id="double_b"><span>м</span></label>
                            <label class="calc__label">Длина конька (С)<input type="text"
                                    id="double_c"><span>м</span></label>
                        </div>


                        <div class="calc__box" id="single-roof">
                            <label class="calc__label">Длина здания (B)<input type="text"
                                    id="single_b"><span>м</span></label>
                            <label class="calc__label">Ширина здания (A)<input type="text"
                                    id="single_a"><span>м</span></label>
                            <label class="calc__label">Свес (d1)<input type="text" id="single_d1"><span>м</span></label>
                            <label class="calc__label">Свес (d2)<input type="text" id="single_d2"><span>м</span></label>
                            <label class="calc__label">Высота (H)<input type="text" id="single_h"><span>м</span></label>
                        </div>


                        <div class="calc__box" id="hip-roof">
                            <label class="calc__label">Длина здания (B)<input type="text"
                                    id="hip_b"><span>м</span></label>
                            <label class="calc__label">Ширина здания (A)<input type="text"
                                    id="hip_a"><span>м</span></label>
                            <label class="calc__label">Свес (d1)<input type="text" id="hip_d1"><span>м</span></label>
                            <label class="calc__label">Свес (d2)<input type="text" id="hip_d2"><span>м</span></label>
                            <label class="calc__label">Смещение (С)<input type="text" id="hip_c"><span>м</span></label>
                            <label class="calc__label">Высота (H)<input type="text" id="hip_h"><span>м</span></label>
                        </div>


                        <div class="calc__box" id='tent-roof'>
                            <label class="calc__label">Длина здания (B)<input type="text"
                                    id="tent_b"><span>м</span></label>
                            <label class="calc__label">Ширина здания (A)<input type="text"
                                    id="tent_a"><span>м</span></label>
                            <label class="calc__label">Свес (d1)<input type="text" id="tent_d1"><span>м</span></label>
                            <label class="calc__label">Свес (d2)<input type="text" id="tent_d2"><span>м</span></label>
                            <label class="calc__label">Высота (H)<input type="text" id="tent_h"><span>м</span></label>
                        </div>

                        <div class="calc__error"></div>

                        <button class="intro__btn intro__btn--calc" type="submit" id="calc_btn">Рассчитать</button>
                    </form>
                </div>
                <div class="calc__col calc__col--res">
                    <div class="calc__inner">
                        <div class="calc__res">
                            Общая площадь кровли: <span id="res-square"></span>
                        </div>
                        <div class="calc__res">
                            Количество листов Композитпласт (2м<sup>2</sup>): <span id="res-kp"></span>
                        </div>
                        <div class="calc__res">
                            Количество саморезов (4,8х35 мм): <span id="res-screw"></span>
                        </div>
                        <div class="calc__res">
                            Планка конька (2м): <span id="res-skate"></span>
                        </div>
                        <div class="calc__res">
                            Ветровая (торцевая) планка (2м): <span id="res-wind"></span>
                        </div>
                        <div class="calc__res">
                            Карнизная планка (2м): <span id="res-cornice"></span>
                        </div>
                    </div> <!-- /.calc__inner -->
                </div> <!-- /.calc__col -->
            </div> <!-- /.calc__wrapper -->
        </div> <!-- /.container -->
    </div> <!-- /.calc -->