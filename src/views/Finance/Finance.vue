<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-0 fww bb0 ">
            <div class="top-buttons">
                <el-button v-if="activeName=='1'" class="top-button" type="primary">Закрыть кассу</el-button>
                <el-button v-if="activeName=='5'" @click="NewExpense=true" class="top-button" type="primary">Добавить</el-button>
            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Касса" name="1" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="14" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="10" class="pt-3">
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <p class="simple-p fw500">В кассе наличных: <span class="cgreen">12 345 670,00 UZS</span></p>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Закрытые кассы" name="2" class="pl-6 pr-6 pb0">
                        <el-row :gutter="24" class="pt-3 df aife">
                            <el-col :md="12" class="pt-3">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Год:<b class="ml-1"> {{sortYear}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in years" :key="i" :class="sortYear==item?'bg-primary':''">
                                                <p v-on:click="sortName=item"><i :class="sortYear==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                            </el-col>
                            <el-col :md="12" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Export.svg" alt="AAA">
                                        <span class="ml-3">Экспорт</span>
                                    </button>
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Print.svg" alt="AAA">
                                        <span class="ml-3">Распечатать</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Инвойсы" name="3" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Период: <b class="ml-1">{{sortYearMoon}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Год:<b class="ml-1"> {{sortYear}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in years" :key="i" :class="sortYear==item?'bg-primary':''">
                                                <p v-on:click="sortName=item"><i :class="sortYear==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
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
                        </el-row>
                    </el-tab-pane>
                   <el-tab-pane label="Смены" name="4" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Период: <b class="ml-1">{{sortYearMoon}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Год:<b class="ml-1"> {{sortYear}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in years" :key="i" :class="sortYear==item?'bg-primary':''">
                                                <p v-on:click="sortName=item"><i :class="sortYear==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
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
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Расходы" name="5" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Период: <b class="ml-1">{{sortYearMoon}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Год:<b class="ml-1"> {{sortYear}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in years" :key="i" :class="sortYear==item?'bg-primary':''">
                                                <p v-on:click="sortName=item"><i :class="sortYear==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
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
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <!-- Касса -->
    <div v-if="activeName=='1'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Номер инвойсаe</th>
                        <th>Дата и время</th>
                        <th>Вид оплаты</th>
                        <th>Оплатил</th>
                        <th>Сумма</th>
                        <th>Кассир</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in Cashbox" :key="item">
                        <td class="pl24 c09 fw500"> {{item.number}}</td>
                        <td class="fw400">{{item.date}}</td>
                        <td class="fw400" :class="item.type_payment=='Наличные' ? 'cp':''">{{item.type_payment}}</td>
                        <td class="fw400">{{item.paid}}</td>
                        <td class="fw400">{{item.amount}}</td>
                        <td class="fw400">{{item.cashier}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;" @click="CashBoxDialog=true">
                                    <img src="../../assets/img/Export.svg" alt="">
                                </button>
                                <button class="simple-button mr-2" style="width:25px;">
                                    <img src="../../assets/img/Print.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Заезжающие -->
    <div v-if="activeName=='2'">
        <div class="role-item">
            <el-collapse v-model="Accardion1" class="accardion-head-padding accardion-icon" accordion>
                <el-collapse-item class="sel-icon" v-for="a in 10" :key="a" :name='a'>
                    <template slot="title">
                        <div class="df aic ">
                         <div class="simple-button" @click="Accardion1=''">
                            <check  />
                         </div>
                            <p class="min-p ml-2">20/03/2021  --  27/03/2021  17:23 </p>
                            <a href="#" class="min-p ml-1 cp">(61 728 350,00 UZS / 12 345 670,00 UZS)</a>
                        </div>
                    </template>
                    <div>
                        <div class="tables tables2 w-full">
                            <table style="width:100%;" class="list-table">
                                <tr>
                                    <th class="pl24">Номер инвойсаe</th>
                                    <th>Дата и время</th>
                                    <th>Вид оплаты</th>
                                    <th>Оплатил</th>
                                    <th>Сумма</th>
                                    <th>Кассир</th>
                                    <th class="pr24"></th>
                                </tr>
                                <tr class="bt1" v-for="item in Cashbox" :key="item.id">
                                    <td class="pl24 c09 fw600"> {{item.number}}</td>
                                    <td class="fw400">{{item.date}}</td>
                                    <td class="fw400" :class="item.type_payment=='Наличные' ? 'cp':''">{{item.type_payment}}</td>
                                    <td class="fw400">{{item.paid}}</td>
                                    <td class="fw400">{{item.amount}}</td>
                                    <td class="fw400">{{item.cashier}}</td>
                                    <td class="pr24">
                                        <div class="df aic jcfe">
                                            <button class="simple-button mr-2" style="width:25px;" @click="CashBoxDialog=true">
                                                <img src="../../assets/img/Export.svg" alt="">
                                            </button>
                                            <button class="simple-button mr-2" style="width:25px;">
                                                <img src="../../assets/img/Print.svg" alt="">
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    <!-- Выехавшие-->
    <div v-if="activeName=='3'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Номер инвойсаe</th>
                        <th>Дата и время</th>
                        <th>Вид оплаты</th>
                        <th>Оплатил</th>
                        <th>Сумма</th>
                        <th>Кассир</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in Cashbox" :key="item">
                        <td class="pl24 c09 fw500"> {{item.number}}</td>
                        <td class="fw400">{{item.date}}</td>
                        <td class="fw400" :class="item.type_payment=='Наличные' ? 'cp':''">{{item.type_payment}}</td>
                        <td class="fw400">{{item.paid}}</td>
                        <td class="fw400">{{item.amount}}</td>
                        <td class="fw400">{{item.cashier}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;" @click="CashBoxDialog=true">
                                    <img src="../../assets/img/Export.svg" alt="">
                                </button>
                                <button class="simple-button mr-2" style="width:25px;">
                                    <img src="../../assets/img/Print.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Смены -->
    <div v-if="activeName=='4'">
        <div class="role-item">
            <el-collapse v-model="Accardion1" class="accardion-head-padding accardion-icon" accordion>
                <el-collapse-item class="sel-icon" v-for="a in 10" :key="a" :name='a'>
                    <template slot="title">
                        <div class="df aic ">
                         <div class="simple-button" @click="Accardion1=''">
                            <check  />
                         </div>
                            <p class="min-p ml-2">20/03/2021  --  27/03/2021  17:23 </p>
                            <a href="#" class="min-p ml-1 cp">(61 728 350,00 UZS / 12 345 670,00 UZS)</a>
                        </div>
                    </template>
                    <div>
                        <div class="tables tables2 w-full">
                            <table style="width:100%;" class="list-table">
                                <tr>
                                    <th class="pl24">Номер инвойсаe</th>
                                    <th>Дата и время</th>
                                    <th>Вид оплаты</th>
                                    <th>Оплатил</th>
                                    <th>Сумма</th>
                                    <th>Кассир</th>
                                    <th class="pr24"></th>
                                </tr>
                                <tr class="bt1" v-for="item in Cashbox" :key="item.id">
                                    <td class="pl24 c09 fw600"> {{item.number}}</td>
                                    <td class="fw400">{{item.date}}</td>
                                    <td class="fw400" :class="item.type_payment=='Наличные' ? 'cp':''">{{item.type_payment}}</td>
                                    <td class="fw400">{{item.paid}}</td>
                                    <td class="fw400">{{item.amount}}</td>
                                    <td class="fw400">{{item.cashier}}</td>
                                    <td class="pr24">
                                        <div class="df aic jcfe">
                                            <button class="simple-button mr-2" style="width:25px;" @click="CashBoxDialog=true">
                                                <img src="../../assets/img/Export.svg" alt="">
                                            </button>
                                            <button class="simple-button mr-2" style="width:25px;">
                                                <img src="../../assets/img/Print.svg" alt="">
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
    <!-- Расходы -->
    <div v-if="activeName=='5'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Номер инвойсаe</th>
                        <th>Дата и время</th>
                        <th>Вид расхода</th>
                        <th>Сотрудник</th>
                        <th>Сумма</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="item in Cashbox" :key="item">
                        <td class="pl24 c09 fw500"> {{item.number}}</td>
                        <td class="fw400">{{item.date}}</td>
                        <td class="fw400" >{{item.type_payment}}</td>
                        <td class="fw400">{{item.cashier}}</td>
                        <td class="fw400">{{item.amount}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" style="width:25px;" @click="CashBoxDialog=true">
                                    <img src="../../assets/img/Edit.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Check Print -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="CashBoxDialog" width="468px" center>
        <div>
            <header>
                <h1>Подтверждение действия</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac simple-p">Количество инвойсов:</p>
                        <p class="pb-3 tac simple-p fw600 c09">18</p>
                        <p class="pb-3 tac simple-p pt-3">Сумма закрытия:</p>
                        <p class="pb-3 tac fw500 cgreen simple-p">12 345 670,00 UZS</p>
                        <p class="pb-3 tac fw600 c09 simple-p pt-3">Закрыть кассу?</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="CashBoxDialog=false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Закрыть
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Новый расход -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="NewExpense" width="80%" center>
        <div>
            <header>
                <h1>Новый расход</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер счёта / чека</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите номер счёта / чека" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Вид расхода</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Введите текст">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Сотрудник</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите сотрудника">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                 <el-row :gutter="24" class="pt-1">
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата расхода</p>
                                <el-date-picker  type="date" placeholder="Выберите дату расхода"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время расхода</p>
                                <el-time-select  :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Введите сумму расхода"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Сумма расхода</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите сумму расхода" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box pt-3">
                        <p class="pb-1">Описание расхода</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите описание расхода" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="NewExpense=false">
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
import {
    required
} from 'vuelidate/lib/validators'
import check from '../../components/check'
export default {
    components: {
        check
    },
    data() {
        return {
            propSorts: {
                view: 'category',
                format: '',
            },
            search: '',
            NewExpense:false,
            CashBoxDialog: false,
            activeName: '1',
            Accardion1: 1,
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
            sortYear:'2021',
            years:['2021', '2019', '2018', '2017'],
            sortMoons:'Март',
            moons:['Март', 'Aprel'],
            sortYearMoon:'Год / Месяц',
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
            Cashbox: [{
                    id:'1',
                    number: '000123',
                    date: '27/03/2021  12:45',
                    type_payment: 'Наличные',
                    paid: 'Thomas Francis Mcdonnel',
                    amount: '12 345 670,00 UZS',
                    cashier: 'Umarov Zokir'
                },
                {   id:'2',
                    number: '000123',
                    date: '27/03/2021  12:45',
                    type_payment: 'Наличные',
                    paid: 'Thomas Francis Mcdonnel',
                    amount: '12 345 670,00 UZS',
                    cashier: 'Umarov Zokir'
                },
                {
                    id:'3',
                    number: '000123',
                    date: '27/03/2021  12:45',
                    type_payment: 'Наличные',
                    paid: 'Thomas Francis Mcdonnel',
                    amount: '12 345 670,00 UZS',
                    cashier: 'Umarov Zokir'
                },
                {
                    number: '000123',
                    date: '27/03/2021  12:45',
                    type_payment: 'VISA',
                    paid: 'Thomas Francis Mcdonnel',
                    amount: '12 345 670,00 UZS',
                    cashier: 'Umarov Zokir'
                },
            ]
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
    z-index: 10;
    top: 5px;
    right: 24px;
    padding: 14px 40px;
    border-radius: 8px;
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
