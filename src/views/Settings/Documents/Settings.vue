<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header">
            <router-link to="/settings/documents" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
            <h1>Общие настройки</h1>
        </header>
        <div class="settings-items">
            <header class="bb1">
                <div class="wp-body">
                    <el-row :gutter="24" class="pt-0 pb-1">
                        <el-col :span="24" class="pb-5">
                            <p class="title-p">Настройки применяются для документов:</p>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24" class="pt-4">
                        <el-col :span="6" class="pb-3">
                            <check text="Инвойс" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Подтверждение брони" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Аннуляция брони" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Внутренние правила" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Правила заезда" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Отчёты" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Реестр кассы" />
                        </el-col>
                        <el-col :span="6" class="pb-3">
                            <check text="Тарифы и цены" />
                        </el-col>
                    </el-row>
                </div>
            </header>
        </div>
        <div class="wp-body bb1">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-5">
                    <p class="title-p">Слоган компании</p>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-5">
                    <p class="pb-1">Слоган на узбекском языке</p>
                    <el-input class="h-48" placeholder="Введите слоган" />
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-5">
                    <p class="pb-1">Слоган на русском языке</p>
                    <el-input class="h-48" placeholder="Введите слоган" />
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-5">
                    <p class="pb-1">Слоган на английском языке</p>
                    <el-input class="h-48" placeholder="Введите слоган" />
                </el-col>
            </el-row>
        </div>
        <div class="wp-body">
            <el-row :gutter="24" class="pt-0 pb-1">
                <el-col :span="24" class="pb-5">
                    <p class="title-p">Логотип компании</p>
                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-4 pb-4">
                <el-col :span="24" class="pb-3">
                    <p class="df aic c-p"><i class="mr-2"><img src="../../../assets/img/Warning.svg" alt="A"> </i> Максимальный размер файла 5 МБ. Поддерживаются форматы SVG, PNG, JPEG.</p>
                    <div class="df">
                        <button class="logo-add mt-4 ml-2">
                            <img src="../../../assets/img/imgAdd.svg" alt="A">
                            <p class="pt-1">Загрузить фото</p>
                            
                            <input type="file" class="input-img" multiple v-on:change="handleFiles">
                        </button>
                    </div>

                </el-col>
            </el-row>
            <el-row :gutter="24" class="pt-5">
                <el-col :span="12">
                    <button class="float-right default-btn f-size-17 h-48 mw-180" @click="$router.push({name:'documents'})">
                        Отмена
                    </button>
                </el-col>
                <el-col :span="12">
                    <button class="primary-btn f-size-17 h-48 mw-180">
                        Сохранить
                    </button>
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
            langs: ["Русский"],
            search: '',
            login: null,
            password: null,
            garant_edit: false,
            ungarant_edit: false,
            value: '',
            date: null,
            files:null,
            guaranteed_reservation: [{
                id: 1,
                cancellationTime: 32,
                count: 27,
                title: "Visa, MasterCard, Maestro, Карта Мир, Предоплата, Гарантийное письмо, (+3)",
            }, ],
            unguaranteed_reservation: [{
                id: 1,
                time: "12:00",
                endTime: 32,
            }, ],
            options: [1, 2, 3, 4]
        };
    },
    methods:{
        handleFiles(event){
            console.log(event.target.files)
            this.files=event.target.files[0].name

        }
    }
};
</script>

<style lang="scss" scoped>
.role-item {
    background: #fbfdff;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 0.75rem;

    header {
        text-align: center;
        position: relative;
        padding-top: 14px;
        padding-bottom: 16px;

        h1 {
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 20px;
            text-transform: uppercase;
        }

        .actions {
            position: absolute;
            right: 0;
            display: flex;
            padding-right: 24px;
            top: 14px;

            img {
                cursor: pointer;
                transition: all 0.2s ease-out;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    .table {
        width: 100%;
        padding: 0;
        margin: 0;

        .head {
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
            border-bottom: 1px solid #d3d8de;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 18px;
            color: #919eac;
            display: flex;

            section {
                width: 242px;
            }
        }

        .body {
            padding: 12px 24px 14px 24px;
            display: flex;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #091c31;

            section {
                width: 242px;
            }
        }
    }
}

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

.input-img {
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    opacity: 0;
}

.table-el {
    width: 100%;
    padding: 10px;
}

.table-el tr {
    border-bottom: 1px solid #D3D8DE;
}

.table-el tr th {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #919EAC;
    text-align: left;
    padding: 14px 14px;
}

.table-el tr td {
    padding: 14px 14px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #091C31;
}

.el-date-editor {
    width: 100%;
}

.w-25 {
    width: 25%;
}




</style>
