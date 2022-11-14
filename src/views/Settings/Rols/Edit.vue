<template>
  <div class="p-3 edit">

    <div class="wrapper-0">
      <header class="wp-header" style="padding-bottom: 14px;">
        <router-link to="/settings/rols" class="pr-3"><img src="@/assets/img/Back.png"></router-link><h1>Администраторы</h1>
        <button class="ml-auto mr-6 default-btn size-big"><img class="-ml-3 mr-3" src="@/assets/img/AddGuest.svg" ><span>Добавить</span></button>
        <button class="primary-btn size-big">Сохранить</button>
      </header>
      <div class="wp-edit pt-3 ">
        <div class="body-small-title w-full mb-6">Разрешения</div>

        <!-- 1 -->
        <el-row :gutter="24" class="px-6 mb-6">
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Панель графиков" >
              <el-option value="Панель графиков"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Шахматка">
              <el-option value="Шахматка"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Служба приёма">
              <el-option>
                <el-checkbox 
                  :indeterminate="isIndeterminate" 
                  v-model="checkAll" 
                  @change="handleCheckAllChange"
                >
                  Check all
                </el-checkbox>
              </el-option>
              <el-option>
                <el-checkbox v-model="checked">Бронирование</el-checkbox>
              </el-option>
              <el-option>
                <el-checkbox v-model="checked">Размещение</el-checkbox>
              </el-option>
              <el-option>
                <el-checkbox v-model="checked">Распечатка карточки</el-checkbox>
              </el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Список гостей">
              <el-option value="Список гостей"></el-option>
            </el-select>
          </el-col>
        </el-row>

        <!-- 2 -->
        <el-row :gutter="24" class="px-6 mb-6">
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Финансы">
              <el-option value="Панель графиков"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Статистика и Отчёты">
              <el-option value="Шахматка"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Служба приёма">
              <el-option value="Служба приёма"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Доска номеров">
              <el-option value="Список гостей"></el-option>
            </el-select>
          </el-col>
        </el-row>

         <!-- 3 -->
        <el-row :gutter="24" class="px-6 mb-3">
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="Чат">
              <el-option value="Панель графиков"></el-option>
            </el-select>
          </el-col>
          <el-col :lg="6" :md="8" :sm="12" :xs="24">
            <el-select size="large" class="w-full" placeholder="ТП-Waiter">
              <el-option value="Шахматка"></el-option>
            </el-select>
          </el-col>
        </el-row>

      </div>
    </div>

    <div class="role-item" v-for="item in 3">
      <header>
        <h1>abdumalikova gulchehra abduvorisovna</h1>
        <div class="actions">
          <img class="mr-3" src="@/assets/img/minus.svg">
          <img src="@/assets/img/Edit.svg">
        </div>
      </header>
      <table class="edit-user-list w-full">
        <thead>
          <tr>
            <td>Количество сотрудников</td>
            <td>Дополнительный номер телефона</td>
            <td>E-mail адрес</td>
            <td>Знание языков</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+998971234567</td>
            <td>+998971234567</td>
            <td>agatestemail@testemail.com</td>
            <td>Русский, Английский, Узбекский, Немецкий</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        checked: true,
        checkAll: false,
        isIndeterminate: true,
        options:[
          {value:'1', label:'Все'},
          {value:'2', label:'Бронирование'},
          {value:'3', label:'Бронирование'},
          {value:'4', label:'Бронирование'},
          {value:'5', label:'Бронирование'},
        ]
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? checked : false;
        this.isIndeterminate = false;
      },
    }
  }
</script>

<style type="text/css" lang="scss" scoped="">
.edit {

}
.role-item {
  background: #FBFDFF;
  border: 1px solid #D3D8DE;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 24px;
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
      border-bottom: 1px solid #D3D8DE;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      color: #919EAC;
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
      color: #091C31;
      section {
        width: 242px;
      }
    }
  }
}
</style>