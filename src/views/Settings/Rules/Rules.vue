<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
            <h1>Правила бронирования</h1>
        </header>
    </div>

    <div class="role-item">
        <header>
            <h1>гарантированная бронь</h1>
            <div class="actions">
                <img @click="garant_edit = true" class="mr-3" src="@/assets/img/Print.svg" />
                <img @click="garant_edit = true" src="@/assets/img/Edit.svg" />

            </div>
        </header>
        <table class="w-full table-el">
            <tr>
                <th>Время бесплатной отмены (в сутках)</th>
                <th>Оплата за позднюю отмену</th>
                <th>Типы гарантии</th>
            </tr>
            <tr v-for="item in guaranteed_reservation" :key="item.id">
                <td class="w-25">{{item.cancellationTime}}</td>
                <td class="w-25">{{item.count}}</td>
                <td>{{item.title}}</td>
            </tr>
        </table>
    </div>

    <div class="role-item" v-for="item in unguaranteed_reservation" :key="item.id">
        <header>
            <h1>не гарантированная бронь</h1>
            <div class="actions">
                <img @click="ungarant_edit=true" src="@/assets/img/Edit.svg" />
            </div>
        </header>
        <table class="w-full table-el">
            <tr>
                <th>Время уведомления</th>
                <th>Период уведомления перед заездом</th>
                <th></th>
            </tr>
            <tr>
                <td class="w-25">{{item.time}}</td>
                <td class="w-25">{{item.endTime}}</td>
                <td></td>
            </tr>
        </table>
    </div>

    <el-dialog class="std-dialog" width="85%" :visible.sync="garant_edit" :show-close="false" :close-on-click-modal="false">
        <div>
            <header>
                <h1>Гаранитированная бронь</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24">
                        <p class="pb-1 title-p">Штраф за позднюю отменуs</p>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.guaranteed_booking.num_days.$error}">
                        <p class="pb-1">Период бесплатной отмены</p>
                        <el-input class="h-48" v-model.trim="$v.guaranteed_booking.num_days.$model" placeholder="Введите количество суток" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.guaranteed_booking.type_penalty.$error}">
                        <p class="pb-1">Тип штрафа</p>
                        <el-select class="h-48 w-full sel-icon" v-model.trim="$v.guaranteed_booking.type_penalty.$model" placeholder="Ввыберите тип штрафа">
                            <el-option v-for="item in options" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.guaranteed_booking.amount.$error}">
                        <p class="pb-1">Сумма</p>
                        <el-input class="h-48" v-model.trim="$v.guaranteed_booking.amount.$model" placeholder="Введите сумму штрафа" />
                    </el-col>
                </el-row>
            </div>
            <header class="df jcfe">
                <el-button type="text" icon="el-icon-plus"> Добавить </el-button>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-4">
                    <el-col :span="6" class="pb-3">
                        <check text="Visa" v-model="guaranteed_booking.warranty_types.visa" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Maestro" v-model="guaranteed_booking.warranty_types.maestro" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Предоплата" v-model="guaranteed_booking.warranty_types.prepayment" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Корпоративный договор" v-model="guaranteed_booking.warranty_types.corporate_agreement" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="MasterCard" v-model="guaranteed_booking.warranty_types.master_card" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Карта Мир" v-model="guaranteed_booking.warranty_types.world_map" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Гарантийное письмо" v-model="guaranteed_booking.warranty_types.letter_of_guarantee" />
                    </el-col>
                    <el-col :span="6" class="pb-3">
                        <check text="Гарантия агента или компании" v-model="guaranteed_booking.warranty_types.agent_or_company_guarantee" />
                    </el-col>
                </el-row>
                <!-- buttons -->
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="garant_edit = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180" v-on:click="PosterGuaranteed">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="ungarant_edit" width="500px" center>
        <div>
            <header>
                <h1>Не гарантированная бронь</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.unguaranteed_booking.clock_count.$error}">
                        <p class="pb-1">Уведомить перед заездом</p>
                        <el-input class="h-48" @focus="outerVisible = true" v-model.trim="$v.unguaranteed_booking.clock_count.$model" placeholder="Введите количество часов" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.unguaranteed_booking.date.$error}">
                        <p class="pb-1">Время уведомления</p>
                        <el-date-picker  v-model.trim="$v.unguaranteed_booking.date.$model" type="datetime" placeholder="Укажите время уведомления"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ungarant_edit = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180" v-on:click="PosterUnGuaranteed">
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
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            langs: ["Русский"],
            search: '',
            login: null,
            password: null,
            garant_edit: false,
            ungarant_edit: false,
            value: '',
            date: null,
            guaranteed_reservation: [{
                id: 1,
                cancellationTime: 32,
                count: 27,
                title: "Visa, MasterCard, Maestro, Карта Мир, Предоплата, Гарантийное письмо, (+3)",
            }, ],
            unguaranteed_reservation: [{
                id: 1,
                time: "12:00",
                endTime: 32,
            }, ],
            options: [1, 2, 3, 4],
            guaranteed_booking: {
                num_days: '',
                type_penalty: '',
                amount: '',
                warranty_types: {
                    visa: false,
                    master_card: false,
                    maestro: false,
                    prepayment: false,
                    corporate_agreement: false,
                    world_map: false,
                    letter_of_guarantee: false,
                    agent_or_company_guarantee: false
                }
            },
            unguaranteed_booking: {
                clock_count:'',
                date:'',
            }
        };
    },
    validations: {
        guaranteed_booking: {
            num_days: {
                required
            },
            type_penalty: {
                required
            },
            amount: {
                required
            },
        },
        unguaranteed_booking: {
                clock_count:{required},
                date:{required},
            }
    },
    methods:{
        PosterGuaranteed: function () {
            console.log('submit!')
            this.$v.guaranteed_booking.$touch()
            if (this.$v.guaranteed_booking.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PosterUnGuaranteed: function () {
            console.log('submit!')
            this.$v.unguaranteed_booking.$touch()
            if (this.$v.unguaranteed_booking.$invalid) {
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

.table-el {
    width: 100%;
    padding: 10px;
}

.table-el tr {
    border-bottom: 1px solid #D3D8DE;
}

.table-el tr th {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #919EAC;
    text-align: left;
    padding: 14px 14px;
}

.table-el tr td {
    padding: 14px 14px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #091C31;
}

.el-date-editor {
    width: 100%;
}

.w-25 {
    width: 25%;
}

.title-p {
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
}
</style>
