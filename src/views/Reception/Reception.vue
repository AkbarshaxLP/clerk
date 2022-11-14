<template>
<div class="p-3">
    <div class="wrapper-0 ">
        <header class="wp-header pr-0 pl-0 pb-3 fww bb0">
            <div class="top-buttons">
                <el-button v-if="activeName=='1' || activeName=='2'" class="top-button" type="primary">Разместить</el-button>
                <el-button v-if="activeName=='3'" class="top-button" type="primary">Забронировать</el-button>
            </div>
            <div class="w-full ">
                <el-tabs v-model="activeName" class="w-full">
                    <el-tab-pane label="Проживающие" name="1" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Export.svg" alt="AAA">
                                        <span class="ml-3">Экспорт</span>
                                    </button>
                                    <button class="facil-button df aic jcc fw600" @click="printout = true">
                                        <img src="../../assets/img/Print09.svg" alt="AAA">
                                        <span class="ml-3">Распечатать</span>
                                    </button>
                                    <button class="facil-button df aic jcc fw600" v-on:click="dialog_add  = true">
                                        <img src="../../assets/img/Check-Out.svg" alt="AAA">
                                        <span class="ml-3">выселить</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Заезжающие" name="2" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Export.svg" alt="AAA">
                                        <span class="ml-3">Экспорт</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Выехавшие" name="3" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                            <el-col :md="14" class="pt-3">
                                <div class="w-full df aic jcfe ">
                                    <button class="facil-button df aic jcc fw600">
                                        <img src="../../assets/img/Export.svg" alt="AAA">
                                        <span class="ml-3">Экспорт</span>
                                    </button>
                                    <button class="facil-button df aic jcc fw600" @click="printout = true">
                                        <img src="../../assets/img/Print09.svg" alt="AAA">
                                        <span class="ml-3">Распечатать</span>
                                    </button>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                     <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Период: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="Брони" name="4" class="pl-6 pr-6">
                        <el-row :gutter="24" class="pt-3">
                            <el-col :md="10" class="pt-3">
                                <el-input class="h-48 w-full" placeholder="Введите название услуги" prefix-icon="el-icon-search" v-model="search"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24" class="pt-6">
                            <el-col :md="24">
                                <div class="df w-full aic">
                                    <el-dropdown trigger="hover">
                                        <span class="el-dropdown-link">
                                            Вид: <b>{{viewName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Wievs" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="viewsActiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Сортировка: <b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                     <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Показать:<b>{{SortName}}</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                    <el-dropdown trigger="hover" class="ml-10">
                                        <span class="el-dropdown-link">
                                            Год:<b>2021</b><i class="el-icon-caret-bottom el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item class="pl-1 dd-title" v-for="(item, i) in Sortes" :key="i" :class="item.active?'bg-primary':''">
                                                <p v-on:click="ddactiver(i)"><i :class="item.active? 'op1':'op0'" class="el-icon-check el-icon--right"></i>{{item.name}}</p>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </header>
    </div>
    <Resident v-if="activeName=='1'" :view="propSorts.view"  />
    <CheckedIn v-if="activeName=='2'" :view="propSorts.view"  />
    <CheckedOut v-if="activeName=='3'" :view="propSorts.view"  />
    <Bookings v-if="activeName=='4'" :view="propSorts.view"  />

    <!-- Print-->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="printout" width="468px" center>
        <div>
            <header>
                <h1>Подтверждение действия</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac">Количество выбранных карточек: 2</p>
                        <p class="pb-3 tac c09">Распечатать?</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="printout= false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Распечатать
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Check Print -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="printcheck" width="468px" center>
        <div>
            <header>
                <h1>Подтверждение действия</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac f13">Количество выбранных карточек: 2</p>
                        <p class="pb-3 tac c09">Распечатать?</p>
                        <div class="df jcc">
                            <check text="Распечатать листки проживания" className="f13" />
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="printcheck = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Распечатать
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- Relocate -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="relocate" width="60%" center>
        <div>
            <header>
                <h1>Подтверждение действия</h1>
            </header>
            <div class="wp-body">
                <el-row :gutter="24" class="pt-1">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac f13">Гость: THOMAS FRANKLIN MCDONALD</p>
                        <p class="pb-3 tac c09 f13">Из комнаты №208</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box">
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="12" class="box">
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac c09">Из комнаты №208</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="relocate = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Переселить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- regcheckin E mehmon-->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="RegCheckIn1" width="80%" center>
        <div>
            <header>
                <h1>Регистрация гостя</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основная информация</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите фамилию" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите имя" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите отчество" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Гражданство</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите страну">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата рождения</p>
                        <el-date-picker type="date" placeholder="Введите дату рождения"></el-date-picker>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Пол</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите пол">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о документе</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип документа</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Паспорт">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Серия документа</p>
                        <el-input class="h-48 w-full" placeholder="Введите серию документа" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер документа</p>
                        <el-input class="h-48 w-full" placeholder="Введите номер документа" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата выдачи документа</p>
                        <el-date-picker type="date" placeholder="Выберите дату выдачи документа"></el-date-picker>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Орган выдачи документа</p>
                        <el-input class="h-48 w-full" placeholder="Кем выдан документ?" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Страна рождения</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите страну">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Виза и другие данные</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Цель визита</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите цель визита">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер КПП</p>
                        <el-input class="h-48 w-full" placeholder="Введите номер КПП" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата заезда КПП</p>
                        <el-date-picker type="date" placeholder="Выберите дату заезда КПП"></el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип визы</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип визы">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер визы</p>
                        <el-input class="h-48 w-full" placeholder="Введите номер визы" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Орган выдачи визы</p>
                        <el-input class="h-48 w-full" placeholder="Кем выдана виза?" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Дата выдачи визы</p>
                        <el-date-picker type="date" placeholder="Выберите дату выдачи визы"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Дата окончания визы</p>
                        <el-date-picker type="date" placeholder="Выберите дату окончания визы"></el-date-picker>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Заезд и выезд</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата заезда</p>
                                <el-date-picker disabled vlue="27/03/2021" type="date" placeholder="Выберите дату"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время заезда</p>
                                <el-time-select disabled value="16:51 : 18" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата выезда</p>
                                <el-date-picker type="date" placeholder="Выберите дату выезда"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время выезда</p>
                                <el-time-select :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время выезда"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о комнате</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Категория номера</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите категорию номера">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите номер">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип гостя</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип гостя">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Дети</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите фамилию ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите имя ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите отчество ребёнка" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Дата рождения ребёнка</p>
                        <el-date-picker type="date" placeholder="Выберите дату пождения ребёнка"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Пол ребёнка</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Укажите пол ребёнка">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="24" class="box pt-3">
                        <div class="w-full df jcsb aic">
                            <div class="df aic">
                                <el-switch active-icon-class inactive-icon-class> </el-switch>
                                <p class="f13 wf700 c09 ml-3">Регистрировать в системе E-mehmon</p>
                            </div>
                            <button class="simple-button df aic">
                                <img src="../../assets/img/PlusBlack.svg" alt="">
                                <p class="title-p wf600 c09 ml-3">Добавить детей</p>
                            </button>
                        </div>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="RegCheckI1 = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Переселить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
    <!-- regcheckin -->
    <el-dialog class="std-dialog" :show-close="false" :visible.sync="RegCheckIn2" width="80%" center>
        <div>
            <header>
                <h1>Регистрация гостя</h1>
            </header>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Основная информация</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите фамилию" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите имя" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество</p>
                        <el-input class="h-48 w-full" @focus="outerVisible = true" placeholder="Введите отчество" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Гражданство</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите страну">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Дата рождения</p>
                        <el-date-picker type="date" placeholder="Введите дату рождения"></el-date-picker>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Пол</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите пол">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Заезд и выезд</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата заезда</p>
                                <el-date-picker disabled vlue="27/03/2021" type="date" placeholder="Выберите дату"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время заезда</p>
                                <el-time-select disabled value="16:51 : 18" :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <div class="w-full  df aic">
                            <div class="w-70">
                                <p class="pb-1">Дата выезда</p>
                                <el-date-picker type="date" placeholder="Выберите дату выезда"></el-date-picker>
                            </div>
                            <div class="w-30 pl-2">
                                <p class="pb-1">Время выезда</p>
                                <el-time-select :picker-options="{start: '08:30', step: '00:15', end: '18:00' }" placeholder="Время выезда"></el-time-select>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body bb1 pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Информация о комнате</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Категория номера</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите категорию номера">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Номер</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите номер">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Тип гостя</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Выберите тип гостя">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div class="wp-body pt-12">
                <el-row :gutter="24" class="pt-0">
                    <el-col :md="24" class="box">
                        <p class="pb-3 tac title-p">Дети</p>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Фамилия ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите фамилию ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Имя ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите имя ребёнка" />
                    </el-col>
                    <el-col :md="8" class="box pt-3">
                        <p class="pb-1">Отчество ребёнка</p>
                        <el-input class="h-48 w-full" placeholder="Введите отчество ребёнка" />
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Дата рождения ребёнка</p>
                        <el-date-picker type="date" placeholder="Выберите дату пождения ребёнка"></el-date-picker>
                    </el-col>
                    <el-col :md="12" class="box pt-3">
                        <p class="pb-1">Пол ребёнка</p>
                        <el-select class="h-48 w-full sel-icon" placeholder="Укажите пол ребёнка">
                            <el-option :label="item" v-for="item in dic" :key="item" :value="item" />
                        </el-select>
                    </el-col>
                </el-row>
                <el-row :gutter="24" class="pt-3">
                    <el-col :md="24" class="box pt-3">
                        <div class="w-full df jcsb aic">
                            <div class="df aic">
                                <el-switch active-icon-class inactive-icon-class> </el-switch>
                                <p class="f13 wf700 c919 ml-3">Регистрировать в системе E-mehmon</p>
                            </div>
                            <button class="simple-button df aic">
                                <img src="../../assets/img/PlusUser.svg" alt="">
                                <p class="title-p wf600 cp ml-3">Добавить</p>
                            </button>
                        </div>
                    </el-col>

                </el-row>
                <el-row :gutter="24" class="pt-6">
                    <el-col :span="12">
                        <button class="float-right default-btn f-size-17 h-48 mw-180" @click="RegCheckIn2 = false">
                            Отмена
                        </button>
                    </el-col>
                    <el-col :span="12">
                        <button class="primary-btn f-size-17 h-48 mw-180">
                            Разместить
                        </button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    required
} from 'vuelidate/lib/validators'
import Resident from './components/Resident'
import CheckedIn from './components/CheckedIn'
import CheckedOut from './components/CheckedOut'
import Bookings from './components/Bookings'
export default {
    components: {
        Resident,
        CheckedIn,
        CheckedOut,
        Bookings
    },
    data() {
        return {
            propSorts: {
                view: 'category',
                format: '',
            },
            search:'',
            printout: false,
            printcheck: false,
            dialog_service: false,
            relocate: false,
            RegCheckIn1: false,
            RegCheckIn2: false,
            dialog_add: false,
            activeName: '1',
            viewName: 'Карточки',
            Wievs: [{
                    name: 'Карточки',
                    active: true,
                    value: 'category'
                },
                {
                    name: 'Список',
                    active: false,
                    value: 'list'
                },

            ],
            dic: ['AA', "AA"],
            Sortes: [{
                    name: 'Сортировка по названию A-Z',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по названию Z-A',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по цене 0-9',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по цене 9-0',
                    active: false,
                    value: 'A-Z'
                },
                {
                    name: 'Сортировка по доступности',
                    active: true,
                    value: 'A-Z'
                },
            ],
            SortName: 'Сортировка по доступности',
        };
    },
    validations: {
        facalities: {
            category: {
                required
            },
            name_ser: {
                required
            },
            measure: {
                required
            },
            room_category: {
                required
            },
            cost: {
                required
            },
        }
    },
    methods: {
        ddactiver(a) {
            var i = 0;
            for (i = 0; i < this.Sortes.length; i++) {
                this.Sortes[i].active = false
            }
            this.Sortes[a].active = true
            this.SortName = this.Sortes[a].name
            this.propSorts.format = this.Sortes[a].value
        },
        viewsActiver(a) {
            var i = 0;
            for (i = 0; i < this.Wievs.length; i++) {
                this.Wievs[i].active = false
            }
            this.Wievs[a].active = true
            this.viewName = this.Wievs[a].name
            this.propSorts.view = this.Wievs[a].value
        },

        pogiActiver(a) {
            if (a != -1 && a != -2) {
                this.pogiactive = a
            }
            if (a == -1) {
                if (this.pogiactive < this.poginations.length - 1) {
                    this.pogiactive += 1
                }
            }
            if (a == -2) {
                if (this.pogiactive > 0) {
                    this.pogiactive -= 1
                }
            }
        },
        CreateServices() {
            console.log('submit!')
            this.$v.facalities.$touch()
            if (this.$v.facalities.$invalid) {
                console.log("Eror")
            } else {
                console.log("AAA")
            }
        }
    },
    mounted() {
    }
};
</script>

<style lang="scss" scoped>
.top-buttons {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
}

.top-button {
    position: absolute;
    top: 5px;
    right: 24px;
    padding: 14px 40px;
    border-radius: 8px;
}

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
</style>
