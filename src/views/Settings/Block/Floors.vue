<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Корпусы</h1>
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
            <el-table-column label="Категория номеров" prop="korpus">
            </el-table-column>
            <el-table-column label="Тип размещения" prop="etaj"> </el-table-column>
            <el-table-column label="Количество комнат" prop="main"></el-table-column>
            <el-table-column label="Количество комнат" prop="number_blocks">
            </el-table-column>
            <el-table-column align="right">
                <template>
                    <div class="actions df jcfe">
                        <img @click="$router.push({ name: 'floors_edits' })" class="mr-3" src="@/assets/img/RoomsEdits.svg" />
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
            a: 0,
            adding_category: false,
            rooms_list: [{
                id: 1,
                korpus: "Основной",
                etaj: 3,
                main: "Да",
                number_blocks: 38,
            }, ],
            corps: {
                type: null,
                name: null,
                count: null,
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
        CorpusAdd: function () {
            this.$v.corps.$touch()
            if (this.$v.corps.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    },
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
