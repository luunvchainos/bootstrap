<template>
    <div class="container-fluid">
        <div class="justify-content-between d-flex flex-wrap flex-md-nowrap align-items-center mt-4 mb-3">
            <div class="border map-form">
                <span class="title-abs">表期</span>
                <div class="form-inline mb-3">
                    <div class="mr-3r">
                        <span class="font-weight-bold">表示期間期間：</span>
                        <!-- 期間from -->
                        <input type="text" class="form-control"/>
                    </div>
                    <div>
                        <!-- 期間to -->
                        <span class="font-weight-bold">表示期間期間：</span>
                        <input type="text" class="form-control"/>
                    </div>
                </div>
                <div class="form-inline">
                    <span class="font-weight-bold">期間：</span>
                    <!-- 期間from -->
                    <div class="form-group m-0">
                        <datetime format="MM/DD/YYYY" class="form-control" v-model="val1"></datetime>
                        <!--<i class="fa fa-calendar"></i>-->
                    </div>
                    <h4 class="ml-2 mr-2">～</h4>
                    <!-- 期間to -->
                    <div class="form-group m-0">
                        <datetime format="MM/DD/YYYY" class="form-control" v-model="val"></datetime>
                        <!--<i class="fa fa-calendar"></i>-->
                    </div>
                </div>
            </div>
            <!-- 検索ボタン -->
            <div class="float-right text-right">
                <button type="button" id="search-btn" class="btn btn-secondary min-w-120 mb-3">検索</button>
                <button id="export-btn" class="btn btn-primary min-w-120" data-toggle="modal" data-target="#exportModal">エクスポート</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6 col-12">
                <h5 class="title">表示期間期間</h5>
                <canvas id="planet-chart"></canvas>
            </div>
            <div class="col-lg-6 col-12">
                <h5 class="title">表示期間期間</h5>
                <div id="mapOL"></div>
            </div>
        </div>

        <!-- エクスポートモーダル -->
        <div class="modal fade" id="exportModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">エクスポート確認確認</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="閉じる">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                            <p>2019/04/05 11:48 ～ 2019/04/05 15:52 の情報をエクスポートします。</p>
                            <p>ファイル形式を選択してください。</p>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="twidth20 text-center"><input id="radio-1" type="radio" name="connectivity-select"></td>
                                <td class="twidth80">CSV</td>
                            </tr>
                            <tr>
                                <td class="twidth20 text-center"><input type="radio" name="connectivity-select"></td>
                                <td class="twidth80">Excel</td>
                            </tr>
                            <tr>
                                <td class="twidth20 text-center"><input type="radio" name="connectivity-select"></td>
                                <td class="twidth80">PDF</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        <button type="button" id="modal-export-btn" class="btn btn-primary"
                                data-toggle="modal" data-dismiss="modal" data-target="#secondModal">エクスポート</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import datetime from 'vuejs-datetimepicker';
    import Chart from 'chart.js';
    import planetChartData from '../js/libs/chart-data.js';

    import * as ol from 'ol';
    import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import Style from 'ol/style.js';
    import TileLayer from 'ol/layer/Tile.js'
    import Point from 'ol/geom/Point.js'
    import Icon from 'ol/style/Icon.js'
    import Vector from 'ol/layer/Vector.js'
    import SVector from 'ol/source/Vector.js'
    import {transform} from 'ol/proj.js';
    import {fromLonLat} from 'ol/proj.js';
    import OSM from "ol/source/OSM"
    import defaultMarkerGraphic from '../assets/default_marker.png';

    export default {
        name: 'Map',
        components: { datetime },
        data() {
            return {
                val: '',
                val1: '',
                planetChartData: planetChartData,
            }
        },
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                    fill: false
                });
            },
        },
        mounted() {
            this.createChart('planet-chart', this.planetChartData);
            var array = [
                [139.76, 35.68],
                [139.91, 36.55],
                [138.68, 35.68]
            ];
            var zoom = 8;

            let map = new Map({
                target: 'mapOL',
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    })
                ],
                view: new View({
                    center: transform(array[0], 'EPSG:4326', 'EPSG:3857'),
                    zoom: zoom,
                })
            });
            // for (var i = 0; i < array.length; i++) {
            //     var element = document.createElement('div');
            //     element.innerHTML = '<img width="20" class="zzz" src="'+ defaultMarkerGraphic +'" />';
            //     var marker = new ol.Overlay({
            //         position: [i, i],
            //         positioning: 'center-center',
            //         element: element,
            //         stopEvent: false
            //     });
            //     map.addOverlay(marker);
            // }
        },
    }
</script>

