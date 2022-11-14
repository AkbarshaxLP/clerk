<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings/tariffs" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Номерной фонд</h1>
            </div>
        </header>
    </div>
    <div class="settings-list">
        <div class="setting-card" v-for="(item, index) in print_modals" :key="index" @click="ModalActiver(index)">
            <img :src="item.img" class="logo" />
            <h2>{{ item.title }}</h2>
            <p class="status" v-if="item.percent == 100">
                <span class="mr-2"><img width="15px" :src="done" alt=""></span> Done
            </p>
            <p class="status" v-else>{{ item.percent }}%</p>
            <SProgress :percent="item.percent" />
        </div>
    </div>
    <!-- Бесплатные периоды -->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[0].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Бесплатные периоды</p>
            </header>
            <div class="wp-body  pt-3 bb1">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-4 pt-1">Период бесплатного заезда</p>
                    <el-col :span="12" :class="{ 'error-command': $v.FreeCheck.check_in_from.$error}">
                        <p class="pb-1">С:</p>
                        <el-time-select v-model.trim="$v.FreeCheck.check_in_from.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="Введите время" class="w-full h-48"></el-time-select>
                    </el-col>
                    <el-col :span="12" :class="{ 'error-command': $v.FreeCheck.check_in_to.$error}">
                        <p class="pb-1">До:</p>
                        <el-time-select v-model.trim="$v.FreeCheck.check_in_to.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" value="12:00" disabled class="w-full h-48"></el-time-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <p class="f17 fw-600 tc pb-4 pt-1">Период бесплатного выезда</p>
                    <el-col :span="12" :class="{ 'error-command': $v.FreeCheck.check_out_from.$error}">
                        <p class="pb-1">С:</p>
                        <el-time-select v-model.trim="$v.FreeCheck.check_out_from.$model" disabled :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="Select time" class="w-full h-48"></el-time-select>
                    </el-col>
                    <el-col :span="12" class="box" :class="{ 'error-command': $v.FreeCheck.check_out_to.$error}">
                        <p class="pb-1">До:</p>
                        <el-time-select v-model.trim="$v.FreeCheck.check_out_to.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30' }" placeholder="Введите время"></el-time-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(0)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button @click="FreeCheckPost" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Ранний заезд -->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[1].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Ранний заезд</p>
            </header>
            <div class="wp-body bb1  pt-3">
                <el-row :gutter="24">
                    <el-col :span="24" class="pt-3">
                        <div class="df p-1 aic fdc">
                            <p class="status title-p pb-2 c00grren">25%</p>
                            <SProgress :percent="25" style="width:320px;" />
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-4">
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.ErlyCheck.check_in_from.$error}">
                        <p class="pb-1">Заезд с:</p>
                        <el-time-select v-model.trim="$v.ErlyCheck.check_in_from.$model" disabled :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="Введите время" class="w-full h-48"></el-time-select>
                    </el-col>
                    <el-col :span="12" class=" box pt-3" :class="{ 'error-command': $v.ErlyCheck.check_in_to.$error}">
                        <p class="pb-1">Заезд с:</p>
                        <el-time-select v-model.trim="$v.ErlyCheck.check_in_to.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" class="w-full h-48" placeholder="Введите время"></el-time-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-4">
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.ErlyCheck.type.$error}">
                        <p class="pb-1">Тип тарификации</p>
                        <el-select class="h-48 w-full sel-icon" v-model.trim="$v.ErlyCheck.type.$model"  placeholder="Введите правило">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.ErlyCheck.cost.$error}">
                        <p class="pb-1">Сумма</p>
                        <el-input class="h-48 w-full" v-model.trim="$v.ErlyCheck.cost.$model" placeholder="Введите сумму" v-model="value"></el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="w-full df jcfe pt-5">
                            <button class="add-button">
                                <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="A"> </i> Добавить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(1)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="ErlyCheckPost" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Поздний выезд-->
    <el-dialog class="std-dialog mt-2 " width="60%" :visible.sync="print_modals[2].modal" :show-close="false" :close-on-click-modal="false">
        <div class="bg-fb">
            <header>
                <p class="title-p">Поздний выезд</p>
            </header>
            <div class="wp-body bb1  pt-3">
                <el-row :gutter="24">
                    <el-col :span="24" class="pt-3">
                        <div class="df p-1 aic fdc">
                            <p class="status title-p pb-2 c00grren">70%</p>
                            <SProgress :percent="70" style="width:320px;" />
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-4">
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.LateCheck.check_out_from.$error}">
                        <p class="pb-1">Заезд с:</p>
                        <el-time-select v-model.trim="$v.LateCheck.check_out_from.$model" disabled :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" placeholder="Введите время" class="w-full h-48"></el-time-select>
                    </el-col>
                    <el-col :span="12" class=" box pt-3" :class="{ 'error-command': $v.LateCheck.check_out_to.$error}">
                        <p class="pb-1">Заезд с:</p>
                        <el-time-select v-model.trim="$v.LateCheck.check_out_to.$model" :picker-options="{start: '08:30', step: '00:15', end: '18:30'}" class="w-full h-48" placeholder="Введите время"></el-time-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-4">
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.LateCheck.type.$error}">
                        <p class="pb-1">Тип тарификации</p>
                        <el-select class="h-48 w-full" v-model.trim="$v.LateCheck.type.$model" placeholder="Введите правило">
                            <el-option v-for="item in langs" :key="item.lang" :label="item.name" :value="item.lang"> </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12" class="box pt-3" :class="{ 'error-command': $v.LateCheck.cost.$error}">
                        <p class="pb-1">Сумма</p>
                        <el-input class="h-48 w-full" placeholder="Введите сумму" v-model.trim="$v.LateCheck.cost.$model"></el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-3">
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="w-full df jcfe pt-5">
                            <button class="add-button">
                                <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="A"> </i> Добавить</p>
                            </button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-10">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ModalActiver(2)">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button @click="LateCheckPost" class="primary-btn f-size-17 h-48 mw-180">
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
import image1 from '../../../assets/img/ClockBig.svg'
import image2 from '../../../assets/img/In.svg'
import image3 from '../../../assets/img/Out.svg'
import image4 from '../../../assets/img/Calculator.svg'

