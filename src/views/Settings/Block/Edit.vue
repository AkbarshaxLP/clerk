<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings/floors" class="pr-3">
                    <img src="@/assets/img/Back.png" />
                </router-link>
                <h1>Основной</h1>
            </div>
            <div>
                <el-button type="primary" v-on:click="adding_category = true">Добавить</el-button>
            </div>
        </header>
    </div>
    <div class="sp-wrapper found-table">
        <el-table class="w-full" :data="rooms_list.filter((data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Название этажа" prop="floor_name"></el-table-column>
            <el-table-column label="Количество номеров" prop="no">
            </el-table-column>
            <el-table-column label="Этаж" prop="floor"> </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="edit_floors = true" class="mr-3" src="@/assets/img/Edit.svg" />
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
                <el-row :gutter="24" class="pt-4">
                    <el-col :md="24" :class="{ 'error-command': $v.corps.type.$error}">
                        <el-select class="h-48 w-full sel-icon" v-model.trim="$v.corps.type.$model" placeholder="Выберите тип корпуса">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.corps.name.$error}">
                        <el-input v-model.trim="$v.corps.name.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите название корпуса" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.corps.count.$error}">
                        <el-input v-model.trim="$v.corps.count.$model" class="h-48" @focus="outerVisible = true" placeholder="Введите количество этажей" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="adding_category = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button @click="CorpusAdd" class="primary-btn f-size-17 h-48 mw-180">
                            Добавить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- End room -->
    <!-- Edit Rooms -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="edit_floors" width="80%" center>
        <div>
            <header>
                <h1>Редактирование этажа</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-1">Название этажа</p>
                        <el-input class="h-48" @focus="outerVisible = true" placeholder="Введите название этажа" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24">
                        <div class="search-items">
                            <div class="serach-item">
                                <button><img src="@/assets/img/minusp.svg" alt="" /></button>
                                <p>Стандарт Двухместный</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24">
                        <div class="w-full df jcc pl-1 pr-1 aic">
                            <button v-on:click="pogiActiver(-2)" style="outline:none;"><img src="@/assets/img/pre.svg" class="mr-2" alt="AA"></button>
                            <button v-for="(i, index) in poginations" :key="i" v-on:click="pogiActiver(index)" class="pogination-button" :class="pogiactive==index?'pogi-active':''"></button>
                            <button v-on:click="pogiActiver(-1)" style="outline:none;"><img src="@/assets/img/next.svg" class="ml-2" alt="AA"></button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="4" v-for="item in floors" :key="item" style="margin:10px 0px;">
                        <check v-model="a" :text="item" />
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="edit_floors = false">
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
            search: "",
            poginations: [],
            pogiactive: 0,
            a: "sdasdasd",
            adding_category: false,
            edit_all_rooms: false,
            edit_floors: false,
            rooms_list: [{
                    id: 1,
                    floor_name: "Этаж “Лобби”",
                    no: 25,
                    floor: 8,
                },
                {
                    id: 1,
                    floor_name: "2ой этаж",
                    no: 18,
                    floor: 2,
                },
                {
                    id: 1,
                    floor_name: "3й этаж",
                    no: 16,
                    floor: 1,
                },
            ],
            corps: {
                type: null,
                name: null,
                count: null,
            },
            floors: ["№101", "№102", "№103", "№104", "№105", "№106", "№107", "№108", "№109", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", "№110", ],
            d_category: {
                category: null,
                size: null,
                number_rooms: null,
            },
            dic: ["Archa", "Olma"],
        };
    },
    validations: {
        corps: {
            type: {
                required
            },
            name: {
                required
            },
            count: {
                required
            },
        },
    },
    methods: {
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
        CorpusAdd: function () {
            this.$v.corps.$touch()
            if (this.$v.corps.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        },
    },
    mounted() {
        this.GetPogination(480)
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

.jcc {
    justify-content: center;
}

.aic {
    align-items: center;
}

.jcfe {
    justify-content: flex-end;
}

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
