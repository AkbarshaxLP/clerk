<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-3 fww bb0">
            <div class="df jcsb aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/recepton" class="pr-3"><img src="../../assets/img/Back.png" /></router-link>
                    <h1>Бронь №12345-01/01/2021</h1>
                </div>
                <div>
                    <el-button type="primary">Сохранить</el-button>
                </div>

            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Гости" name="first" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="14" class="pt-3 df aic fw">
                                <div class="pr-10 mr-10">
                                    <p class="c919 simple-p mb-3">Начало заезда: <span class="c09">01/01/2021 14:00</span></p>
                                    <p class="c919 simple-p mb-3">Конец выезда: <span class="c09">15/01/2021 11:00</span></p>
                                </div>
                                <div class="pr-10">
                                    <p class="c919 simple-p mb-3">Количество гостей: <span class="c09">12</span></p>
                                    <p class="c919 simple-p mb-3">Количество номеров: <span class="c09">18</span></p>
                                </div>
                            </el-col>
                            <el-col :md="10" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc" v-on:click="$router.push({name:'new_tariffs'})">
                                        <img src="../../assets/img/addPrimary.svg" alt="AAA">
                                        <span class="ml-3">Добавить номер</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Дополнительно" name="second" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <p class="c919 simple-p mb-3">Общая сумма услуг: <span class="c09">12 345 670,00 UZS</span></p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Оплата" name="thrid" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="12">
                                <p class="c919 simple-p mb-3">Стоимость услуг: <span class="c09">12 345 670,00 UZS</span></p>
                            </el-col>
                            <el-col :md="12">
                                <div class="df aic">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="gost">
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="simple-p c09 ml-2">Гарантированная бронь</p>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :md="12">
                                <p class="c919 simple-p mb-3">Стоимость проживания: <span class="c09">12 345 670,00 UZS</span></p>
                            </el-col>
                            <el-col :md="12">
                                <div class="df aic">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="gost">
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="simple-p c09 ml-2">Не гарантированная бронь</p>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :md="12">
                                <p class="c919 simple-p mb-3">Общая сумма к оплате: <span class="c00grren">24 691 340,00 UZS</span></p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <!-- Guest -->
    <div class="sp-wrapper found-table" v-if="activeName=='first'">
        <div class="role-item" v-for="item in rols_list" :key="item.name">
            <header>
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                    <el-col :md="8" class="pt-3">
                        <h1 class="tal">№{{item.number}} - стандарт</h1>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <p class="title-p c919  pr-6 pl-6">С {{item.from}} -- До {{ item.to }}</p>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <div class="df aic jcfe">
                            <button class="simple-button mr-2" @click="NewGost=true">
                                <img src="../../assets/img/PlusUser.svg" alt="">
                            </button>
                            <button class="simple-button mr-2" @click=" GuestCard=true">
                                <img src="../../assets/img/minus.svg" alt="">
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </header>
            <div class="tables tables1 w-full pb-1">
                <table style="width:100%;">
                    <tr class="bb1">
                        <th class="pl24">Гость</th>
                        <th>Гражданство</th>
                        <th>Сумма к оплате</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="(a, j) in item.data" :key="j">
                        <td class="pl24 fio-td pr">{{item.fio}}
                            <div class="vip2" v-if="a.vip"></div>
                        </td>
                        <td class="c919 simple-p">{{item.country}}</td>
                        <td class="c919 simple-p">{{a.checkin}}</td>
                        <td class="c919 simple-p">{{a.departure}}</td>
                        <td class="c919 simple-p">{{a.amount}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button ml-2" @click=" GuestCard=true">
                                    <img src="../../assets/img/Edit.svg" alt="">
                                </button>
                                <button class="simple-button ml-2" @click=" GuestCard=true">
                                    <img src="../../assets/img/minus.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Price -->
    <div class="sp-wrapper found-table" v-if="activeName=='second'">
        <div class="role-item" v-for="item in rols_list" :key="item.name">
            <header>
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                    <el-col :md="8" class="pt-3">
                        <h1 class="tal">№{{item.number}} - стандарт</h1>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <p class="title-p c919  pr-6 pl-6">С {{item.from}} -- До {{ item.to }}</p>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <div class="df aic jcfe">
                            <el-dropdown trigger="click" :hide-on-click="false" @command="modals">
                                <span class="el-dropdown-link">
                                    <img src="../../assets/img/MenuDots.svg" />
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="dd-title" command="1"><i class="el-icon-check el-icon--left mr-2"></i>Добавить услуги</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="2"><i class="el-icon-check el-icon--left mr-2"></i>Добавить задачу</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                </el-row>
            </header>
            <div class="tables tables1 w-full pb-1">
                <table style="width:100%;">
                    <tr class="bb1">
                        <th class="pl24">Гость</th>
                        <th>Гражданство</th>
                        <th>Сумма к оплате</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="(a, j) in item.data" :key="j">
                        <td class="pl24 fio-td pr">{{item.fio}}
                            <div class="vip2" v-if="a.vip"></div>
                        </td>
                        <td class="c919 simple-p">{{item.country}}</td>
                        <td class="c919 simple-p">{{a.checkin}}</td>
                        <td class="c919 simple-p">{{a.departure}}</td>
                        <td class="c919 simple-p">{{a.amount}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <el-dropdown trigger="click" :hide-on-click="false" @command="modals">
                                    <span class="el-dropdown-link">
                                        <img src="../../assets/img/MenuDots.svg" />
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item class="dd-title" command="1"><i class="el-icon-check el-icon--left mr-2"></i>Добавить услуги</el-dropdown-item>
                                        <el-dropdown-item class="dd-title" command="2"><i class="el-icon-check el-icon--left mr-2"></i>Добавить задачу</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Oplata -->
    <div class="sp-wrapper found-table" v-if="activeName=='thrid'">
        <div class="role-item">
            <header class="bb1">
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                    <el-col :md="24" class="pt-3">
                        <h1>Информация о брони</h1>
                    </el-col>
                </el-row>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Бронирующая сторона</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Бронирующая сторона</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите бронирующую сторону">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Бронирующее лицо</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите бронирующую сторону">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Время оплаты</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите время оплаты">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите фамилию" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите имя" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите отчество" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Основной номер телефона</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите номер телефона" />

                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дополнительный номер телефона</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите дополнительный номер телефона" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">E-mail</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите e-mail" />
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Изменение цен</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Изменение цен</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип изменения цен">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Способ расчёта</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите способ расчёта">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Сумма</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите сумму" />
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
    <!-- New Guest Modal -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="NewGost" width="80%" center>
        <div>
            <header>
                <h1>Добавление гостя</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основная информация</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите фамилию" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите имя" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите отчество" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Гражданство</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите страну">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата рождения</p>
                        <el-date-picker type="date" placeholder="Введите дату рождения"></el-date-picker>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Пол</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите пол">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Заезд и выезд</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата заезда</p>
                                <el-date-picker vlue="27/03/2021" type="date" placeholder="Выберите дату"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время заезда</p>
                                <el-time-select value="16:51 : 18" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата выезда</p>
                                <el-date-picker type="date" placeholder="Выберите дату выезда"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время выезда</p>
                                <el-time-select :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время выезда"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о комнате</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Категория номера</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите категорию номера">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите номер">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип гостя</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип гостя">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Дети</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите фамилию ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите имя ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите отчество ребёнка" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Дата рождения ребёнка</p>
                        <el-date-picker type="date" placeholder="Выберите дату пождения ребёнка"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Пол ребёнка</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Укажите пол ребёнка">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="24" class="box pt-3">
                        <div class="w-full df jcfe aic">

                            <button class="simple-button df aic">
                                <img src="../../assets/img/PlusUser.svg" alt="">
                                <p class="title-p wf600 cp ml-3">Добавить</p>
                            </button>
                        </div>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="NewGost = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Разместить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Add Uslug -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="AddUslugi" width="60%" center>
        <div>
            <header>
                <h1>Добавление услуги</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основные услуги</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <el-col :md="24">
                            <div class="w-full df jcc pl-1 pr-1 aic">
                                <button v-on:click="pogiActiver(-2)" style="outline:none;"><img src="@/assets/img/pre.svg" class="mr-2" alt="AA"></button>
                                <button v-for="(i, index) in poginations" :key="i" v-on:click="pogiActiver(index)" class="pogination-button" :class="pogiactive==index?'pogi-active':''"></button>
                                <button v-on:click="pogiActiver(-1)" style="outline:none;"><img src="@/assets/img/next.svg" class="ml-2" alt="AA"></button>
                            </div>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" disabled @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" disabled @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" disabled @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :md="12" class="box pt-3 ">
                        <el-row :gutter="24" class="df aic">
                            <el-col :md="10">
                                <check text="Название услуги" />
                            </el-col>
                            <el-col :md="14">
                                <el-input class="h-48 w-full" disabled @focus="outerVisible = true" placeholder="Введите количество" />
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="AddUslugi = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Add Zadach -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="AddZadach" width="70%" center>
        <div>
            <header>
                <h1>Добавление задачи</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24">
                    <el-col :md="24" class="pb-4">
                        <p class="pb-1 pt-3">Заголовок задачи</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите заголовок для задачи" />
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="24" class="pb-4">
                        <p class="pb-1 pt-3">Задача</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите описание задачи" />
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pb-4">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1 pt-3">Дата выполнения задачи</p>
                                <el-date-picker type="date" placeholder="Выберите дату выполнения"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1 pt-3">Время выполнения</p>
                                <el-time-select :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Введите время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pb-4">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1 pt-3">Дата напоминания</p>
                                <el-date-picker type="date" placeholder="Выберите дату напоминания"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2 pt-3">
                                <p class="pb-1">Время напоминания</p>
                                <el-time-select :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Введите время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="24" class="pb-3">
                        <p class="pb-1 pt-3">Ответственный сотрудник</p>
                        <el-select class="h-48 w-full plus-icon fw600 simple-p" v-model="a" multiple filterable allow-create default-first-option placeholder="Выберите языки">
                            <el-option v-for="item in dic" :key="item" :label="item" :value="item"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="24" class="pb-2 pt-4">
                        <div class="df w-full jcfe">
                            <button class="df aic ">
                                <img src="../../assets/img/minus.svg" alt="">
                                <p class="simple-p ml-3 fw600 cp">Удалить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body">
                <el-row :gutter="24">
                    <el-col :md="24" class="pb-2 pt-3">
                        <div class="df w-full jcfe">
                            <button class="df aic ">
                                <img src="../../assets/img/plusPrimary.svg" alt="">
                                <p class="simple-p ml-3 fw600 cp">Добавить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="AddZadach = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    required
} from 'vuelidate/lib/validators'
import SProgress from "@/components/SProgress.vue";
import Pogination from '../../components/Pogination'
export default {
    components: {
        SProgress,
        Pogination
    },
    data() {
        return {
            a: [],
            dialog_add: false,
            activeName: 'first',
            pogiactive: 2,
            search: "",
            value: '',
            date: '',
            value2: true,
            NewGost: false,
            AddZadach: false,
            AddUslugi: false,
            period: false,
            mdelete: false,
            dtariffs: false,
            poginations: [],
            rols_list: [{
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    from: '01/01/2021  14:00',
                    to: '01/01/2021  14:00',
                    country: 'RUSSIAN FEDERATION',
                    data: [{
                            vip: false,
                            checkin: '27/03/2021  12:45',
                            departure: '22/04/2021  14:00',
                            amount: '12 345 670,00 UZS',
                        },
                        {
                            vip: true,
                            checkin: '27/03/2021  12:45',
                            departure: '22/04/2021  14:00',
                            amount: '12 345 670,00 UZS',
                        }
                    ]
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    from: '01/01/2021  14:00',
                    to: '01/01/2021  14:00',
                    country: 'RUSSIAN FEDERATION',
                    data: [{
                            vip: false,
                            checkin: '27/03/2021  12:45',
                            departure: '22/04/2021  14:00',
                            amount: '12 345 670,00 UZS',
                        },
                        {
                            vip: true,
                            checkin: '27/03/2021  12:45',
                            departure: '22/04/2021  14:00',
                            amount: '12 345 670,00 UZS',
                        }
                    ]
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    from: '01/01/2021  14:00',
                    to: '01/01/2021  14:00',
                    country: 'RUSSIAN FEDERATION',
                    data: []
                },
            ],
            country: ['Tashkent', "Kokand"],
            dic: ["Archa", "Olma"],
            PeriodDate: {
                date: '',
                time: ''
            },
            DuplicateTariff: {
                start_date: '',
                start_time: '',
                end_date: '',
                end_time: '',
            }
        };
    },
    validations: {
        PeriodDate: {
            date: {
                required
            },
            time: {
                required
            }
        },
        DuplicateTariff: {
            start_date: {
                required
            },
            start_time: {
                required
            },
            end_date: {
                required
            },
            end_time: {
                required
            },
        }
    },
    methods: {
        ddactiver(a) {
            var i = 0;
            for (i = 0; i < this.Sortes.length; i++) {
                this.Sortes[i].active = false
            }
            this.Sortes[a].active = true
            this.SortName = this.Sortes[a].name
        },
        modals(command) {
            if (command == '1') {
                this.AddUslugi = true
            }
            if (command == '2') {
                this.AddZadach = true
            }

        },
        PeriodDatePost() {
            console.log('submit!')
            this.$v.PeriodDate.$touch()
            if (this.$v.PeriodDate.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        DuplicateTariffPost() {
            console.log('submit!')
            this.$v.DuplicateTariff.$touch()
            if (this.$v.DuplicateTariff.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        GetPogination(a) {
            this.poginations.splice(0)
            var n = parseInt(a / 48)
            var q = 0
            var i = 0
            for (i = 0; i < n; i++) {
                this.poginations.push(q)
                q = q + 48
            }
            if (a % 48 > 0) {
                this.poginations.push(q)
                console.log(q)
            }
        },
        pogiActiver(a) {
            if (a != -1 && a != -2) {
                this.pogiactive = a
            }
            if (a == -1) {
                if (this.pogiactive < this.poginations.length - 1) {
                    this.pogiactive += 1
                }
            }
            if (a == -2) {
                if (this.pogiactive > 0) {
                    this.pogiactive -= 1
                }
            }
        },
    },
    mounted() {
        this.GetPogination(480)
    }
};
</script>

<style lang="scss" scoped>
.role-item {
    background: #fbfdff;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 0.75rem;
    position: relative;

    header {
        text-align: center;
        position: relative;
        padding-top: 14px;
        padding-bottom: 16px;

        h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 20px;
            text-transform: uppercase;
        }

        .actions {
            position: absolute;
            right: 0;
            display: flex;
            padding-right: 24px;
            top: 14px;

            img {
                cursor: pointer;
                transition: all 0.2s ease-out;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    .table {
        width: 100%;
        padding: 0;
        margin: 0;

        .head {
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
            border-bottom: 1px solid #d3d8de;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 18px;
            color: #919eac;
            display: flex;

            section {
                width: 242px;
            }
        }

        .body {
            padding: 12px 24px 14px 24px;
            display: flex;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #091c31;

            section {
                width: 242px;
            }
        }
    }
}

.tables {
    width: 100%;

}

.tables th {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #919EAC;
    text-align: left;
    padding-bottom: 12px;
    padding-top: 12px;
}

.tables1 td {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #091C31;
    text-align: left;
    padding: 12px 5px;
}

.tables2 td {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #091C31;
    text-align: left;
    padding: 12px 5px;
}

.pl24 {
    padding-left: 24px !important;
}

.pr24 {
    padding-right: 24px !important;
}

.fio-td {
    position: relative;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 20px !important;
    color: #091C31 !important;
}

.vip {
    position: absolute;
    top: 0;
    right: 144px;
    background: #FFD600;
    width: 72px;
    height: 24px;
    padding: 2px;
    border-radius: 0px 0px 10px 10px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #fff;
    text-align: center;
}

.vip2 {
    position: absolute;
    height: 100%;
    width: 12px;
    top: 0;
    left: 0;
    border-radius: 0px 8px 8px 0px;
    background: #FFD600;
}

.nbron {
    color: #007AFF !important;
    text-decoration-line: underline !important;
}

.el-date-editor {
    width: 100%;
}

.facil-button {
    height: 48px;
    width: 180px;
    border: 1px solid #007AFF;
    border-radius: 8px;
    margin-left: 10px;
    color: #007AFF;
    outline: none;
    cursor: pointer;
}

.el-dropdown-link {
    outline: none;
}

.dd-title {
    font-size: 15px;
    position: relative;
}

.dd-title i {
    font-size: 12px;
    font-weight: 600;
    opacity: 1;
    position: absolute;
    top: 12px;
    left: 5px;
    display: none;
}

.dd-title:hover i {
    display: block;
}

.dd-title:hover {
    color: #091C31;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    background: #409BFF;

}

.bg-primary {
    color: #091C31;
    background: #409BFF !important;
}

.el-switch__core {
    padding: 5px 1px;
    background: #007AFF;
}

.add-button {
    outline: none;
    cursor: pointer;
    padding: 0px 10px;

}

.add-button p {
    font-size: 13px;
    color: #007AFF;
}
</style>
