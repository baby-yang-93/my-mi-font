<template>
    <div id="news-content">
        <p></p>
        <div class="contents">
            <div id="main"></div>
        </div>
        <!--<div class="contents" v-else-if="">-->
        <!--<h4>数据分析图</h4>-->
        <!--<div id="main1"></div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import echarts from "echarts";

    var myChart;
    export default {
        name: "NewsContent",
        data() {
            return {
                id: this.$route.params.id || '1'
            }
        },
        methods: {
            bing(myChart) {
                var builderJson = {
                    "all": 10887,
                    "charts": {
                        "map": 3237,
                        "lines": 2164,
                        "bar": 7561,
                        "line": 7778,
                        "pie": 7355,
                        "scatter": 2405,
                        "candlestick": 1842,
                        "radar": 2090,
                        "heatmap": 1762,
                        "treemap": 1593,
                        "graph": 2060,
                        "boxplot": 1537,
                        "parallel": 1908,
                        "gauge": 2107,
                        "funnel": 1692,
                        "sankey": 1568
                    },
                    "components": {
                        "geo": 2788,
                        "title": 9575,
                        "legend": 9400,
                        "tooltip": 9466,
                        "grid": 9266,
                        "markPoint": 3419,
                        "markLine": 2984,
                        "timeline": 2739,
                        "dataZoom": 2744,
                        "visualMap": 2466,
                        "toolbox": 3034,
                        "polar": 1945
                    },
                    "ie": 9743
                };

                var downloadJson = {
                    "echarts.min.js": 17365,
                    "echarts.simple.min.js": 4079,
                    "echarts.common.min.js": 6929,
                    "echarts.js": 14890
                };

                var themeJson = {
                    "dark.js": 1594,
                    "infographic.js": 925,
                    "shine.js": 1608,
                    "roma.js": 721,
                    "macarons.js": 2179,
                    "vintage.js": 1982
                };

                var waterMarkText = 'ECHARTS';

                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                canvas.width = canvas.height = 100;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.globalAlpha = 0.08;
                ctx.font = '20px Microsoft Yahei';
                ctx.translate(50, 50);
                ctx.rotate(-Math.PI / 4);
                ctx.fillText(waterMarkText, 0, 0);

                var option = {
                    backgroundColor: {
                        type: 'pattern',
                        image: canvas,
                        repeat: 'repeat'
                    },
                    tooltip: {},
                    title: [{
                        text: '在线构建',
                        subtext: '总计 ' + builderJson.all,
                        x: '25%',
                        textAlign: 'center'
                    }, {
                        text: '各版本下载',
                        subtext: '总计 ' + Object.keys(downloadJson).reduce(function (all, key) {
                            return all + downloadJson[key];
                        }, 0),
                        x: '75%',
                        textAlign: 'center'
                    }, {
                        text: '主题下载',
                        subtext: '总计 ' + Object.keys(themeJson).reduce(function (all, key) {
                            return all + themeJson[key];
                        }, 0),
                        x: '75%',
                        y: '50%',
                        textAlign: 'center'
                    }],
                    grid: [{
                        top: 50,
                        width: '50%',
                        bottom: '45%',
                        left: 10,
                        containLabel: true
                    }, {
                        top: '55%',
                        width: '50%',
                        bottom: 0,
                        left: 10,
                        containLabel: true
                    }],
                    xAxis: [{
                        type: 'value',
                        max: builderJson.all,
                        splitLine: {
                            show: false
                        }
                    }, {
                        type: 'value',
                        max: builderJson.all,
                        gridIndex: 1,
                        splitLine: {
                            show: false
                        }
                    }],
                    yAxis: [{
                        type: 'category',
                        data: Object.keys(builderJson.charts),
                        axisLabel: {
                            interval: 0,
                            rotate: 30
                        },
                        splitLine: {
                            show: false
                        }
                    }, {
                        gridIndex: 1,
                        type: 'category',
                        data: Object.keys(builderJson.components),
                        axisLabel: {
                            interval: 0,
                            rotate: 30
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        type: 'bar',
                        stack: 'chart',
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true
                            }
                        },
                        data: Object.keys(builderJson.charts).map(function (key) {
                            return builderJson.charts[key];
                        })
                    }, {
                        type: 'bar',
                        stack: 'chart',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: '#eee'
                            }
                        },
                        data: Object.keys(builderJson.charts).map(function (key) {
                            return builderJson.all - builderJson.charts[key];
                        })
                    }, {
                        type: 'bar',
                        stack: 'component',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        z: 3,
                        label: {
                            normal: {
                                position: 'right',
                                show: true
                            }
                        },
                        data: Object.keys(builderJson.components).map(function (key) {
                            return builderJson.components[key];
                        })
                    }, {
                        type: 'bar',
                        stack: 'component',
                        silent: true,
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        itemStyle: {
                            normal: {
                                color: '#eee'
                            }
                        },
                        data: Object.keys(builderJson.components).map(function (key) {
                            return builderJson.all - builderJson.components[key];
                        })
                    }, {
                        type: 'pie',
                        radius: [0, '30%'],
                        center: ['75%', '25%'],
                        data: Object.keys(downloadJson).map(function (key) {
                            return {
                                name: key.replace('.js', ''),
                                value: downloadJson[key]
                            }
                        })
                    }, {
                        type: 'pie',
                        radius: [0, '30%'],
                        center: ['75%', '75%'],
                        data: Object.keys(themeJson).map(function (key) {
                            return {
                                name: key.replace('.js', ''),
                                value: themeJson[key]
                            }
                        })
                    }]
                }
                myChart.setOption(option);
            },
            xian(myChart) {
                var data = [];

                for (var i = 0; i <= 100; i++) {
                    var theta = i / 100 * 360;
                    var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                    data.push([r, theta]);
                }

                let option = {
                    title: {
                        text: '极坐标双数值轴'
                    },
                    legend: {
                        data: ['line']
                    },
                    polar: {},
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    angleAxis: {
                        type: 'value',
                        startAngle: 0
                    },
                    radiusAxis: {},
                    series: [{
                        coordinateSystem: 'polar',
                        name: 'line',
                        type: 'line',
                        data: data
                    }]
                };
                myChart.setOption(option);
            },
            zhu(myChart) {
                var weatherIcons = {
                    'Sunny': './data/asset/img/weather/sunny_128.png',
                    'Cloudy': './data/asset/img/weather/cloudy_128.png',
                    'Showers': './data/asset/img/weather/showers_128.png'
                };

                var seriesLabel = {
                    normal: {
                        show: true,
                        textBorderColor: '#333',
                        textBorderWidth: 2
                    }
                }

                let option = {
                    title: {
                        text: 'Wheater Statistics'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['City Alpha', 'City Beta', 'City Gamma']
                    },
                    grid: {
                        left: 100
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'value',
                        name: 'Days',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    yAxis: {
                        type: 'category',
                        inverse: true,
                        data: ['Sunny', 'Cloudy', 'Showers'],
                        axisLabel: {
                            formatter: function (value) {
                                return '{' + value + '| }\n{value|' + value + '}';
                            },
                            margin: 20,
                            rich: {
                                value: {
                                    lineHeight: 30,
                                    align: 'center'
                                },
                                Sunny: {
                                    height: 40,
                                    align: 'center',
                                    backgroundColor: {
                                        image: weatherIcons.Sunny
                                    }
                                },
                                Cloudy: {
                                    height: 40,
                                    align: 'center',
                                    backgroundColor: {
                                        image: weatherIcons.Cloudy
                                    }
                                },
                                Showers: {
                                    height: 40,
                                    align: 'center',
                                    backgroundColor: {
                                        image: weatherIcons.Showers
                                    }
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: 'City Alpha',
                            type: 'bar',
                            data: [165, 170, 30],
                            label: seriesLabel,
                            markPoint: {
                                symbolSize: 1,
                                symbolOffset: [0, '50%'],
                                label: {
                                    normal: {
                                        formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                                        backgroundColor: 'rgb(242,242,242)',
                                        borderColor: '#aaa',
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        padding: [4, 10],
                                        lineHeight: 26,
                                        // shadowBlur: 5,
                                        // shadowColor: '#000',
                                        // shadowOffsetX: 0,
                                        // shadowOffsetY: 1,
                                        position: 'right',
                                        distance: 20,
                                        rich: {
                                            a: {
                                                align: 'center',
                                                color: '#fff',
                                                fontSize: 18,
                                                textShadowBlur: 2,
                                                textShadowColor: '#000',
                                                textShadowOffsetX: 0,
                                                textShadowOffsetY: 1,
                                                textBorderColor: '#333',
                                                textBorderWidth: 2
                                            },
                                            b: {
                                                color: '#333'
                                            },
                                            c: {
                                                color: '#ff8811',
                                                textBorderColor: '#000',
                                                textBorderWidth: 1,
                                                fontSize: 22
                                            }
                                        }
                                    }
                                },
                                data: [
                                    {type: 'max', name: 'max days: '},
                                    {type: 'min', name: 'min days: '}
                                ]
                            }
                        },
                        {
                            name: 'City Beta',
                            type: 'bar',
                            label: seriesLabel,
                            data: [150, 105, 110]
                        },
                        {
                            name: 'City Gamma',
                            type: 'bar',
                            label: seriesLabel,
                            data: [220, 82, 63]
                        }
                    ]
                };
                myChart.setOption(option);
            },
            bmap() {

            },
            show() {
                let element = this.getElement();
                if (myChart) {
                    myChart.dispose(element);
                }
                myChart = echarts.init(this.getElement());
                if (this.id === '1') {
                    this.bing(myChart);
                }
                if (this.id === '2') {
                    this.xian(myChart);
                }
                if (this.id === '3') {
                    this.zhu(myChart);
                }
            },
            getElement() {
                return document.getElementById('main');
            }
        },
        watch: {
            '$route': function () {
                this.id = this.$route.params.id;
                this.show();
            }
        },
        mounted() {
            this.show();
        },
    }

</script>

<style scoped>
    #news-content {
        height: 100%;
        width: 100%;
    }
    .contents {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    #main {
        width: 700px;
        height: 400px;
        margin: auto;
    }
</style>