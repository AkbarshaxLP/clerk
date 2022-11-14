<template>
<div class="home h-fit">
    <div class="wrapper h-full flex-col align-center text-center flex justify-center">
        <div class="df jcc">
            <img  src="../../assets/img/pkey.png">
        </div>
        <p class="mt-3">Срок вашей <span @click="$router.push({name:'activation'})" class="cp curpo">Лицензии Продукта</span> истёк. Для продолжения работы программы, пожалуйста, активируйте продукт, с помощью ключа.</p>
        <el-row :gutter="35" class="mt-12 actions">
            <el-col :span="12">
                <button style="color: #091C31" class="float-right h-12 px-2.5">Обучающие ролики</button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" class="float-left h-12 px-10">Активировать</el-button>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<style lang="scss">
.home .actions button {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px !important;
    line-height: 20px;
}

.home {
    p {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        color: #919EAC;
    }
}
</style>

<script>
export default {
    name: 'Home'
}
</script>
