<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Номерной фонд</h1>
            </div>
            <div>
                <router-link to="/settings/documents/settings">
                    <el-button type="primary" v-on:click="adding_category = true" icon="el-icon-setting">Настройки</el-button>
                </router-link>
            </div>
        </header>
    </div>
    <div class="settings-list">
        <div class="setting-card" v-for="(item, index) in print_modals" :key="index">
            <div class="printer-div">
                <button v-on:click=" ModalActiver(index)"><img src="../../../assets/img/Print.svg" alt=""></button>
            </div>
            <img :src="item.img" class="logo" />
            <h2>{{ item.title }}</h2>
            <p class="status" v-if="item.percent == 100">
                <span class="mr-2"><img width="15px" :src="done" alt=""></span> Done
            </p>
            <p class="status" v-else>{{ item.percent }}%</p>
            <SProgress :percent="item.percent" />
        </div>
    </div>

    <!-- Invisovoy -->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[0].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Инвойс</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <p class="f17 fw-600 tc pb-3">Вид</p>
                <el-row :gutter="24" class="pt-5">
                    <el-col :span="12" class="df jcfe">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintA.svg" alt="">
                            <div>
                                <p class="pt-2">1 экземпляр на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>
                    <el-col :span="12" class="df ">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintB.svg" alt="">
                            <div>
                                <p class="pt-2">2 экземпляра на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>

                </el-row>
            </div>
            <div class="wp-body bb1 pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Нумерация инвойсов</p>
                    <el-col :span="12" :class="{ 'error-command': $v.invoice.num_type.$error}">
                        <p class="pb-1">Тип нумерации</p>
                        <el-select v-model.trim="$v.invoice.num_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип нумерации">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12" :class="{ 'error-command': $v.invoice.zero_type.$error}">
                        <p class="pb-1">Частота обнуления счётчика</p>
                        <el-select v-model.trim="$v.invoice.zero_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип обнуления">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Дополнительно</p>
                    <el-col :span="12">
                        <check text="Указать реквизиты" />
                    </el-col>
                    <el-col :span="12">
                        <check text="Указать курс доллара США" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(0)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PrintInvoce" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Broni -->
    <el-dialog class="std-dialog mt-2 " width="70%" :visible.sync="print_modals[1].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Форма подтверждения брони</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Нумерация форм</p>
                    <el-col :span="12" :class="{ 'error-command': $v.brone.num_type.$error}">
                        <p class="pb-1">Тип нумерации</p>
                        <el-select v-model.trim="$v.brone.num_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип нумерации">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12" :class="{ 'error-command': $v.brone.zero_type.$error}">
                        <p class="pb-1">Частота обнуления счётчика</p>
                        <el-select v-model.trim="$v.brone.zero_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип обнуления">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Дополнительно</p>
                    <el-col :span="12">
                        <check text="Указать реквизиты" />
                    </el-col>
                    <el-col :span="12">
                        <check text="Указать курс доллара США" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(1)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PrintBrone" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Форма аннуляции брони -->
    <el-dialog class="std-dialog mt-2 " width="70%" :visible.sync="print_modals[2].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Форма аннуляции брони</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Нумерация форм</p>
                    <el-col :span="12" :class="{ 'error-command': $v.unbrone.num_type.$error}">
                        <p class="pb-1">Тип нумерации</p>
                        <el-select v-model.trim="$v.unbrone.num_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип нумерации">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12" :class="{ 'error-command': $v.unbrone.zero_type.$error}">
                        <p class="pb-1">Частота обнуления счётчика</p>
                        <el-select v-model.trim="$v.unbrone.zero_type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип обнуления">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Дополнительно</p>
                    <el-col :span="12">
                        <check text="Указать реквизиты" />
                    </el-col>
                    <el-col :span="12">
                        <check text="Указать курс доллара США" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(2)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PrintUnBrone" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Внутренние правила -->
    <el-dialog class="std-dialog mt-2 " width="70%" :visible.sync="print_modals[3].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Внутренние правила</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <p class="f17 fw-600 tc pb-3">Вид</p>
                <el-row :gutter="24" class="pt-5">
                    <el-col :span="12" class="df jcfe">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintA.svg" alt="">
                            <div>
                                <p class="pt-2">1 экземпляр на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>
                    <el-col :span="12" class="df ">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintB.svg" alt="">
                            <div>
                                <p class="pt-2">2 экземпляра на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>

                </el-row>
            </div>
            <div class="wp-body bb1 pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Язык</p>
                    <el-col :span="24">
                        <p class="pb-1">Языки</p>
                        <el-select class="h-48 w-full plus-icon" v-model="value_lang" multiple filterable allow-create default-first-option placeholder="Выберите языки">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Правила</p>
                    <el-col :span="24">
                        <p class="pb-1">Правило на узбекском языке</p>
                        <el-select class="h-48 w-full plus-icon" v-model="value_lang" multiple filterable allow-create default-first-option placeholder="Введите правило">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="w-full df jcfe pt-5">
                            <button class="add-button">
                                <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="A"> </i> Добавить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(3)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Правила заезда -->
    <el-dialog class="std-dialog mt-2 " width="70%" :visible.sync="print_modals[4].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Правила заезда</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-3">Язык</p>
                    <el-col :span="24">
                        <p class="pb-1">Языки</p>
                        <el-select class="h-48 w-full plus-icon" v-model="value_lang" multiple filterable allow-create default-first-option placeholder="Выберите языки">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-3">Правила</p>
                    <el-col :span="24">
                        <p class="pb-1">Правило на узбекском языке</p>
                        <el-select class="h-48 w-full plus-icon" v-model="value_lang" multiple filterable allow-create default-first-option placeholder="Введите правило">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="w-full df jcfe pt-5">
                            <button class="add-button">
                                <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="A"> </i> Добавить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(4)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Отчёты -->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[5].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Отчёты</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <p class="f17 fw-600 tc pb-3">Вид</p>
                <el-row :gutter="24" class="pt-5">
                    <el-col :span="12" class="df jcfe">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintA.svg" alt="">
                            <div>
                                <p class="pt-2">1 экземпляр на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>
                    <el-col :span="12" class="df ">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintB.svg" alt="">
                            <div>
                                <p class="pt-2">2 экземпляра на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>

                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Дополнительно</p>
                    <el-col :span="12">
                        <check text="Указать реквизиты" />
                    </el-col>
                    <el-col :span="12">
                        <check text="Указать курс доллара США" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(5)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Тарифы и цены -->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[7].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Тарифы и цены</p>
            </header>
            <div class="wp-body bb1 pt-3">
                <p class="f17 fw-600 tc pb-3">Вид</p>
                <el-row :gutter="24" class="pt-5">
                    <el-col :span="12" class="df jcfe">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintA.svg" alt="">
                            <div>
                                <p class="pt-2">1 экземпляр на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>
                    <el-col :span="12" class="df ">
                        <label class="print-item p-6">
                            <img src="../../../assets/img/PrintB.svg" alt="">
                            <div>
                                <p class="pt-2">2 экземпляра на лист А4</p>
                                <div class="df jcc pt-2">
                                    <label class="radio-labla">
                                        <input type="radio" checked="checked" name="type_printer">
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </label>
                    </el-col>

                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-5">Дополнительно</p>
                    <el-col :span="12">
                        <check text="Указать реквизиты" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(7)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
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
import done from "../../../assets/img/checkgreen.svg"
import image1 from "../../../assets/img/documents/Invoice.svg"
import image2 from "../../../assets/img/documents/BookingConfirmation.svg"
import image3 from "../../../assets/img/documents/BookingAnnulation.svg"
import image4 from "../../../assets/img/documents/Rules.svg"
import image5 from "../../../assets/img/documents/CheckRules.svg"
import image6 from "../../../assets/img/documents/Reports.svg"
import image7 from "../../../assets/img/documents/CashBoxReport.svg"
import image8 from "../../../assets/img/documents/Tariffs.svg"

