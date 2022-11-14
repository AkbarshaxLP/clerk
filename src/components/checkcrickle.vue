<template>
<div class="check-div">
    <div v-if="a=='disabled'" class="disabled check-div">
        <img v-if="a" src="@/assets/img/WarningRed.svg" alt="MSA" />
    </div>
    <button v-else class="check-box" :class="a ? 'active' : ''">
        <input type="checkbox" v-model="a" @change="handleInput(a)" />
        <img v-if="a" src="@/assets/img/CheckWhite.svg" alt="MSA" />
    </button>
    <p v-on:click="a=!a">{{ text }}</p>
</div>
</template>

<script>
export default {
    props: {
        value: "",
        text: "",
    },
    data() {
        return {
            a: false,
        };
    },

    methods: {
        handleInput(value) {
            this.$emit("input", value);
        },
    },
    mounted() {
        this.a = this.value
    }
};
</script>

<style scoped>
.disabled {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.check-box {
    width: 24px;
    height: 24px;
    border: 1px solid #9FCDFF;
    background: #FBFDFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 7px 20px rgba(9, 28, 49, 0.07));
}

.active {
    background: #007AFF;
}

.check-box input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
}

.check-div {
    display: flex;
    align-items: center;
}

.check-div p {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 133% */
    cursor: pointer;
    display: flex;
    align-items: center;

    /* Font Color */

    color: #091c31;
    margin: 0px 0px 0px 12px;
}
</style>
