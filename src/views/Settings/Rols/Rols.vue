<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
            <h1>Должности и сотрудники</h1>
        </header>
    </div>

    <div class="role-item" v-for="item in rols_list" :key="item.name">
        <header>
            <h1>{{ item.name }}</h1>
            <div class="actions">
                <img @click="$router.push(`/settings/rols/edit/${item.id}`)" class="mr-3" src="@/assets/img/Edit.svg" />
                <img @click="dialog_add = true" src="@/assets/img/AddGuest.svg" />
            </div>
        </header>
        <ul class="table">
            <li class="head">
                <section>Количество сотрудников</section>
                <div class="flex-1">Разрешения</div>
            </li>
            <li class="body">
                <section>{{ item.count }}</section>
                <div class="flex-1">{{ item.title }}</div>
            </li>
        </ul>
    </div>

    <el-dialog class="std-dialog" width="85%" :visible.sync="dialog_add" :show-close="false" :close-on-click-modal="false">
        <div>
            <header>
                <h1>Добавление сотрудника</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24">
                    <el-col :md="8" :class="{ 'error-command': $v.employee.surname.$error}">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48" v-model.trim="$v.employee.surname.$model" @focus="outerVisible = true" placeholder="Фамилия" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.name.$error}">
                        <p class="pb-1">Имя</p>
                        <el-input v-model.trim="$v.employee.name.$model" class="h-48" placeholder="Имя" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.middle_name.$error}">
                        <p class="pb-1">Отчество</p>
                        <el-input v-model.trim="$v.employee.middle_name.$model" class="h-48" placeholder="Отчество" />
                        
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.employee.phone.$error}">
                        <p class="pb-1">Номер телефона</p>
                        <el-input v-model.trim="$v.employee.phone.$model" class="h-48" placeholder="Введите номер телефона" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.additional_phone.$error}">
                        <p class="pb-1">Дополнительный номер телефона</p>
                        <el-input v-model.trim="$v.employee.additional_phone.$model" class="h-48" placeholder="Введите дополнительный номер телефона" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.email.$error}">
                        <p class="pb-1">E-mail адрес</p>
                        <el-input v-model.trim="$v.employee.email.$model" class="h-48" placeholder="Введите e-mail адрес" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.employee.login.$error}">
                        <p class="pb-1">Логин</p>
                        <el-input v-model.trim="$v.employee.login.$model" class="h-48"  placeholder="Задайте логин" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.password.$error}">
                        <p class="pb-1">Пароль</p>
                        <el-input v-model.trim="$v.employee.password.$model" class="h-48" type="password" placeholder="Придумайте пароль" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.password2.$error}">
                        <p class="pb-1">Подтверждение пароля</p>
                        <el-input class="h-48" v-model.trim="$v.employee.password2.$model" type="password" placeholder="Подтверждение пароля" />
                    </el-col>
                </el-row>

                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8" :class="{ 'error-command': $v.employee.loginE.$error}">
                        <p class="pb-1">Логин E-mehmon</p>
                        <el-input class="h-48" v-model.trim="$v.employee.loginE.$model" placeholder="Введите логин E-mehmon" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.passwordE.$error}">
                        <p class="pb-1">Пароль E-mehmon</p>
                        <el-input v-model.trim="$v.employee.passwordE.$model" class="h-48" placeholder="Введите пароль E-mehmon" />
                    </el-col>
                    <el-col :md="8" :class="{ 'error-command': $v.employee.password2E.$error}">
                        <p class="pb-1">Подтверждение пароля E-mehmon</p>
                        <el-input v-model.trim="$v.employee.password2E.$model" class="h-48" placeholder="Введите повторно пароль E-mehmon" />
                    </el-col>
                </el-row>

                <el-row class="pt-6">
                    <el-col :md="24" :class="{ 'error-command': $v.employee.lang.$error}">
                        <p class="pb-1">Знание языков</p>
                        <el-select v-model.trim="$v.employee.lang.$model" class="w-full select-plus" :multiple="true" :allow-create="true" placholder="Выберите языки">
                            <el-option label="Русский" value="ru"></el-option>
                            <el-option label="Английский" value="en"></el-option>
                        </el-select>
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
                        <button v-on:click="Poster" class="primary-btn f-size-17 h-48 mw-180">
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
    minLength,
    sameAs,
    email
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            langs: ["Русский"],
            login: null,
            password: null,
            dialog_add: false,
            rols_list: [{
                    id: 1,
                    name: "Администраторы",
                    count: 8,
                    title: "Шахматка, Служба приёма, Список гостей, Фолио, Доска номеров, Чат, ТП-Waiter",
                },
                {
                    id: 2,
                    name: "Менеджеры",
                    count: 2,
                    title: "Панель графиков, Шахматка, Служба приёма, Список гостей, Финансы, Статистика и Отчёты, Фолио, Доска номеров, Чат, ТП-Waiter",
                },
                {
                    id: 3,
                    name: "горничные",
                    count: 6,
                    title: "Доска номеров, Чат",
                },
                {
                    id: 4,
                    name: "официанты",
                    count: 10,
                    title: "Чат, ТП-Waiter",
                },
                {
                    id: 5,
                    name: "заведующие залом",
                    count: 2,
                    title: "Доска номеров, Чат, ТП-Waiter",
                },
                {
                    id: 6,
                    name: "повара",
                    count: 5,
                    title: "Чат, ТП-Waiter",
                },
            ],
            employee: {
                surname: '',
                name: '',
                middle_name: '',
                phone: '',
                additional_phone: '',
                email: '',
                login: '',
                password: '',
                password2: '',
                loginE: '',
                passwordE: '',
                password2E: '',
                lang:[]
            }
        };
    },
    validations: {
        employee: {
            surname: {
                required,
                minLength: minLength(1)
            },
            name: {
                required,
                minLength: minLength(1)
            },
            middle_name: {
                required,
                minLength: minLength(1)
            },
            phone: {
                required,
                minLength: minLength(1)
            },
            additional_phone: {
                required,
                minLength: minLength(1)
            },
            email: {
                required,
                email,
                minLength: minLength(1)
            },
            login: {
                required,
                minLength: minLength(1)
            },
            password: {
                required,
                minLength: minLength(3)
            },
            password2: {
                required,
                minLength: minLength(1),
                sameAsPassword: sameAs('password')
            },
            loginE: {
                required,
                minLength: minLength(1)
            },
            passwordE: {
                required,
                minLength: minLength(1)
            },
            password2E: {
                required,
                minLength: minLength(1),
                sameAsPassword: sameAs('passwordE')

            },
            lang: {
                required
            },
        }
    },
    methods:{
        Poster: function () {
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
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
</style>
