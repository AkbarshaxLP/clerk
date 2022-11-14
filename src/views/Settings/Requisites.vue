<template>
<div class="p-3">

    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png"></router-link>
            <h1>Реквизиты компании</h1>
        </header>
        <div class="wp-body">

            <el-row>
                <el-col :md="24" :class="{ 'error-command': $v.company_details.name.$error}">
                    <p class="pb-1">Юридическое название компании</p>
                    <el-input v-model.trim="$v.company_details.name.$model" class="h-48" placeholder="Введите юридическоеназвание Вашей компании" />
                </el-col>
            </el-row>

            <el-row :gutter="24" class="pt-6">
                <el-col :md="8" :class="{ 'error-command': $v.company_details.bank_accaunt.$error}">
                    <p class="pb-1">Банковский счёт</p>
                    <el-input v-model.trim="$v.company_details.bank_accaunt.$model" class="h-48" placeholder="Введите банковский счёт Вашей компании" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.company_details.fio.$error}">
                    <p class="pb-1">МФО</p>
                    <el-input v-model.trim="$v.company_details.fio.$model" class="h-48" placeholder="Введите МФО Вашей компании" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.company_details.inn.$error}">
                    <p class="pb-1" >ИНН</p>
                    <el-input v-model.trim="$v.company_details.inn.$model" class="h-48" placeholder="Введите ИНН Вашей компании" />
                </el-col>
            </el-row>

            <el-row :gutter="24" class="pt-6">
                <el-col :md="8" :class="{ 'error-command': $v.company_details.oked.$error}">
                    <p class="pb-1">ОКЭД</p>
                    <el-input v-model.trim="$v.company_details.oked.$model" class="h-48" placeholder="Введите ОКЭД Вашей компании" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.company_details.nds.$error}">
                    <p class="pb-1">Код плательщика НДС</p>
                    <el-input v-model.trim="$v.company_details.nds.$model" class="h-48" placeholder="Введите код плательщика НДС Вашей компании" />
                </el-col>
                <el-col :md="8" :class="{ 'error-command': $v.company_details.swift.$error}">
                    <p class="pb-1">SWIFT</p>
                    <el-input v-model.trim="$v.company_details.swift.$model" class="h-48" placeholder="Введите SWIFT код Вашей компании" />
                </el-col>
            </el-row>

            <!-- buttons -->
            <el-row :gutter="24" class="pt-6">
                <el-col :span="12">
                    <button v-on:click="$router.push({name:'settings'})" class="float-right default-btn f-size-17 h-48 mw-180">Отмена</button>
                </el-col>
                <el-col :span="12">
                    <button @click="Poster" class="primary-btn f-size-17 h-48 mw-180">Сохранить</button>
                </el-col>
            </el-row>

        </div>
    </div>

    <el-dialog title="Выберите место" :visible.sync="outerVisible">
        <yandex-map style="height: 50vh;min-height: 350px" :center="[41.3605831, 69.2756029]" :zoom="13" :dragable="true" :scrollZoom="true">
        </yandex-map>
        <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">Закрыть</el-button>
        </div>
    </el-dialog>

</div>
</template>

<script>
import Vue from 'vue'
import YandexMap from 'vue-yandex-map'
Vue.use(YandexMap, {
    version: '2.1',
    lang: 'ru_RU',
    apiKey: '',
});
import {
    required,
    minLength,
} from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            outerVisible: false,
            innerVisible: false,
            dic: ['1', '2', '3', '4', '5'],
            map: null,
            map_data: [],
            mapObjectManager: null,
            company_details: {
                name: '',
                bank_accaunt: '',
                fio: '',
                inn: '',
                oked: '',
                nds: '',
                swift: '',
            },

        }
    },
    validations: {
        company_details: {
            name: {
                required,
                minLength: minLength(1)
            },
            bank_accaunt: {
                required,
                minLength: minLength(1)
            },
            fio: {
                required,
                minLength: minLength(1)
            },
            inn: {
                required,
                minLength: minLength(5)
            },
            oked: {
                required,
                minLength: minLength(1)
            },
            nds: {
                required,
                minLength: minLength(1)
            },
            swift: {
                required,
                minLength: minLength(1)
            },
        }
    },
    methods: {
        yamapReady: function () {

        },
        mapCreated: function ($map) {
            console.info('mapCreated, $map=', $map)

            this.map = $map
            this.mapObjectManager = new ymaps.ObjectManager({
                clusterize: false,
                gridSize: 60,
                clusterMinClusterSize: 5,
                clusterHasBalloon: true, // Опции кластеров задаются с префиксом cluster.
                geoObjectOpenBalloonOnClick: false // Опции геообъектов задаются с префиксом geoObject
            })

            this.map.behaviors.disable('drag')

            // set ObjectManager events
            this.map.events.add(['click'], function () {
                this.mapObjectManager.objects.balloon.close()
            })

            // add points on map
            // ...
        },
        mapDestroy: function ($map) {
            console.info('mapDestroy')
        },
        regionChanged: function ($coordinates, $polygon) {

            console.info('regionChanged, coord=', $coordinates)

            let visibleID = [];

            if (typeof $polygon === 'undefined') {
                $polygon = null;
            }

            this.map.behaviors.disable('drag');

            // check points in region
            this.mapObjectManager.setFilter(function (object) {

                let in_poligon = $polygon === null ? false : $polygon.geometry.contains(object.geometry.coordinates);
                let visible = $polygon === null ? true : in_poligon;

                if ($polygon !== null && in_poligon) {
                    visibleID.push(object.id)
                }

                return visible
            })

            console.log('map, selected point ID', visibleID)
        },
        Poster: function () {
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    }
}
</script>
