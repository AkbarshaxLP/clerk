<template>
<div class="p-3">
    <div class="settings-list">
        <router-link :to="item.path" tag="div" class="setting-card" v-for="item in dic_settings" :key="item">
            <img :src="item.img" class="logo" />
            <h2>{{ item.title }}</h2>
            <p class="status" v-if="item.percent == 100">
                Done <img :src="require(item.img)" />
            </p>
            <p class="status" v-else>{{ item.percent }}%</p>
            <SProgress :percent="item.percent" />
        </router-link>
    </div>
</div>
</template>

<script>
import SProgress from "../../components/SProgress.vue";
const image1=require( "../../assets/img/settings/Registration.png");
const image2=require("../../assets/img/settings/Requisites.png");
import image3 from "../../assets/img/settings/Users.png";
import image4 from "../../assets/img/settings/Rooms.png";
import image5 from "../../assets/img/settings/Building.png";
import image6 from "../../assets/img/settings/Partners.png";
import image7 from "../../assets/img/settings/Lock.png";
import image8 from "../../assets/img/settings/Document forms.png";
import image9 from "../../assets/img/settings/Facilities.png";
import image10 from "../../assets/img/settings/Prices.png";
import image11 from "../../assets/img/settings/Discount.png";
import image12 from "../../assets/img/settings/Key.png";

export default {
    components: {
        SProgress,
    },
    data() {
        return {
            aa: 75,
            dic_settings: [{
                    path: "/settings/registration",
                    title: "Регистрация объекта",
                    percent: 75,
                    img: image1,
                },
                {
                    path: "/settings/requisites",
                    title: "Реквизиты компании",
                    percent: 75,
                    img: image2,
                },
                {
                    path: "/settings/rols",
                    title: "Должности и сотрудники",
                    percent: 25,
                    img: image3,
                },
                {
                    path: "/settings/rooms",
                    title: "Номерной фонд",
                    percent: 80,
                    img: image4,
                },
                {
                    path: "/settings/floors",
                    title: "Корпусы и этажи",
                    percent: 25,
                    img: image5,
                },
                {
                    path: "/settings/partners",
                    title: "Партнёры",
                    percent: 25,
                    img: image6,
                },
                {
                    path: "/settings/rules",
                    title: "Правила бронирования",
                    percent: 25,
                    img: image7,
                },
                {
                    path: "/settings/documents",
                    title: "Формы документов",
                    percent: 25,
                    img: image8,
                },
                {
                    path: "/settings/facilities",
                    title: "Услуги и удобства",
                    percent: 25,
                    img: image9,
                },
                {
                    path: "/settings/tariffs",
                    title: "Тарифы и цены",
                    percent: 25,
                    img: image10,
                },
                {
                    path: "/settings/price",
                    title: "Ценовая политика",
                    percent: 25,
                    img: image11,
                },
                {
                    path: "/settings/activation",
                    title: "Активация продукта",
                    percent: 25,
                    img: image12,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
$gutter: 12px;

.settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        cursor: pointer;
        background: #fbfdff;
        height: 216px;
        min-width: 200px;
        border: 1px solid #d3d8de;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
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
    }
}
</style>
