<template>
<div id="app">
    <div class="flex w-full" v-if="this.$router.currentRoute.path=='/login'">
        <router-view />
    </div>
    <div class="flex" v-else>
        <AppAside />
        <div class="flex-auto bg-gray-100">
            <AppNavbar />
            <router-view />
        </div>
    </div>
</div>
</template>

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/0b51833ff62e4af8acb5fd3e2bf59e97?family=SF+Pro+Display);

@font-face {
    font-family: Digital-7 Mono;
    src: url("./assets/fonts/digital-7__mono_.ttf");
}

* {
    font-family: SF Pro Display;
    box-sizing: border-box;
}

body {
    margin: 0;
}

.default-btn {
    outline: none !important;
    border: 1px solid #007aff;
    border-radius: 8px;
    background-color: transparent;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    padding: 11px 14px;
    height: 40px;
    color: #007aff;
    transition: all 0.2s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &.size-big {
        height: 48px;
        font-weight: 600;
        font-size: 17px;
        line-height: 22px;
        min-width: 180px;
    }

    &:active {
        opacity: 0.6;
    }
}

.h-48 {
    height: 48px !important;
}

.w-48 {
    width: 48px !important;
}

.mw-180 {
    min-width: 180px !important;
}

.simple-button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none !important;
    padding: 1px;
}

.simple-p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
}

.simple-p2 {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
}

.min-p {
    font-family: SF Pro Display;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 13px !important;
    line-height: 20px !important;
    color: #091C31 !important;
}

.primary-btn {
    background: #007aff;
    border-radius: 8px;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #fbfdff;

    &.size-big {
        min-width: 180px;
        height: 48px;
    }
}

.f-size-17 {
    font-size: 17px !important;
}

.pr {
    position: relative !important;
}

.body-small-title {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600 !important;
    font-size: 17px;
    line-height: 20px;
    justify-content: center;
    display: flex;
    color: #919eac;
}

.title15 {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500 !important;
    font-size: 15px;
    line-height: 20px;
    color: #919EAC;
}

.wrapper {
    margin: 0.75rem;
    padding: 0.75rem;
    background: #fbfdff;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    border-radius: 8px;
}

.wrapper-0 {
    margin-top: 2px;
    margin-bottom: 0.75rem;
    padding: 0.75rem 0;
    background: #fbfdff;
    border: 1px solid #d3d8de;
    box-sizing: border-box;
    border-radius: 8px;
}

.wp-header {
    display: flex;
    padding: 4px 1rem 40px 1rem;
    border-bottom: 1px solid #d3d8de;
    align-items: flex-start;

    a {
        cursor: pointer;
    }

    h1 {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #919eac;
    }

    a {
        max-height: 20px;
    }
}

.wp-body {
    padding: 1.5rem;

    p {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #919eac;
    }
}

.h-fit {
    height: calc(100% - 88px);
}

.el-input__inner,
.el-input {
    min-height: 48px;
    height: 100% !important;
    border-radius: 8px !important;
}

.el-input--large {
    &.el-input {
        font-size: 15px;
    }

    .el-input__inner {
        line-height: 48px;
        height: 48px;
    }
}

.select-plus .el-icon-arrow-up:before {
    content: "\e6d9";
}

.el-dialog {
    overflow: hidden;
}

.std-dialog .el-dialog__body {
    padding: 0 !important;
}

.edit-user-list {
    thead {
        td {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 18px;
            color: #919eac;
            padding-bottom: 0.75rem;
            border-bottom: 1px solid #d3d8de;
            padding-left: 1.5rem;
        }
    }

    tbody {
        td {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
            color: #091c31;
            padding-left: 1.5rem;
            padding-top: 0.75rem;
            padding-bottom: 14px;
        }
    }
}

.found-table {

    .el-table td,
    .el-table th {
        padding: 1rem 1.5rem;
        border-collapse: collapse;
    }

    .el-table {
        border: 1px solid #d3d8de;
        border-radius: 8px;
    }
}

