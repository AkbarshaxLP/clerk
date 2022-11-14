<template>
<div>
    <div v-if="view=='category'">
        <div class="role-item" v-for="item in rols_list" :key="item.name">
            <div class="vip" v-if="item.vip">VIP</div>
            <header>
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                    <el-col :md="8" class="pt-3">
                        <h1 class="tal">{{item.fio}}</h1>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <p class="title-p c919  pr-6 pl-6">Стандарт одноместный {{ item.number }}</p>

                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <div class="df aic jcfe">
                            <button class="simple-button mr-2" @click=" GuestCard=true">
                                <img src="../../../assets/img/RoomsEdits.svg" alt="">
                            </button>
                            <button class="simple-button mr-2" @click="RegCheckIn2=true">
                                <img src="../../../assets/img/Edit.svg" alt="">
                            </button>
                            <button class="simple-button ">
                                <img src="../../../assets/img/LoginGreen.svg" alt="">
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </header>
            <div class="tables tables1 w-full">
                <table style="width:100%;">
                    <tr>
                        <th class="pl24">Регистрационный номер</th>
                        <th>Гражданство</th>
                        <th>Номер брони</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th>Сумма к оплате</th>
                        <th class="pr24">Статус оплаты</th>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24 nbron">{{item.rnumber}}</td>
                        <td>{{item.country}}</td>
                        <td>{{item.reservation_number}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td class="pr24">{{item.paymentState}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div v-if="view=='list'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">ФИО</th>
                        <th>Комната</th>
                        <th>Регистрационный номер</th>
                        <th>Гражданство</th>
                        <th>Номер брони</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th>Сумма к оплате</th>
                        <th>Статус оплаты</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in rols_list" :key="item.name">
                        <td class="pl24 fio-td">
                            <div class="vip2" v-if="item.vip"></div> {{item.fio}}
                        </td>
                        <td>№{{item.number}} Стд. Одноместный</td>
                        <td>{{item.rnumber}}</td>
                        <td>{{item.country}}</td>
                        <td class="nbron">{{item.reservation_number}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.paymentState}}</td>
                        <td class="pr24 pl-2">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2">
                                    <img src="../../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                                <button class="simple-button mr-2">
                                    <img src="../../../assets/img/Edit.svg" alt="">
                                </button>
                                <button class="simple-button ">
                                    <img src="../../../assets/img/LoginGreen.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Guest Card-->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="GuestCard" width="690px" center>
        <div>
            <header>
                <h1 class="font-upper pb-1 pt-1">abdullayev abdulla abdullayevich</h1>
            </header>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="bb1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основная информация</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Пол: <span class="c09">Мужской</span></p>
                        <p class="pb-3 ">Дата рождения: <span class="c09">01/01/1980</span></p>
                        <p class="pb-3 ">Гражданство: <span class="c09">UZBEKISTAN</span></p>
                        <p class="pb-3 ">Документ: <span class="c09">Паспорт</span></p>
                        <p class="pb-3 ">Серия: <span class="c09">AA</span></p>
                        <p class="pb-3 ">Номер: <span class="c09">1234567</span></p>
                        <p class="pb-3 ">Орган выдачи: <span class="c09">TOSHKENT SHAHAR IIB</span></p>
                        <p class="pb-3 ">Дата выдачи: <span class="c09">01/01/2012</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3 bb1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о проживании</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Номер брони: <span class="c09">№12345-01/01/2021</span></p>
                        <p class="pb-3 ">Комната: <span class="c09">№202 Стандарт Одноместный</span></p>
                        <p class="pb-3 ">Заезд: <span class="c09">04/04/2021 14:00</span></p>
                        <p class="pb-3 ">Выезд: <span class="c09">14/04/2021 11:00</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3 ">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация об оплате</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Оплачивает: <span class="c09">Сам гость</span></p>
                        <p class="pb-3 ">Сумма оплаты: <span class="c09">12 345 670,00 UZSй</span></p>
                        <p class="pb-3 ">Статус оплаты: <span class="c09">При заселении</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="24" class="df jcc">
                        <button class="primary-btn  f-size-17 h-48 mw-180" @click=" GuestCard=false">
                            Ok
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
        <!-- Ckecked in add guest -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="RegCheckIn2" width="80%" center>
        <div>
            <header>
                <h1>Регистрация гостя</h1>
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
                        <el-date-picker class="h-48 w100" type="date" placeholder="Введите дату рождения"></el-date-picker>
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
                                <el-date-picker class="h-48 w100" vlue="27/03/2021" type="date" placeholder="Выберите дату"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время заезда</p>
                                <el-time-select class="h-48 w100" value="16:51 : 18" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата выезда</p>
                                <el-date-picker class="h-48 w100" type="date" placeholder="Выберите дату выезда"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время выезда</p>
                                <el-time-select  class="h-48 w100" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время выезда"></el-time-select>
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
                        <el-date-picker class="h-48 w100" type="date" placeholder="Выберите дату пождения ребёнка"></el-date-picker>
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
                        <div class="w-full df jcsb aic">
                            <div class="df aic">
                                <el-switch active-icon-class inactive-icon-class> </el-switch>
                                <p class="f13 wf700 c919 ml-3">Регистрировать в системе E-mehmon</p>
                            </div>
                            <button class="simple-button df aic">
                                <img src="../../../assets/img/PlusUser.svg" alt="">
                                <p class="title-p wf600 cp ml-3">Добавить</p>
                            </button>
                        </div>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="RegCheckIn2 = false">
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
</div>
</template>

<script>
import {
    required,
    minLength,
    sameAs,
    email
} from 'vuelidate/lib/validators'
import check2 from '../../../components/checkcrickle'
export default {
    components: {
        check2,
    },
    props: {
        view: "",
        format: "",
    },
    data() {
        return {
            langs: ["Русский"],
            login: null,
            password: null,
            dialog_add: false,
            GuestCard: false,
            RegCheckIn2:false,
            dic: ['AA', "AA"],
            rols_list: [{
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    rnumber: '123456-9999-2021',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'Не оплачена',
                    vip: true,
                    select: 'disabled'
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    rnumber: '123456-9999-2021',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'Не оплачена',
                    vip: false,
                    select: true,
                }, {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',

                    number: "208",
                    rnumber: '123456-9999-2021',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'Не оплачена',
                    vip: true,
                    select: false,
                },
            ],
            employee: {
                surname: '',
                name: '',
                middle_name: '',
                phone: '',
                additional_phone: '',
                email: '',
                login: '',
                password: '',
                password2: '',
                loginE: '',
                passwordE: '',
                password2E: '',
                lang: []
            }
        };
    },
    validations: {
        employee: {
            surname: {
                required,
                minLength: minLength(1)
            },
            name: {
                required,
                minLength: minLength(1)
            },
            middle_name: {
                required,
                minLength: minLength(1)
            },
            phone: {
                required,
                minLength: minLength(1)
            },
            additional_phone: {
                required,
                minLength: minLength(1)
            },
            email: {
                required,
                email,
                minLength: minLength(1)
            },
            login: {
                required,
                minLength: minLength(1)
            },
            password: {
                required,
                minLength: minLength(3)
            },
            password2: {
                required,
                minLength: minLength(1),
                sameAsPassword: sameAs('password')
            },
            loginE: {
                required,
                minLength: minLength(1)
            },
            passwordE: {
                required,
                minLength: minLength(1)
            },
            password2E: {
                required,
                minLength: minLength(1),
                sameAsPassword: sameAs('passwordE')

            },
            lang: {
                required
            },
        }
    },
    methods: {
        Poster: function () {
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
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
</style>
