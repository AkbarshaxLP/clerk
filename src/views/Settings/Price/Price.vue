<template>
<div class="p-3">
    <div class="wrapper-0">
        <header class="wp-header pr-0 pl-0 pb-3 fww bb1">
            <div class="df jcsb aic w-full pr-3 pl-3 pb-6">
                <div class="df ">
                    <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png" /></router-link>
                    <h1>Ценовая политика</h1>
                </div>
                <div>
                    <el-button type="primary" v-on:click="$router.push({name:'sett_tariffs'})">Добавить</el-button>
                </div>
           </div>
        </header>
    <div class="sp-wrapper found-table b0 pt-5" style="width:100%;" >
        <el-table class="w-full bgfb" style="width:100%;" :data=" facilities_list.filter((data) => !search || data.name.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="Партнер"><template slot-scope="scope"><b>{{scope.row.name}}</b></template></el-table-column>
                <el-table-column label="Тип партнера" prop="type"> </el-table-column>
                <el-table-column label="Номер договора" prop="sale"></el-table-column>
                <el-table-column label="Срок договора" prop="date"></el-table-column>
            <el-table-column label="Активность" >
                <template >
                    <button class="enable-button">Да</button>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template slot-scope="scope">
                    <div class="actions df jcfe">
                        <span style="display:none;">{{scope.row.active}}</span>

                        <img @click="dialog_add = true" class="mr-3" src="../../../assets/img/editBorder.svg" />
                        <img @click="dialog_add = true" class="mr-3" src="../../../assets/img/deleteBorder.svg" />

                    <div>
                    </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
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
            dialog_add: false,
            activeName: 'first',
            search: "",
            value: '',
            date: '',
            value2: true,
            archive:false,
            unarchive:false,
            period:false,
            mdelete:false,
            dtariffs:false,
            facilities_list: [{
                    id: 1,
                    name: "Основной",
                    fullness:75,
                    type:'Годовой',
                    sale:'Нет',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'expectation'
                },{
                    id: 2,
                    name: "Тариф “Весенний”",
                    fullness:0,
                    type:'Сезонный',
                    sale:'- 20%',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'no'
                },
                {
                    id: 3,
                    name: "Тариф “Весенний”",
                    fullness:100,
                    type:'Сезонный',
                    sale:'Индивидуальная скидка',
                    date: "01/01/2020 - 31/12/2020",
                    active: 'yes'
                },

            ],
            country: ['Tashkent', "Kokand"],
            dic: ["Archa", "Olma"],
        };
    },
    methods: {
        ddactiver(a) {
            var i = 0;
            for (i = 0; i < this.Sortes.length; i++) {
                this.Sortes[i].active = false
            }
            this.Sortes[a].active = true
            this.SortName = this.Sortes[a].name
        },
        modals(command){
            if(command=='1'){ this.$router.push({name:'new_tariffs'})}
            if(command=='2'){ this.archive=true }
            if(command=='3'){ this.period=true  }
            if(command=='4'){this.mdelete=true  }
            if(command=='5'){this.unarchive=true  }
            if(command=='6'){this.dtariffs=true  }

        }
    },
    mounted() {
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

.el-date-editor {
    width: 100%;
}

.facil-button {
    height: 48px;
    width: 180px;
    border: 1px solid #007AFF;
    border-radius: 8px;
    margin-left: 10px;
    color: #007AFF;
    outline: none;
    cursor: pointer;
}

.el-dropdown-link {
    outline: none;
}

.dd-title {
    font-size: 15px;
}

.dd-title i {
    font-size: 12px;
    font-weight: 600;
}

.dd-title:hover {
    color: #091C31;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    background: #409BFF;

}

.bg-primary {
    color: #091C31;
    background: #409BFF !important;
}

.el-switch__core {
    padding: 5px 1px;
    background: #007AFF;
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
.enable-button{
    background: #00C48C;
    border: 1px solid #007AFF;
    box-sizing: border-box;
    border-radius: 20px;
    width: 52px;
    height: 24px;
    color: #FBFDFF;
    outline: none;
}
.disable-button{
    background: rgb(252, 64, 64);
    border: 1px solid #007AFF;
    box-sizing: border-box;
    border-radius: 20px;
    width: 52px;
    height: 24px;
    color: #FBFDFF;
    outline: none;
}
</style>