export default {

    components: {
        SProgress,
    },
    data() {
        return {
            done: done,
            a: true,
            radio: false,
            country: ['olma', 'anor'],
            langs: [{
                    name: "O'zbekcha",
                    lang: 'uz'
                },
                {
                    name: "English",
                    lang: 'en'
                },
                {
                    name: "Russian",
                    lang: 'ru'
                },
            ],
            value: '',
            value_lang: [],
            aa: 75,
            print_modals: [{
                    id: 1,
                    path: "/settings/registration",
                    title: "Инвойс",
                    percent: 100,
                    img: image1,
                    modal: false
                },
                {
                    id: 2,
                    path: "/settings/registration",
                    title: "Подтверждение брони",
                    percent: 100,
                    img: image2,
                    modal: false
                },
                {
                    id: 3,
                    path: "/settings/registration",
                    title: "Аннуляция брони",
                    percent: 100,
                    img: image3,
                    modal: false
                },
                {
                    id: 4,
                    path: "/settings/registration",
                    title: "Внутренние правила",
                    percent: 10,
                    img: image4,
                    modal: false
                },
                {
                    id: 5,
                    path: "/settings/registration",
                    title: "Правила заезда",
                    percent: 25,
                    img: image5,
                    modal: false
                },
                {
                    id: 6,
                    path: "/settings/registration",
                    title: "Отчёты",
                    percent: 75,
                    img: image6,
                    modal: false
                },
                {
                    id: 7,
                    path: "/settings/registration",
                    title: "Реестр кассы",
                    percent: 0,
                    img: image7,
                    modal: false
                },
                {
                    id: 8,
                    path: "/settings/registration",
                    title: "Тарифы и цены",
                    percent: 0,
                    img: image8,
                    modal: false
                },
            ],
            invoice: {
                num_type: '',
                zero_type: '',
            },
            brone: {
                num_type: '',
                zero_type: '',
            },
            unbrone: {
                num_type: '',
                zero_type: '',
            },
        };
    },
    validations: {
        invoice: {
            num_type: {
                required
            },
            zero_type: {
                required
            },
        },
        brone: {
            num_type: {
                required
            },
            zero_type: {
                required
            },
        },
        unbrone: {
            num_type: {
                required
            },
            zero_type: {
                required
            },
        },
    },
    methods: {
        ModalActiver(a) {
            this.print_modals[a].modal = !this.print_modals[a].modal
            return this.print_modals[a].modal
        },
        PrintInvoce() {
            console.log('submit!')
            this.$v.invoice.$touch()
            if (this.$v.invoice.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PrintBrone() {
            console.log('submit!')
            this.$v.brone.$touch()
            if (this.$v.brone.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PrintUnBrone() {
            console.log('submit!')
            this.$v.unbrone.$touch()
            if (this.$v.unbrone.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
    }
};
</script>

<style lang="scss" scoped>
$gutter: 12px;

.settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        background: #fbfdff;
        height: 216px;
        min-width: 200px;
        border: 1px solid #d3d8de;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        transition: all 0.1s ease-out;
        user-select: none;
        position: relative;

        &:hover {
            -webkit-box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            transform: translate(0, -2px);
        }

        .logo {
            margin-bottom: 19.5px;
        }

        h2 {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #091c31;
            margin-bottom: 18px;
        }

        .status {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 20px;
            display: flex;
            margin-bottom: 8px;
            align-items: center;
            text-align: center;
            color: #00c48c;
        }
    }
}

.printer-div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 10px;
    top: 10px;
}

.printer-div button {
    outline: none;
    cursor: pointer;
}

.print-item {
    background: #FBFDFF;
    border: 1px solid #D3D8DE;
    border-radius: 8px;
    width: 320px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.f17 {
    font-size: 17px;
}

.fw-600 {
    font-weight: 600;
}

.tc {
    text-align: center;
}

.bg-fb {
    background: #FBFDFF;
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
