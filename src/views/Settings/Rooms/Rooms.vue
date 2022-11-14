<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Номерной фонд</h1>
            </div>
            <div>
                <el-button type="primary" v-on:click="adding_category = true">Добавить</el-button>
            </div>
        </header>
    </div>
    <div class="sp-wrapper found-table">
        <el-table class="w-full" :data=" rooms_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Категория номеров" prop="category">
            </el-table-column>
            <el-table-column label="Тип размещения" prop="size"> </el-table-column>
            <el-table-column label="Количество комнат" prop="number_rooms">
            </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="$router.push({ name: 'rooms_edits' })" class="mr-3" src="@/assets/img/RoomsEdits.svg" />
                        <img @click="edit_rooms= true" class="mr-3" src="@/assets/img/Edit.svg" />
                        <img @click="dialog_add = true" src="@/assets/img/Delete.svg" />
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog class="std-dialog" :show-close="false" :visible.sync="adding_category" width="500px" center>
        <div>
            <header>
                <h1>Добавление категории</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-6" >
                    <el-col :md="24" :class="{ 'error-command': $v.category.category.$error}">
                        <el-select class="h-48 w-full sel-icon" v-model="$v.category.category.$model" placeholder="Выберите категорию">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6" >
                    <el-col :md="24" :class="{ 'error-command': $v.category.type.$error}">
                        <el-select class="h-48 w-full sel-icon" v-model="$v.category.type.$model" placeholder="Выберите тип размещения">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6" >
                    <el-col :md="24" :class="{ 'error-command': $v.category.count_room.$error}">
                        <el-input v-model.trim="$v.category.count_room.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите количество комнат" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="adding_category = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button @click="PosterAdd" class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>

        <!-- Edit Rooms -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="edit_rooms" width="80%" center>
        <div>
            <header>
                <h1>Редактирование номера</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="8"  :class="{ 'error-command': $v.rooms_edit.type.$error}">
                        <p class="pb-1">Тип кровати</p>
                        <el-select v-model.trim="$v.rooms_edit.type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип кровати">
                            <el-option :label="item" v-for="item in dic" :value="item" :key="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.rooms_edit.bathroom.$error}">
                        <p class="pb-1">Санузел</p>
                        <el-select v-model.trim="$v.rooms_edit.bathroom.$model" class="h-48 w-full sel-icon" placeholder="Введите количество дополнительных мест">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.rooms_edit.size.$error}">
                        <p class="pb-1">Санузел</p>
                        <el-input v-model.trim="$v.rooms_edit.size.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите площадь комнаты" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24">
                        <check v-model="rooms_edit.breakfast" text="Завтрак включен" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button  class="float-right default-btn f-size-17 h-48 mw-180" @click="edit_rooms = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button @click="PosterEdit" class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- End rooms -->
</div>
</template>

<script>
import {
    required,
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            adding_category: false,
            edit_rooms:false,
            rooms_list: [{
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
                {
                    id: 1,
                    category: "Стандарт",
                    size: "Двухместный",
                    number_rooms: 12,
                },
            ],
            dic: ["Archa", "Olma"],
            category:{
                category:'',
                type:'',
                count_room:''
            },
            rooms_edit:{
                type:'',
                bathroom:'',
                size:'',
                breakfast:''
            }
        };
    },
    validations: {
         category:{
            category:{required},
            type:{required},
            count_room:{required}
        },
        rooms_edit:{
                type:{required},
                bathroom:{required},
                size:{required},
        }
    },
    methods:{
        PosterAdd: function () {
            this.$v.category.$touch()
            if (this.$v.category.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PosterEdit: function () {
            this.$v.rooms_edit.$touch()
            if (this.$v.rooms_edit.$invalid) {
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
</style>
