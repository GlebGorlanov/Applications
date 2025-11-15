<template>
    <!-------------------------------------- Вызывается в случае правильного ввода в инпут-------------------------------------------------------------------------------------------------------------------> 
    <div @click="$emit('getResult'), rt=true" class="result py-[5.5%] px-[7.5%] rounded-[2.5vw] sm:rounded-[2.3vw] md:rounded-[2vw] lg:rounded-[1.7vw] xl:rounded-[0.8vw] 2xl:rounded-[1.2vw]">
      <span class="outputClose leading-[0.7] text-[4.5vw] top-[2.3vw] right-[1.3vw] sm:text-[4.3vw] sm:top-[2vw] sm:right-[1.1vw] md:text-[3.6vw] md:top-[2vw] md:right-[1.2vw] lg:text-[3vw] lg:top-[1.4vw] lg:right-[0.8vw] xl:text-[1.3vw] xl:top-[0.6vw] xl:right-[0.4vw] 2xl:text-[2.3vw] 2xl:top-[1.1vw] 2xl:right-[0.6vw]" :style="{color: color}">&#215;</span>

      <!-------------------------------------- Вызывается в случае ошибки ввода в инпут------------------------------------------------------------------------------------------------------------------->
      <div class="error leading-[1] text-[7.3vw] sm:text-[6.8vw] md:text-[6vw] lg:text-[5.3vw] xl:text-[2.3vw] 2xl:text-[3.5vw]" v-if="result === 'Error'">
        <p>Input error!</p>
        <img src="/src/assets/smile.png" class="smile w-[10vw] ml-[1.2vw] sm:w-[9vw] sm:ml-[1vw] md:w-[8vw] md:ml-[1vw] lg:w-[7vw] lg:ml-[1vw] xl:w-[3.2vw] xl:ml-[0.4vw] 2xl:ml-[0.5vw] 2xl:w-[4.8vw]">
      </div>
    
      <template v-for="i in result" v-else>
        <span class="virgule leading-[0.1] text-[10.5vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[3vw] 2xl:text-[5vw]" v-if="i === ','">{{ i }}</span>
        <span class="dot leading-[0.1] text-[16vw] sm:text-[16vw] md:text-[13vw] lg:text-[11vw] xl:text-[4.5vw] 2xl:text-[8vw]" v-else-if="i === '.'">{{ i }}</span>
        <span class="number leading-[0.7] text-[11.5vw] sm:text-[10.5vw] md:text-[9.3vw] lg:text-[8vw] xl:text-[3.3vw] 2xl:text-[5.8vw]" v-else>{{ i }}</span>
      </template>
    </div>
</template>

<script>
  export default {
      props: ['result', 'windowResult'],
      emits: ['getResult'],

      data() {
        return {
            count: 0,
            color: 'white',
            time: null,
            volume: 5,
        };
      },

      methods: {
/*-------------------------------- Метод озвучивания закрытия окна --------------------------------------------*/
          resultClose() {
              let audio = new Audio();
              audio.src = new URL(`/src/assets/result.mp3`, import.meta.url).href
              audio.autoplay = true;
              audio.volume = (this.volume / 10);
          },
      },
/*------------------------------------------- Метод слежения за состоянием пропса windowResult --------------------------------------------------*/
      watch: {
          windowResult() {
              if(this.windowResult) {
                  this.rt = false;
                  this.time = setInterval(() => { // Вызов временной функции изменения цвета крестика.
                      if(this.count == 1) {
                          this.count = 0;
                          this.color = 'rgb(180, 180, 180)';
                      } else {
                          this.count += 1;
                          this.color = 'white';
                      };
                  }, 1000);

                  let value = localStorage.getItem('value');  // Метод сохранения состояния переменной value.
                  if(value) {
                      this.volume = JSON.parse(value);
                  };
              } else {
                  clearInterval(this.time);   // Остановка временной функции.
                  
                  if(this.rt) {
                    this.resultClose(); // Вызов метода закрытия окна.
                  };
              };
          },
      },
  };
</script>

<style scoped>
  .result {
      cursor: pointer;
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 10;

      background-color: rgb(45, 45, 18, 0.6);
      border: 1px ridge rgba(243, 241, 241, 0.7);
      backdrop-filter: blur(4px);
      color: whitesmoke;
  }

  .result:hover {
      border-color: white;
  }

  .outputClose {
      position: absolute;
      font-family: 'Yu Gothic Light';
      font-weight: 100;
  }

  .number {
      display: inline-block;
      font-family: inherit;
      color: whitesmoke;
  }

  .virgule {
      display: inline-block;
      font-family: 'Malgun Gothic';
      font-weight: 500;
      color: rgb(255, 175, 26);
      margin: 0 0.3vw 0 0;
  }

  .dot {
      display: inline-block;
      font-family: inherit;
      color: rgb(255, 253, 142);
  }

  .error {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      color: rgb(255, 81, 81);
      font-family: 'Malgun Gothic';
      font-weight: 100;
      white-space: nowrap;
  }
</style>
