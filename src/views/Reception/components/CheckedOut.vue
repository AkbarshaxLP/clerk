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
                            <button class="simple-button mr-2">
                                <img src="../../../assets/img/Resettle.svg" alt="">
                            </button>
                            <check2 v-model="item.select" />
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
                        <td class="pl24 fio-td"> <div class="vip2" v-if="item.vip"></div> {{item.fio}}</td>
                        <td>№{{item.number}} Стд. Одноместный</td>
                        <td>{{item.rnumber}}</td>
                        <td>{{item.country}}</td>
                        <td class="nbron">{{item.reservation_number}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.paymentState}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;">
                                    <img width="24px" src="../../../assets/img/Resettle.svg" alt="">
                                </button>
                                <check2 v-model="item.select" />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>

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
        };
    },
    methods: {
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
.vip2{
    position:absolute;
    height: 100%;
    width: 12px;
    top: 0;
    left: 0;
    border-radius: 0px 8px 8px 0px;
    background: #FFD600;
}
.nbron{
    color: #007AFF !important;
    text-decoration-line: underline !important;
}
</style>
