<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings/rooms" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Номерной фонд</h1>
            </div>
            <div>
                <el-button type="primary" v-on:click="adding_category = true">Добавить</el-button>
            </div>
        </header>
    </div>
    <div class="sp-wrapper found-table">
        <el-table class="w-full" :data="
          rooms_list.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        ">
            <el-table-column label="Номер комнаты" prop="no"></el-table-column>
            <el-table-column label="Корпус" prop="korpus"> </el-table-column>
            <el-table-column label="Этаж" prop="otaj"> </el-table-column>
            <el-table-column label="Вместимость" prop="capacity"> </el-table-column>
            <el-table-column label="Номер для курящих" prop="smoking_room">
            </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="edit_rooms = true" class="mr-3" src="@/assets/img/Edit.svg" />
                        <img @click="dialog_add = true" src="@/assets/img/Delete.svg" />
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <!-- Add Room -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="adding_category" width="500px" center>
        <div>
            <header>
                <h1>Добавление категории</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.category.category.$error}">
                        <el-select class="h-48 w-full sel-icon" v-model="$v.category.category.$model" placeholder="Выберите категорию">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.category.type.$error}">
                        <el-select class="h-48 w-full sel-icon" v-model="$v.category.type.$model" placeholder="Выберите тип размещения">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
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
    <!-- End room -->
    <!-- Edit Rooms -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="edit_rooms" width="80%" center>
        <div>
            <header>
                <h1>Добавление категории</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="8" :class="{ 'error-command': $v.rooms.number.$error}">
                        <p class="pb-1">Номер комнаты</p>
                        <el-input v-model.trim="$v.rooms.number.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите номер комнаты" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.rooms.type.$error}">
                        <p class="pb-1">Тип кровати</p>
                        <el-select v-model.trim="$v.rooms.type.$model" class="h-48 w-full sel-icon" placeholder="Выберите тип кровати">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.rooms.date.$error}">
                        <p class="pb-1">Дополнительные места</p>
                        <el-input v-model.trim="$v.rooms.date.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите количество дополнительных мест" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="12" :class="{ 'error-command': $v.rooms.bathroom.$error}">
                        <p class="pb-1">Санузел</p>
                        <el-select v-model.trim="$v.rooms.bathroom.$model"  class="h-48 w-full sel-icon" placeholder="Выберите тип санузла">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="12" :class="{ 'error-command': $v.rooms.size_room.$error}">
                        <p class="pb-1">Площадь</p>
                        <el-input v-model.trim="$v.rooms.size_room.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите площадь комнаты" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24">
                        <check v-model="rooms.bathroom" text="Номер для курящих" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="edit_rooms = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button v-on:click="PosterCategory" class="primary-btn f-size-17 h-48 mw-180">
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
            a: false,
            search: "",
            adding_category: false,
            edit_all_rooms: false,
            edit_rooms: false,
            rooms_list: [{
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
                {
                    id: 1,
                    no: "№101",
                    korpus: "Основной",
                    otaj: 1,
                    capacity: "2+1",
                    smoking_room: "Да",
                },
            ],
            dic: ["Archa", "Olma"],
            category: {
                category: '',
                type: '',
                count_room: ''
            },
            rooms: {
                number: '',
                type: '',
                date: '',
                bathroom: '',
                size_room: '',
                kitchen:''
            }
        };
    },
    validations: {
        category: {
            category: {
                required
            },
            type: {
                required
            },
            count_room: {
                required
            }
        },
        rooms: {
            number: {
                required
            },
            type: {
                required
            },
            date: {
                required
            },
            bathroom: {
                required
            },
            size_room: {
                required
            }
        }
    },
    methods: {
        PosterAdd: function () {
            this.$v.category.$touch()
            if (this.$v.category.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
        PosterCategory: function () {
            this.$v.rooms.$touch()
            if (this.$v.rooms.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.label-checkbox {
    padding: 5px;
    background: #e9e9e9;
    border-radius: 8px;
}

.label-checkbox input {
    width: 14px;
    height: 14px;
    background: #e9e9e9;
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
