<template>
    <div class="buttons w-full">
        <button v-for="(e, i) in 10" @click="set(i, i)" class="text-[7.2vw] active:text-[7vw] rounded-[3vw] sm:text-[6.3vw] sm:active:text-[6vw] sm:rounded-[2.5vw] md:text-[5.5vw] md:active:text-[4.7vw] md:rounded-[2vw] lg:text-[4.6vw] lg:active:text-[4.3vw] lg:rounded-[1.5vw] xl:text-[2.2vw] xl:active:text-[2vw] xl:rounded-[1vw] 2xl:text-[3.5vw] 2xl:active:text-[3.2vw] 2xl:rounded-[1.5vw]">{{ i }}</button>
        <button @click="set('+', '+')" class="text-[8.3vw] active:text-[8vw] rounded-[3vw] sm:text-[8vw] sm:active:text-[7.8vw] sm:rounded-[2.5vw] md:text-[6.8vw] md:active:text-[6.6vw] md:rounded-[2vw] lg:text-[6vw] lg:active:text-[5.8vw] lg:rounded-[1.5vw] xl:text-[2.8vw] xl:active:text-[2.6vw] xl:rounded-[1vw] 2xl:text-[4vw] 2xl:active:text-[3.8vw] 2xl:rounded-[1.5vw]">+</button>
        <button @click="set('&#8211;', '-')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw] sm:text-[7.5vw] sm:active:text-[7.3vw] sm:rounded-[2.5vw] md:text-[6.6vw] md:active:text-[6.4vw] md:rounded-[2vw] lg:text-[5.8vw] lg:active:text-[5.6vw] lg:rounded-[1.5vw] xl:text-[2.8vw] xl:active:text-[2.6vw] xl:rounded-[1vw] 2xl:text-[3.8vw] 2xl:active:text-[3.5vw] 2xl:rounded-[1.5vw]">&#8212;</button>
        <button @click="set('&#215;', '*')" class="text-[8.3vw] active:text-[8vw] rounded-[3vw] sm:text-[7vw] sm:active:text-[6.8vw] sm:rounded-[2.5vw] md:text-[6.8vw] md:active:text-[6.6vw] md:rounded-[2vw] lg:text-[6vw] lg:active:text-[5.8vw] lg:rounded-[1.5vw] xl:text-[2.8vw] xl:active:text-[2.6vw] xl:rounded-[1vw] 2xl:text-[4.3vw] 2xl:active:text-[4vw] 2xl:rounded-[1.5vw]">&#215;</button>
        <button @click="set('&#247;', '/')" class="text-[10vw] active:text-[9.8vw] rounded-[3vw] sm:text-[9.2vw] sm:active:text-[9vw] sm:rounded-[2.5vw] md:text-[7.8vw] md:active:text-[7.6vw] md:rounded-[2vw] lg:text-[7vw] lg:active:text-[6.8vw] lg:rounded-[1.5vw] xl:text-[3.3vw] xl:active:text-[3vw] xl:rounded-[1vw] 2xl:text-[4.8vw] 2xl:active:text-[4.5vw] 2xl:rounded-[1.5vw]">&#247;</button>
        <button @click="set('.', '.')" class="font-[inherit] text-[7.5vw] active:text-[7vw] rounded-[3vw] sm:text-[7.3vw] sm:active:text-[6.8vw] sm:rounded-[2.5vw] md:text-[6.5vw] md:active:text-[6.2vw] md:rounded-[2vw] lg:text-[5.6vw] lg:active:text-[5.3vw] lg:rounded-[1.5vw] xl:text-[2.4vw] xl:active:text-[2.3vw] xl:rounded-[1vw] 2xl:text-[3.8vw] 2xl:active:text-[3.7vw] 2xl:rounded-[1.5vw]">&#8226;</button>
        <button @click="set('(', '(')" class="text-[8vw] active:text-[7.7vw] rounded-[3vw] sm:text-[6.5vw] sm:active:text-[6.3vw] sm:rounded-[2.5vw] md:text-[6.5vw] md:active:text-[6.3vw] md:rounded-[2vw] lg:text-[5vw] lg:active:text-[4.8vw] lg:rounded-[1.5vw] xl:text-[2.5vw] xl:active:text-[2.3vw] xl:rounded-[1vw] 2xl:text-[3.8vw] 2xl:active:text-[3.5vw] 2xl:rounded-[1.5vw]">{{ '(' }}</button>
        <button @click="set(')', ')')" class="text-[8vw] active:text-[7.7vw] rounded-[3vw] sm:text-[6.5vw] sm:active:text-[6.3vw] sm:rounded-[2.5vw] md:text-[6.5vw] md:active:text-[6.3vw] md:rounded-[2vw] lg:text-[5vw] lg:active:text-[4.8vw] lg:rounded-[1.5vw] xl:text-[2.5vw] xl:active:text-[2.3vw] xl:rounded-[1vw] 2xl:text-[3.8vw] 2xl:active:text-[3.5vw] 2xl:rounded-[1.5vw]">{{ ')' }}</button>
        <button @click="set('^', 'p')" class="rounded-[3vw] sm:rounded-[2.5vw] md:rounded-[2vw] lg:rounded-[1.5vw] xl:rounded-[1vw] 2xl:rounded-[1.5vw]"><img src="/src/assets/pow.png" class="w-[12.5vw] active:w-[12vw] sm:w-[11.8vw] sm:active:w-[11.3vw] md:w-[10.5vw] md:active:w-[10.2vw] lg:w-[9vw] lg:active:w-[8.8vw] xl:w-[4vw] xl:active:w-[3.5vw] 2xl:w-[6.3vw] 2xl:active:w-[6vw]"></button>
        <button @click="set('%', '%')" class="text-[7.5vw] active:text-[7vw] rounded-[3vw] sm:text-[6.5vw] sm:active:text-[6.3vw] sm:rounded-[2.5vw] md:text-[5.8vw] md:active:text-[5.6vw] md:rounded-[2vw] lg:text-[5vw] lg:active:text-[4.8vw] lg:rounded-[1.5vw] xl:text-[2.2vw] xl:active:text-[2vw] xl:rounded-[1vw] 2xl:text-[3.5vw] 2xl:active:text-[3.2vw] 2xl:rounded-[1.5vw]">%</button>
        <button @click="set('a', 'a')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw] sm:text-[7.2vw] sm:active:text-[7vw] sm:rounded-[2.5vw] md:text-[6.5vw] md:active:text-[6.3vw] md:rounded-[2vw] lg:text-[5.6vw] lg:active:text-[5.4vw] lg:rounded-[1.5vw] xl:text-[2.5vw] xl:active:text-[2.3vw] xl:rounded-[1vw] 2xl:text-[3.8vw] 2xl:active:text-[3.5vw] 2xl:rounded-[1.5vw]">&#8592;</button>
        <button @click="showVolumeWindow('s', 's')" class="rounded-[3vw] sm:rounded-[2.5vw] md:rounded-[2vw] lg:rounded-[1.5vw] xl:rounded-[1vw] 2xl:rounded-[1.5vw]"><img src="/src/assets/sound.svg" class="w-[5.8vw] active:w-[5.5vw] sm:w-[5.3vw] sm:active:w-[5vw] md:w-[4.5vw] md:active:w-[4.3vw] lg:w-[4vw] lg:active:w-[3.7vw] xl:w-[1.8vw] xl:active:w-[1.6vw] 2xl:w-[2.8vw] 2xl:active:w-[2.5vw]"></button>
        <button @click="showVolumeWindow('f', 'f')" class="rounded-[3vw] sm:rounded-[2.5vw] md:rounded-[2vw] lg:rounded-[1.5vw] xl:rounded-[1vw] 2xl:rounded-[1.5vw]"><img src="/src/assets/pen.png" class="w-[11.5vw] active:w-[11vw] sm:w-[10vw] sm:active:w-[9.7vw] md:w-[9vw] md:active:w-[8.8vw] lg:w-[8vw] lg:active:w-[7.8vw] xl:w-[3.6vw] xl:active:w-[3.4vw] 2xl:w-[5.8vw] 2xl:active:w-[5.5vw]"></button>
        <button @click="set('c', 'c')" class="text-[8vw] active:text-[7.8vw] rounded-[3vw] sm:text-[7vw] sm:active:text-[6.8vw] sm:rounded-[2.5vw] md:text-[6.5vw] md:active:text-[6.3vw] md:rounded-[2vw] lg:text-[5.6vw] lg:active:text-[5.4vw] lg:rounded-[1.5vw] xl:text-[2.6vw] xl:active:text-[2.4vw] xl:rounded-[1vw] 2xl:text-[4vw] 2xl:active:text-[3.7vw] 2xl:rounded-[1.5vw]">C</button>
        <button @click="set('&#8730;', 'r')" class="radic font-[inherit] text-[10vw] active:text-[9.7vw] rounded-[3vw] sm:text-[8.5vw] sm:active:text-[8.2vw] sm:rounded-[2.5vw] md:text-[7.5vw] md:active:text-[7.2vw] md:rounded-[2vw] lg:text-[6.5vw] lg:active:text-[6.3vw] lg:rounded-[1.5vw] xl:text-[2.8vw] xl:active:text-[2.6vw] xl:rounded-[1vw] 2xl:text-[4.8vw] 2xl:active:text-[4.5vw] 2xl:rounded-[1.5vw]">&#8730;</button>
        <button @click="$emit('get', '=', '=')" class="text-[10vw] active:text-[9.8vw] rounded-[3vw] sm:text-[9vw] sm:active:text-[8.9vw] sm:rounded-[2.5vw] md:text-[7.8vw] md:active:text-[7.5vw] md:rounded-[2vw] lg:text-[7vw] lg:active:text-[6.8vw] lg:rounded-[1.5vw] xl:text-[3vw] xl:active:text-[2.8vw] xl:rounded-[1vw] 2xl:text-[5vw] 2xl:active:text-[4.7vw] 2xl:rounded-[1.5vw]">=</button>

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
        aspect-ratio: 1 / 1;
    }

    .buttons > button {
        display: inline-flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(3px);
        color: rgba(245, 245, 245, 0.9);

        /*text-shadow: 1px 1px 1px black;*/
        text-shadow:
        -1px -1px #000,
        0 1px 0 #444;
        transition: all 0.0s;

        font-weight: 100;
        font-family: 'DejaVu Sans ExtraLight';
        width: 100%;
        aspect-ratio: 1 / 1;
        line-height: 0.5;

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
