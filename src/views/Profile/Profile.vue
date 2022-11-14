<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings/documents" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
            <h1>Общие настройки</h1>
        </header>
        <div class="wp-body bb1">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-6">
                    <div class="df aic jcsb">
                        <p class="title-p tal">ФИО</p>
                        <img class="ml-3" width="20px" src="../../assets/img/Edit.svg" />
                    </div>
                </el-col>
                <el-col :span="24" class="pb-2">
                    <p class="title15 mb-2">Имя: <span class="ml-2 c09">Gulchehra</span></p>
                    <p class="title15 mb-2">Фамилия: <span class="ml-2 c09">Abdumalikova</span></p>
                    <p class="title15 mb-2">Отчество:<span class="ml-2 c09">Abduvorisovna</span></p>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body bb1">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-6">
                    <div class="df aic jcsb">
                        <p class="title-p tal">Логин и пароль</p>
                        <img class="ml-3" width="20px" src="../../assets/img/Edit.svg" />
                    </div>
                </el-col>
                <el-col :span="24" class="pb-2">
                    <p class="title15 mb-2">Логин: <span class="ml-2 c09">gulchehra@hotel.uz</span></p>
                    <p class="title15 mb-2">Пароль: <span class="ml-2 c09">*************</span></p>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body bb1">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-6">
                    <div class="df aic jcsb">
                        <p class="title-p tal">Контакты</p>
                        <img class="ml-3" width="20px" src="../../assets/img/Edit.svg" />
                    </div>
                </el-col>
                <el-col :span="24" class="pb-2">
                    <p class="title15 mb-2">Номер телефона: <span class="ml-2 c09">+998 9* ***-**-78</span></p>
                    <p class="title15 mb-2">Дополнительный номер телефона: <span class="ml-2 c09">+998 9* ***-**-78</span></p>
                    <p class="title15 mb-2">E-mail адрес: <span class="ml-2 c09">abdumalikovagul@testmail.com</span></p>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body bb1">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-6">
                    <div class="df aic jcsb">
                        <p class="title-p tal">Дополнительная информация</p>
                        <img class="ml-3" width="20px" src="../../assets/img/Edit.svg" />
                    </div>
                </el-col>
                <el-col :span="24" class="pb-2">
                    <p class="title15 mb-2">Должность:   <span class="ml-2 c09">Менеджер</span></p>
                    <p class="title15 mb-2">Дата регистрации:  <span class="ml-2 c09">23.08.2020 г</span></p>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-4">
                    <p class="title-p tal">Логотип компании</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="24">
                    <div class="df">
                        <button class="logo-add mt-2 mr-2">
                            <img src="../../assets/img/imgAdd.svg" alt="A">
                            <p class="pt-1">Загрузить фото</p>

                            <input type="file" class="input-img" multiple v-on:change="handleFiles">
                        </button>
                        <button class="user-all-images mt-2 mr-2">
                            <img width="100%" src="../../assets/img/woman.png" alt="">
                        </button>
                    </div>

                </el-col>
            </el-row>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            files: null,
        };
    },
    methods: {
        handleFiles(event) {
            console.log(event.target.files)
            this.files = event.target.files[0].name

        }
    }
};
</script>

<style lang="scss" scoped>

.c-p {
    color: #007AFF;
}

.logo-add {
    padding: 37px 20px 10px 20px;
    width: 150px;
    height: 150px;
    background: #FBFDFF;
    border: 2px dashed #D3D8DE;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    outline: none;
    position: relative;
}

.user-all-images {
    padding: 0;
    width: 150px;
    height: 150px;
    background: #FBFDFF;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    outline: none;
    position: relative;
    overflow: hidden;
}

.input-img {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    opacity: 0;
}
</style>
