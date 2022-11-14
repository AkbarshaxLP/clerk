<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
            <h1>Партнёры</h1>
        </header>
    </div>

    <div class="role-item" v-for="item in rols_list" :key="item.id">
        <header>
            <h1>{{ item.name }}</h1>
            <div class="actions">
                <img @click="dialog_add = true" class="mr-3" src="@/assets/img/plusblue.svg" />
                <img @click="$router.push({name:'tours'})" src="@/assets/img/RoomsEdits.svg" />
            </div>
        </header>
        <table class="w-full table-el">
            <tr>
                <th>Количество партнёров</th>
                <th>Активные</th>
                <th>Лучший партнёр</th>
            </tr>
            <tr>
                <td>{{item.NumberPartnyor}}</td>
                <td>{{item.count}}</td>
                <td>{{item.title}}</td>
            </tr>
        </table>
    </div>

    <el-dialog class="std-dialog" width="85%" :visible.sync="dialog_add" :show-close="false" :close-on-click-modal="false">
        <div>
            <header>
                <h1>Добавление партнёра</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24">
                    <el-col :md="12" :class="{ 'error-command': $v.partner.short_name.$error}">
                        <p class="pb-1">Краткое название</p>
                        <el-input class="h-48" v-model.trim="$v.partner.short_name.$model" @focus="outerVisible = true" placeholder="Введите название партнера" />
                    </el-col>
                    <el-col :md="12" :class="{ 'error-command': $v.partner.legal_name.$error}">
                        <p class="pb-1">Юридическое название</p>
                        <el-input class="h-48" v-model.trim="$v.partner.legal_name.$model" placeholder="Введите юридическое название партнера" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.partner.country.$error}">
                        <p class="pb-1">Страна</p>
                        <el-select class="h-48 w-full sel-icon" v-model.trim="$v.partner.country.$model" placeholder="Выберите страну">
                            <el-option :label="item" v-for="item in dic" :key="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.phone.$error}">
                        <p class="pb-1">Номер телефона</p>
                        <el-input class="h-48" v-model.trim="$v.partner.phone.$model" placeholder="Введите номер телефона" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.additional_phone.$error}">
                        <p class="pb-1">Дополнительный номер телефона</p>
                        <el-input class="h-48" v-model.trim="$v.partner.additional_phone.$model" placeholder="Введите дополнитеьный номер телефона" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="12" :class="{ 'error-command': $v.partner.faks.$error}">
                        <p class="pb-1">Факс</p>
                        <el-input class="h-48" v-model.trim="$v.partner.faks.$model" @focus="outerVisible = true" placeholder="Введите номер факса" />
                    </el-col>
                    <el-col :md="12" :class="{ 'error-command': $v.partner.email.$error}">
                        <p class="pb-1">E-mail</p>
                        <el-input class="h-48" v-model.trim="$v.partner.email.$model" placeholder="Введите e-mail" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.partner.contract_name.$error}">
                        <p class="pb-1">Номер договора</p>
                        <el-input class="h-48" v-model.trim="$v.partner.contract_name.$model" placeholder="Введите логин E-mehmon" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.start_contract.$error}">
                        <p class="pb-1">Дата заключения договора</p>
                        <el-date-picker v-model.trim="$v.partner.start_contract.$model" type="date" placeholder="05/05/2020"></el-date-picker>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.end_contract.$error}">
                        <p class="pb-1">Дата остановки действия договора</p>
                        <el-date-picker v-model.trim="$v.partner.end_contract.$model" type="date" placeholder="05/05/2020"></el-date-picker>
                    </el-col>
                </el-row>

                <!-- buttons -->
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="dialog_add = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PosterParten" class="primary-btn f-size-17 h-48 mw-180">
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
    required,
    email
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            langs: ["Русский"],
            search: '',
            login: null,
            password: null,
            dialog_add: false,
            date: null,
            rols_list: [{
                    id: 1,
                    name: "туристические агентства",
                    NumberPartnyor: 32,
                    count: 27,
                    title: "TRAVEL ORNAMENT",
                }, {
                    id: 2,
                    name: "компании-партнёры",
                    NumberPartnyor: 32,
                    count: 27,
                    title: "TRAVEL ORNAMENT",
                }, {
                    id: 3,
                    name: "агенты",
                    NumberPartnyor: 32,
                    count: 27,
                    title: "TRAVEL ORNAMENT",
                },

            ],
            partner: {
                short_name: '',
                legal_name: '',
                country: '',
                phone: '',
                additional_phone: '',
                faks: '',
                email: '',
                contract_name: '',
                start_contract: '',
                end_contract: '',
            }
        };
    },
    validations: {
        partner: {
            short_name: {
                required
            },
            legal_name: {
                required
            },
            country: {
                required
            },
            phone: {
                required
            },
            additional_phone: {
                required
            },
            faks: {
                required
            },
            email: {
                required,
                email
            },
            contract_name: {
                required
            },
            start_contract: {
                required
            },
            end_contract: {
                required
            },
        }
    },
    methods:{
        PosterParten: function () {
            this.$v.partner.$touch()
            if (this.$v.partner.$invalid) {
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
</style>
