<template>
<div class="progrestwo">
    <div class="progres-icon">
        <img v-if="itemLeft=='100%' && itemRight=='100%'" src="../assets/img/checkgreen.svg" alt="">
        <img v-else src="../assets/img/Exclamation.svg" alt="MSA" />
        

    </div>
    <div class="progres-items">
        <div class="progres-item1">
            <div class="progres-item-conten1" :style="{width:itemLeft ? itemLeft:'0%', background:itemLeft=='100%' && itemRight=='100%' ?'#00C48C':'#007AFF'}"> </div>
        </div>
        <div class="progres-item2">
            <div class="progres-item-conten2" :style="{width:itemRight ? itemRight: '0%', background:itemLeft=='100%' && itemRight=='100%' ?'#00C48C':'#007AFF'}"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        itemLeft: "",
        itemRight: ""
    }
}
</script>

<style scoped>
.progrestwo {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    padding-right: 10px;
    height: 30px;
}

.progres-icon {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;

}

.progres-items {
    width: 100%;
    height: 10px;
    border-radius: 8px;
    background: #51FFCD;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.progres-item1 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
}

.progres-item2 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;

}

.progres-item-conten1 {
    width: 100%;
    height: 100%;
    background: #007AFF;
    border-radius: 8px 0px 0px 8px;

}

.progres-item-conten2 {
    width: 100%;
    height: 100%;
    background: #007AFF;
    border-radius: 0px 8px 8px 0px;

}
</style>
