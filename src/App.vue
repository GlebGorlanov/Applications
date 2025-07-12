<template>
    <div class="frame w-[100vw] aspect-[1/1.47] rounded-[3vw]">
        <div class="head leading-[0.5] h-[36px] rounded-t-[3vw]">
            <div class="turn" @click="headButtons('turn')">&#8211;</div>
            <div class="expand" @click="headButtons('expand')">&#9633;</div>
            <div class="close rounded-tr-[3vw]" @click="headButtons('close')">&#215;</div>
        </div>

        <div class="calculator w-[100%] aspect-[1/1.47] rounded-[3vw]">
            <Output :arr="arr" :result="result" :windowResult="windowResult" :cursor="cursor" :zero="zero" @getResult="getResult"/>
            <Buttons @get="get" ref="set"/>
        </div>
    </div>
</template>

<script scoped>
    import Output from './components/Output.vue';
    import Buttons from './components/Buttons.vue';

    export default {
        components: {
            Output,
            Buttons,
        },

        data() {
            return {
                arr: [],    // Массив накопления данных.
                mathematics: '',   // Строка математического примера.
                result: '',     // Строка вывода результата.
                windowResult: false,    // Флаг окна вывода результата.
                error: false, // Флаг окна вывода ошибки.
                cursor: true,   // Флаг сокрытия курсора.
                zero: true, // Флаг символа ноль.
                digitCounter: 0, // Счетчик метода деления на разряды.
                y: 0,
                i: 0,
                end: 0,
                root: false,    // Флаг метода вычисления корня.
                dot: false, // Флаг плавающей точки.
                name: 'WindowControls',
            };
        },

        /*-------------------------- Метод вывода результата ---------------------*/
        

        methods: {
            /*----------------------- Метод управления окном ----------------------*/
            headButtons(txt) {
                if(txt === 'turn') {
                    window.electron?.send('window-minimize');
                } else if(txt === 'expand') {
                    window.electron?.send('window-maximize');
                } else {
                    window.electron?.send('window-close');
                };
            },
        
            getResult() {
                this.windowResult = false;  // Флаг окна вывода результата.
                this.cursor = true; // Флаг сокрытия курсора.
                this.result = '';   // Строка вывода результата.
            },
/*-------------------------- Метод распределения команд ---------------------*/
            get(n, m) {
                if(n === 'c') {
                    this.clear();
                } else if(n === 'a') {
                    this.delete(n);
                } else if(n === '=') {
                    this.equals();
                } else if(n === '%') {
                    this.percent(n);
                } else if(m === 'r') {
                    this.getRoot(n);
                } else if(n === '^') {
                    this.power(n);
                } else {
                    this.dial(n, m);
                };
            },
/*------------------------- Метод набора символов --------------------------*/
            dial(n, m) {
                const invalidPattern = /([+\-*/.](?!\*)[+\-*/.]|([+\-*/.]){3,})|(\d+\.\d+\.)|(\.\d*\.)|\(\)|\([+\*/.]|[+\-*/.]\)|\)\.|(\*{3,})|\)\(|\d\(|\)\d|([+\-/.]\*)|(\*\+)|(\*\/)|(\*\-)/;

                if(this.mathematics.length === 0 && /[+*/.)]/.test(m)) {
                    return
                }else if (invalidPattern.test(this.mathematics + m)) {
                    return
                } else {
                    if(n === '.') {
                        this.dot = true;    // Флаг плавающей точки.
                    };

                    this.zero = false;  // Флаг символа ноль.
                    this.arr.push(String(n));   // Массив отображения символов.
                    this.mathematics += m;  // Строка математического примера.
                
                    this.split(this.arr);   // Вызов метода Split.
                    this.windowResult = false;  // Флаг окна вывода результата.
                    this.cursor = true;   // Флаг сокрытия курсора.
                };
            },
/*------------------------- Метод деления числа на разряды ------------------*/
            split(a) {
                if(isNaN(a.slice(-1)) && a.slice(-1) != '.') {
                    this.i = a.length;
                    this.end = a.length;
                    this.y = a.length;
                    this.digitCounter = 0;  // Счетчик метода деления на разряды.
                } else {
                    if(!a.includes('.', 0 + this.y)) {
                        for(this.i; this.i<a.length; this.i++) {
                            if(a[this.i] === ',') {
                                a.splice(this.i, 1);
                                a.splice(this.i + 1, 0, ',');
                                this.i += 1;
                            };
                        };

                        if(this.digitCounter == 3) {
                            a.splice(1 + this.y, 0, ',');
                            this.digitCounter = 0; // Счетчик метода деления на разряды.
                        };
            
                        this.digitCounter += 1; // Счетчик метода деления на разряды.
                        this.i = this.end;
                    };
                };
            },
