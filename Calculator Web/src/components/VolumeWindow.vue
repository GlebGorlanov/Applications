<template>
    <div class="volumeWindow rounded-[3.2vw] sm:rounded-[3.6vw] md:rounded-[2.6vw] lg:rounded-[2.4vw] xl:rounded-[1.2vw] 2xl:rounded-[1.8vw]">
        <div class="head">
            <div class="headLeft">
                <span v-show="back" @click="hideIconsInfo('b')" class="back text-[7.8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[2.2vw] 2xl:text-[3.5vw]" :style="{color:color}">&#8592;</span>
            </div>
            <div class="headCenter"></div>
            <div class="headRight">
                <!------------------------------------------ Элемент закрывания окна -------------------------------------------------->
                <span @click="hideIconsInfo" class="close text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[6.8vw] xl:text-[3vw] 2xl:text-[5vw]">&#215;</span>
            </div>
        </div>
        <div class="content">
            <!------------------------------------------ Обертка элемента управлени звуком -------------------------------------------------->
            <div class="volumeWrap rounded-[2.3vw] sm:rounded-[2.2vw] md:rounded-[1.8vw] lg:rounded-[1.6vw] xl:rounded-[0.7vw] 2xl:rounded-[1vw]" v-show="volumeWrapWindow">
                <output @click="switchVolume(value)" class="sound rounded-[2.5vw] sm:rounded-[2.3vw] md:rounded-[2.2vw] lg:rounded-[2vw] xl:rounded-[1vw] 2xl:rounded-[1.2vw]"><img class="image w-[55%]" :src="getImg(soundImg)" alt="sound"></output>
                <output class="range"><input class="slider" type="range" min="0" max="30" v-model="value"></output>
                <output class="outputNumber text-[7vw] sm:text-[6.5vw] md:text-[5.5vw] lg:text-[4.8vw] xl:text-[2vw] 2xl:text-[3.2vw]">{{ value }}</output>
            </div>
            <!------------------------------------------ Элементы навигационного меню -------------------------------------------------->
            <div class="iconsInfo" v-show="iconsInfoWindow">
                <div class="btnInfo rounded-[3vw] sm:rounded-[2.4vw] md:rounded-[2.3vw] xl:rounded-[1vw] 2xl:rounded-[1.3vw]" @click="hideIconsInfo('m')">
                    <img src="/src/assets/manual.png" class="w-[68%]">
                    <!--<p>Manual</p>-->
                </div>
                <div class="btnInfo rounded-[3vw] sm:rounded-[2.4vw] md:rounded-[2.3vw] xl:rounded-[1vw] 2xl:rounded-[1.3vw]" @click="hideIconsInfo('a')">
                    <img src="/src/assets/author.png" class="w-[70%]">
                    <!--<p>Author</p>-->
                </div>
            </div>
            <!------------------------------------------ Мануал приложения калькулятор -------------------------------------------------->
            <Manual v-show="windowManual"/>

            <!------------------------------------------ Манифест автора -------------------------------------------------->
            <Author v-show="windowAuthor"/>
        </div>
    </div>
</template>

<script>
    import Manual from './Manual.vue';
    import Author from './Author.vue';

    export default {
        components: {
            Manual,
            Author,
        },

        props: ['volumeWrapWindow', 'iconsInfoWindow', 'windowAuthor', 'windowManual'],
        emits: ['showVolumeWindow', 'changeVolume'],

        data() {
            return {
                back: false,
                value: 5,
                valueCopy: 0,
                soundImg: 'dinOn1.svg',
                time: null,
                color: 'rgba(48, 49, 27, 1)',
            };
        },

        watch: {
            value(y) {
                if(y == 0) {
                    this.soundImg = 'dinOff.svg';
                } else if(y > 0 && y < 20) {
                    this.soundImg = 'dinOn1.svg';
                } else if(y >= 20 && y < 30) {
                    this.soundImg = 'dinOn2.svg';
                } else if(y > 20 && y <= 30) {
                    this.soundImg = 'dinOn3.svg';
                };
                this.$emit('changeVolume', this.value);
                localStorage.setItem('value', JSON.stringify(this.value));
            },

            volumeWrapWindow() {
                if(this.volumeWrapWindow) {
                    this.back = false;
                    clearInterval(this.time);
                };
            },

            iconsInfoWindow() {
                if(this.iconsInfoWindow) {
                    this.back = false;
                    clearInterval(this.time);
                };
            },
        },

        mounted() {
            let value = localStorage.getItem('value');
            if(value) {
                this.value = JSON.parse(value);
            };
        },

        methods: {
            getImg(f) {
                return new URL(`/src/assets/${f}`, import.meta.url).href;
            },

            switchVolume(y) {
                if(y > 0) {
                    this.switch();
                    this.valueCopy = this.value;
                    this.value = 0;
                } else {
                    this.value = this.valueCopy;
                    this.valueCopy = 0;
                };
                this.switch();
            },
/*------------------------------- Метод возврата в главное меню --------------------------------------------------------*/
            hideIconsInfo(a) {
                this.$emit('showVolumeWindow', a);

                if(a === 'm' || a === 'a') {
                    this.back = true;
                    this.time = setInterval(() => {
                        this.color = this.color === 'rgba(48, 49, 27, 1)'? 'rgba(48, 49, 27, 0.5)': 'rgba(48, 49, 27, 1)';
                    }, 1000);
                } else {
                    this.back = false;
                    clearInterval(this.time);
                };
            },
/*-------------------------------------------------------------------------------------------------------*/
            switch() {
                let audio = new Audio();
                audio.src = new URL(`/src/assets/switch.mp3`, import.meta.url).href
                audio.autoplay = true;
                audio.volume = (this.value / 12);
            },
        },
    };
