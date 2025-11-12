<template>
    <div class="output w-full h-[32%] backdrop-blur-md rounded-[3vw]">
        <div class="wrap w-[95%] h-[90%] [&::-webkit-scrollbar]:w-0.5">
            <template v-for="i in arr">
                <span class="plus leading-[0.7] text-[11.5vw]" v-if="i === '+'">{{ i }}</span>
                <span class="minus leading-[0.7] text-[11.5vw]" v-else-if="i === '&#8211;'">{{ i }}</span>
                <span class="multiply leading-[0.7] text-[11.5vw]" v-else-if="i === '&#215;'">{{ i }}</span>
                <span class="split leading-[0.7] text-[11.5vw]" v-else-if="i === '&#247;'">{{ i }}</span>
                <span class="dot leading-[0.1] text-[16vw]" v-else-if="i === '.'">{{ i }}</span>
                <span class="virgule leading-[0.7] text-[10.5vw]" v-else-if="i === ','">{{ i }}</span>
                <span class="bracket leading-[0.7] text-[11.5vw]" v-else-if="i === '(' || i === ')'">{{ i }}</span>
                <span class="percent leading-[0.7] text-[7vw]" v-else-if="i === '%'">{{ i }}</span>
                <span class="root leading-[0.7] text-[11.5vw]" v-else-if="i === '&#8730;'">{{ i }}</span>
                <span class="power leading-[0.7] text-[11vw]" v-else-if="i === '^'">{{ i }}</span>
                <span class="txt leading-[0.7] text-[11.5vw]" v-else>{{ i }}</span>
            </template>
            <span v-show="zero" class="zero leading-[0.7] text-[11.5vw]">0</span>
            <span v-show="cursor" class="cursor leading-[0.7] text-[4.3vw]" :style="{color: color}">&#10084;</span>
        </div>
        <Result :result="result" :windowResult="windowResult" v-show="windowResult" @getResult="getResult"/>
    </div>
</template>

<script>
    import Result from './Result.vue';

    export default {
        components: {
            Result,
        },

        props: ['arr', 'result', 'windowResult', 'cursor', 'zero'],
        emits: ['getResult'],

        data() {
            return {
                index: -1,
                heart: '&#10084;',
                color: 'rgba(255, 176, 189, 1)',
                time: null,
                txt: 'txt',
            };
        },

        methods: {
            getResult() {
                this.$emit('getResult');
            },
        },

        mounted() {
            this.time = setInterval(() => {
                this.color = this.color === 'rgba(255, 176, 189, 1)'? 'rgba(255, 176, 189, 0)': 'rgba(255, 176, 189, 1)';
            }, 800);
        },
    };
</script>

<style scoped>
    .output {
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 100;
        background-color: rgba(0, 0, 0, 0.8);
        border: 1px groove white;
    }

    .wrap {
        display: inline-block;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
        word-break: break-all;
    }

    .manual::-webkit-scrollbar {
        display: none;
    }

    .zero {
        display: inline-block;
        font-family: inherit;
        color: white;
    }

    .cursor {
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 3px;
    }

    .txt {
        display: inline-block;
        font-family: inherit;
        color: whitesmoke;
    }

    .plus {
        display: inline-block;
        font-family: inherit;
        color: rgb(150, 225, 255);
    }

    .minus {
        display: inline-block;
        font-family: inherit;
        color: yellow;
        margin: 0 0.8vw;
    }

    .multiply {
        display: inline-block;
        font-family: inherit;
        color: orange;
    }

    .split {
        display: inline-block;
        font-family: inherit;
        color: rgb(119, 255, 171);
        margin: 0 0.5vw;
    }

    .dot {
        display: inline-block;
        font-family: inherit;
        color: rgb(255, 253, 142);
    }

    .virgule {
        display: inline-block;
        font-family: 'Malgun Gothic';
        font-weight: 500;
        color: rgb(255, 175, 26);
        margin: 0 0.3vw 0 0;
    }

    .bracket {
        display: inline-block;
        font-family: inherit;
        color:rgb(242, 156, 253);
    }

    .percent {
        position: relative;
        bottom: 2.5%;
        margin: 0 1.5%;

        color:khaki;
        display: inline-block;
        font-family: inherit;
    }

    .root {
        position: relative;
        color:rgb(255, 194, 153);
        display: inline-block;
        font-family: inherit;
    }

    .power {
        position: relative;
        color:gold;
        display: inline-block;
        font-family: inherit;
    }
</style>
