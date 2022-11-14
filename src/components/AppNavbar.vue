<template>
<div class="app-navbar">
    <el-row class="w-full">
        <el-col :span="5">
            <button class="default-btn">Поиск номеров</button>
        </el-col>
        <el-col :span="14">
            <div class="current-time">
                {{ time }}
                <span>{{ date }} Ташкент</span>
            </div>
        </el-col>
        <el-col :span="5">
            <img @click="drawer=true" src="@/assets/img/1.png" class="user-logo">
        </el-col>
    </el-row>
    <el-drawer :visible.sync="drawer" size="312px" :with-header="false">
        <div class="df w-full fdc jcsb h-full">
            <div class="p-6 ">
                <div class="user-img">
                    <img width="100%" src="../assets/img/woman.png" alt="">
                </div>
                <div class="w-full">
                    <el-row :gutter="24" class="pt-2">
                        <el-col :md="24">
                            <p class="tac f-15 c919 pb-2">Менеджер:</p>
                            <h1 class="tac ttup ff-sf c09 fw500 lh-20">ABDUMALIKOVA GULCHEHRA ABDUVORISOVNA</h1>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="pt-9">
                        <el-col :md="24">
                            <p class="tac f-13 c919 pb-2">Начало смены</p>
                            <h1 class="tac blue-text-clock">09:00 10.01.2021</h1>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="pt-8">
                        <el-col :md="24">
                            <p class="tac f-13 c919 pb-2 ">Продолжительность смены</p>
                            <h1 class="tac black-text-clock">03:45 мин</h1>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="pt-3">
                        <el-col :md="24">
                            <p class="tac f-13 c919 pb-2 ">Рекорд</p>
                            <h1 class="tac black-text-clock">17:36 мин</h1>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="p-6 df aic jcsb">
                <button class="dawer-button" @click="$router.push({name:'profile'}), drawer=false">
                    <svg class="mr-2" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.23905 8.75976L6.573 3.42582L9.07423 5.92704L3.74028 11.261C3.69688 11.3044 3.67335 11.3171 3.6629 11.3217C3.65462 11.3254 3.63445 11.3333 3.58342 11.3333H1.39591C1.29079 11.3333 1.24204 11.3004 1.22082 11.2792C1.19961 11.258 1.16675 11.2093 1.16675 11.1041V8.91663C1.16675 8.86559 1.17466 8.84542 1.17834 8.83714C1.18299 8.8267 1.19565 8.80316 1.23905 8.75976ZM11.7611 2.92643C11.8575 3.02283 11.8575 3.14375 11.7611 3.24016L10.8022 4.1991L8.30094 1.69788L9.25989 0.738929C9.35629 0.642525 9.47721 0.642525 9.57361 0.73893L11.7611 2.92643Z" stroke="#A7B1BD" />
                    </svg>
                    <p class="m-0">Изменить</p>
                </button>
                <button class="dawer-button">
                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85193 4.99996C5.60295 4.99996 5.3691 5.03697 5.20066 5.19418C5.03313 5.35054 5.00008 5.55665 5.00008 5.76539V14.2345C5.00008 14.4433 5.03313 14.6494 5.20066 14.8057C5.3691 14.963 5.60295 15 5.85193 15H8.44453C8.6593 15 8.83342 15.2296 8.83342 15.4444C8.83342 15.6592 8.6593 15.8333 8.44453 15.8333H5.85193C5.41332 15.8333 4.98773 15.6709 4.66997 15.3743C4.35129 15.0769 4.16675 14.6675 4.16675 14.2345V5.76539C4.16675 5.33238 4.35129 4.92301 4.66997 4.62558C4.98773 4.329 5.41332 4.16663 5.85193 4.16663H8.44453C8.6593 4.16663 8.83342 4.34074 8.83342 4.55551C8.83342 4.77029 8.6593 4.99996 8.44453 4.99996H5.85193Z" fill="#FF003A" />
                        <path d="M12.0584 6.61386C12.2103 6.46199 12.4565 6.46199 12.6084 6.61386L15.7195 9.72497C15.7568 9.76226 15.7849 9.80523 15.8039 9.8511C15.8226 9.89628 15.8331 9.94575 15.8334 9.99763L15.8334 9.99996L15.8334 10.0023C15.8331 10.0542 15.8226 10.1036 15.8039 10.1488C15.7849 10.1947 15.7568 10.2377 15.7195 10.2749L12.6084 13.3861C12.4565 13.5379 12.2103 13.5379 12.0584 13.3861C11.9066 13.2342 11.9066 12.988 12.0584 12.8361L14.5057 10.3888H8.44453C8.22975 10.3888 8.05564 10.2147 8.05564 9.99996C8.05564 9.78518 8.22975 9.61107 8.44453 9.61107H14.5057L12.0584 7.16383C11.9066 7.01196 11.9066 6.76573 12.0584 6.61386Z" fill="#FF003A" />
                    </svg>

                    <p class="m-0">Выйти</p>
                </button>
            </div>
        </div>
    </el-drawer>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            time: null,
            date: null,

        }
    },
    computed: {},
    mounted() {
        setInterval(() => {
            let date = new Date();
            this.date = `${date.getDate()}.${date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`;
            this.time = `${date.getHours()}:${date.getMinutes()}`;
        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
.app-navbar {
    height: 64px;
    background: #FBFDFF;
    border-bottom: 1px solid #D3D8DE;
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 36px;
    padding-right: 12px;
}

.current-time {
    font-family: Digital-7 Mono;
    font-style: italic;
    font-weight: normal;
    font-size: 34px;
    line-height: 34px;
    text-align: center;
    color: #091C31;
    text-shadow: 0px 4px 5px rgba(0, 122, 255, 0.2);

    span {
        color: #919EAC;
        font-family: SF Pro Display;
        font-style: normal;
        font-size: 23px;
    }
}

.user-logo {
    margin-left: auto;
    cursor: pointer;
}

.user-img {
    width: 264px;
    height: 264px;
    border: 1px solid #091C31;
    overflow: hidden;
    border-radius: 50%;
}

.f-13 {
    font-size: 13px;
}

.f-15 {
    font-size: 15px;
}

.ff-sf {
    font-family: SF Pro Display;
}

.ttup {
    text-transform: uppercase;
}

.fw500 {
    font-weight: 500;
}

.lh-20 {
    line-height: 20px;
}

.c919 {
    color: #919EAC;
}

.blue-text-clock {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 20px;
    color: #007AFF;
}

.black-text-clock {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 20px;
    color: #091C31;
}

.dawer-button {
    border: 1px solid #007AFF;
    box-sizing: border-box;
    border-radius: 8px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 40px;
    font-size: 13px;
    color: #007AFF;
    cursor: pointer;
    outline: none;
}
</style>
