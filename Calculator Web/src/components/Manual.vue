<template>
  <div class="manual [&::-webkit-scrollbar]:w-0.5 text-[3.5vw] rounded-[2.5vw]
              sm:text-[3.2vw] sm:rounded-[2.3vw] md:text-[3vw] md:rounded-[2vw]
              lg:text-[2.6vw] lg:rounded-[1.8vw] xl:text-[1.1vw] xl:rounded-[0.8vw]
              2xl:text-[1.8vw] 2xl:rounded-[1.1vw]">
      
    <ul class="textContent">
      <li class="instruction text-[4.5vw] sm:text-[3.9vw] md:text-[3.8vw] lg:text-[3.4vw] xl:text-[1.5vw] 2xl:text-[2.4vw]">Инструкция:</li>
      <li>
        <span class="number">1.</span> Приложение Калькулятор
          работает по принципу математического примера.
          Математическое выражение может быть
          любой длинны. Когда поле ввода заполняется
          полностью, то его можно прокручивать вниз.
      </li>
      <li class="primer"><span class="bracket">(</span>2 <span style="color:lightblue">+</span> 3<span class="bracket">)</span> <span style="color:orange">&#215;</span> 4 <span style="color:yellow">&#8211;</span> 2.5 <span style="color:rgb(119, 255, 171)">&#247;</span> 5</li>
      <li>
          <span class="number">2.</span> Операция вычисления квадратного корня:
          Вводим в поле символ квадратного корня (<span class="root">&#8730;</span>)
          далее вводим число, или математическое выражение
          и нажимаем на знак равно (<span class="equals">=</span>).
      </li>
      <li class="primer"><span class="root">&#8730;</span> 3 <span style="color:orange">&#215;</span> 3</li>
      <li>
        <span class="number">3.</span> Операция вычисления процента от числа:
          Вводим в поле число от которого хотим вычислить процент,
          вводим затем символ процента (<span class="percent">%</span>), затем число процента
          и нажимаем на знак равно (<span class="equals">=</span>).
      </li>
      <li class="primer">100 <span style="color:burlywood">%</span> 3</li>
      <li>
        <span class="number">4.</span> Операция возведения в числа в степень:
          Вводим в поле число которое хотим возвести в степень,
          затем вводим символ степени (<span style="color:orange">^</span>), затем число степени
          и нажимаем на знак равно (<span class="equals">=</span>)
      </li>
      <li class="primer">3 <span style="color:orange">^</span> 2</li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.manual {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  width: 80%;
  aspect-ratio: 1 / 1.1;
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
  font-style: italic;
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
  font-family: 'inherit';
  color:rgb(255, 194, 153);
}

.equals {
  color: aqua;
  font-size: 4.5vw;
}

@media(min-width: 640px) {
  .equals {
    color: aqua;
    font-size: 4.4vw;
  }
}

@media(min-width: 768px) {
  .equals {
    color: aqua;
    font-size: 4vw;
  }
}

@media(min-width: 1024px) {
  .equals {
    color: aqua;
    font-size: 3.3vw;
  }
}

@media(min-width: 1280px) {
  .equals {
    color: aqua;
    font-size: 1.5vw;
  }
}

@media(min-width: 1536px) {
  .equals {
    color: aqua;
    font-size: 2.1vw;
  }
}

.border {
  width: 100px;
  border-bottom: 1px groove yellowgreen;
}

.instruction {
  border-bottom: 1px solid lightblue;
  color: lightblue;
  margin-bottom: 3%;
}

.number {
  font-family: 'Yu Gothic Light';
  font-style: normal;
  color: gold;
  font-size: 4vw;
  line-height: 0.7;
}

@media(min-width: 640px) {
  .number {
    font-family: 'Yu Gothic Light';
    font-style: normal;
    font-size: 3.5vw;
    color: gold;
  }
}

@media(min-width: 768px) {
  .number {
    font-family: 'Yu Gothic Light';
    font-style: normal;
    font-size: 3.2vw;
    color: gold;
  }
}

@media(min-width: 1024px) {
  .number {
    font-family: 'Yu Gothic Light';
    font-style: normal;
    font-size: 2.9vw;
    color: gold;
  }
}

@media(min-width: 1280px) {
  .number {
    font-family: 'Yu Gothic Light';
    font-style: normal;
    font-size: 1.3vw;
    color: gold;
  }
}

@media(min-width: 1536px) {
  .number {
    font-family: 'Yu Gothic Light';
    font-style: normal;
    font-size: 2.1vw;
    color: gold;
  }
}

.primer {
  font-size: 4.5vw;
  margin: 2vw 0 2vw 0;
  color:rgb(255, 252, 189);
  text-align: center;
  line-height: 1.2;
}

@media(min-width: 640px) {
  .primer {
    font-size: 4vw;
    margin: 1.5vw 0 1.5vw 0;
    color: khaki;
  }
}

@media(min-width: 768px) {
  .primer {
    font-size: 3.8vw;
    margin: 1.5vw 0 1.5vw 0;
    color: khaki;
  }
}

@media(min-width: 1024px) {
  .primer {
    font-size: 3.5vw;
    margin: 1.3vw 0 1.3vw 0;
    color: khaki;
  }
}

@media(min-width: 1280px) {
  .primer {
    font-size: 1.6vw;
    margin: 1vw 0 1vw 0;
    color: khaki;
  }
}

@media(min-width: 1536px) {
  .primer {
    font-size: 2.5vw;
    margin: 1.5vw 0 1.5vw 0;
    color:khaki;
  }
}
</style>