// dialog
.std-dialog {
    &.el-dialog__wrapper {
        background: rgba(9, 28, 49, 0.54);
        backdrop-filter: blur(6px);
    }

    .el-dialog__header {
        padding: 0;
    }

    .el-dialog__body {
        padding: 0;
    }

    header {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 20px;
        text-align: center;
        color: #091c31;
        padding: 1.5rem;
        border-bottom: 1px solid #d3d8de;
    }

    .dialog-body {
        padding: 1.5rem;
    }

    .el-dialog {
        border-radius: 8px;
        border: 1px solid #d3d8de;
        max-width: 1356px;
        min-width: 300px;
    }
}

.search-items {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
}

.serach-item {
    display: flex;
    align-items: center;
    margin: 0px 12px;
}

.serach-item button {
    width: 24px;
    height: 24px;
    background: #fbfdff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none !important;
}

.minus-button {
    width: 24px;
    height: 24px;
    background: #fbfdff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none !important;
}

.simmple-p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
}

.serach-item p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    margin-left: 12px;
    color: #091c31;
}

.df {
    display: flex;
}

.jcsb {
    justify-content: space-between;
}

.jcc {
    justify-content: center;
}

.fdrr {
    flex-direction: row-reverse;
}

.aic {
    align-items: center;
}

.fww {
    flex-wrap: wrap;
}

.aife {
    align-items: flex-end !important;
}

.jcfe {
    justify-content: flex-end;
}

.fdc {
    flex-direction: column;
}

.bb1 {
    border-bottom: 1px solid #d3d8de;
}

.bt1 {
    border-top: 1px solid #d3d8de;
}

.brl {
    border-left: 1px solid #d3d8de;
    border-right: 1px solid #d3d8de;
}

.w-70 {
    width: 70% !important;

}

.w-30 {
    width: 30% !important;
}

.title-h {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 20px;
    color: #08162B;
}

.plus-icon .el-input .el-icon-arrow-up::before {
    content: '\e6d9' !important;
}

.title-p {
    font-style: normal;
    font-weight: 600 !important;
    font-size: 17px !important;
    line-height: 20px;
    text-align: center;
}

.tal {
    text-align: left !important;
}

.tac {
    text-align: center;
}

.bb0 {
    border-bottom: none;
}

.c00grren {
    color: #00C48C !important;
}

.op0 {
    opacity: 0;
}

.op1 {
    opacity: 1;
}

.el-tabs__nav-scroll {
    padding: 0rem 1.5rem !important;
}

.el-tabs__item {
    padding: 0px 15px 10px 0px !important;
    font-size: 16px !important;

}

.el-tabs__active-bar {
    height: 4px !important;
    background: #007AFF !important;
    border-radius: 4px 4px 0px 0px !important;

}

.el-switch {
    height: 28px !important;
}

.el-switch .el-switch__core {
    width: 48px !important;
    height: 28px !important;
    overflow: hidden;
    box-shadow: 0px 7px 20px rgba(9, 28, 49, 0.07);
    border-radius: 16px !important;
    border: 1px solid #FBFDFF;
    background: #FBFDFF !important;

}

.is-checked .el-switch__core {
    border: 1px solid #D3D8DE !important;
}

.el-switch__core:after {
    width: 24px !important;
    height: 24px !important;
    background: #E9ECEE !important;
}