export default {
    components: {
        SProgress,
    },
    data() {
        return {
            done: done,
            a: true,
            radio: false,
            period: true,
            end_time: '12:00',
            start_time: "00:00",
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
                    title: "Бесплатные периоды заезда/выезда",
                    percent: 100,
                    img: image1,
                    modal: false
                },
                {
                    id: 2,
                    title: "Ранний заезд",
                    percent: 10,
                    img: image2,
                    modal: false
                },
                {
                    id: 3,
                    title: "Поздний выезд",
                    percent: 20,
                    img: image3,
                    modal: false
                },
                {
                    id: 4,
                    title: "Правила расчёта",
                    percent: 75,
                    img: image4,
                    modal: false
                },

            ],
            FreeCheck: {
                check_in_from: '',
                check_in_to: '12:00',
                check_out_from: '12:00',
                check_out_to: ''
            },
            ErlyCheck: {
                check_in_from: '00:00',
                check_in_to: '',
                type: '',
                cost: ''
            },
            LateCheck: {
                check_out_from: '12:00',
                check_out_to: '',
                type: '',
                cost: ''
            }

        };
    },
    validations: {
        FreeCheck: {
            check_in_from: {
                required
            },
            check_in_to: {
                required
            },
            check_out_from: {
                required
            },
            check_out_to: {
                required
            }
        },
        ErlyCheck: {
            check_in_from: {
                required
            },
            check_in_to: {
                required
            },
            type: {
                required
            },
            cost: {
                required
            }
        },
        LateCheck: {
            check_out_from: {
                required
            },
            check_out_to: {
                required
            },
            type: {
                required
            },
            cost: {
                required
            }
        }
    },
    methods: {
        ModalActiver(a) {
            this.print_modals[a].modal = !this.print_modals[a].modal
            if (a == 3) {
                this.$router.push({
                    name: 'setcal_tariffs'
                })
            }
            return this.print_modals[a].modal
        },
        FreeCheckPost(){
            console.log('submit!')
            this.$v.FreeCheck.$touch()
            if (this.$v.FreeCheck.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        ErlyCheckPost(){
            console.log('submit!')
            this.$v.ErlyCheck.$touch()
            if (this.$v.ErlyCheck.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        LateCheckPost(){
            console.log('submit!')
            this.$v.LateCheck.$touch()
            if (this.$v.LateCheck.$invalid) {
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
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        background: #fbfdff;
        height: 216px;
        min-width: 330px;
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

/* RADIO CHECK */

.radio-labla {
    position: relative;
    width: 24px;
    height: 24px;

}

.radio-labla input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0 !important;
    cursor: pointer;

}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: #FBFDFF;
    border: 2px solid #9FCDFF;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
}

.checkmark:after {
    content: "";
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #007AFF;
    display: none;
}

.radio-labla input:checked~.checkmark:after {
    display: block;
}

.radio-labla input:checked~.checkmark {
    border: 2px solid #007AFF !important;
}

/* END RADIO CHECK */
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100% !important;
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
