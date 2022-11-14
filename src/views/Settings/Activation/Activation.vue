<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header df jcsb aic">
            <div class="df">
                <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                <h1>Активация продукта</h1>
            </div>
        </header>
    </div>
    <div class="wrapper-0 pt-0 ">
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Активация продукта “Clerk”</p>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1">Статус активации:</p>
                </el-col>
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1 cr">Требуется активация</p>
                </el-col>
                <el-col :md="12" class="box pt-3 ">
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1">Код активации:</p>
                </el-col>
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1 c09">AE434 - SE852 - AS84F - 64ED4 - 87A87</p>
                </el-col>
                <el-col :md="12" class="box pt-3 ">
                    <div class="df w-full jcfe">
                        <button class="activate-button" v-on:click="$router.push({name:'activation_key'})">
                            <img src="../../../assets/img/Key.svg" alt="APA" class="mr-2">
                            <p class="cp">Изменить ключ продукта</p>
                        </button>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1">Дата деактивации:</p>
                </el-col>
                <el-col :md="6" class="box pt-3">
                    <p class="pb-1 c09">31/12/2021</p>
                </el-col>
                <el-col :md="12" class="box pt-3 ">
                    <div class="df w-full jcfe">
                        <p class="cp">Условия лицензионного соглашения на использование программного обеспечения</p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="wp-body pt-3 bb1">
            <el-row :gutter="24">
                <el-col :md="24">
                    <p class="pb-5 title-p">Другие продукты</p>
                </el-col>
            </el-row>
            <div class="activation-item pt-3">
                <el-row :gutter="24">
                    <el-col :md="24" class="box pt-3">
                        <p class="pb-1 f17 fw600 c00grren">Lodger</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Статус активации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">Не требуется</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Дата деактивации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">...</p>
                    </el-col>
                </el-row>
            </div>
            <div class="activation-item pt-3">
                <el-row :gutter="24">
                    <el-col :md="24" class="box pt-3">
                        <p class="pb-1 f17 fw600 c00grren">Waiter</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Статус активации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">Не требуется</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Дата деактивации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">...</p>
                    </el-col>
                </el-row>
            </div>
            <div class="activation-item pt-3">
                <el-row :gutter="24">
                    <el-col :md="24" class="box pt-3">
                        <p class="pb-1 f17 fw600 c00grren">Cashier</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Статус активации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">Не требуется</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Дата деактивации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">...</p>
                    </el-col>
                </el-row>
            </div>
            <div class="activation-item pt-3">
                <el-row :gutter="24">
                    <el-col :md="24" class="box pt-3">
                        <p class="pb-1 f17 fw600 c00grren">Tasker</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Статус активации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">Не требуется</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="6" class="box pt-3">
                        <p class="pb-1">Дата деактивации:</p>
                    </el-col>
                    <el-col :md="18" class="box pt-3">
                        <p class="pb-1 c09">...</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SProgress from "@/components/SProgress.vue";

export default {
    components: {
        SProgress,
    },
    data() {
        return {
            done: done,
            a: true,
            radio: false,
            period: true,
            end_time: '12:00',
            start_time: "00:00",
            country: ['olma', 'anor'],
            langs: [{
                    name: "O'zbekcha",
                    lang: 'uz'
                },
                {
                    name: "English",
                    lang: 'en'
                },
                {
                    name: "Russian",
                    lang: 'ru'
                },
            ],
            value: '',
            value_lang: [],
        };
    },
};
</script>

<style lang="scss" scoped>
$gutter: 12px;

.settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 12px 12px;

    // grid-template-areas: ". . . . . ." ". . . . . .";
    .setting-card {
        background: #fbfdff;
        height: 216px;
        min-width: 330px;
        border: 1px solid #d3d8de;
        box-sizing: border-box;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        transition: all 0.1s ease-out;
        user-select: none;
        position: relative;

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

.f17 {
    font-size: 17px;
}

.fw-600 {
    font-weight: 600;
}

.tc {
    text-align: center;
}

.bg-fb {
    background: #FBFDFF;
}

/* RADIO CHECK */

.radio-labla {
    position: relative;
    width: 24px;
    height: 24px;

}

.radio-labla input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0 !important;
    cursor: pointer;

}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: #FBFDFF;
    border: 2px solid #9FCDFF;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
}

.checkmark:after {
    content: "";
    position: absolute;
    top: 2.5px;
    left: 2.5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #007AFF;
    display: none;
}

.radio-labla input:checked~.checkmark:after {
    display: block;
}

.radio-labla input:checked~.checkmark {
    border: 2px solid #007AFF !important;
}

/* END RADIO CHECK */
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100% !important;
}

.add-button {
    outline: none;
    cursor: pointer;
    padding: 0px 10px;

}

.add-button p {
    font-size: 13px;
    color: #007AFF;
}

.activate-button {
    padding: 5px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>
