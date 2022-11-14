<template>
<div class="p-3">

    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png"></router-link>
            <h1>Регистрация объекта</h1>
        </header>
        <div class="wp-body">

            <el-row :gutter="24">
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.prop_cat.$error}">
                    <p class="pb-1">Категория объекта размещения</p>
                    <el-select class="h-48 w-full sel-icon" v-model.trim="$v.reg.prop_cat.$model" placeholder="Категория Вашего объекта размещения">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.prop_name.$error}">
                    <p class="pb-1">Название объекта размещения</p>
                    <el-input class="h-48" v-model.trim="$v.reg.prop_name.$model" placeholder="Название Вашего объекта размещения" />
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.prop_rating.$error}">
                    <p class="pb-1">Звёздность объекта размещения</p>
                    <el-select class="h-48 w-full sel-icon" v-model.trim="$v.reg.prop_rating.$model" placeholder="Звёздность вашего объекта размещения">
                        <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                    </el-select>
                </el-col>
            </el-row>

            <el-row class="pt-4">
                <el-col :span="24" class="pt-3" :class="{ 'error-command': $v.reg.adress.$error}">
                    <p class="pb-1">Адрес объекта размещения</p>
                    <el-input class="h-48" v-model.trim="$v.reg.adress.$model" @focus="outerVisible = true" placeholder="Адрес Вашего объекта размещения" />
                </el-col>
            </el-row>

            <el-row :gutter="24" class="pt-3">
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.phone.$error}">
                    <p class="pb-1">Основной номер телефона</p>
                    <el-input class="h-48" v-model.trim="$v.reg.phone.$model" placeholder="Введите основной номер телефона" />
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.additional_phone.$error}">
                    <p class="pb-1">Дополнительный номер телефона</p>
                    <el-input class="h-48" v-model.trim="$v.reg.additional_phone.$model" placeholder="Введите дополнительный номер телефона" />
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.faks.$error}">
                    <p class="pb-1">Номер факса</p>
                    <el-input class="h-48" v-model.trim="$v.reg.faks.$model" placeholder="Введите номер факса" />
                </el-col>
            </el-row>

            <el-row :gutter="24" class="pt-3">
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.email.$error}">
                    <p class="pb-1">Основной e-mail адрес</p>
                    <el-input class="h-48" v-model.trim="$v.reg.email.$model" placeholder="Введите основной e-mail адрес" />
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.additional_email.$error}">
                    <p class="pb-1">Дополнительный e-mail адрес</p>
                    <el-input class="h-48" v-model.trim="$v.reg.additional_email.$model" placeholder="Введите дополнительный e-mail адрес" />
                </el-col>
                <el-col :md="8" class="pt-3" :class="{ 'error-command': $v.reg.post_index.$error}">
                    <p class="pb-1">Почтовый индекс</p>
                    <el-input class="h-48" v-model.trim="$v.reg.post_index.$model" placeholder="Введите почтовый индекс" />
                </el-col>
            </el-row>

            <el-row :gutter="24" class="pt-3">
                <el-col :md="12" class="pt-3" :class="{ 'error-command': $v.reg.checkout_time.$error}">
                    <p class="pb-1">Расчётный час</p>
                    <el-input class="h-48" v-model.trim="$v.reg.checkout_time.$model" placeholder="Введите расчётный час" />
                </el-col>
                <el-col :md="12" class="pt-3" :class="{ 'error-command': $v.reg.langes.$error}">
                    <p class="pb-1">Знание языков</p>
                    <el-select class="h-48 w-full plus-icon" v-model.trim="$v.reg.langes.$model" multiple filterable allow-create default-first-option placeholder="Выберите языки">
                        <el-option v-for="item in dic" :key="item" :label="item" :value="item"> </el-option>
                    </el-select>
                </el-col>
            </el-row>

            <!-- buttons -->
            <el-row :gutter="24" class="pt-6">
                <el-col :span="12">
                    <button v-on:click="$router.push({name:'settings'})" class="float-right default-btn f-size-17 h-48 mw-180">Отмена</button>
                </el-col>
                <el-col :span="12">
                    <button v-on:click="Poster" class="primary-btn f-size-17 h-48 mw-180">Сохранить</button>
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
    email
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
            reg: {
                prop_cat: '',
                prop_name: '',
                prop_rating: '',
                adress: '',
                phone: '',
                additional_phone: '',
                faks: '',
                email: '',
                additional_email: '',
                post_index: '',
                checkout_time: '',
                langes: []
            }
        }
    },
    validations: {
        reg: {
            prop_cat: {
                required,
                minLength: minLength(1)
            },
            prop_name: {
                required,
                minLength: minLength(3)
            },
            prop_rating: {
                required,
                minLength: minLength(1)
            },
            adress: {
                required,
                minLength: minLength(5)
            },
            phone: {
                required,
                minLength: minLength(7)
            },
            additional_phone: {
                required,
                minLength: minLength(7)
            },
            faks: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email,
                minLength: minLength(3)
            },
            additional_email: {
                required,
                email,
                minLength: minLength(3)
            },
            post_index: {
                required,
                minLength: minLength(3)
            },
            checkout_time: {
                required,
                minLength: minLength(3)
            },
            langes: {
                required,
                minLength: minLength(1)
            }
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
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    },

}
</script>