/*------------------------- Метод удаления символов ------------------------*/
            delete() {
                if(isNaN(this.arr.slice(-1)) && this.arr.slice(-1) != '.') {
                    let n = 0;
                    let n1 = 0;
                    for(let j=this.arr.length-2; this.arr.length >=0; j--) {
                        if(!isNaN(this.arr[j])) {
                            n += 1;
                        } else if(this.arr[j] === ',' || this.arr[j] === '.') {
                            n += 1;
                        } else {
                            let a = j;
                            while(a < this.arr.length) {
                                if(this.arr[a] === ',') {
                                    break;
                                } else {
                                    if(this.arr[a] % 1 == 0) {
                                        n1 ++;
                                    };
                                };
                                a ++;
                            };
                            break;
                        };
                    };
                
                    if(n1 > 0) {
                        this.digitCounter = n1;
                    };
                    
                    this.i = this.arr.length - (n + 1);
                    this.end = this.arr.length - (n + 1);
                    this.y = this.arr.length - (n + 1);
                } else {
                    if(!this.arr.includes('.', 0 + this.y)) {
                        if(this.digitCounter == 1 && this.arr[1 + this.y] === ',') {
                            this.arr.splice(1 + this.y, 1);
                            this.digitCounter = 4;  // Счетчик метода деления на разряды.
                        };

                        for(this.i; this.i<this.arr.length; this.i++) {
                            if(this.arr[this.i] === ',') {
                                this.arr.splice(this.i, 1);
                                this.arr.splice(this.i - 1, 0, ',');
                                this.i -= 1;
                            };
                        };
            
                        if(this.digitCounter == 0) {
                            return;
                        } else {
                            this.digitCounter -= 1; // Счетчик метода деления на разряды.
                        };
                        
                        this.i = this.end;
                    };
                };

                let p;
                if(this.arr.length == 1) {
                    this.zero = true; // Флаг символа ноль.
                    this.arr = [];  // Массив накопления данных.
                    this.mathematics = '';  // Строка математического примера.
                    this.root = false;  // Флаг метода вычисления корня.
                } else {
                    p = this.arr.pop();
                };

                if(p === '%') {
                    this.mathematics = this.mathematics.slice(0, -5);
                } else if(p === '^') {
                    this.mathematics = this.mathematics.slice(0, -2);
                } else if(p === '.') {
                    this.dot = false;   // Флаг плавающей точки.
                    this.mathematics = this.mathematics.slice(0, -1);
                } else {
                    this.mathematics = this.mathematics.slice(0, -1);
                };

                this.windowResult = false;  // Флаг окна вывода результата.
                this.cursor = true;   // Флаг сокрытия курсора.
            },
/*---------------------------- Метод очищения ------------------------------*/
            clear() { 
                this.zero = true;   // Флаг символа ноль.
                this.arr = [];  // Массив накопления данных.
                this.digitCounter = 0;  // Счетчик метода деления на разряды.
                this.y = 0;
                this.i = 0;
                this.end = 0;
                this.mathematics = ''; // Строка математического примера.
                this.windowResult = false;  // Флаг окна вывода результата.
                this.cursor = true;   // Флаг сокрытия курсора.
                this.root = false;  // Флаг метода вычисления корня.
                this.dot = false;   // Флаг плавающей точки.
                this.result = '';   // Строка вывода результата.
            },
/*--------------------------- Метод вычисления процента --------------------*/
            percent(n) {
                if(this.mathematics.length == 0 && n === '%') {
                    return
                } else if(this.mathematics.slice(-1) === '*' && n === '%') {
                    return
                } else {
                    this.zero = false;  // Флаг символа ноль.
                    this.arr.push(String(n));
                    this.mathematics += '/100*';
                    this.split(this.arr);
                    this.windowResult = false;
                };
            },
/*--------------------------- Метод вычисления квадратного корня --------------------*/
            getRoot(n) {
                if(this.arr.length == 0) {
                    this.zero = false;  // Флаг символа ноль.
                    this.arr.push(String(n));
                    this.split(this.arr);
                    this.root = true;   // Флаг метода вычисления корня.
                } else {
                    return;
                }
            },
/*--------------------------- Метод возведения в степень -------------------------------*/
            power(n) {
                if(this.arr.length == 0 && n === '^') {
                    return
                } else if(this.mathematics.slice(-1) === '*' && n === '^') {
                    return
                } else {
                    this.zero = false;  // Флаг символа ноль.
                    this.arr.push(String(n));
                    this.mathematics += '**';
                    this.split(this.arr);
                    this.windowResult = false;
                };
            },
/*--------------------------- Метод вычисления результата ------------------*/
            equals() {
                try {
                    if(this.mathematics.length > 0) {   // Строка математического примера.
                        if(this.root) { // Флаг метода вычисления корня.
                            let r = String(Math.sqrt(eval(this.mathematics)));
                            r = r.split('.');
                            r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            this.result = r.join('.');
                        } else {
                            let r = String(eval(this.mathematics));
                            r = r.split('.');
                            r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            this.result = r.join('.');
                        };

                        this.windowResult = true;   // Флаг окна вывода результата.
                        this.$refs.set.set('=', '=', 'equals.mp3');   // Вызов метода Set.
                    };
                } catch(error) {
                    this.result = 'Error'; // Сообщение об ошибке.
                    this.windowResult = true; // Показать окно с результатом.
                    this.$refs.set.set('=', '=', 'error.mp3'); // Вызов метода Set.
                };
                this.cursor = false;  // Флаг сокрытия курсора.
            },
/*--------------------------------------------------------------------------*/
        },
    };
</script>

<style scoped>
    .frame {
        display: flex;
        flex-direction: column;

        /*background-color: rgba(165, 165, 165, 0.7);*/
        background-color: rgba(95, 172, 158, 0.5);
    }

    .head {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        color: rgba(0, 0, 0);

        font-size: 23px;
        font-weight: 100;
        font-family: 'Corbel Light';

        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);

        -webkit-app-region: drag;
    }

    .turn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 100%;

        -webkit-app-region: no-drag;
    }

    .turn:hover {
        background-color:rgb(94, 223, 255, 0.8);
    }

    .expand {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 100%;

        -webkit-app-region: no-drag;
    }

    .expand:hover {
        background-color: rgba(255, 115, 162, 0.8);
    }

    .close {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        height: 100%;

        -webkit-app-region: no-drag;
    }

    .close:hover {
        background-color: rgba(255, 0, 0, 0.8);
    }

    .calculator {
        background-image: url('/src/assets/fone.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        background-color: rgba(0, 0, 0, 0.5);
        border: 3px ridge rgba(0, 0, 0, 0.5);
    }
</style>
