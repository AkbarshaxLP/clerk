<template>
<div class="login-page">
    <div class="login-items">
        <el-row :gutter="24" class="pb-5">
            <el-col :span="24">
                <div class="df jcc">
                    <img src="../assets/img/Big.svg" alt="Bell">
                </div>
                <div class="df jcc pt-2">
                    <p class="login-p"><span>P</span>roperty <span>M</span>anagement <span>S</span>ystem</p>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="24" class="pt-3">
                <p class="erorr-p" :class="erorr ? '':'op0'">Oшибка логина или пароля</p>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="24" class="pt-2">
                <el-input placeholder="Введите логин" class="w-full  h-48 f17 p0" suffix-icon="el-icon-user" v-model="login">
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="24" class="pt-5">
                <el-input type="password" placeholder="Введите пароль" class="w-full h-48 f17" suffix-icon="el-icon-lock" v-model="password">
                </el-input>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="24" class="pt-8">
                <div class="w-full df jcsb aic">
                    <a href="#" class="title-p">Обучающие ролики</a>
                    <el-button @click="loginPoster" type="primary" class="ml-5 bg007">
                        <p class=" pl-5 pr-5 button-p">Войти</p>
                    </el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            login: '',
            password:'',
            erorr:false
        }
    },
    methods:{
        loginPoster(){
            if(this.login!='' && this.password!=''){
                this.$router.push({name:'Home'})
                this.erorr=false
            }
            else{
                this.erorr=true
            }
        }
    }
}
</script>

<style lang="scss">
.login-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/img/loginbg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.login-items {
    width: 468px;
    height: 412px;
    background: rgba(251, 253, 255, 0.65);
    border-radius: 8px;
    backdrop-filter: blur(30px);
    padding: 48px 24px 24px 24px;
}

.login-p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #677789;
}

.login-p span {
    color: #091C31;
}

.bg007 {
    background: #007AFF !important;
}

.button-p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
}
.erorr-p{
text-align: center;
color: red;

}
</style>
