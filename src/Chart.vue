<template>
<section class="charts">
    <h3>Bar Chart</h3>
    <vue-highcharts :options="options" ref="barChart"></vue-highcharts>
</section>
</template>

<script>
import VueHighcharts from "vue2-highcharts";
import Highcharts from "highcharts";

const data = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        series: {

        },
        column: {
            stacking: 'normal',
            boostBlending: 0,
            boostThreshold: 0,
            borderColor: '#ffffff',
            borderWidth: 0,
            centerInCategory: false,
            className: 'AAA',
            clip: true,

            colorAxis: 0,
            colorKey: 0,
            crisp: true,
            cropThreshold: 0,

            dashStyle: 'solid',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'John',
        borderRadius: 10,

        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Joe',
        borderRadius: 10,

        data: [3, 4, 4, 2, 5]
    }]
}
export default {
    components: {
        VueHighcharts
    },
    data() {
        return {
            options: data
        };
    }
};
</script>
