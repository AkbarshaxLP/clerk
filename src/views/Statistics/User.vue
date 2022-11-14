<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-0 pt-0 fww bb0 ">
            <div class="df  df jcsb aic w-full bb1 p-3 pl-6 pr-6">
                <div class="df">
                    <router-link to="/statistics" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                    <h1>klimenko sergey petrovich</h1>
                </div>
                <div>
                    <el-button type="primary" v-on:click="adding_category = true">Распечатать</el-button>
                </div>
            </div>
            <div class="w-full pl-6 pr-6">
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="8">
                        <p class="c919 simple-p mb-2">Регистрация сотрудника: <span class="c09">01/01/2021 09:00</span></p>
                        <p class="c919 simple-p mb-2">Общее время работы: <span class="c09">1 234 : 43 мин</span></p>
                        <p class="c919 simple-p mb-2">Рекорд: <span class="c09">17:20 мин</span></p>
                        <p class="c919 simple-p mb-2">За текущий месяц: <span class="cgreen">156 : 43 мин </span></p>
                        <div class="w-full mt-8">
                            <el-dropdown trigger="hover">
                                <span class="el-dropdown-link">
                                    Год:<b class="ml-1"> {{sortYear}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in years" :key="i" :class="sortYear==item?'bg-primary':''">
                                        <p v-on:click="sortYear=item"><i :class="sortYear==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                            <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Месяц: <b class="ml-1">{{sortMoons}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in moons" :key="i" :class="sortMoons==item?'bg-primary':''">
                                                <p v-on:click="sortMoons=item"><i :class="sortMoons==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                    <el-col :md="8">
                        <div class="df w-full jcc">
                            <div class="user-simg">
                                <img width="100%" src="./../../assets/img/woman.png" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="8">
                        <div class="w-full df aic jcfe ">
                            <button class="facil-button df aic jcc fw600">
                                <img src="../../assets/img/Export.svg" alt="AAA">
                                <span class="ml-3">Экспорт</span>
                            </button>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </header>
    </div>
    <div>
        <div class="role-item">
            <div class="df jcc p-6">
                <h1 class="title-h">Март</h1>
            </div>
            <div class="df">
                <div class="tables tables2 w-full">
                    <table style="width:100%;" class="list-table">
                        <tr class="bt1">
                            <th class="pl24">Дата</th>
                            <th>Смена</th>
                            <th class="pr24">Время</th>
                        </tr>
                        <tr class="bt1" v-for="i in 10" :key="i">
                            <td class="pl24 fw600" v-if="i<10">{{'0'+i}}</td>
                            <td class="pl24 fw600" v-else>{{i}}</td>
                            <td>{{UserSta[i-1].date}}</td>
                            <td class="pr24">{{UserSta[i-1].time}}</td>
                        </tr>
                        <tr class="bt1" v-if="UserSta[30]">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div class="tables tables2 w-full">
                    <table style="width:100%;" class="list-table">
                        <tr class="bt1">
                            <th class="pl24">Дата</th>
                            <th>Смена</th>
                            <th class="pr24">Время</th>
                        </tr>
                        <tr class="bt1 brl" v-for="i in 10" :key="i">
                            <td class="pl24 fw600">{{i+10}}</td>
                            <td>{{UserSta[i+9].date}}</td>
                            <td class="pr24">{{UserSta[i+9].time}}</td>
                        </tr>
                        <tr class="bt1 brl" v-if="UserSta[30]">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div class="tables tables2 w-full">
                    <table style="width:100%;" class="list-table">
                        <tr class="bt1">
                            <th class="pl24">Дата</th>
                            <th>Смена</th>
                            <th class="pr24">Время</th>
                        </tr>
                        <tr class="bt1" v-for="i in 10" :key="i">
                            <td class="pl24 fw600">{{i+20}}</td>
                            <td>{{UserSta[i+19].date}}</td>
                            <td class="pr24">{{UserSta[i+19].time}}</td>
                        </tr>
                        <tr class="bt1" v-if="UserSta[30]">
                            <td class="pl24 fw600">31</td>
                            <td>{{UserSta[30].time}}</td>
                            <td class="pr24">{{UserSta[30].date}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            moons:['Mart', 'Aprel', 'May'],
            years:['2019', '2020', '2021'],
            sortMoons:'Mart',
            sortYear:'2021',
            UserSta: [{
                    date: '-- ',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '--'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
                {
                    date: '09:00 -- 18:22',
                    time: '09:22'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.top-buttons {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
}

.top-button {
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 10;
    top: 0px;
    right: 24px;
    padding: 14px 15px;
    border-radius: 8px;
    width: 180px;
}

.user-simg {
    width: 160px;
    height: 160px;
    border-radius: 8px;
    overflow: hidden;
    filter: drop-shadow(4px 4px 12px rgba(9, 28, 49, 0.32));
    border: 1px solid #D5D8DD;
}

.role-item {
    background: #fbfdff;
    border: 1px solid #d3d8de;
    overflow: hidden;
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

.tables {
    width: 100%;

}

.tables th {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #919EAC;
    text-align: left;
    padding-bottom: 24px;
    padding-top: 24px;
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
    font-size: 15px;
    line-height: 18px;
    color: #091C31;
    text-align: left;
    padding: 24px 10px;
}

.table-partner-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #D3D8DE;

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

.online-span {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #00C48C;
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

.settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        cursor: pointer;
        background: #fbfdff;
        position: relative;
        height: 310px;
        min-width: 200px;
        border: 1px solid #d3d8de;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 24px 14px 24px;
        transition: all 0.1s ease-out;
        user-select: none;

        &:hover {
            -webkit-box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            transform: translate(0, -2px);
        }

        .online-text {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            color: #00C48C;
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

        .cricle-img {
            width: 168px;
            height: 168px;
            background: #007AFF;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            border: 1px solid #D3D8DE;
            padding: 0;
        }

        .cricle-img img {
            height: 100%;
        }

        .parner-type-text {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 18px;
            text-align: center;
            color: #919EAC;
        }

    }
}

.parner-name-text {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #091C31;
}
</style>
