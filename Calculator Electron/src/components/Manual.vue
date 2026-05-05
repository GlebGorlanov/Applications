<template>
  <div class="manual [&::-webkit-scrollbar]:w-0.5 rounded-[2.5vw]" ref="manual" :style="{width: widthWin, aspectRatio: ratio}">
      
    <ul class="textContent" v-show="lanRu">
      <li class="instruction text-[1.3em]">Инструкция:</li>
      <li>
        <span class="number">1.</span> Приложение Калькулятор
          работает по принципу математического примера.
          Математическое выражение может быть
          любой длинны. Когда поле ввода заполняется
          полностью, то его можно прокручивать вниз.
      </li>
      <li class="primer m-[0.5em]"><span style="color:violet">(</span>2 <span style="color:lightblue">+</span> 3<span style="color:violet">)</span> <span style="color:orange">&#215;</span> 4 <span style="color:yellow">&#8211;</span> 2.5 <span style="color:rgb(119, 255, 171)">&#247;</span> 5</li>
      <li>
          <span class="number">2.</span> Операция вычисления квадратного корня:
          Вводим в поле символ квадратного корня (<span class="root">&#8730;</span>)
          далее вводим число, или математическое выражение
          и нажимаем на знак равно (<span class="equals">=</span>).
      </li>
      <li class="primer m-[0.4em]"><span class="root">&#8730;</span> 3 <span style="color:orange">&#215;</span> 3</li>
      <li>
        <span class="number">3.</span> Операция вычисления процента от числа:
          Вводим в поле число от которого хотим вычислить процент,
          вводим затем символ процента (<span class="percent">%</span>), затем число процента
          и нажимаем на знак равно (<span class="equals">=</span>).
      </li>
      <li class="primer m-[0.4em]">100 <span style="color:burlywood">%</span> 3</li>
      <li>
        <span class="number">4.</span> Операция возведения в числа в степень:
          Вводим в поле число которое хотим возвести в степень,
          затем вводим символ степени (<span style="color:orange">^</span>), затем число степени
          и нажимаем на знак равно (<span class="equals">=</span>)
      </li>
      <li class="primer m-[0.4em]">3 <span style="color:orange">^</span> 2</li>
      <li>
        <span class="number">5.</span> Что бы убрать окно вывода результата с экрана, нажмите на кнопку с символом <span class="arrow">&#8592;</span> один раз.
      </li>
      <li class="image w-full"><img src="\src\assets\result.png" alt="#" class="w-[36%]"></li>
      <br />
      <li>
        <span class="number">6.</span> Что бы убрать окно вывода ошибки с экрана, нажмите на кнопку с символом <span class="arrow">&#8592;</span> или на окно вывода ошибки один раз.
      </li>
      <li class="image w-full"><img src="\src\assets\error.png" alt="#" class="w-[72%]"/></li>
      <br />
      <li>
        <span class="number">7.</span>Что бы зафиксировать результат вычислений в окне набора символов, для следующих вычислений с результатом, нажмите на окно вывода результата, один раз.
      </li>
      <li class="image w-full"><img src="\src\assets\pointer.png" alt="#" class="w-[36%]"></li>
    </ul>
    
    <ul class="textContent" v-show="lanEn">
      <li class="instruction text-[1.3em]">Instructions:</li>
      <li>
        <span class="number">1.</span> The Calculator app
        works on the principle of a mathematical expression.
        The mathematical expression can be
        of any length. When the input field is filled
        completely, it can be scrolled down.
      </li>
      <li class="primer m-[0.5em]"><span style="color:violet">(</span>2 <span style="color:lightblue">+</span> 3<span style="color:violet">)</span> <span style="color:orange">&#215;</span> 4 <span style="color:yellow">&#8211;</span> 2.5 <span style="color:rgb(119, 255, 171)">&#247;</span> 5</li>
      <li>
          <span class="number">2.</span> Square root operation:
          Enter the square root symbol in the field (<span class="root">&#8730;</span>)
          Next, enter a number or mathematical expression
          and click on the equal sign (<span class="equals">=</span>).
      </li>
      <li class="primer m-[0.4em]"><span class="root">&#8730;</span> 3 <span style="color:orange">&#215;</span> 3</li>
      <li>
        <span class="number">3.</span> Operation of calculating percentage of a number:
        Enter the number you want to calculate the percentage from in the field, then enter the percentage symbol (<span class="percent">%</span>), then the percentage number
        and click on the equal sign (<span class="equals">=</span>).
      </li>
      <li class="primer m-[0.4em]">100 <span style="color:burlywood">%</span> 3</li>
      <li>
        <span class="number">4.</span> The operation of raising numbers to a power:
          Enter the number you want to raise to a power in the field, then enter the power symbol (<span style="color:orange">^</span>), then the number of degrees
          and click on the equal sign (<span class="equals">=</span>)
      </li>
      <li class="primer m-[0.4em]">3 <span style="color:orange">^</span> 2</li>
      <li>
        <span class="number">5.</span> To remove the result output window from the screen, click on the button with the symbol <span style="color:gold">&#8592;</span> once.
      </li>
      <li class="image w-full"><img src="\src\assets\result.png" alt="#" class="w-[36%]"></li>
      <br />
      <li>
        <span class="number">6.</span> To remove the error message window from the screen, click on the button with the symbol <span style="color:gold">&#8592;</span> or on the error output window once.
      </li>
      <li class="image w-full"><img src="\src\assets\error.png" alt="#" class="w-[72%]"/></li>
      <br />
      <li>
        <span class="number">7.</span>To save the calculation result in the character set window, for subsequent calculations with the result, click on the result output window once.
      </li>
      <li class="image w-full"><img src="\src\assets\pointer.png" alt="#" class="w-[36%]"></li>
    </ul>
  </div>
</template>

<script>

/**
 * Calculator Convenient
 * Author: Gleb Gorlanov
 * Copyright (c) 2026
 * All rights reserved.
 */
 
  export default {
    props: ['ruFlag', 'widthManual'],
  
    data() {
      return {
        lanRu: true,
        lanEn: false,
        widthWin: '80%',
        ratio: '1/1.1',
      };
    },

    mounted() {
      this.observer = new ResizeObserver(() => {
        this.$refs.manual.style.fontSize =
        this.$refs.manual.offsetWidth * 0.056 + 'px';
      });
  
      this.observer.observe(this.$refs.manual);
    },
  
    beforeDestroy() {
      this.observer.disconnect();
    },
  
    watch: {
      ruFlag() {
        this.lanRu =! this.lanRu;
        this.lanEn =! this.lanEn;
      },
      
      widthManual() {
        this.widthManual ? this.widthWin = '80%' : this.widthWin = '90%';
        this.widthManual ? this.ratio = '1/1.1' : this.ratio = '1/0.96';
      },
    },
  };
</script>

<style scoped>
.manual {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  height: auto;
  
  margin-bottom: 10%;
  padding-bottom: 5%;

  background-color: rgba(0, 0, 0, 0.8);
  border: 1px groove rgba(255, 255, 255, 0.5);
  
  font-weight: 100;
  letter-spacing: 1px;
}

.manual::-webkit-scrollbar {
  display: none;
}

.textContent {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5% 5% 0 5%;
  text-align: center;
  color: white;
  font-family: 'Candara Light';
  font-style: normal;
  line-height: 1.5;
}

.percent {
  bottom: 0;
  margin: 0;
  color:khaki;
}

.root {
  margin-top: 0;
  padding: 0;
  font-style: normal;
  font-family: 'Microsoft YaHei UI Light';
  line-height: 0.7;
  color: rgb(255, 194, 153);
}

.equals {
  color: aqua;
  font-size: 1.4em;
}

.border {
  width: 100px;
  border-bottom: 1px groove yellowgreen;
}

.instruction {
  border-bottom: 1px solid lightblue;
  color: lightblue;
  margin-bottom: 5%;
}

.number {
  font-family: 'Yu Gothic Light';
  font-style: normal;
  color: gold;
  font-size: 1.1em;
  line-height: 0.7;
}

.primer {
  font-family: 'Yu Gothic Light';
  font-size: 1.2em;
  color:rgb(255, 252, 189);
  text-align: center;
  line-height: 1.2;
}

.image {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 5%;
}

.arrow {
  color: gold;
  font-size: 1.5em;
  line-height: 0.5;
  font-family: 'Candara Light';
}
</style>