.el-switch.is-checked .el-switch__core::after {
    margin-left: -26px !important;
    background: linear-gradient(225deg, #007AFF 0%, #0051AA 100%) !important;

}

.bgfb {
    background: #FBFDFF !important;
}

.accardion .el-collapse-item__header {
    display: flex !important;
    justify-content: center !important;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #091C31;
    background: #FBFDFF !important;

}

.bgfb .el-collapse-item__wrap {
    background: #FBFDFF !important;

}

.accardion .el-collapse-item__arrow {
    margin: 0 0 0 8px !important;

}

.accardion .el-icon-arrow-right:before {
    content: "\e790";
}

.accardion-icon .el-icon-arrow-right:before {
    content: "\e790";
}

.accardion .el-collapse-item__arrow.is-active {
    transform: rotate(-180deg) !important;
}

.bgfb th {
    background: #FBFDFF !important;
}

.bgfb td {
    background: #FBFDFF !important;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #F5F7FA !important;
}

.pogination-button {
    width: 8px;
    height: 8px;
    background: #A7B1BD;
    border-radius: 50%;
    outline: none;
    padding: 0;
    margin: 0px 8px;
    outline: none;

}

.pogination-button:focus {
    outline: none;
}

.pogi-active {
    background: #007AFF;
    width: 10px;
    height: 10px;
}

.box {
    filter: drop-shadow(0px 7px 20px rgba(9, 28, 49, 0.07));
}

.el-dropdown-link {
    cursor: pointer;
}

.el-table .cell {
    overflow: visible !important;
}

.el-table {
    overflow-x: visible !important;
}

.m0 {
    margin: 0 !important;
}

.p0 {
    padding: 0px !important;
}

.c09 {
    color: #091C31 !important;
}

.c919 {
    color: #919EAC !important;
}

.fwn {
    font-weight: normal !important;
}

.b0 .el-table {
    border: none !important;
}

.b0 {
    border: none !important;
}

.h-76 {
    height: 76px;
}

.h-100 {
    height: 100%;
}

.curpo {
    cursor: pointer !important;
}

.cr {
    color: #FF003A !important;
}

.cp {
    color: #007AFF !important;
}

.f17 {
    font-size: 17px !important;
}

.fw600 {
    font-weight: 600 !important;
}

.fw600 .el-input__inner {
    font-weight: 600 !important;
}

.fw500 {
    font-weight: 500 !important;
}

.fw400 {
    font-weight: 400 !important;
}

.wf700 {
    font-weight: 700 !important;
}

.pt-12 {
    padding-top: 12px !important;
}

.error-command input:first-child {
    border: 1px solid red !important;
}

.error-command select {
    border: 1px solid red !important;
}

.el-select .el-input .el-select__caret {
    color: #091C31 !important;
}

.error-command .el-select .el-input .el-select__caret {
    color: red !important;
}

.sel-icon .el-icon-arrow-up:before {
    content: "\e78f" !important;
}

.f24 .el-input__icon {
    font-size: 20px !important;
}

.f13 {
    font-size: 13px !important;
}

.ofh {
    overflow: hidden !important;
}

.no-pan .apexcharts-pan-icon {
    display: none !important;
}

.font-upper {
    text-transform: uppercase !important;
}

.w100 {
    width: 100% !important;
}

.bge0e {
    background: #E9ECEE !important;
}

.bge0e input {
    background: #E9ECEE !important;
}

.bge0e select {
    background: #E9ECEE !important;
}

.upper {
    text-transform: uppercase !important;
}

.cred {
    color: #FF003A !important;
}

.cgreen {
    color: #00C48C !important;
}

.cyellow {
    color: #FFD600 !important;
}

.accardion-header-text .el-collapse-item__header {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #091C31;
}

.accardion-head-padding .el-collapse-item__header {
    padding: 0px 24px !important;
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

.g-gantt-bar-label span {
    position: absolute !important;
    bottom: 2px !important;
    left: 5px !important;
    font-family: SF Pro Display !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 13px !important;
    color: #08162B !important;

}

.g-gantt-bar {
    height: 4px !important;
    overflow: visible !important;
    top: auto !important;
    bottom: 2px !important;
    cursor: pointer;

}

.legend-right .apexcharts-legend {
    display: flex !important;
    justify-content: center !important;
}

.legend-right .apexcharts-legend-series {
    margin-top: 10px !important;
}
</style>
