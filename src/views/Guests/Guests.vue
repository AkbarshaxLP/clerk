<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-6 pl-6 pb-1 fdc bb0">
        <div class="w-full">
            <el-row :gutter="24" class="pt-3">
                <el-col :md="14" class="pt-3">
                    <el-input class="h-48 w-full" placeholder="Введите имя гостя / номер брони / номер комнаты" prefix-icon="el-icon-search" v-model="search"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-3">
                <el-col :md="24" class="pt-6">
                    <div class="df w-full aic">
                        <el-dropdown trigger="hover">
                            <span class="el-dropdown-link">
                                Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                    <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <el-dropdown trigger="hover" class="ml-10">
                            <span class="el-dropdown-link">
                                Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                    <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-col>
            </el-row>
        </div>
            
            
        </header>
    </div>
    <div>
        <div v-if="propSorts.view=='category'">
            <div class="role-item" v-for="item in guests" :key="item">
                <div class="vip" v-if="item.vip">VIP</div>
                <header>
                    <el-row :gutter="24" class="w-full pl-3 pr-3 m0">
                        <el-col :md="18" class="pt-3">
                            <h1 class="tal">{{item.fio}}</h1>
                        </el-col>
                        <el-col :md="6" class="pt-3">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2">
                                    <img src="../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                                <router-link tag="button" to="/guests/guest" class="simple-button mr-2">
                                    <img src="../../assets/img/LoginGreen.svg" alt="">
                                </router-link>
                            </div>
                        </el-col>
                    </el-row>
                </header>
                <div class="tables tables1 w-full">
                    <table style="width:100%;">
                        <tr>
                            <th class="pl24">Гражданство</th>
                            <th>Пол</th>
                            <th>Дата рождения</th>
                            <th>Количество посещений</th>
                            <th>Количество дней</th>
                            <th class="pr24">Последний заезд</th>
                        </tr>
                        <tr class="bt1">
                            <td class="pl24 ">{{item.country}}</td>
                             <td>{{item.sex}}</td>
                            <td>{{item.date}}</td>
                            <td >{{item.nvisits}}</td>
                            <td>{{item.nday}}</td>
                            <td class="pr24">{{item.last_arrival}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div v-if="propSorts.view=='list'">
            <div class="role-item">
                <div class="tables tables2 w-full">
                    <table style="width:100%;" class="list-table">
                        <tr>
                            <th class="pl24">ФИО</th>
                            <th>Гражданство</th>
                            <th>Пол</th>
                            <th>Дата рождения</th>
                            <th>Количество посещений</th>
                            <th>Количество дней</th>
                            <th>Последний заезд</th>
                            <th class="pr24"></th>
                        </tr>
                        <tr class="bt1" v-for="item in guests" :key="item.name">
                            <td class="pl24 fio-td">
                                <div class="vip2" v-if="item.vip"></div> {{item.fio}}
                            </td>
                            <td class="fw400">{{item.country}}</td>
                            <td>{{item.sex}}</td>
                            <td>{{item.date}}</td>
                            <td >{{item.nvisits}}</td>
                            <td>{{item.nday}}</td>
                            <td>{{item.last_arrival}}</td>
                            <td class="pr24">
                                <div class="df aic jcfe">
                                    <button class="simple-button mr-2" style="width:25px;">
                                        <img  src="../../assets/img/RoomsEdits.svg" alt="">
                                    </button>
                                    <router-link tag="button" to="/guests/guest"  class="simple-button mr-2" style="width:25px;">
                                        <img  src="../../assets/img/LoginGreen.svg" alt="">
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    required
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            propSorts: {
                view: 'category',
                format: '',
            },
            search: '',
            printout: false,
            printcheck: false,
            dialog_service: false,
            relocate: false,
            RegCheckIn1: false,
            RegCheckIn2: false,
            dialog_add: false,
            activeName: '1',
            viewName: 'Карточки',
            Wievs: [{
                    name: 'Карточки',
                    active: true,
                    value: 'category'
                },
                {
                    name: 'Список',
                    active: false,
                    value: 'list'
                },

            ],
            guests: [{
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    country: 'RUSSIAN FEDERATION',
                    sex: 'Мужчина',
                    date: '01/01/1990',
                    nvisits: '22',
                    nday: '193,5',
                    last_arrival: '27/03/2021  12:45',
                    vip: true,
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    country: 'RUSSIAN FEDERATION',
                    sex: 'Мужчина',
                    date: '01/01/1990',
                    nvisits: '22',
                    nday: '152',
                    last_arrival: '27/03/2021  12:45',
                    vip: true,
                },
                {
                    id: 1,
                    fio: 'Thomas Franklin McDonald',
                    country: 'RUSSIAN FEDERATION',
                    sex: 'Мужчина',
                    date: '01/01/1990',
                    nvisits: '22',
                    nday: '1888',
                    last_arrival: '27/03/2021  12:45',
                    vip: true,
                },
            ],
            dic: ['AA', "AA"],
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
        };
    },
    validations: {
        facalities: {
            category: {
                required
            },
            name_ser: {
                required
            },
            measure: {
                required
            },
            room_category: {
                required
            },
            cost: {
                required
            },
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
            this.propSorts.format = this.Sortes[a].value
        },
        viewsActiver(a) {
            var i = 0;
            for (i = 0; i < this.Wievs.length; i++) {
                this.Wievs[i].active = false
            }
            this.Wievs[a].active = true
            this.viewName = this.Wievs[a].name
            this.propSorts.view = this.Wievs[a].value
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
        CreateServices() {
            console.log('submit!')
            this.$v.facalities.$touch()
            if (this.$v.facalities.$invalid) {
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
.top-buttons {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
}

.top-button {
    position: absolute;
    top: 5px;
    right: 24px;
    padding: 14px 40px;
    border-radius: 8px;
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
