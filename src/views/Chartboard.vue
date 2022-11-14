<template>
<div class="p-3">
    <div class="wrapper-0 df aic h-76">
        <div class="w-full pl-6 pr-6 df jcfe aic">
            <el-button @click="ResultsDialog2 = true" type="default" class="primarybg h-48 w-48 df aic jcc">
                <img width="100%" src="../assets/img/Speedometer.svg" alt="AA">
            </el-button>
            <el-button type="default" class="primarybg h-48 w-48 df aic jcc" @click="ResultsDialog=true">
                <img width="100%" src="../assets/img/Scale.svg" alt="AA">
            </el-button>
            <el-button type="default" class="primary">Добавить</el-button>
        </div>
    </div>
    <div class="settings-list w-full">
        <div class="setting-card df jcsb">
            <div class="card-img h-full df aic mr-2">
                <img src="../assets/img/Ingreen.svg" alt="">
            </div>
            <div class="card-text h-full df fdc jcsb">
                <h1>18</h1>
                <p>Заезжающих сегодня</p>
            </div>
        </div>
        <div class="setting-card df jcsb">
            <div class="card-img h-full df aic mr-2">
                <img src="../assets/img/Outred.svg" alt="">
            </div>
            <div class="card-text h-full df fdc jcsb">
                <h1>34</h1>
                <p>Выезжающих сегодня</p>
            </div>
        </div>
        <div class="setting-card df jcsb">
            <div class="card-img h-full df aic mr-2">
                <img src="../assets/img/OpenLock.svg" alt="">
            </div>
            <div class="card-text h-full df fdc jcsb">
                <h1>47</h1>
                <p>Свободных мест сегодня</p>
            </div>
        </div>
        <div class="setting-card df jcsb">
            <div class="card-img h-full df aic mr-2">
                <img src="../assets/img/People.svg" alt="">
            </div>
            <div class="card-text h-full df fdc jcsb">
                <h1>189</h1>
                <p>Проживающих сегодня</p>
            </div>
        </div>
    </div>
    <div class="wrapper-0 mt-3 p-0 ofh">
        <div class="wp-body pt-3 pb-3 bb1">
            <el-row :gutter="24" class="w-full ">
                <el-col :span="24">
                    <p class="title-p tal">Годовая загруженность гостиницы в %</p>
                </el-col>
            </el-row>
        </div>
        <div class="p-3 bb1 ">
            <el-row :gutter="24" class="w-full ">
                <el-col :span="24">
                    <apexchart id="chart1" class="w-full" type="area" height="350" :options="chart1Options" :series="series"></apexchart>
                </el-col>
            </el-row>
        </div>
    </div>
    <el-row :gutter="24" class="w-full">
        <el-col :span="12">
            <div class="wrapper-0 mt-3 p-0 ofh">
                <div class="wp-body pt-3 pb-3 bb1">
                    <el-row :gutter="24" class="w-full ">
                        <el-col :span="24">
                            <p class="title-p tal">Выручка от продаж номеров</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="p-3 bb1 ">
                    <el-row :gutter="24" class="w-full pl-3">
                        <el-col :span="24" class="pl-3 pr-3">
                            <el-dropdown trigger="hover">
                                <span class="el-dropdown-link">
                                    <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                        <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="w-full p0">
                        <el-col :span="24">
                            <apexchart id="chart2" class="w-full no-pan" type="area" height="350" :options="chart2Options" :series="series2"></apexchart>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="wrapper-0 mt-3 p-0 ofh">
                <div class="wp-body pt-3 pb-3 bb1">
                    <el-row :gutter="24" class="w-full ">
                        <el-col :span="24">
                            <p class="title-p tal">Месячная загруженность в %</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="p-3 bb1 ">
                    <el-row :gutter="24" class="w-full pl-3">
                        <el-col :span="24" class="pl-3 pr-3">
                            <el-dropdown trigger="hover">
                                <span class="el-dropdown-link">
                                    <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                        <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="w-full ">
                        <el-col :span="24">
                            <apexchart id="chart3" class="w-full no-pan" type="area" height="350" :options="chart2Options" :series="series2"></apexchart>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="24" class="w-full">
        <el-col :span="12">
            <div class="wrapper-0 mt-3 p-0 ofh">
                <div class="wp-body pt-3 pb-3 bb1">
                    <el-row :gutter="24" class="w-full ">
                        <el-col :span="24">
                            <p class="title-p tal">Соотношение резидентов и иностранцев</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="p-3 bb1 ">
                    <el-row :gutter="24" class="w-full pl-3">
                        <el-col :span="24" class="pl-3 pr-3">
                            Сегодня: <span class="cp">своб - 22,0 % | рез - 32,5 % | инос - 45,5 %</span>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="w-full p0">
                        <el-col :span="24">
                            <apexchart id="chart4" class="w-full" type="bar" height="350" :options="chart3Options" :series="series3"></apexchart>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="wrapper-0 mt-3 p-0 ofh">
                <div class="wp-body pt-3 pb-3 bb1">
                    <el-row :gutter="24" class="w-full ">
                        <el-col :span="24">
                            <p class="title-p tal">Месячная загруженность в %</p>
                        </el-col>
                    </el-row>
                </div>
                <div class="p-3 bb1 ">
                    <el-row :gutter="24" class="w-full pl-3">
                        <el-col :span="24" class="pl-3 pr-3">
                            <el-dropdown trigger="hover">
                                <span class="el-dropdown-link">
                                    <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                        <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="w-full">
                        <el-col :span="24" class="pt-3 pb-4">
                            <div class="pt-3 pl-3 ">
                                <div class="df aic jcsb pt-2" v-for="(item, i) in Ser5" :key="i">
                                    <div class="df aic" style="width:85%">
                                        <div style="width:60%">
                                            <Progres :percent="item.percent" />
                                        </div>
                                        <div style="padding:0px 20px; width:40%">
                                            <p class="simple-p2 tal" style="min-width:100px;">
                                                {{i+1}}.{{item.country}}
                                            </p>
                                        </div>
                                    </div>
                                    <div style="text-align:right; width:15%;">
                                        <span class="cp simple-p2">{{item.date}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-col>
    </el-row>

    <!-- List dialog -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="ResultsDialog" width="80%" center>
        <div>
            <header>
                <h1>Шкала результатов</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tal cp simple-p">#594628/2021 Приготовить конференц-зал</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <div class="df jcfe aic " style="min-height:300px;">
                            <ol>
                                <li>1. Выручка от продажи номеров</li>
                                <li>2. Выручка от продажи услуг</li>
                                <li>3. Выручка общепита</li>
                                <li>4. Загруженность гостиницы</li>
                                <li>5. Чистая прибыль от продажи номеров</li>
                                <li>6. Чистая прибыль от продажи услуг</li>
                                <li>7. Чистая прибыль общепита</li>
                                <li>8. Общая чистая прибыль</li>
                            </ol>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <apexchart type="radar" class="legend-right" height="350" :options="chartOptions4" :series="series4"></apexchart>
                    </el-col>
                    <el-col :md="6" class="box pt-3">

                    </el-col>
                </el-row>
                <!-- buttons -->
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ResultsDialog = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Ok
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- List dialog -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="ResultsDialog2" width="80%" center>
        <div>
            <header>
                <h1>Загруженность</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tal cp simple-p">#594628/2021 Приготовить конференц-зал</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pb-10">
                    <el-col :md="6" class="box pt-3">
                            <div class="df aife" style="height:260px;">
                            <div>
                                <p class="simple-p">Количество занятых номеров: <span class="c09">50 из 60</span> </p>
                                <p class="simple-p">Количество занятых номеров: <span class="c09">50 из 60</span></p>
                            </div>
                                
                            </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <apexchart type="radialBar" :options="chartOptions5" :series="ser6"></apexchart>
                    </el-col>
                    <el-col :md="6" class="box pt-3">

                    </el-col>
                </el-row>
                <!-- buttons -->
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="ResultsDialog2 = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
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
import Progres from './../components/ProgresPrim.vue'
export default {
    components: {
        Progres
    },
    data() {
        return {

            ResultsDialog: false,
            ResultsDialog2: true,
            ser6: [75.5],
            chartOptions5: {
                chart: {
                    type: 'radialBar',
                    offsetY: 10,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: false,
                            dropShadow: {
                                enabled: false,
                                top: 3,
                                left: 0,
                                blur: 1,
                                opacity: 1
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '100%',
                            margin: 5, // margin is in pixels
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -50,
                                fontSize: '70px',
                                fontFamily: 'Digital-7 Mono',
                                formatter: function (val) {
                                    return val + ' %'
                                }
                            }
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -10
                    }
                },

                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 10,
                        colors: ['#FF003A', '#FFD600', '#00C48C'],
                        gradientToColors: ['#00C48C'],
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent'],
            },
            series4: [{
                name: 'Максимум',
                data: [80, 50, 30, 40, 100, 20, 80, 60],
            }, {
                name: 'Рекордный показатель',
                data: [20, 30, 40, 80, 20, 80, 40, 90],
            }, {
                name: 'Рекордный показатель',
                data: [100, 100, 100, 100, 100, 100, 100, 100],
            }, ],
            chartOptions4: {
                chart: {
                    height: 350,
                    type: 'radar',
                    radius: 120,
                    dropShadow: {
                        enabled: false,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                colors: ['#00CC99', '#FFCC33', '#0066FF'],
                stroke: {
                    width: 1
                },
                fill: {
                    opacity: 0.1
                },
                tooltip: {
                    enabled: true,
                    theme: 'dark',
                    style: {
                        fontFamily: 'SF Pro Display',
                        fontSize: '11px'
                    },
                    x: {
                        show: true,
                        formatter: function () {
                            return '2021 Mart';
                        },
                    },
                    marker: {
                        show: false,
                    },
                },
                markers: {
                    size: 5
                },
                xaxis: {
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8'],
                    labels: {
                        formatter: function (value) {
                            return value;
                        }
                    },
                },
                yaxis: {
                    show: false,
                    min: 0,
                    max: 100,
                    yaxisBorder: {
                        show: false,
                    },
                    yaxisTicks: {
                        show: false
                    },
                    labels: {
                        formatter: function (value) {
                            return value + '%';
                        }
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'bottom',
                    horizontalAlign: 'null',
                    floating: false,
                    fontSize: '13px',
                    fontFamily: 'SF Pro Display',
                    fontWeight: 400,
                    offsetX: 0,
                    offsetY: 0,
                    markers: {
                        width: 16,
                        height: 2,
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 0
                    },
                },
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColors: '#fff',
                        }
                    }
                },
            },
            series: [{
                    name: '2020 г',
                    data: [20, 20, 30, 50, 80, 85, 15, 12, 5, 0, 90, 50, 50, 100]
                },
                {
                    name: '2021 г',
                    data: [80, 80, 70, 50, 20, 15, 85, 88, 95, 100, 10, 50, 50, 0]
                }
            ],
            series2: [{
                name: 'Yanvar',
                data: [25, 85, 25, 85, 25, 50, 85]
            }],
            series3: [{
                    name: 'Yanvar',
                    data: [25, 20, 60, 8, 25, 50, 80, 2, 50, 80, 60, 12]
                },
                {
                    name: 'Alan',
                    data: [25, 20, 20, 85, 25, 0, 10, 48, 20, 10, 20, 48]
                },
                {
                    name: 'Fevral',
                    data: [25, 10, 20, 5, 25, 50, 10, 50, 30, 10, 20, 40]
                }
            ],
            chart1Options: {
                chart: {
                    type: 'line',
                    height: 300,
                    toolbar: {
                        enabled: false,
                        show: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                },
                xaxis: {
                    type: 'category',
                    categories: ['', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', ' '],
                    tickAmount: 'dataPoints',
                    labels: {
                        show: true,
                    },
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                tooltip: {
                    enabled: true,
                    theme: 'dark',
                    style: {
                        fontFamily: 'SF Pro Display',
                        fontSize: '11px'
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 100,
                    floating: false,

                    labels: {
                        style: {
                            colors: ['#091C31'],
                            fontSize: '13px',
                            fontFamily: 'SF Pro Display',
                            fontWeight: 600,
                        },
                        offsetY: 0,
                        offsetX: 0,
                        formatter: function (value) {
                            return value + " %";
                        }
                    },
                    yaxisBorder: {
                        show: false,

                    },
                    yaxisTicks: {
                        show: false
                    },
                },
                fill: {
                    colors: ['#fff', '#fff']
                },
                colors: ['#FFD600', '#007AFF'],
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'top',
                    horizontalAlign: 'null',
                    floating: false,
                    fontSize: '13px',
                    fontFamily: 'SF Pro Display',
                    fontWeight: 400,
                    offsetX: 0,
                    offsetY: 0,
                    markers: {
                        width: 24,
                        height: 2,
                    },
                    itemMargin: {
                        horizontal: 30,
                        vertical: 0
                    },
                },
                grid: {
                    show: true,
                    borderColor: '#D3D8DE',
                    strokeDashArray: 5,
                    position: 'back',
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 10
                    },
                }
            },
            chart2Options: {
                chart: {
                    type: 'area',
                    height: 300,
                    toolbar: {
                        show: true,
                        autoSelected: 'pan',
                        offsetX: 30,
                        offsetY: -70,
                        tools: {
                            download: false,
                            selection: false,
                            zoom: false,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            reset: false,
                            customIcons: false
                        },
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'category',
                    categories: ['1 Янв', '5 Янв', '10 Янв', '15 Янв', '20 Янв', '25 Янв'],
                    tickAmount: 'dataPoints',
                    labels: {
                        show: true,
                    },
                    axisBorder: {
                        show: true
                    },
                    axisTicks: {
                        show: true
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                tooltip: {
                    enabled: true,
                    theme: 'dark',
                    style: {
                        fontFamily: 'SF Pro Display',
                        fontSize: '11px'
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 100,
                    floating: false,

                    labels: {
                        style: {
                            colors: ['#091C31'],
                            fontSize: '13px',
                            fontFamily: 'SF Pro Display',
                            fontWeight: 600,
                        },
                        offsetY: 0,
                        offsetX: -5,
                        formatter: function (value) {
                            return value + " %";
                        }
                    },
                    yaxisBorder: {
                        show: false,

                    },
                    yaxisTicks: {
                        show: false
                    },
                },
                fill: {
                    colors: ['#fff', '#fff']
                },
                colors: ['#007AFF'],
                legend: {
                    show: false,
                },
                grid: {
                    show: true,
                    borderColor: '#D3D8DE',
                    strokeDashArray: 5,
                    position: 'back',
                    offsetY: 0,
                    offsetX: 10,
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 10
                    },
                },
            },
            chart3Options: {
                chart: {
                    type: 'bar',
                    id: 'chart4',
                    height: 300,
                    stackType: '100%',
                    stacked: true,
                    group: 'social',
                    toolbar: {
                        enabled: false,
                        show: false
                    },
                },
                fill: {
                    colors: ['#007AFF', '#409BFF', '#9FCDFF'],
                    type: 'solid',

                },
                colors: ['#007AFF', '#409BFF', '#9FCDFF'],

                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '60%',
                        barHeight: '60%',
                        distributed: false,
                        borderRadius: 10,
                        rangeBarOverlap: false,
                        rangeBarGroupRows: true,
                        colors: {
                            backgroundBarOpacity: 0,
                            backgroundBarRadius: 10,
                        }
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: 'none',
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: true,
                        filter: {
                            type: 'darken',
                            value: 0.35,
                        }
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                },
                xaxis: {
                    type: 'category',
                    categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                    tickAmount: 'dataPoints',
                    labels: {
                        show: true,
                        rotate: 0,
                        rotateAlways: false,
                        hideOverlappingLabels: true,
                        showDuplicates: false,
                        trim: false,
                        maxHeight: 120,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                tooltip: {
                    enabled: true,
                    intersect: true,
                    theme: 'dark',
                    x: {
                        show: false
                    },
                    style: {
                        fontFamily: 'SF Pro Display',
                        fontSize: '11px'
                    },
                    marker: {
                        show: true
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    min: 0,
                    max: 100,
                    show: false,
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'top',
                    horizontalAlign: 'left',
                    floating: false,
                    fontSize: '13px',
                    fontFamily: 'SF Pro Display',
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    offsetX: -25,
                    offsetY: 0,
                    markers: {
                        width: 12,
                        height: 12,
                        strokeWidth: 0,
                        radius: 12,
                        offsetX: 0,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                    },

                },
                grid: {
                    show: false
                }
            },
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
            SortName: 'Январь 2021',
            Ser5: [{
                    percent: 100,
                    country: 'Казахстан',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 90,
                    country: 'Российская Федерация',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 80,
                    country: 'Таджикистан',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 70,
                    country: 'Китай',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 60,
                    country: 'Турция',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 50,
                    country: 'Украниа',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 40,
                    country: 'Азербайджан',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 30,
                    country: 'Южная Корея',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 20,
                    country: 'Соединённые Штаты Америки',
                    date: '35 | 23,3 %'
                },
                {
                    percent: 10,
                    country: 'Япония',
                    date: '35 | 23,3 %'
                },
            ],
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
        },
        fillData() {
            this.datacollection = {
                labels: [this.getRandomInt(), this.getRandomInt()],
                datasets: [{
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }, {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }]
            }
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    },
    mounted() {
        this.fillData()
    },
}
</script>

<style lang="scss" scoped>
$gutter: 12px;

.settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        cursor: pointer;
        background: #fbfdff;
        height: 108px;
        min-width: 300px;
        border: 1px solid #d3d8de;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        padding: 14px 24px;
        transition: all 0.1s ease-out;
        user-select: none;

        &:hover {
            -webkit-box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.08);
            transform: translate(0, -2px);
        }

        .logo {
            margin-bottom: 19.5px;
        }

        h1 {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 600;
            font-size: 34px;
            line-height: 40px;
            text-align: right;

        }

        p {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
            color: #919EAC;
        }
    }
}

.primary {
    background: #007AFF;
    border-radius: 8px;
    padding: 14px 40px;
    color: #fff;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
}

.primarybg {
    border: 1px solid #007AFF;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 14px;
}

.h-108 {
    height: 108px !important;
}

.w-330 {
    min-width: 330px !important;
}

.no-pan .apexcharts-pan-icon {
    display: none !important;
}

.echarts {
    width: 100px;
    height: 100px;
}
</style>
