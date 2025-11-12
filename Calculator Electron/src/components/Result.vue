<template>
    <!-------------------------------------- Вызывается в случае правильного ввода в инпут-------------------------------------------------------------------------------------------------------------------> 
    <div @click="$emit('getResult'), rt=true" class="result py-[5.5%] px-[7.5%] rounded-[2.5vw]">
      <span class="outputClose leading-[0.7] text-[4.5vw] top-[2.3vw] right-[1.3vw]" :style="{color: color}">&#215;</span>

      <!-------------------------------------- Вызывается в случае ошибки ввода в инпут------------------------------------------------------------------------------------------------------------------->
      <div class="error leading-[1] text-[7.3vw]" v-if="result === 'Error'">
        <p>Input error!</p>
        <img src="/src/assets/smile.png" class="smile w-[10vw] ml-[1.2vw]">
      </div>
    
      <template v-for="i in result" v-else>
        <span class="virgule leading-[0.1] text-[10.5vw]" v-if="i === ','">{{ i }}</span>
        <span class="dot leading-[0.1] text-[16vw]" v-else-if="i === '.'">{{ i }}</span>
        <span class="number leading-[0.7] text-[11.5vw]" v-else>{{ i }}</span>
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
            rt: false,
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
