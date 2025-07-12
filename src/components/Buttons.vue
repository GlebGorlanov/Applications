<template>
    <div class="buttons">
        <button v-for="(e, i) in 10" @click="set(i, i)" class="text-[7.2vw] active:text-[7vw] rounded-[3vw]">{{ i }}</button>
        <button @click="set('+', '+')" class="text-[8.3vw] active:text-[8vw] rounded-[3vw]">+</button>
        <button @click="set('&#8211;', '-')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw]">&#8212;</button>
        <button @click="set('&#215;', '*')" class="text-[8.3vw] active:text-[8vw] rounded-[3vw]">&#215;</button>
        <button @click="set('&#247;', '/')" class="text-[10vw] active:text-[9.8vw] rounded-[3vw]">&#247;</button>
        <button @click="set('.', '.')" class="font-[inherit] text-[7.5vw] active:text-[7vw] rounded-[3vw]">&#8226;</button>
        <button @click="set('(', '(')" class="text-[8vw] active:text-[7.7vw] rounded-[3vw]">{{ '(' }}</button>
        <button @click="set(')', ')')" class="text-[8vw] active:text-[7.7vw] rounded-[3vw]">{{ ')' }}</button>
        <button @click="set('^', 'p')" class="rounded-[3vw]"><img src="/src/assets/pow.png" class="w-[12.5vw] active:w-[12vw]"></button>
        <button @click="set('%', '%')" class="text-[7.5vw] active:text-[7vw] rounded-[3vw]">%</button>
        <button @click="set('a', 'a')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw]">&#8592;</button>
        <button @click="showVolumeWindow('s', 's')" class="rounded-[3vw]"><img src="/src/assets/sound.svg" class="w-[5.8vw] active:w-[5.5vw]"></button>
        <button @click="showVolumeWindow('f', 'f')" class="rounded-[3vw]"><img src="/src/assets/pen.png" class="w-[11.5vw] active:w-[11vw]"></button>
        <button @click="set('c', 'c')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw]">C</button>
        <button @click="set('&#8730;', 'r')" class="radic font-[inherit] text-[10vw] active:text-[9.7vw] rounded-[3vw]">&#8730;</button>
        <button @click="$emit('get', '=', '=')" class="text-[10vw] active:text-[9.8vw] rounded-[3vw]">=</button>

        <VolumeWindow v-show="flag" @showVolumeWindow="showVolumeWindow" @changeVolume="changeVolume" :volumeWrapWindow="volumeWrapWindow" :iconsInfoWindow="iconsInfoWindow" :windowAuthor="windowAuthor" :windowManual="windowManual"/>
    </div>
</template>

<script>
    import VolumeWindow from './VolumeWindow.vue';

    export default {
        components: {
            VolumeWindow,
        },

        emits: ['get'],

        data() {
            return {
                flag: false,
                volumeWrapWindow: false,
                iconsInfoWindow: false,
                windowManual: false,
                windowAuthor: false,
                volume: 5,
            };
        },

        methods: {
/*----------------------------- Метод вызова и регулирования окна иформации --------------------------------------------*/
            showVolumeWindow(s) {
                this.flag = true;

                switch(s) {
                    case 's':
                        this.volumeWrapWindow = true;
                        this.iconsInfoWindow = false;
                        this.windowManual = false;
                        this.windowAuthor = false;
                        this.sound('sound.mp3', 20);
                        break;
                    case 'f':
                        this.volumeWrapWindow = false;
                        this.iconsInfoWindow = true;
                        this.windowManual = false;
                        this.windowAuthor = false;
                        this.sound('pen.mp3', 20); 
                        break;
                    case 'm':
                        this.windowManual = true;
                        this.iconsInfoWindow = false;
                        this.sound('manual.mp3', 1);
                        break;
                    case 'a':
                        this.windowAuthor = true;
                        this.iconsInfoWindow = false;
                        this.sound('author.mp3', 5);
                        break;
                    case 'b':
                        this.windowManual = false;
                        this.windowAuthor = false;
                        this.iconsInfoWindow = true;
                        this.sound('arrow.mp3', 23);
                        break;
                    default:
                        this.flag = false;
                        this.sound('close.mp3', 20);
                        break;
                };
            },
/*------------------------------- Метод регулировки звука ----------------------------------------------------------*/
            changeVolume(s) {
                this.volume = s;
            },
/*-------------------------------- Метод озвучивания кнопок --------------------------------------------*/
            set(n, m, s) {
                if(n === '=') {
                    this.sound(s, 15);
                } else {
                    this.$emit('get', n, m);

                    if(n === 'a') {
                        this.sound('delete.mp3', 15);
                    } else if(n === 'c') {
                        this.sound('clear.mp3', 20);
                    } else if(n === '.') {
                        this.sound('dot.mp3', 15);
                    } else if(m === '+' || m === '-' || m === '*' || m === '/') {
                        this.sound('operand.mp3', 15);
                    } else if(m === '(' || m === ')') {
                        this.sound('breaket.mp3', 10);
                    } else if(m === 'r') {
                        this.sound('root.mp3', 5);
                    } else if(m === '%') {
                        this.sound('percent.mp3', 50);
                    } else if(m === 'p') {
                        this.sound('power.mp3', 20);
                    } else {
                        this.sound('button.mp3', 25);
                    };
                };
            },
/*--------------------------- Метод проигрывания звука -------------------------------------------------------*/
            sound(a, b) {
                let audio = new Audio();
                audio.src = new URL(`/src/assets/${a}`, import.meta.url).href
                audio.autoplay = true;
                const calculatedVolume = Math.max(0, Math.min(1, this.volume / b));
                audio.volume = calculatedVolume;
            },
        }
    }
</script>

<style scoped>
    .buttons {
        position: relative;
        display: inline-grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        justify-content: center;
        justify-items: center;
        width: 100%;
        aspect-ratio: 1 / 1;
    }

    .buttons > button {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(3px);
        color: rgba(245, 245, 245, 0.9);

        text-shadow:
        -1px -1px #000,
        0 1px 0 #444;
        transition: all 0.0s;

        font-weight: 100;
        font-family: 'DejaVu Sans ExtraLight';
        line-height: 0.5;

        width: 100%;
        aspect-ratio: 1 / 1;

        appearance: auto;
        border: 1px outset buttonborder;
        border-image: initial;
        background-clip: padding-box;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    button:active {
        border-style: inset;
        background-color: rgba(0, 0, 0, 0.55);
        color: white;
    }

    .buttons > .radic {
        font-family: 'Microsoft YaHei UI Light';
    }
</style>