</script>

<style scoped>
.volumeWindow {
    position: absolute;

    display: flex;
    flex-direction: column;
    align-self: center;

    width: 76%;
    aspect-ratio: 1 / 0.7;
    
    border: 1px ridge whitesmoke;
    background: linear-gradient(to top, rgba(114, 114, 114, 0.7) 20%,
    rgba(149, 155, 62, 0.9) 80%);
    backdrop-filter: blur(1px);
}

.close {
    cursor: pointer;
    font-weight: 100;
    color: rgb(48,49,27);
    line-height: 0;
}

.head {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-basis: 20%;

    width: 100%;
    border-radius: 10px;
}

.headLeft {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;

    height: 100%;
    border-radius: 10px;
}

.headCenter {
    flex-basis: 62%;
    height: 100%;
    border-radius: 10px;
}

.back {
    cursor: pointer;
    font-weight: 600;
    font-family: 'Candara Light';
    line-height: 0;
}

.headRight {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 18%;

    height: 100%;
    border-radius: 10px;
}

.content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-basis: 65%;
    width: 100%;
    border-radius: 10px;
}

.close:hover {
    color: silver;
}

.volumeWrap {
    display: flex;
    align-content: center;
    align-items: center;

    width: 80%;
    aspect-ratio: 1 / 0.3;

    border: 1px groove rgb(255, 255, 255, 0.3);
    background: linear-gradient(to bottom, rgba(100, 108, 109, 0.7) 0%,
              rgba(102, 107, 107, 0.8) 0%,rgba(5, 5, 5, 0.8) 52%);
}

.sound {
    cursor: pointer;
    display: flex;
    flex-basis: 24%;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1 / 1;
    margin: 0 4%;
    
    border: 1px groove  rgb(255, 255, 255, 0.4);
    background: linear-gradient(to bottom, rgba(100, 108, 109, 0.5) 0%,
              rgba(102, 107, 107, 0.8) 0%,rgba(5, 5, 5, 0.9) 52%);
}

.sound:hover {
    border: 1px groove  rgb(255, 255, 255, 0.8);
}

.outputNumber {
    display: flex;
    flex-basis: 24%;
    justify-content: center;
    align-items: center;

    aspect-ratio: 1/1;
    margin: 0 2%;

    border-radius: 1vw;
    font-family: 'Yu Gothic Light';
    color: whitesmoke;
    font-weight: 100;
}

.range {
    display: flex;
    flex-basis: 54%;
    justify-content: center;
    align-items: center;
}

.slider {
    width: 100%;
    height: 2px;
    background: transparent;
    appearance: none;
}

.slider::-webkit-slider-runnable-track {
    height: 2px;
    border-radius: 10px;
    background-color: rgb(146, 146, 146);
}

.slider::-moz-range-track {
  height: 2px;
  border-radius: 10px;
  background-color: rgb(146, 146, 146);
}

.slider::-webkit-slider-thumb {
  cursor: pointer;
  position: relative;

  bottom: 4.2vw;
  width: 3vw;
  height: 9vw;

  background: rgb(15, 15, 15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;

  -webkit-appearance: none;
  appearance: none;
}

.slider:hover::-webkit-slider-thumb {
    border: 1px groove rgba(255, 255, 255, 0.8);
}

.slider::-moz-range-thumb {
  cursor: pointer;
  position: relative;

  bottom: 4.2vw;
  width: 3vw;
  height: 9vw;

  background: rgb(15, 15, 15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.slider:hover::-moz-range-thumb {
    border: 1px groove rgba(255, 255, 255, 0.8);
}

@media(min-width: 640px) {
  .slider::-webkit-slider-thumb {
    width: 2.8vw;
    height: 8vw;
    bottom: 3.8vw;
   }

  .slider::-moz-range-thumb {
    width: 2.6vw;
    height: 7.5vw;
    bottom: 3.5vw;
   }
}

@media(min-width: 768px) {
  .slider::-webkit-slider-thumb {
    width: 2.2vw;
    height: 7vw;
    bottom: 3.3vw;
  }

  .slider::-moz-range-thumb {
    width: 2.2vw;
    height: 7vw;
    bottom: 3.3vw;
   }
}

@media(min-width: 1024px) {
  .slider::-webkit-slider-thumb {
    width: 2vw;
    height: 6vw;
    bottom: 3vw;
  }

  .slider::-moz-range-thumb {
    width: 2vw;
    height: 6vw;
    bottom: 3vw;
   }
}

@media(min-width: 1280px) {
  .slider::-webkit-slider-thumb {
    width: 0.9vw;
    height: 2.8vw;
    bottom: 1.3vw;
  }

  .slider::-moz-range-thumb {
    width: 0.9vw;
    height: 2.8vw;
    bottom: 1.3vw;
   }
}

@media(min-width: 1536px) {
 .slider::-webkit-slider-thumb {
    width: 1.5vw;
    height: 4.5vw;
    bottom: 2.2vw;
  }

  .slider::-moz-range-thumb {
    width: 1.5vw;
    height: 4.5vw;
    bottom: 2.2vw;
   }
}

.iconsInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 72%;
    aspect-ratio: 1 / 0.45;
}

.btnInfo {
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 42%;
    height: 100%;

    border: 1px groove rgba(255, 255, 255, 0.7);
    font-family: 'Candara Light';
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 0, 0, 0.8);
}

.btnInfo:hover {
    border: 1px groove rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
}
</style>
