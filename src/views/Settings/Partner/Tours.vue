<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings/partners" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Туристические агентства</h1>
            </div>
            <div>
                <el-button type="primary" v-on:click="adding_category = true">Добавить</el-button>
            </div>
        </header>
    </div>
    <div class="sp-wrapper found-table">
        <el-table class="w-full" :data=" tours_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Партнёр" prop="partnors"></el-table-column>
            <el-table-column label="Номер договора" prop="number"> </el-table-column>
            <el-table-column label="Срок договора" prop="date"></el-table-column>
            <el-table-column label="Активность" prop="active">
                <template slot-scope="scope">
                    <p v-if="scope.row.active"><span class="mr-2" style="display:inline-block;"><img src="@/assets/img/enable.svg" /></span> Да</p>
                    <p v-else><span class="mr-2" style="display:inline-block;"><img src="@/assets/img/disabled.svg" /></span> Нет</p>
                </template>

            </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="dialog_add=true" class="mr-3" src="@/assets/img/Prolong.svg" />
                        <img @click="dialog_add = true" class="mr-3" src="@/assets/img/Edit.svg" />
                        <img @click="dialog_add = true" src="@/assets/img/Delete.svg" />
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog class="std-dialog" :show-close="false" :visible.sync="adding_category" width="500px" center>
        <div>
            <header>
                <h1>Добавление договора</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.contract.number.$error}">
                        <p class="pb-1">Номер договора</p>
                        <el-input v-model.trim="$v.contract.number.$model" class="h-48" placeholder="Введите номер договора" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.contract.date_start.$error}">
                    <p class="pb-1">Дата заключения договора</p>
                        <el-date-picker v-model.trim="$v.contract.date_start.$model" type="date" placeholder="05/05/2020"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.contract.date_end.$error}">
                        <p class="pb-1">Дата остановки действия договора</p>
                        <el-date-picker v-model.trim="$v.contract.date_end.$model" type="date" placeholder="05/05/2020"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="adding_category = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PosterConrtact" class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <el-dialog class="std-dialog" width="85%" :visible.sync="dialog_add" :show-close="false" :close-on-click-modal="false">
        <div>
            <header>
                <h1>Добавление партнёра</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-2">
                    <el-col :md="8" :class="{ 'error-command': $v.partner.surname.$error}">
                        <p class="pb-1">Фамилия</p>
                        <el-input v-model.trim="$v.partner.surname.$model" class="h-48" placeholder="Введите фамилию партнера" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.name.$error}">
                        <p class="pb-1">Имя</p>
                        <el-input v-model.trim="$v.partner.name.$model" class="h-48" placeholder="Введите имя партнера" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.mid_name.$error}">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48" v-model.trim="$v.partner.mid_name.$model" placeholder="Введите отчество партнера" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.partner.country.$error}">
                        <p class="pb-1">Страна</p>
                        <el-select v-model.trim="$v.partner.country.$model" class="h-48 w-full sel-icon" placeholder="Выберите страну">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.phone.$error}">
                        <p class="pb-1">Номер телефона</p>
                        <el-input v-model.trim="$v.partner.phone.$model" class="h-48" placeholder="Введите номер телефона" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.partner.additional_phone.$error}">
                        <p class="pb-1">Дополнительный номер телефона</p>
                        <el-input class="h-48" v-model.trim="$v.partner.additional_phone.$model" placeholder="Введите дополнитеьный номер телефона" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="12" :class="{ 'error-command': $v.partner.faks.$error}">
                        <p class="pb-1">Факс</p>
                        <el-input v-model.trim="$v.partner.faks.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите номер факса" />
                    </el-col>
                    <el-col :md="12" :class="{ 'error-command': $v.partner.email.$error}">
                        <p class="pb-1">E-mail</p>
                        <el-input class="h-48" v-model.trim="$v.partner.email.$model" placeholder="Введите e-mail" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.partner.contract_number.$error}">
                        <p class="pb-1">Номер договора</p>
                        <el-input class="h-48" v-model.trim="$v.partner.contract_number.$model" placeholder="Введите номер договора" />
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
                        <button v-on:click="PosterPartner" class="primary-btn f-size-17 h-48 mw-180">
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
            adding_category: false,
            dialog_add: false,
            search:'',
            value:'',
            tours_list: [{
                    id: 1,
                    partnors: "Dolores Travel Services",
                    number: "№26-08/2020",
                    date: "01/01/2020 - 31/12/2020",
                    active: true
                }, {
                    id: 2,
                    partnors: "Dolores Travel Services",
                    number: "№26-08/2020",
                    date: "01/01/2020 - 31/12/2020",
                    active: false
                },
                {
                    id: 3,
                    partnors: "Dolores Travel Services",
                    number: "№26-08/2020",
                    date: "01/01/2020 - 31/12/2020",
                    active: false
                }, {
                    id: 4,
                    partnors: "Dolores Travel Services",
                    number: "№26-08/2020",
                    date: "01/01/2020 - 31/12/2020",
                    active: true
                }, {
                    id: 5,
                    partnors: "Dolores Travel Services",
                    number: "№26-08/2020",
                    date: "01/01/2020 - 31/12/2020",
                    active: true
                },

            ],
            country: ['Tashkent', "Kokand"],
            contract:{
                number:'',
                date_start:'',
                date_end:''
            },
            partner: {
                surname: '',
                name: '',
                mid_name: '',
                country: '',
                phone: '',
                additional_phone: '',
                faks: '',
                email: '',
                contract_number: '',
                start_contract: '',
                end_contract: ''
            },
            dic: ["Archa", "Olma"],
            category:{

            }
        };
    },
    validations: {
        partner: {
            surname: {
                required
            },
            name: {
                required
            },
            mid_name: {
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
            contract_number: {
                required
            },
            start_contract: {
                required
            },
            end_contract: {
                required
            }
        },
        contract:{
                number:{
                required
            },
                date_start:{
                required
            },
                date_end:{
                required
            }
            },
    },
    methods:{
        PosterPartner: function () {
            this.$v.partner.$touch()
            if (this.$v.partner.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PosterConrtact(){
            this.$v.contract.$touch()
            if (this.$v.contract.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.df {
    display: flex;
}

.jcsb {
    justify-content: space-between;
}

.aic {
    align-items: center;
}

.jcfe {
    justify-content: flex-end;
}

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

.el-date-editor {
    width: 100%;
}
</style>
