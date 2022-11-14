<template>
<div class="p-3">
    <div class="wrapper-0 pb-0">
        <header class="wp-header pr-0 pl-0 pb-0 fww bb0">
            <div class="df jcsb aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/settings/tariffs" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                    <h1>Новый тариф</h1>
                </div>

            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Со стойки" name="first" class="pl-6 pr-6">
                    </el-tab-pane>
                    <el-tab-pane label="Тур. фирмы" name="second" class="pl-6 pr-6">
                    </el-tab-pane>
                    <el-tab-pane label="Компании-партнёры" name="third" class="pl-6 pr-6">
                    </el-tab-pane>
                    <el-tab-pane label="Агенты" name="fourth" class="pl-6 pr-6">
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <div class="wrapper-0 pt-0 bgfb" v-if="activeName=='first'">
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Основные</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" :class="{ 'error-command': $v.NewTariff.name.$error}">
                    <p class="pb-1">Название тарифа</p>
                    <el-input v-model.trim="$v.NewTariff.name.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.NewTariff.type.$error}">
                    <p class="pb-1">Тип тарифа</p>
                    <el-select v-model.trim="$v.NewTariff.type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.NewTariff.category.$error}">
                    <p class="pb-1">Категория тарифа</p>
                    <el-select v-model.trim="$v.NewTariff.category.$model" class="h-48 w-full sel-icon" placeholder="Выберите категорию">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="12" class="pt-5">
                    <div class="w-full  df aic">
                        <div class="w-70" :class="{ 'error-command': $v.NewTariff.start_date.$error}">
                            <p class="pb-1">Срок тарифа с:</p>
                            <el-date-picker v-model.trim="$v.NewTariff.start_date.$model" type="date" placeholder="Выберите дату"></el-date-picker>
                        </div>
                        <div class="w-30 pl-2">
                            <p class="pb-1">Начало действия</p>
                            <el-time-select v-model="NewTariff.start_time" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                        </div>
                    </div>
                </el-col>
                <el-col :md="12" class="pt-5">
                    <div class="w-full  df aic">
                        <div class="w-70" :class="{ 'error-command': $v.NewTariff.end_date.$error}">
                            <p class="pb-1">Срок тарифа до:</p>
                            <el-date-picker v-model.trim="$v.NewTariff.end_date.$model" type="date" placeholder="Выберите дату"></el-date-picker>
                        </div>
                        <div class="w-30 pl-2">
                            <p class="pb-1">Конец действия</p>
                            <el-time-select v-model="NewTariff.end_time" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Дополнительно</p>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="df aic">
                <el-col :md="6">
                    <p class="pb-1">Процент НДС</p>
                    <el-input v-model="NewTariff.nds" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="6">
                    <p class="pb-1 op0">Процент НДС</p>
                    <div class="w-full h-48 df aic">
                        <check v-model="NewTariff.nds_cost" text="Включен в стоимость" />
                    </div>
                </el-col>
                <el-col :md="6">
                    <p class="pb-1">Туристический сбор - % от БВР</p>
                    <el-input v-model="NewTariff.bvr" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="6">
                    <p class="pb-1 op0">Процент НДС</p>
                    <div class="w-full h-48 df aic">
                        <check v-model="NewTariff.bvr_cost" text="Включен в стоимость" />
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pb-0 pt-3 ">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Цены</p>
                </el-col>
            </el-row>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange" class="accardion bgfb">
            <el-collapse-item title="Стандарт Двухметсный" name="1" class="bgfb">
                <div class="wp-body pb-0 pt-3  bgfb">
                    <el-row :gutter="24">
                        <el-col :md="6">
                            <p class="pb-1 op0">Резидентам</p>
                            <div class="df aic h-48">
                                <p class="title-p c09">Общие / максимальные цены</p>
                            </div>
                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.residents.payment1.$error}">
                            <p class="pb-1">Резидентам</p>
                            <el-input v-model.trim="$v.NewTariff.residents.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.unresidents.payment1.$error}">
                            <p class="pb-1">Нерезидентам</p>
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.combined_case.payment1.$error}">
                            <p class="pb-1">Комбинированный случай</p>
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :md="6" class="pt-3">
                            <div class="df aic h-48">
                                <p class="title-p c09">Одноместный</p>
                            </div>
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.residents.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.residents.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.unresidents.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.combined_case.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :md="6" class="pt-3">
                            <div class="df aic h-48">
                                <p class="title-p c09">Двухместный</p>
                            </div>
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.residents.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.residents.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.unresidents.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.combined_case.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                    </el-row>
                </div>
            </el-collapse-item>
            <el-collapse-item title="Семейная комната Четырёхметсный" name="2" class="bgfb">
            </el-collapse-item>
            <el-collapse-item title="Люкс Двухметсный" name="3" class="bgfb">
                <div class="wp-body pb-0 pt-3  bgfb">
                    <el-row :gutter="24">
                        <el-col :md="6">
                            <p class="pb-1 op0">Резидентам</p>
                            <div class="df aic h-48">
                                <p class="title-p c09">Общие / максимальные цены</p>
                            </div>
                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.residents.payment1.$error}">
                            <p class="pb-1">Резидентам</p>
                            <el-input v-model.trim="$v.NewTariff.residents.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.unresidents.payment1.$error}">
                            <p class="pb-1">Нерезидентам</p>
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" :class="{ 'error-command': $v.NewTariff.combined_case.payment1.$error}">
                            <p class="pb-1">Комбинированный случай</p>
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment1.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :md="6" class="pt-3">
                            <div class="df aic h-48">
                                <p class="title-p c09">Одноместный</p>
                            </div>
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.residents.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.residents.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.unresidents.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.combined_case.payment2.$error}">
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment2.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">
                        <el-col :md="6" class="pt-3">
                            <div class="df aic h-48">
                                <p class="title-p c09">Двухместный</p>
                            </div>
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.residents.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.residents.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />

                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.unresidents.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.unresidents.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                        <el-col :md="6" class="pt-3" :class="{ 'error-command': $v.NewTariff.combined_case.payment3.$error}">
                            <el-input v-model.trim="$v.NewTariff.combined_case.payment3.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                        </el-col>
                    </el-row>
                </div>
            </el-collapse-item>
            <el-collapse-item title="Апартаменты" name="4" class="bgfb">
                <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
            </el-collapse-item>
            <el-collapse-item title="Эконом-класс Трёхместный" name="5" class="bgfb">
                <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
            </el-collapse-item>
        </el-collapse>
        <div class="wp-body pb-0 pt-3 pl-0 pr-0">
            <el-row :gutter="24" class="pt-6">
                <el-col :span="12">
                    <button class="float-right default-btn f-size-17 h-48 mw-180" @click="$router.push({name:'tariffs'})">
                        Отмена
                    </button>
                </el-col>
                <el-col :span="12">
                    <button @click="NewTariffPost" class="primary-btn f-size-17 h-48 mw-180">
                        Добавить
                    </button>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="wrapper-0 pt-0 " v-if="activeName=='second'">
        <div class="wp-body pt-3 ">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Основные</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" :class="{ 'error-command': $v.TypeNewTariff.name.$error}">
                    <p class="pb-1">Название тарифа</p>
                    <el-input v-model.trim="$v.TypeNewTariff.name.$model" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.TypeNewTariff.type.$error}">
                    <p class="pb-1">Тип тарифа</p>
                    <el-select v-model.trim="$v.TypeNewTariff.type.$model"  class="h-48 w-full sel-icon" placeholder="Выберите тип">
                        <el-option :label="item" v-for="item in dic" :key="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.TypeNewTariff.category.$error}">
                    <p class="pb-1">Категория тарифа</p>
                    <el-select v-model.trim="$v.TypeNewTariff.category.$model" class="h-48 w-full sel-icon" placeholder="Выберите категорию">
                        <el-option :label="item" v-for="item in dic" :key="item" />
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="df aic pt-5">
                <el-col :md="6" class="pt-3">
                    <p class="pb-1">Процент НДС</p>
                    <el-input v-model="TypeNewTariff.nds" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="6" class="pt-3">
                    <p class="pb-1 op0">Процент НДС</p>
                    <div class="w-full h-48 df aic">
                        <check text="Включен в стоимость" v-model="TypeNewTariff.nds_cost" />
                    </div>
                </el-col>
                <el-col :md="6" class="pt-3">
                    <p class="pb-1">Туристический сбор - % от БВР</p>
                    <el-input v-model="TypeNewTariff.bvr" class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите название" />
                </el-col>
                <el-col :md="6" class="pt-3">
                    <p class="pb-1 op0">Процент НДС</p>
                    <div class="w-full h-48 df aic">
                        <check v-model="TypeNewTariff.bvr_cost" text="Включен в стоимость" />
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-6">
                <el-col :span="12" class="pt-3">
                    <button class="float-right default-btn f-size-17 h-48 mw-180" @click="$router.push({name:'tariffs'})">
                        Отмена
                    </button>
                </el-col>
                <el-col :span="12" class="pt-3">
                    <button @click="TypeNewTariffPost" class="primary-btn f-size-17 h-48 mw-180">
                        Добавить
                    </button>
                </el-col>
            </el-row>
        </div>
    </div>

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
            activeNames: '3',
            actiactiveNames: '1',
            search: "",
            value: '',
            date: '',
            value2: true,
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
            NewTariff: {
                name: '',
                type: '',
                category: '',
                start_date: '',
                start_time: '',
                end_date: '',
                end_time: '',
                nds: '',
                nds_cost: false,
                bvr: '',
                bvr_cost: false,
                residents: {
                    payment1: '',
                    payment2: '',
                    payment3: '',
                },
                unresidents: {
                    payment1: '',
                    payment2: '',
                    payment3: '',
                },
                combined_case: {
                    payment1: '',
                    payment2: '',
                    payment3: '',
                },
            },
            TypeNewTariff:{
                name: '',
                type: '',
                category: '',
                nds: '',
                nds_cost: false,
                bvr: '',
                bvr_cost: false,
            }
        };
    },
    validations: {
        NewTariff: {
            name: {
                required
            },
            type: {
                required
            },
            category: {
                required
            },
            start_date: {
                required
            },
            end_date: {
                required
            },
            residents: {
                payment1: {
                    required
                },
                payment2: {
                    required
                },
                payment3: {
                    required
                },
            },
            unresidents: {
                payment1: {
                    required
                },
                payment2: {
                    required
                },
                payment3: {
                    required
                },
            },
            combined_case: {
                payment1: {
                    required
                },
                payment2: {
                    required
                },
                payment3: {
                    required
                },
            },
        },
        TypeNewTariff:{
                name: {required},
                type: {required},
                category: {required},
                bvr_cost: false,
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
        NewTariffPost() {
            console.log('submit!')
            this.$v.NewTariff.$touch()
            if (this.$v.NewTariff.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        TypeNewTariffPost() {
            console.log('submit!')
            this.$v.TypeNewTariff.$touch()
            if (this.$v.TypeNewTariff.$invalid) {
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
