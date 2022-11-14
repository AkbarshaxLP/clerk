<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-0 fww bb0 ">
            <div class="top-buttons">
                <el-button class="top-button df aic" type="primary">
                <div class="df aic">
                    <img height="100%" src="../../assets/img/PrintWhite.svg" class="mr-2" alt="">
                Распечатать
                </div>
                
                </el-button>
            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Гостиница" name="1" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="14" class="pt-3">
                                <el-select class="h-48 w-full sel-icon fw600" v-model="Sortreport" placeholder="Выберите категорию номера">
                                    <el-option :label="item.name" v-for="(item, i) in Sortreports" :key="i" :value="item.value" />
                                </el-select>
                            </el-col>
                            <el-col :md="10" class="pt-3">
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
                                            <el-dropdown-item class="pl-1 dd-title">
                                                <p><i class="el-icon-check el-icon--right"></i>SDASDASDAS</p>
                                            </el-dropdown-item>
                                            <el-dropdown-item class="pl-1 dd-title">
                                                <p><i class="el-icon-check el-icon--right"></i>SDASDASDAS</p>
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
                    <el-tab-pane label="Активность" name="2" class="pl-6 pr-6 pb0">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="14" class="pt-3">
                                <el-select class="h-48 w-full sel-icon fw600" v-model="Sortreport2" placeholder="Выберите категорию номера">
                                    <el-option :label="item.name" v-for="(item, i) in Sortreports2" :key="i" :value="item.value" />
                                </el-select>
                            </el-col>
                            <el-col :md="10" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Export.svg" alt="AAA">
                                        <span class="ml-3">Экспорт</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6" v-if="activeName=='2' && Sortreport2=='partner_report'">
                            <el-col :md="24">
                                <p class="c919 simple-p mb-2">Общее количество броней: <span class="c09">1 230</span></p>
                                <p class="c919 simple-p mb-2">Аннулировано броней:  <span class="c09">220</span></p>
                                <p class="c919 simple-p mb-2">Количество гостей аннулированных броней:  <span class="c09">2 450</span></p>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic ">
                                    <el-dropdown trigger="hover" class="mr-6" v-if="activeName=='2' && Sortreport2=='employe_report'" >
                                        <span class="el-dropdown-link">
                                            Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Период: <b class="ml-1">{{sortYearMoon}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title">
                                                <p><i class="el-icon-check el-icon--right"></i>SDASDASDAS</p>
                                            </el-dropdown-item>
                                            <el-dropdown-item class="pl-1 dd-title">
                                                <p><i class="el-icon-check el-icon--right"></i>SDASDASDAS</p>
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
                                    <el-dropdown trigger="hover" class="ml-10"  v-if="activeName=='2' && Sortreport2=='partner_report'">
                                        <span class="el-dropdown-link">
                                            Тип партнёра:<b class="ml-1">Тур. фирма</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in moons" :key="i" :class="sortMoons==item?'bg-primary':''">
                                                <p v-on:click="sortMoons=item"><i :class="sortMoons==item? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10"  v-if="activeName=='2' && Sortreport2=='employe_report'">
                                        <span class="el-dropdown-link">
                                            Должность:<b class="ml-1">Администраторы</b><i class="el-icon-caret-bottom el-icon--right"></i>
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
    <!-- Гостиница -->
    <!-- General Report -->
    <div v-if="activeName=='1' && Sortreport=='general'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Страна</th>
                        <th>Количество гостей</th>
                        <th class="pr24">Количество дней</th>
                    </tr>
                    <tr class="bt1" v-for="(item, i) in General" :key="i">
                        <td class="pl24 c09  font-upper fw600"> {{item.country}}</td>
                        <td class="fw400">{{item.count_gost}}</td>
                        <td class="pr24">{{item.count_day}}</td>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24  font-upper cp fw600">Средний показатель</td>
                        <td class="fw400 cp">{{GeneralGost}}</td>
                        <td class="pr24 cp">{{GeneralDay}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Work Report -->
    <div v-if="activeName=='1' && Sortreport=='work'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Месяц</th>
                        <th>Количество гостей</th>
                        <th class="pr24">Загруженность в %</th>
                    </tr>
                    <tr class="bt1" v-for="(item, i) in Work" :key="i">
                        <td class="pl24 c09  font-upper fw600"> {{item.moonth}}</td>
                        <td class="fw400">{{item.count_gost}}</td>
                        <td class="pr24">{{item.free_space}}</td>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24  font-upper cp fw600">Средний показатель</td>
                        <td class="fw400 cp">{{WorkGost}}</td>
                        <td class="pr24 cp">{{WorkFree}} %</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- Work Report -->
    <div v-if="activeName=='1' && Sortreport=='register'">
        <div class="role-item">
            <el-collapse v-model="Accardion1" class="accardion-head-padding accardion-icon" accordion>
                <el-collapse-item class="sel-icon" v-for="(a,i) in Register" :key="i" :name='i'>
                    <template slot="title">
                        <div class="df aic ">
                            <div class="simple-button" @click="Accardion1=''">
                                <check v-model="a.activer" />
                            </div>
                            <p class="min-p ml-2">{{a.name}}</p>
                            <a href="#" class="min-p ml-1 cp">{{a.link}}</a>
                        </div>
                    </template>
                    <div>
                        <div class="tables tables2 w-full">
                            <table style="width:100%;" class="list-table">
                                <tr>
                                    <th class="pl24">Вид оплаты</th>
                                    <th>Количество инвойсов</th>
                                    <th>За проживание</th>
                                    <th>За другие услуги</th>
                                    <th class="pr24">Общая сумма</th>
                                </tr>
                                <tr class="bt1" v-for="(b,j) in a.data" :key="j">
                                    <td class="pl24 c09 fw600"> {{b.type_price}}</td>
                                    <td class="fw400">{{b.count_invoices}}</td>
                                    <td class="fw400">{{b.accommodation}} UZS</td>
                                    <td class="fw400">{{b.services}} UZS</td>
                                    <td class="pr24">{{b.accommodation+b.services}} UZS</td>
                                </tr>
                                <tr class="bt1">
                                    <td class="pl24  font-upper cp fw600">ИТОГО:</td>
                                    <td class="fw400 cp">20 UZS</td>
                                    <td class="pr24 cp">20 UZS</td>
                                    <td class="pr24 cp">300 UZS</td>
                                    <td class="pr24 cp">500 UZS</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>

    <!-- Активность -->
    <!-- ////////////// -->
    <div v-if="activeName=='2' && Sortreport2=='country_report'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Страна</th>
                        <th>A1</th>
                        <th>A2</th>
                        <th>B1</th>
                        <th>B2</th>
                        <th>C1</th>
                        <th>C2</th>
                        <th>D1</th>
                        <th>D2</th>
                        <th>E</th>
                        <th>J1</th>
                        <th>J2</th>
                        <th>PV1</th>
                        <th>PV2</th>
                        <th>S1</th>
                        <th>S2</th>
                        <th>S3</th>
                        <th>T</th>
                        <th>TG</th>
                        <th>EX</th>
                        <th>Транзит</th>
                        <th>Без визы</th>
                        <th class="pr24">ИТОГО</th>
                    </tr>
                    <tr class="bt1" v-for="(item, i) in ReportCountries" :key="i">
                        <td class="pl24 c09  font-upper fw600"> {{item.country}}</td>
                        <td class="fw400">{{item.a1}}</td>
                        <td class="fw400">{{item.a2}}</td>
                        <td class="fw400">{{item.b1}}</td>
                        <td class="fw400">{{item.b2}}</td>
                        <td class="fw400">{{item.c1}}</td>
                        <td class="fw400">{{item.c2}}</td>
                        <td class="fw400">{{item.d1}}</td>
                        <td class="fw400">{{item.d2}}</td>
                        <td class="fw400">{{item.e}}</td>
                        <td class="fw400">{{item.j1}}</td>
                        <td class="fw400">{{item.j2}}</td>
                        <td class="fw400">{{item.pv1}}</td>
                        <td class="fw400">{{item.pv2}}</td>
                        <td class="fw400">{{item.s1}}</td>
                        <td class="fw400">{{item.s2}}</td>
                        <td class="fw400">{{item.s3}}</td>
                        <td class="fw400">{{item.t}}</td>
                        <td class="fw400">{{item.tg}}</td>
                        <td class="fw400">{{item.ex}}</td>
                        <td class="fw400">{{item.transit}}</td>
                        <td class="fw400">{{item.visout_visa}}</td>
                        <td class="pr24">30</td>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24  font-upper cp fw600">итого:</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">999</td>
                        <td class="pr24 cp">999</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- ////////////// -->
    <div v-if="activeName=='2' && Sortreport2=='partner_report'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">Компания</th>
                        <th>Количество гостей</th>
                        <th>Количество дней</th>
                        <th>Сумма</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr class="bt1" v-for="(item, i) in PartnersReport" :key="i">
                        <td class="pl24 c09  font-upper fw600"> {{item.company}}</td>
                        <td class="fw400">{{item.number_goest}}</td>
                        <td class="fw400">{{item.number_day}}</td>
                        <td class="fw400">{{item.amount}} UZS</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <button class="simple-button mr-2" @click="GuestCard=true">
                                    <img src="./../../assets/img/RoomsEdits.svg" alt="">
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="bt1">
                        <td class="pl24  font-upper cp fw600">итого:</td>
                        <td class="fw400 cp">999</td>
                        <td class="fw400 cp">9999</td>
                        <td class="fw400 cp">999</td>
                        <td class="pr24 cp"></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- ////////////// -->
    <div class="settings-list" v-if="activeName=='2' && Sortreport2=='employe_report' && sortWiev=='category'">
        <router-link to="/statistics/user" tag="div" class="setting-card" v-for="item in Partnores" :key="item.id">
            <p class="online-text" v-if="item.online">Online</p>
            <div class="cricle-img">
                <img width="100%" :src="item.img" />
            </div>
            <p class="parner-type-text mt-2">{{item.role}}</p>
            <h1 class="parner-name-text mt-3">{{item.fio}}</h1>
        </router-link>
    </div>
    <div v-if="activeName=='2' && Sortreport2=='employe_report' &&  sortWiev=='list'">
        <div class="role-item">
            <div class="tables tables2 w-full">
                <table style="width:100%;" class="list-table">
                    <tr>
                        <th class="pl24">ФИО</th>
                        <th>Должность</th>
                        <th>Общее количество часов</th>
                        <th class="pr24"></th>
                    </tr>
                    <tr tag="tr"  class="bt1" v-for="(item, i) in Partnores" :key="i">
                        <td class="pl24 c09   fw600">
                            <div class="df aic">
                                <div class="table-partner-img mr-2">
                                    <img width="100%" :src="item.img" />
                                </div>
                                <h1 class="parner-name-text">{{item.fio}}</h1>
                                <span v-if="item.online" class="online-span ml-6">Online</span>
                            </div>
                        </td>
                        <td class="fw400">{{item.role}}</td>
                        <td class="fw400">{{item.total_hours}}</td>
                        <td class="pr24">
                            <div class="df aic jcfe">
                                <router-link to="/statistics/user" tag="button" class="simple-button mr-2" @click="GuestCard=true">
                                    <img src="./../../assets/img/RoomsEdits.svg" alt="">
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <!-- Guest Card-->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="GuestCard" width="690px" center>
        <div>
            <header>
                <h1 class="font-upper pb-1 pt-1">dolores travel services</h1>
            </header>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="bb1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Завершенные брони</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Количество броней:<span class="c09">460</span></p>
                        <p class="pb-3 ">Количество гостей: <span class="c09"> 9 870</span></p>
                        <p class="pb-3 ">Количество прожитых дней:<span class="c09">67 890,5</span></p>
                        <p class="pb-3 ">Общая сумма: <span class="c09">123 456 780,00 сум</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3 bb1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Аннулированные брони</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Количество броней: <span class="c09">120</span></p>
                        <p class="pb-3 ">Количество гостей: <span class="c09">980 </span></p>
                        <p class="pb-3 ">Количество дней: <span class="c09">3 120,5</span></p>
                        <p class="pb-3 ">Общая сумма:<span class="c09">12 345 670,00 сум</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3 ">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Активные брони</p>
                    </el-col>
                    <el-col :md="24" class="box">
                        <p class="pb-3 ">Количество броней:<span class="c09">97</span></p>
                        <p class="pb-3 ">Количество гостей:<span class="c09">98</span></p>
                        <p class="pb-3 ">Количество дней: <span class="c09">312 </span></p>
                        <p class="pb-3 ">Общая сумма: <span class="c09">12 345 670,00 сум</span></p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="24" class="df jcc">
                        <button class="primary-btn  f-size-17 h-48 mw-180" @click=" GuestCard=false">
                            Ok
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
        check,
    },
    data() {
        return {
            propSorts: {
                view: 'category',
                format: '',
            },
            Partnores: [{
                id: 1,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 2,
                fio: 'uktamov ilyosbek sattorovich',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 3,
                fio: 'ahmadjonov baxtiyor jalol o’g’li',
                role: "Администратор",
                online: true,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 4,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 5,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 6,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 7,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 8,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 9,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: true,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 10,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 11,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: false,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, {
                id: 12,
                fio: 'abduvaliyeva gulirano abduvositovna',
                role: "Администратор",
                online: true,
                total_hours: '1 234 : 43 мин',
                img: require("../../assets/img/woman.png"),
            }, ],
            search: '',
            NewExpense: true,
            GuestCard: false,
            CashBoxDialog: false,
            activeName: '1',
            Accardion1: 1,
            viewName: 'Карточки',
            sortWiev:'category',
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
            Sortreports: [{
                    name: 'Обший отчёт',
                    value: "general"
                },
                {
                    name: 'Отчёт по загруженности',
                    value: "work"
                },
                {
                    name: 'Реестр (Инкасса)',
                    value: "register"
                },
            ],
            Sortreports2: [{
                    name: 'Отчёт по странам',
                    value: "country_report"
                },
                {
                    name: 'Отчёт по партнёрам',
                    value: "partner_report"
                },
                {
                    name: 'Отчёт по активности сотрудников',
                    value: "employe_report"
                },
            ],
            Sortreport: 'general',
            Sortreport2: 'country_report',
            sortYear: '2021',
            years: ['2021', '2019', '2018', '2017'],
            sortMoons: 'Март',
            moons: ['Март', 'Aprel'],
            sortYearMoon: 'Год / Месяц',
            dic: ['AA', "AA"],
            General: [{
                    country: 'армения',
                    count_gost: 5,
                    count_day: 3
                },
                {
                    country: 'армения',
                    count_gost: 5,
                    count_day: 5
                },
                {
                    country: 'армения',
                    count_gost: 85,
                    count_day: 65
                },
                {
                    country: 'армения',
                    count_gost: 45,
                    count_day: 35
                },
                {
                    country: 'армения',
                    count_gost: 10,
                    count_day: 50
                },
                {
                    country: 'армения',
                    count_gost: 20,
                    count_day: 30
                },
            ],
            Work: [{
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 75
                },
                {
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 15
                },
                {
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 75.5
                },
                {
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 75.5
                },
                {
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 75.5
                },
                {
                    moonth: 'январь',
                    count_gost: 20,
                    free_space: 75.5
                },
            ],
            Register: [{
                name: 'Январь  --  18 инвойсов',
                link: '(61 728 350,00 UZS / 12 345 670,00 UZS)',
                activer: false,
                data: [{
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                ]
            }, {
                name: 'Январь  --  18 инвойсов',
                link: '(61 728 350,00 UZS / 12 345 670,00 UZS)',
                activer: false,
                data: [{
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                ]
            }, {
                name: 'Январь  --  18 инвойсов',
                link: '(61 728 350,00 UZS / 12 345 670,00 UZS)',
                activer: false,
                data: [{
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                    {
                        type_price: 'VISA, MasterCard, Maestro',
                        count_invoices: 20,
                        accommodation: 1234560,
                        services: 1234560,
                    },
                ]
            }, ],
            ReportCountries: [{
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                },
                {
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                },
                {
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                },
                {
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                }, {
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                }, {
                    country: 'исламская республика иран',
                    a1: 20,
                    a2: 20,
                    b1: 20,
                    b2: 20,
                    c1: 20,
                    c2: 20,
                    d1: 20,
                    d2: 20,
                    e: 20,
                    j1: 20,
                    j2: 20,
                    pv1: 20,
                    pv2: 20,
                    s1: 20,
                    s2: 20,
                    s3: 20,
                    t: 20,
                    tg: 20,
                    ex: 20,
                    transit: 20,
                    visout_visa: 20,
                }

            ],
            PartnersReport: [{
                company: 'dolores travel services',
                number_goest: 10,
                number_day: 20,
                amount: 1234567000
            }, {
                company: 'dolores travel services',
                number_goest: 10,
                number_day: 20,
                amount: 1234567000
            }, {
                company: 'dolores travel services',
                number_goest: 10,
                number_day: 20,
                amount: 1234567000
            }, {
                company: 'dolores travel services',
                number_goest: 10,
                number_day: 20,
                amount: 1234567000
            }, ]
        };
    },
    computed: {
        GeneralGost() {
            let S = 0
            for (let i = 0; i < this.General.length; i++) {
                S = S + this.General[i].count_gost;
            }
            return S
        },
        GeneralDay() {
            let S = 0
            for (let i = 0; i < this.General.length; i++) {
                S = S + this.General[i].count_day;
            }
            return S
        },
        WorkGost() {
            let S = 0
            for (let i = 0; i < this.Work.length; i++) {
                S = S + this.Work[i].count_gost;
            }
            return S
        },
        WorkFree() {
            let S = 0
            for (let i = 0; i < this.Work.length; i++) {
                S = S + this.Work[i].free_space;
            }
            return S / this.Work.length
        },

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
        },
        viewsActiver(a) {
            var i = 0;
            for (i = 0; i < this.Wievs.length; i++) {
                this.Wievs[i].active = false
            }
            this.Wievs[a].active = true
            this.viewName = this.Wievs[a].name
            this.sortWiev = this.Wievs[a].value
        },
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
    display: flex;
    justify-content: center;
    z-index: 10;
    top: 0px;
    right: 24px;
    padding: 14px 15px;
    border-radius: 8px;
    width: 180px;
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
