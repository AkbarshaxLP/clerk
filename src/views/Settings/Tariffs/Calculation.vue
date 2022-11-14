<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Правила расчёта</h1>
            </div>
        </header>
    </div>
    <div class="wrapper-0 pt-0 ">
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Основные</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.currency.$error}">
                    <p class="pb-1">Основная валюта</p>
                    <el-select class="h-48 w-full sel-icon" v-model.trim="$v.calculation.currency.$model" placeholder="Выберите основную валюту">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.additional_currency.$error}">
                    <p class="pb-1">Дополнительная валюта</p>
                    <el-select class="h-48 w-full sel-icon"  v-model.trim="$v.calculation.additional_currency.$model" placeholder="Выберите дополнительную валюту">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.measurement.$error}">
                    <p class="pb-1">Единица измерения</p>
                    <el-select class="h-48 w-full sel-icon"  v-model.trim="$v.calculation.measurement.$model" placeholder="Выберите единицу измерения">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.tourist_tax.$error}">
                    <p class="pb-1">Туристический сбор для нерезидентов</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.tourist_tax.$model" placeholder="Введите % от БВР для тур. сбора"  ></el-input>

                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.type_tax_t.$error}">
                    <p class="pb-1">Тип налога</p>
                    <el-select class="h-48 w-full sel-icon" v-model.trim="$v.calculation.type_tax_t.$model" placeholder="Выберите тип налога">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.tax_t.$error}">
                    <p class="pb-1">Налог</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.tax_t.$model" placeholder="Введите % налога"  ></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.resident_tax.$error}">
                    <p class="pb-1">Туристический сбор для резидентов</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.resident_tax.$model" placeholder="Введите % от БВР для тур. сбора"></el-input>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.type_tax_r.$error}">
                    <p class="pb-1">Тип налога</p>
                    <el-select class="h-48 w-full sel-icon" v-model.trim="$v.calculation.type_tax_r.$model"   placeholder="Выберите тип налога">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.tax_r.$error}"> 
                    <p class="pb-1">Налог</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.tax_r.$model" placeholder="Введите % налога" ></el-input>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Расчёт для детей</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.age_from.$error}">
                    <p class="pb-1">Возраст с:</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.age_from.$model" placeholder="Введите возраст детей"></el-input>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.age_to.$error}">
                    <p class="pb-1">Возраст до:</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.age_to.$model" placeholder="Введите возраст детей"  ></el-input>
                </el-col>
                <el-col :md="8" class="box pt-3" :class="{ 'error-command': $v.calculation.amount_pay.$error}">
                    <p class="pb-1">Сумма к оплате</p>
                    <el-input class="h-48 w-full" v-model.trim="$v.calculation.amount_pay.$model" placeholder="Введите % от стоимости номера для взрослых"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="24" class="box pt-3">
                    <div class="w-full df jcfe pt-5">
                        <button class="add-button">
                            <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="AAA"> </i> Добавить</p>
                        </button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Тип тарификации</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.tariff_type" value="Single" name="A">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Одинарная (Общая тарификация для местных и иностранных граждан)</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.tariff_type" value="Dual" name="A">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Двойная (Отдельная тарификация для местных и иностранных граждан)</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Резиденты и нерезиденты в одной комнате</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.norezident" value="A" name="B">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по половины суммы от цен по типу размещения по гражданству</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.norezident" Value="B" name="B">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по ценам для местных граждан</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.norezident" value="C" name="B">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по ценам для иностранных граждан</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.norezident" value="D" name="B">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Индивидуальные цены</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Способ расчёта ранних заездов, в случае проживания в номере резидентов и нерезидентов одновременно</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.rezident_norezident_erly" value="A" name="C">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по половины суммы от цен по типу размещения по гражданству</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.rezident_norezident_erly" value="B" name="C">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по ценам для местных граждан</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Способ расчёта поздних выездов, в случае проживания в номере резидентов и нерезидентов одновременно</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.rezident_norezident_late" value="A" name="D">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по половины суммы от цен по типу размещения по гражданству</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="A">
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="24" class="box pt-4">
                    <div class="df">
                        <label class="radio-labla">
                            <input type="radio" checked="checked" v-model="calculation.rezident_norezident_late" value="B" name="D">
                            <span class="checkmark"></span>
                        </label>
                        <p class="pb-1 ml-2 mr-2 c09">Расчёт по ценам для местных граждан</p>
                        <img src="../../../assets/img/QuestionMark.svg" alt="C">
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body">
            <el-row :gutter="24" class="pt-6">
                <el-col :span="12" class="pt-3">
                    <button class="float-right default-btn f-size-17 h-48 mw-180" @click="$router.push({name:'sett_tariffs'})">
                        Отмена
                    </button>
                </el-col>
                <el-col :span="12" class="pt-3">
                    <button @click="CalculationPoster" class="primary-btn f-size-17 h-48 mw-180">
                        Добавить
                    </button>
                </el-col>
            </el-row>
        </div>
    </div>
    {{value}}
</div>
</template>

<script>
import SProgress from "@/components/SProgress.vue";
import {
    required
} from 'vuelidate/lib/validators'
export default {
    components: {
        SProgress,
    },
    data() {
        return {
            done: '',
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
            dic: ['1', '2'],
            value: '',
            search: '',
            value_lang: [],
            calculation: {
                currency: '',
                additional_currency: '',
                measurement: '',
                tourist_tax: '',
                type_tax_t: '',
                tax_t: '',
                resident_tax: '',
                type_tax_r: '',
                tax_r: '',
                age_from: '',
                age_to: '',
                amount_pay: '',
                tariff_type: 'Single',
                norezident: 'A',
                rezident_norezident_erly: 'B',
                rezident_norezident_late: 'B',
            }
        };
    },
    validations: {
        calculation: {
            currency: {
                required
            },
            additional_currency: {
                required
            },
            measurement: {
                required
            },
            tourist_tax: {
                required
            },
            type_tax_t: {
                required
            },
            tax_t: {
                required
            },
            resident_tax: {
                required
            },
            type_tax_r: {
                required
            },
            tax_r: {
                required
            },
            age_from: {
                required
            },
            age_to: {
                required
            },
            amount_pay: {
                required
            },
        }
    },
    methods:{
        CalculationPoster(){
            console.log('submit!')
            this.$v.calculation.$touch()
            if (this.$v.calculation.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
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
