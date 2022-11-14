<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-3 fww bb0">
            <div class="df jcsb aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                    <h1>Тарифы и цены</h1>
                </div>
                <div>
                    <el-button type="primary" v-on:click="$router.push({name:'sett_tariffs'})">Настройки</el-button>
                </div>

            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Тарифы" name="first" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc" v-on:click="$router.push({name:'new_tariffs'})">
                                        <img src="../../../assets/img/addPrimary.svg" alt="AAA">
                                        <span class="ml-3">Создать</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Удобства" name="second" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="10">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <!-- Тарифы -->
    <div class="sp-wrapper found-table" v-if="activeName=='first'">
        <el-table class="w-full bgfb" :data=" facilities_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Название тарифа"><template slot-scope="scope"><b>{{scope.row.name}}</b></template></el-table-column>
            <el-table-column label="Заполненность">
                <template slot-scope="scope">
                    <SProgress :percent="scope.row.fullness" />
                </template>
            </el-table-column>
            <el-table-column label="Тип тарифа" prop="type"> </el-table-column>
            <el-table-column label="Скидка" prop="sale"></el-table-column>
            <el-table-column label="Срок договора" prop="date"></el-table-column>
            <el-table-column label="Активность">
                <template slot-scope="scope">
                    <p v-if="scope.row.active=='yes'" class="df aic"><span class="mr-2"><img src="@/assets/img/enable.svg" /></span> Да</p>
                    <p v-else-if="scope.row.active=='expectation'" class="df aic"><span class="mr-2 "><img src="@/assets/img/Clock.svg" /></span> Ожидание</p>
                    <p v-else class="df aic"><span class="mr-2"><img src="@/assets/img/disabled.svg" /></span> Нет</p>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot-scope="scope">
                    <div class="actions df jcfe">
                        <span style="display:none;">{{scope.row.active}}</span>
                        <img @click="dialog_add = true" class="mr-3" src="@/assets/img/Print.svg" />
                        <div>
                            <el-dropdown trigger="click" :hide-on-click="false" @command="modals">
                                <span class="el-dropdown-link">
                                    <img src="@/assets/img/MenuDots.svg" />
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="dd-title" command="1">Изменить</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="2">Архивировать</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="3">Продлить срок</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="4">Удалить</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- Удобства -->
    <div class="sp-wrapper found-table" v-if="activeName=='second'">
        <el-table class="w-full bgfb" :data=" facilities_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Название тарифа"><template slot-scope="scope"><b>{{scope.row.name}}</b></template></el-table-column>
            <el-table-column label="Заполненность">
                <template slot-scope="scope">
                    <SProgress :percent="scope.row.fullness" />
                </template>
            </el-table-column>
            <el-table-column label="Тип тарифа" prop="type"> </el-table-column>
            <el-table-column label="Скидка" prop="sale"></el-table-column>
            <el-table-column label="Срок договора" prop="date"></el-table-column>
            <el-table-column align="right">
                <template slot-scope="scope">
                    <div class="actions df jcfe">
                        <span style="display:none;">{{scope.row.active}}</span>
                        <img @click="dialog_add = true" class="mr-3" src="@/assets/img/Print.svg" />
                        <div>
                            <el-dropdown trigger="click" :hide-on-click="false" @command="modals">
                                <span class="el-dropdown-link">
                                    <img src="@/assets/img/MenuDots.svg" />
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="dd-title" command="5">Разархивировать</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="6">Дублировать в тарифы</el-dropdown-item>
                                    <el-dropdown-item class="dd-title" command="3">Удалить</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- Archive -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="archive" width="468px" center>
        <div>
            <header>
                <h1>Архивация</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac">Пожалуйста, подтвердите действие:</p>
                        <p class="pb-3 tac">Архивация тарифа:</p>
                        <p class="pb-3 tac c09">Тариф “Весенний”</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="archive = false">
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
    <!-- Period time-->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="period" width="468px" center>
        <div>
            <header>
                <h1>Продление срока действия</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1 pb-3">
                    <el-col :md="24" class="box" :class="{ 'error-command': $v.PeriodDate.date.$error}">
                        <p class="pb-1">Продление срока до:</p>
                        <el-date-picker v-model.trim="$v.PeriodDate.date.$model" clear-icon="w-full h-48" v-model="value" type="date" placeholder="Выберите дату"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box" :class="{ 'error-command': $v.PeriodDate.time.$error}">
                        <p class="pb-1">Конец действия:</p>
                        <el-time-select v-model.trim="$v.PeriodDate.time.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30' }" placeholder="Введите время"></el-time-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="period = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PeriodDatePost" class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Delete modal -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="mdelete" width="468px" center>
        <div>
            <header>
                <h1>Удаление</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac">Пожалуйста, подтвердите действие:</p>
                        <p class="pb-3 tac">Удаление тарифа:</p>
                        <p class="pb-3 tac c09">Тариф “Весенний”</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="mdelete = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Удалить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Un archive -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="unarchive" width="468px" center>
        <div>
            <header>
                <h1>Разархивация</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac">Пожалуйста, подтвердите действие:</p>
                        <p class="pb-3 tac">Разархивация тарифа:</p>
                        <p class="pb-3 tac c09">Тариф “Весенний”</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="unarchive = false">
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
    <!--  Duplicate in tariffs -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="dtariffs" width="60%" center>
        <div>
            <header>
                <h1>Дублирование в тарифы</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class=" pb-3">
                    <el-col :md="12" class="box pt-1" :class="{ 'error-command': $v.DuplicateTariff.start_date.$error}">
                        <p class="pb-1">Срок тарифа с:</p>
                        <el-date-picker clear-icon="w-full h-48" v-model.trim="$v.DuplicateTariff.start_date.$model" type="date" placeholder="Выберите дату"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-1" :class="{ 'error-command': $v.DuplicateTariff.start_time.$error}">
                        <p class="pb-1">Начало действия</p>
                        <el-time-select v-model.trim="$v.DuplicateTariff.start_time.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30' }" placeholder="Введите время"></el-time-select>
                    </el-col>

                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-1" :class="{ 'error-command': $v.DuplicateTariff.end_date.$error}">
                        <p class="pb-1">Срок тарифа до: </p>
                        <el-date-picker clear-icon="w-full h-48" v-model.trim="$v.DuplicateTariff.end_date.$model" type="date" placeholder="Выберите дату"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-1" :class="{ 'error-command': $v.DuplicateTariff.end_time.$error}">
                        <p class="pb-1">Конец действия</p>
                        <el-time-select v-model.trim="$v.DuplicateTariff.end_time.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30' }" placeholder="Введите время"></el-time-select>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="dtariffs = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="DuplicateTariffPost" class="primary-btn f-size-17 h-48 mw-180">
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
export default {
    components: {
        SProgress,
    },
    data() {
        return {
            dialog_add: false,
            activeName: 'first',
            search: "",
            value: '',
            date: '',
            value2: true,
            archive: false,
            unarchive: false,
            period: false,
            mdelete: false,
            dtariffs: false,
            facilities_list: [{
                    id: 1,
                    name: "Основной",
                    fullness: 75,
                    type: 'Годовой',
                    sale: 'Нет',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'expectation'
                }, {
                    id: 2,
                    name: "Тариф “Весенний”",
                    fullness: 0,
                    type: 'Сезонный',
                    sale: '- 20%',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'no'
                },
                {
                    id: 3,
                    name: "Тариф “Весенний”",
                    fullness: 100,
                    type: 'Сезонный',
                    sale: 'Индивидуальная скидка',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'yes'
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
                this.$router.push({
                    name: 'new_tariffs'
                })
            }
            if (command == '2') {
                this.archive = true
            }
            if (command == '3') {
                this.period = true
            }
            if (command == '4') {
                this.mdelete = true
            }
            if (command == '5') {
                this.unarchive = true
            }
            if (command == '6') {
                this.dtariffs = true
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
        DuplicateTariffPost(){
            console.log('submit!')
            this.$v.DuplicateTariff.$touch()
            if (this.$v.DuplicateTariff.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    },
    mounted() {}
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
}

.dd-title i {
    font-size: 12px;
    font-weight: 600;
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
