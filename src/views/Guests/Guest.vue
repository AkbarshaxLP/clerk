<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-0 fww bb0">
            <div class="df  aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/recepton" class="pr-3"><img src="../../assets/img/Back.png" /></router-link>
                    <h1>THOMAS FRANKLIN MCDONALD</h1>
                </div>

            </div>
            <div class="w-full">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Личные данные" name="1" class="pl-6 pr-6">
                    </el-tab-pane>
                    <el-tab-pane label="Проживание" name="2" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="24">
                                <p class="c919 simple-p mb-2">Количество посещений:<span class="c09">37</span></p>
                                <p class="c919 simple-p mb-2">Количество дней проживания:<span class="c09">193,5</span></p>
                                <p class="c919 simple-p mb-2">Оплаченная сумма: <span class="c09">12 345 670,00 UZS</span></p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Услуги" name="3" class="pl-6 pr-6">
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
                    </el-tab-pane>
                    <el-tab-pane label="Задачи" name="4" class="pl-6 pr-6">
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
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <!-- Личные данные-->
    <div class="sp-wrapper found-table" v-if="activeName=='1'">
        <div class="role-item">
            <header class="bb1">
                <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                    <el-col :md="24" class="pt-3">
                        <h1>Общая информация</h1>
                    </el-col>
                </el-row>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основная информация</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48 w-full" :value="guest.last_name" :class="guest.last_name ? 'bge0e':''" placeholder="Введите фамилию" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя</p>
                        <el-input class="h-48 w-full" :value="guest.name" :class="guest.name ? 'bge0e':''" placeholder="Введите имя" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48 w-full" :value="guest.mid_name" :class="guest.mid_name ? 'bge0e':''" placeholder="Введите отчество" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Страна рождения</p>
                        <el-input class="h-48 w-full" :value="guest.country" :class="guest.country ? 'bge0e':''" placeholder="Введите cтрана рождения" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата рождения</p>
                        <el-input class="h-48 w-full" :value="guest.date" :class="guest.date ? 'bge0e':''" placeholder="Введите дополнительный номер телефона" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Пол</p>
                        <el-input class="h-48 w-full" :value="guest.sex" :class="guest.sex ? 'bge0e':''" placeholder="Введите e-mail" />
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о документе</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип документа</p>
                        <el-input class="h-48 w-full" :value="guest.doc_type" :class="guest.doc_type ? 'bge0e':''" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Серия документа</p>
                        <el-input class="h-48 w-full" :value="guest.doc_ser" :class="guest.doc_ser ? 'bge0e':''" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер документа</p>
                        <el-input class="h-48 w-full" :value="guest.doc_num" :class="guest.doc_num ? 'bge0e':''" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата выдачи документа</p>
                        <el-input class="h-48 w-full" :value="guest.doc_date" :class="guest.doc_date ? 'bge0e':''" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Орган выдачи документа</p>
                        <el-input class="h-48 w-full" :value="guest.doc_give" :class="guest.doc_give ? 'bge0e':''" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Гражданство</p>
                        <el-input class="h-48 w-full" :value="guest.citiship" :class="guest.citiship ? 'bge0e':''" />
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Статус гостя</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Статус</p>
                        <el-select class="h-48 w-full sel-icon" v-model="guest.status" :value="guest.status" placeholder="Выберите тип изменения цен">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Причина статуса “Черный список”</p>
                        <el-input class="h-48 w-full" v-model="guest.black_list" :class="guest.black_list ? 'bge0e':''" placeholder="Введите причину добавления в черный список" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="$router.push({name:'guests'})">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Сохранить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
    <!-- Проживание -->
    <div v-if="activeName=='2'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Номер брони</th>
                        <th>Комната</th>
                        <th>Заезд</th>
                        <th>Выезд</th>
                        <th>Сумма к оплате</th>
                        <th>Статус оплаты</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in Accommodation" :key="item">
                        <td class="pl24 nbron" v-if="item.r_number"> {{item.r_number}} </td>
                        <td v-else class="pl24">...</td>
                        <td>{{item.room}}</td>
                        <td>{{item.checkin}}</td>
                        <td>{{item.departure}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.status}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;">
                                    <img src="../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                                <router-link tag="button" to="/guests/guest" class="simple-button mr-2" style="width:25px;">
                                    <img src="../../assets/img/Print.svg" alt="">
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Услуги -->
    <div v-if="activeName=='3'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Xizmat</th>
                        <th>Количество заказов</th>
                        <th>Стоимость</th>
                        <th class="pr24">Общая сумма заказов</th>
                    </tr>
                    <tr class="bt1" v-for="item in Services" :key="item">
                        <td class="pl24 fio-td upper"> {{item.name}} </td>
                        <td>{{item.order_number}}</td>
                        <td>{{item.cost}}</td>
                        <td>{{item.total}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Задачи -->
    <div v-if="activeName=='4'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Name</th>
                        <th>Дата и время добавления</th>
                        <th>Дата и время выполнения</th>
                        <th>Ответственный сотрудник</th>
                        <th>Статус</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="(item, i) in Tasks" :key="item">
                        <td class="pl24 c09 fw600" > {{item.name}}</td>
                        <td>{{item.addition}}</td>
                        <td>{{item.completion}}</td>
                        <td>{{item.officer}}</td>
                        <td :class="item.status=='Выполняется' ? 'cp':item.status=='Выполнена' ? 'cgreen':item.status=='Отменена' ? 'cred':'cyellow'">{{item.status}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;" @click="index=i, ListDialog=true">
                                    <img src="../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- List dialog -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="ListDialog" width="80%" center>
        <div>
            <header>
                <h1>Задача</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">#594628/2021  Приготовить конференц-зал</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-3 simple-p">Статус: <span :class="Tasks[index].status=='Выполняется' ? 'cp':Tasks[index].status=='Выполнена' ? 'cgreen':Tasks[index].status=='Отменена' ? 'cred':'cyellow'">{{Tasks[index].status}}</span></p>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-3 simple-p">Дата и время добавления:  <span class="c09">{{Tasks[index].addition}}</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" >
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-3 simple-p">Ответственный сотрудник:  <span class="c09">{{Tasks[index].officer}}</span></p>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-3 simple-p">Дата и время выполнения:  <span class="c09">{{Tasks[index].completion}}</span></p>
                    </el-col>
                </el-row>
                 <el-row :gutter="24">
                    <el-col :md="24" class="box pt-3">
                    <div class="df">
                        <p class="pb-3 simple-p mr-2" style="min-width:54px;">Задача:</p>
                        <p class="pb-3 simple-p c09">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est eos esse explicabo exercitationem repellendus minus, voluptatibus quasi cumque praesentium assumenda? Laboriosam, alias iure suscipit animi labore incidunt deserunt magni.</p>
                    </div>
                    </el-col>
                </el-row>
                 <el-row :gutter="24">
                    <el-col :md="24" class="box pt-6">
                    <div class="df jcc">
                             <button class="primary-btn f-size-17 h-48 mw-180" @click="ListDialog=false">OK</button>
                    </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>


</div>
</template>

<script>
import SProgress from "../../components/SProgress.vue";
import Pogination from '../../components/Pogination'
export default {
    components: {
        SProgress,
        Pogination
    },
    data() {
        return {
            a: [],
            dialog_add: false,
            activeName: '1',
            pogiactive: 2,
            search: "",
            value: '',
            date: '',
            value2: true,
            ListDialog:false,
            poginations: [],
            index:0,
            guest: {
                id: 1,
                name: 'Thomas',
                last_name: 'Franklin',
                mid_name: 'McDonald',
                country: 'RUSSIAN FEDERATION',
                sex: 'Мужчина',
                date: '01/01/1990',
                doc_type: 'Паспорт',
                doc_ser: 'UK',
                doc_num: '1324567',
                doc_date: '01/01/2010',
                doc_give: 'MINISTRY OF FOREIGN AFFAIRS',
                citiship: 'UNITED KINGDOM',
                status: 'Гость',
                black_list: ''
            },
            Accommodation: [{
                    r_number: '',
                    room: '№211 Стд. Одноместный',
                    checkin: '27-03-2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    status: 'Оплачен'
                },
                {
                    r_number: '12345-01/01/2021',
                    room: '№211 Стд. Одноместный',
                    checkin: '27-03-2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    status: 'Оплачен'
                },
                {
                    r_number: '12345-01/01/2021',
                    room: '№211 Стд. Одноместный',
                    checkin: '27-03-2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    status: 'Оплачен'
                },
                {
                    r_number: '12345-01/01/2021',
                    room: '№211 Стд. Одноместный',
                    checkin: '27-03-2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    status: 'Оплачен'
                },
                {
                    r_number: '12345-01/01/2021',
                    room: '№211 Стд. Одноместный',
                    checkin: '27-03-2021  12:45',
                    departure: '22/04/2021  14:00',
                    amount: '12 345 670,00 UZS',
                    status: 'Оплачен'
                },
            ],
            Services: [{
                    name: 'бассейн',
                    order_number: '10',
                    cost: '32 000,00 UZS',
                    total: '2 656 000,00 UZS'
                },
                {
                    name: 'бассейн',
                    order_number: '10',
                    cost: '32 000,00 UZS',
                    total: '2 656 000,00 UZS'
                },
                {
                    name: 'бассейн',
                    order_number: '10',
                    cost: '32 000,00 UZS',
                    total: '2 656 000,00 UZS'
                },
                {
                    name: 'бассейн',
                    order_number: '10',
                    cost: '32 000,00 UZS',
                    total: '2 656 000,00 UZS'
                },
            ],
            Tasks:[
                {
                    name:'Помочь с поиском ресторана',
                    addition:'01/01/2021  14:00',
                    completion:'14/01/2021  23:00',
                    officer:'Все',
                    status:'Выполнена',
                },
                {
                    name:'Помочь с поиском ресторана',
                    addition:'01/01/2021  14:00',
                    completion:'14/01/2021  23:00',
                    officer:'Все',
                    status:'Выполняется',
                },
                {
                    name:'Помочь с поиском ресторана',
                    addition:'01/01/2021  14:00',
                    completion:'14/01/2021  23:00',
                    officer:'Все',
                    status:'Отменена',
                },
                {
                    name:'Помочь с поиском ресторана',
                    addition:'01/01/2021  14:00',
                    completion:'14/01/2021  23:00',
                    officer:'Все',
                    status:'В ожидании',
                },
            ],
            country: ['Tashkent', "Kokand"],
            dic: ["Archa", "Olma"],
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
            SortName: 'По количеству',
        };
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
                this.AddUslugi = true
            }
            if (command == '2') {
                this.AddZadach = true
            }

        },
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
    position: relative;

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

.tables {
    width: 100%;

}

.tables th {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #919EAC;
    text-align: left;
    padding-bottom: 12px;
    padding-top: 12px;
}

.tables1 td {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #091C31;
    text-align: left;
    padding: 12px 5px;
}

.tables2 td {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #091C31;
    text-align: left;
    padding: 12px 5px;
}

.pl24 {
    padding-left: 24px !important;
}

.pr24 {
    padding-right: 24px !important;
}

.fio-td {
    position: relative;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 20px !important;
    color: #091C31 !important;
}

.vip {
    position: absolute;
    top: 0;
    right: 144px;
    background: #FFD600;
    width: 72px;
    height: 24px;
    padding: 2px;
    border-radius: 0px 0px 10px 10px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #fff;
    text-align: center;
}

.vip2 {
    position: absolute;
    height: 100%;
    width: 12px;
    top: 0;
    left: 0;
    border-radius: 0px 8px 8px 0px;
    background: #FFD600;
}

.nbron {
    color: #007AFF !important;
    text-decoration-line: underline !important;
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
    position: relative;
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
