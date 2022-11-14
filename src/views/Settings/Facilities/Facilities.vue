<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-3 fww bb0">
            <div class="df jcsb aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                    <h1>Услуги и удобства</h1>
                </div>
                <div>
                    <el-button type="primary" v-on:click="dialog_add  = true">Добавить</el-button>
                </div>
            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Услуги" name="first" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc">
                                        <img src="../../../assets/img/PrintPrimary.svg" alt="AAA">
                                        <span class="ml-3">Распечатать</span>
                                    </button>
                                    <button class="facil-button df aic jcc" v-on:click="dialog_add  = true">
                                        <img src="../../../assets/img/addPrimary.svg" alt="AAA">
                                        <span class="ml-3">Создать</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <el-dropdown trigger="hover">
                                    <span class="el-dropdown-link">
                                        Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                            <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Удобства" name="second" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="10">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14">
                                <div class="w-full df aic jcfe">
                                    <button class="facil-button df aic jcc">
                                        <img src="../../../assets/img/PrintPrimary.svg" alt="AAA">
                                        <span class="ml-3">Распечатать</span>
                                    </button>
                                    <button class="facil-button df aic jcc" v-on:click="dialog_add  = true">
                                        <img src="../../../assets/img/addPrimary.svg" alt="AAA">
                                        <span class="ml-3">Создать</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <el-dropdown trigger="hover">
                                    <span class="el-dropdown-link">
                                        Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                            <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </el-col>
                        </el-row>

                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <div class="sp-wrapper found-table">
        <el-table class="w-full bgfb" :data=" facilities_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Партнёр"><template slot-scope="scope"><b>{{scope.row.name}}</b></template>
            </el-table-column>
            <el-table-column label="Стоимость" prop="price"> </el-table-column>
            <el-table-column label="Единица измерения" prop="date"></el-table-column>
            <el-table-column label="Доступность" prop="active">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.active" active-icon-class inactive-icon-class> </el-switch>

                </template>
            </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="dialog_service = true" class="mr-3" src="@/assets/img/Edit.svg" />
                        <img @click="dialog_add = true" src="@/assets/img/Delete.svg" />
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog class="std-dialog" width="85%" :visible.sync="dialog_add" :show-close="false" :close-on-click-modal="false">
        <div>
            <header>
                <h1>Создание услуги</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-2">
                    <el-col :md="8" :class="{ 'error-command': $v.facalities.category.$error}">
                        <p class="pb-1">Категория услуги</p>
                        <el-select v-model.trim="$v.facalities.category.$model" class="h-48 w-full sel-icon" placeholder="Выберите категорию">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.facalities.name_ser.$error}">
                        <p class="pb-1">Название услуги</p>
                        <el-input v-model.trim="$v.facalities.name_ser.$model" class="h-48" placeholder="Введите название услуги" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.facalities.measure.$error}">
                        <p class="pb-1">Единица измерения</p>
                        <el-select v-model.trim="$v.facalities.measure.$model" class="h-48 w-full sel-icon" placeholder="Выберите единицу измерения">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="12" :class="{ 'error-command': $v.facalities.room_category.$error}">
                        <p class="pb-1">Платно для категорий номеров</p>
                        <el-select v-model.trim="$v.facalities.room_category.$model"  class="h-48 w-full sel-icon" placeholder="Все">
                            <el-option v-for="city in country" :key="city" :label="city" :value="city"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :md="12" :class="{ 'error-command': $v.facalities.cost.$error}">
                        <p class="pb-1">Стоимость</p>
                        <el-input v-model.trim="$v.facalities.cost.$model" class="h-48" placeholder="Введите сумму" />
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <div class="w-full df jcfe pt-5">
                            <button class="add-button">
                                <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/plusPrimary.svg" alt="A"> </i> Добавить</p>
                            </button>
                        </div>
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
                        <button v-on:click="CreateServices" class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>

    <el-dialog class="std-dialog" :show-close="false" :visible.sync="dialog_service" width="80%" center>
        <div>
            <header>
                <h1>Услуги</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24">
                        <div class="search-items">
                            <div class="serach-item">
                                <button><img src="@/assets/img/minusp.svg" alt="" /></button>
                                <p>Основные услуги</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-5">
                    <el-col :md="24">
                        <div class="w-full df jcc pl-1 pr-1 aic">
                            <button v-on:click="pogiActiver(-2)" style="outline:none;"><img src="@/assets/img/pre.svg" class="mr-2" alt="AA"></button>
                            <button v-for="(i, index) in poginations" :key="i" v-on:click="pogiActiver(index)" class="pogination-button" :class="pogiactive==index?'pogi-active':''"></button>
                            <button v-on:click="pogiActiver(-1)" style="outline:none;"><img src="@/assets/img/next.svg" class="ml-2" alt="AA"></button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-5">
                    <el-col :md="4" v-for="(item, index) in services" :key="index" style="margin:10px 0px;">
                        <check v-model="item.active" :value="item.active" :text="item.name" />
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="dialog_service = false">
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
import { required } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            dialog_service: false,
            dialog_add: false,
            activeName: 'first',
            poginations: [],
            pogiactive: 0,
            search: "",
            value: '',
            date: '',
            value2: true,
            services:[
                {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:true},
                {id:1, name:'Бассейн', active:true},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:true},
                {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:true},
                {id:1, name:'Бассейн', active:true},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:true},
                {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:true},
                {id:1, name:'Бассейн', active:true},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:false},
                {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:false},
                {id:1, name:'Бассейн', active:true},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:true},
                {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:false},
                {id:1, name:'Бассейн', active:false},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:true}, {id:1, name:'Услуга “Будильник”', active:true},
                {id:1, name:'Доставка цветов', active:true},
                {id:1, name:'Wi-Fi', active:true},
                {id:1, name:'Аренда планшета', active:true},
                {id:1, name:'Бассейн', active:true},
                {id:1, name:'Глажка', active:true},
                {id:1, name:'Хим-чистка', active:true},
                {id:1, name:'Услуга трансфера', active:true},
            ],
            facilities_list: [{
                    id: 1,
                    name: "Бассейн",
                    price: "35 000,00 сум",
                    date: "За день",
                    active: true
                },
                {
                    id: 2,
                    name: "Бассейн",
                    price: "35 000,00 сум",
                    date: "За день",
                    active: false
                },
                {
                    id: 3,
                    name: "Бассейн",
                    price: "35 000,00 сум",
                    date: "За день",
                    active: false
                },

            ],
            Sortes: [{
                    name: 'Сортировка по названию A-Z',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по названию Z-A',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по цене 0-9',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по цене 9-0',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по доступности',
                    active: true,
                    value: 'A-Z'
                },
            ],
            SortName: 'Сортировка по доступности',
            country: ['Tashkent', "Kokand"],
            d_category: {
                category: null,
                size: null,
                number_rooms: null,
            },
            dic: ["Archa", "Olma"],
            facalities:{
                category:'',
                name_ser:'',
                measure:'',
                room_category:'',
                cost:'',
            }
        };
    },
    validations: {
        facalities:{
                category:{required},
                name_ser:{required},
                measure:{required},
                room_category:{required},
                cost:{required},
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
        GetPogination(a) {
            this.poginations.splice(0)
            var n = parseInt(a / 48)
            var q = 0
            var i = 0
            for (i = 0; i < n; i++) {
                this.poginations.push(q)
                q = q + 48
            }
            if (a % 48 > 0) {
                this.poginations.push(q)
                console.log(q)
            }
        },
        pogiActiver(a) {
            if (a != -1 && a != -2) {
                this.pogiactive = a
            }
            if (a == -1) {
                if (this.pogiactive < this.poginations.length - 1) {
                    this.pogiactive += 1
                }
            }
            if (a == -2) {
                if (this.pogiactive > 0) {
                    this.pogiactive -= 1
                }
            }
        },
        CreateServices(){
            console.log('submit!')
            this.$v.facalities.$touch()
            if (this.$v.facalities.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    },
    mounted() {
        this.GetPogination(480)
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
