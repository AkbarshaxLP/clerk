<template>
  <div class="p-3">

    <div class="wrapper-0">
      <header class="wp-header">
        <router-link to="/settings" class="pr-3"><img src="@/assets/img/Back.png"></router-link><h1>Должности и сотрудники</h1>
      </header>
    </div>

    <div class="role-item" v-for="item in rols_list" :key="item">
      <header>
        <h1>{{ item.name }}</h1>
        <div class="actions">
          <img class="mr-3" src="@/assets/img/Edit.svg">
          <img src="@/assets/img/AddGuest.svg">
        </div>
      </header>
      <ul class="table">
        <li class="head">
          <section>Количество сотрудников</section>
          <div class="flex-1">Разрешения</div>
        </li>
        <li class="body">
          <section>{{ item.count }}</section>
          <div class="flex-1">{{ item.title }}</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        rols_list: [{
          id: 1,
          name: 'Администраторы',
          count: 8,
          title: 'Шахматка, Служба приёма, Список гостей, Фолио, Доска номеров, Чат, ТП-Waiter'
        },
        {
          id: 2,
          name: 'Менеджеры',
          count: 2,
          title: 'Панель графиков, Шахматка, Служба приёма, Список гостей, Финансы, Статистика и Отчёты, Фолио, Доска номеров, Чат, ТП-Waiter'
        },
        {
          id: 3,
          name: 'горничные',
          count: 6,
          title: 'Доска номеров, Чат'
        },
        {
          id: 4,
          name: 'официанты',
          count: 10,
          title: 'Чат, ТП-Waiter'
        },
        {
          id: 5,
          name: 'заведующие залом',
          count: 2,
          title: 'Доска номеров, Чат, ТП-Waiter'
        },
        {
          id: 6,
          name: 'повара',
          count: 5,
          title: 'Чат, ТП-Waiter'
        }]
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped="">
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