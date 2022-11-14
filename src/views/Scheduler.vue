<template>
<div class="hello" ref="chartdiv">
</div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'HelloWorld',
    mounted() {
        var chartDom = this.$refs.chartdiv;
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            legend: {
                data: ['Ali', 'Salom']
            },
            tooltip: {
                show: true ,
        trigger: 'item' 
            },
            radar: [{
                indicator: [{
                        text: '1'
                    },
                    {
                        text: '2'
                    },
                    {
                        text: '3'
                    },
                    {
                        text: '4'
                    },
                    {
                        text: '5'
                    },
                    {
                        text: '6'
                    },
                    {
                        text: '7'
                    },
                    {
                        text: '8'
                    }
                ],
                yAxis:{
                    min:0,
                    max:100
                },
                center: ['25%', '50%'],
                radius: '50%',
                startAngle: 90,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#000'
                    }
                },
                splitArea: {
                        show:false,

                    areaStyle: {
                        color: ['#fff' ],
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#000'
                    }
                },
                splitLine: {
                    show:false,
                },
            }, ],
            series: [{
                    name: '雷达图',
                    type: 'radar',
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    },
                    data: [{
                            value: [100, 8, 20, 80, 20, 60, 40, 30],
                            name: 'Markaz',
                            symbol: 'rect',
                            symbolSize: 5,
                        },
                        {
                            value: [100, 100, 100, 100, 100, 100, 100, 100],
                            name: 'Senter',
                            areaStyle: {
                                color: 'rgba(255, 255, 255, 0.5)'
                            }
                        }
                    ]
                },
            ]
        };

        option && myChart.setOption(option);
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello {
    width: 100%;
    height: 500px;
    background: #fff;
}
</style>
