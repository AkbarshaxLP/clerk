<template>
<div>
    <div v-if="view=='category'">
        <div class="role-item" v-for="item in rols_list" :key="item.name">
            <div class="vip df jcc aic" v-if="item.vip"><img src="../../../assets/img/ThumbUp.svg" alt="AA"></div>
            <header>
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">

                    <el-col :md="8" class="pt-3">
                        <p class="title-p c919 tal  ">{{item.reservation_number}}</p>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <h1 class="pr-6 pl-6">{{item.fio}}</h1>
                    </el-col>
                    <el-col :md="8" class="pt-3">
                        <div class="df aic jcfe">
                            <button class="simple-button mr-3" @click=" NewBooking=true">
                                <img width="12px" src="../../../assets/img/disabled.svg" alt="">
                            </button>
                            <button class="simple-button mr-2" @click=" GuestCard=true">
                                <img src="../../../assets/img/RoomsEdits.svg" alt="">
                            </button>
                            <button class="simple-button mr-2" @click="RegCheckIn2=true">
                                <img src="../../../assets/img/Edit.svg" alt="">
                            </button>
                            <button class="simple-button ">
                                <img src="../../../assets/img/Print.svg" alt="">
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </header>
            <div class="tables tables1 w-full">
                <table style="width:100%;">
                    <tr>
                        <th class="pl24">Количество номеров</th>
                        <th>Количество гостей</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th>Сумма к оплате</th>
                        <th>Статус оплаты</th>
                        <th class="pr24">Оплачивает</th>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24">{{item.number}}</td>
                        <td>{{item.num_gost}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.paymentState}}</td>
                        <td class="pr24">{{item.pays}}</td>
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
                        <th class="pl24">Бронировал</th>
                        <th>Номер брони</th>
                        <th>Комната</th>
                        <th>Гости</th>
                        <td>Оплачивает</td>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th>Сумма к оплате</th>
                        <td>Статус оплаты</td>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in rols_list" :key="item.name">
                        <td class="pl24 fio-td">
                            <div class="vip2" v-if="item.vip"></div> {{item.fio}}
                        </td>
                        <td>{{item.reservation_number}}</td>
                        <td>{{item.number}}</td>
                        <td>{{item.num_gost}}</td>
                        <td>{{item.pays}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.paymentState}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-3" @click=" NewBooking=true">
                                    <img width="12px" src="../../../assets/img/disabled.svg" alt="">
                                </button>
                                <button class="simple-button mr-2" @click=" GuestCard=true">
                                    <img src="../../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                                <button class="simple-button mr-2" @click="RegCheckIn2=true">
                                    <img src="../../../assets/img/Edit.svg" alt="">
                                </button>
                                <button class="simple-button ">
                                    <img src="../../../assets/img/Print.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- New Booking -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="NewBooking" width="80%" center>
        <div>
            <header>
                <h1>Новая бронь</h1>
            </header>
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
                                <el-date-picker class="w100 h-48" type="date" placeholder="Выберите дату"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время заезда</p>
                                <el-time-select class="w100 h-48" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время заезда"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата выезда</p>
                                <el-date-picker class="w100 h-48" type="date" placeholder="Выберите дату выезда"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время выезда</p>
                                <el-time-select class="w100 h-48" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время выезда"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Категоря и местоположение номеров</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Категория номеров</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите категорию номера">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Корпус</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите номер">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Этаж</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип гостя">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-12 bb1">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Свойства брони</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <div class="df aic pt-3">
                            <label class="radio-labla">
                                <input type="radio" checked="checked" name="AA" value="one" v-model="typeSelect">
                                <span class="checkmark"></span>
                            </label>
                            <p class="ml-3 c09">Бронь на одного</p>
                        </div>
                         <div class="df aic pt-4">
                            <label class="radio-labla">
                                <input type="radio"  name="AA" value="group" v-model="typeSelect">
                                <span class="checkmark"></span>
                            </label>
                            <p class="ml-3 c09">Бронь для группы</p>
                        </div>
                        
                         <div class="df aic pt-4">
                            <check text="Показать частично свободных номеров в период брони" v-model="period" />
                        </div>

                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :span="24" class="df jcc">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Поиск номеров
                        </button>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Номера</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3 pb-3">
                    <el-col :md="24">
                        <div class="df aic jcc">
                                <p class="c09">Найдено номеров: 4</p>
                                <button class="ml-3 minus-button"><img src="@/assets/img/minusp.svg" alt="" /></button>

                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Номер комнаты</th>
                        <th>Свободен С:</th>
                        <th v-if="period">Индикатор периода доступности</th>
                        <th >Свободен До:</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in rols_list" :key="item.name">
                        <td class="pl24 fw600 title-p c09">№{{item.number}}</td>
                        <td class="fw600 title-p c09">{{item.checkin}}</td>
                        <td v-if="period"> <ProgresTwo itemLeft="10%" itemRight="100%" /> </td>
                        <td class="fw600 title-p c09">{{item.departure}}</td>
                        <td class="pr24 df aic jcfe">
                            <label class="radio-labla" v-if="typeSelect=='one'">
                                <input type="radio" checked="checked" name="gost">
                                <span class="checkmark"></span>
                            </label>
                            <check v-if="typeSelect=='group'" />

                        </td>
                    </tr>
                </table>
            </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="NewBooking = false">
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
import check2 from '../../../components/checkcrickle'
import check from '../../../components/check'
import ProgresTwo from '../../../components/ProgresTwo'
export default {
    components: {
        check2,
        ProgresTwo,
        check
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
            NewBooking: false,
            typeSelect:'one',
            period:false,
            rols_list: [{
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    num_gost: '18',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'Не оплачена',
                    pays: 'Компания',
                    vip: true,
                    select: 'disabled'
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    num_gost: '18',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'По договору',
                    pays: 'Агент',
                    vip: false,
                    select: true,
                }, {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    number: "208",
                    num_gost: '18',
                    country: 'RUSSIAN FEDERATION',
                    reservation_number: '12345-01/01/2021',
                    checkin: '27/03/2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    paymentState: 'Оплачена',
                    pays: 'Агент',
                    vip: true,
                    select: false,
                },
            ],
        };
    },
    methods: {}
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
    background: #00C48C;
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
    background: #00C48C;
}

.nbron {
    color: #007AFF !important;
    text-decoration-line: underline !important;
}
</style>
