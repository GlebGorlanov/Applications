'use strict';  // Строгий режим.
/*-------------------------------------------------------------------------*/
window.onload = widthHeight();

function widthHeight() {
    let Width;
    let Height;

    window.innerWidth;
    window.innerHeight;

    window.outerWidth;
    window.outerHeight;

    if(window.innerHeight > window.outerHeight) {
        Width = window.outerWidth;
        Height = window.outerHeight;
    } else {
        Width = window.innerWidth;
        Height = window.innerHeight;
    };

    let grid = document.querySelector('.grid');
    let volumeOut = document.querySelector('.volumeOut');
    let output = document.querySelectorAll('.out');

    setTimeout(function() {
        grid.style.display = 'inline-grid';
    }, 100);

    if(Width < Height) {
        let patW1 = Width / 9.5;
        let patW2 = Width - patW1;
        let patW3 = (patW2 / 3.05) - 4;
        let patW4 = patW1 / 2;

        output[0].style.fontSize = (patW4 * 4) + '%';
        output[1].style.fontSize = (patW4 * 4) + '%';
        output[2].style.fontSize = (patW4 * 4) + '%';

        volumeOut.style.fontSize = (patW4 * 4.5) + '%';

        let sumW1 = patW3 * 3.05 - 4;
        let sumW2 = (patW3 * 3.05 + patW1) - 4;
        let leftW = (Width - sumW1) / 2;
        let topW = (Height - sumW2) / 2;

        grid.style.top = `${topW}px`;
        grid.style.left = `${leftW}px`;
        grid.style.gridTemplateColumns = `repeat(3, ${patW3}px)`;
        grid.style.gridTemplateRows = `${patW4}px repeat(3, ${patW3}px) ${patW4}px`;

    } else if(Width > Height) {
        let patH1 = Height / 9.5;
        let patH2 = Height - patH1;
        let patH3 = (patH2 / 3.05) - 4;
        let patH4 = patH1 / 2;

        output[0].style.fontSize = (patH4 * 4) + '%';
        output[1].style.fontSize = (patH4 * 4) + '%';
        output[2].style.fontSize = (patH4 * 4) + '%';
        
        volumeOut.style.fontSize = (patH4 * 4.5) + '%';

        let sumH1 = patH3 * 3.05 - 4;
        let sumH2 = (patH3 * 3.05 + patH1) - 4;
        let leftH = (Width - sumH1) / 2;
        let topH = (Height - sumH2) / 2;

        grid.style.top = `${topH}px`;
        grid.style.left = `${leftH}px`;
        grid.style.gridTemplateColumns = `repeat(3, ${patH3}px)`;
        grid.style.gridTemplateRows = `${patH4}px repeat(3, ${patH3}px) ${patH4}px`;

    };
};

window.addEventListener('resize', function() {
    widthHeight();
});

let lite = false;
let middle = false;
let hard = false;
let cross;
let zero;
let fone = 'img/fone.svg';
let stop = false;
let clear = false;
let getWinTwo;
let oneAi = false;
let windowEndOn = false;
let over = false;
let endOne = false;
let vicOn = false;
let time;
let time0;
let time1;
let time2;
let time3;
let time4;
let time5;
let time6;
let time7;
let time8;
let vol = 10;
let Iam = false;
let sound = false;
let info = false;
let move = 0;

let arr = [fone, fone, fone, fone, fone, fone, fone, fone, fone];
let nil = false;
let one = false;
let two = false;
let three = false;
let four = false;
let five = false;
let six = false;
let seven = false;
let eight = false;
/*---------------------------Функция Связывания Массивов--------------------*/
function binding() {
    let span = document.querySelectorAll('.box');
    let img = document.querySelectorAll('.box > img');
    
    img[0].src = arr[0];
    img[1].src = arr[1];
    img[2].src = arr[2];
    img[3].src = arr[3];
    img[4].src = arr[4];
    img[5].src = arr[5];
    img[6].src = arr[6];
    img[7].src = arr[7];
    img[8].src = arr[8];
    
    if(arr[0] != fone && nil==false) {
        nil = true;
        span[0].classList.add('shadow');
        setTimeout(function() {
            span[0].classList.remove('shadow');
        }, 2000);
    } else if(arr[1] != fone && one==false) {
        one = true;
        span[1].classList.add('shadow');
        setTimeout(function() {
            span[1].classList.remove('shadow');
        }, 2000);
    } else if(arr[2] != fone && two==false) {
        two = true;
        span[2].classList.add('shadow');
        setTimeout(function() {
            span[2].classList.remove('shadow');
        }, 2000);
    } else if(arr[3] != fone && three==false) {
        three = true;
        span[3].classList.add('shadow');
        setTimeout(function() {
            span[3].classList.remove('shadow');
        }, 2000);
    } else if(arr[4] != fone && four==false) {
        four = true;
        span[4].classList.add('shadow');
        setTimeout(function() {
            span[4].classList.remove('shadow');
        }, 2000);
    } else if(arr[5] != fone && five==false) {
        five = true;
        span[5].classList.add('shadow');
        setTimeout(function() {
            span[5].classList.remove('shadow');
        }, 2000);
    } else if(arr[6] != fone && six==false) {
        six = true;
        span[6].classList.add('shadow');
        setTimeout(function() {
            span[6].classList.remove('shadow');
        }, 2000);
    } else if(arr[7] != fone && seven==false) {
        seven = true;
        span[7].classList.add('shadow');
        setTimeout(function() {
            span[7].classList.remove('shadow');
        }, 2000);
    } else if(arr[8] != fone && eight==false) {
        eight = true;
        span[8].classList.add('shadow');
        setTimeout(function() {
            span[8].classList.remove('shadow');
        }, 2000);
    };
};
binding();

function playGo() {
    let play = document.querySelector('.play > img');

    time = setInterval(function() {
        play.src="img/play.svg";
    }, 700);
    time0 = setInterval(function() {
        play.src="img/fone.svg";
    }, 1400);

    setTimeout(function() {
        let play = document.querySelector('.play > img');
        play.src="img/play.svg";

        clearInterval(time);
        clearInterval(time0);
    }, 11000);
};

playGo();
/*-------------------------------Функция Кнопок Диалоговых Окон---------------*/

let btn = document.querySelectorAll('.btn');

btn.forEach(function(item, index) {
    item.addEventListener('touchstart', pushBtn);
    item.addEventListener('click', pushBtn);
    
    function pushBtn() {
        let winOne = document.querySelector('.winOne');
        let pic = document.querySelectorAll('.pic');
        let znak = document.querySelector('.znak');
        let znakShose = document.querySelector('.znakShose');
        let volumeWrap = document.querySelector('.volumeWrap');
        let volumeDin = document.querySelector('.volumeDin');
        let autor = document.querySelector('.autor');
        let volumeOut = document.querySelector('.volumeOut');
        let level = document.querySelector('.level');
        let shose = document.querySelector('.shose');

        if(windowEndOn==false) {
            if(index==0) {
                nil = false;
                one = false;
                two = false;
                three = false;
                four = false;
                five = false;
                six = false;
                seven = false;
                eight = false;

                sound=false;
                info=false;

                clearInterval(time);
                clearInterval(time0);
                clearInterval(time1);
                clearInterval(time2);
                clearInterval(time3);
                clearInterval(time4);

                let play = document.querySelector('.play > img');
                play.src="img/play.svg";
                soundStart();
                stop=false;

                for(let i=0; i<box.length; i++) {
                    box[i].classList.remove('boxChange');
                    arr[i]=fone;
                };

                binding();
                getWinTwo=false;
                volumeWrap.style.display = 'none';
                autor.style.display = 'none';
                shose.style.display = 'none';
                
                time1 = setInterval(() => {
                    znak.src="img/znak.svg";
                }, 700);

                time2 = setInterval(() => {
                    znak.src="img/znakFone.svg";
                }, 1400);
                
                setTimeout(function() {
                    winOne.style.display = 'flex';
                    level.style.display = 'grid';
                }, 200);

            } else if(index==1) {
                sound=true;
                soundSound();
                clearInterval(time1);
                clearInterval(time2);
                clearInterval(time3);
                clearInterval(time4);

                level.style.display = 'none';
                shose.style.display = 'none';
                autor.style.display = 'none';
                volumeWrap.style.display = 'flex';

                setTimeout(function() {
                    winOne.style.display = 'flex';
                }, 200);
            } else if(index==2) {
                info=true;
                soundInfo();
                clearInterval(time1);
                clearInterval(time2);
                clearInterval(time3);
                clearInterval(time4);

                level.style.display = 'none';
                shose.style.display = 'none';
                volumeWrap.style.display = 'none';
                autor.style.display = 'flex';

                setTimeout(function() {
                    winOne.style.display = 'flex';
                }, 200);
            } else if(index==3) {
                soundClose();
                clearInterval(time1);
                clearInterval(time2);
                clearInterval(time3);
                clearInterval(time4);

                setTimeout(function() {
                    winOne.style.display = 'none';
                }, 200);
                if(stop==false && sound==false && info==false) {
                    clearInterval(time);
                    clearInterval(time0);
                    playGo();
                };
            } else if(index==4) {
                smileSound();
                lite=true;
                middle=false;
                hard=false;
                clearInterval(time1);
                clearInterval(time2);
                setTimeout(function() {
                    level.style.display = 'none';
                    shose.style.display = 'flex';

                    pic[0].src="gameImg/cross.svg";
                    pic[1].src="gameImg/zero.svg";


                    time3 = setInterval(function() {
                        znakShose.src="img/znak.svg";
                    }, 700);
                    time4 = setInterval(function() {
                        znakShose.src="img/znakFone.svg";
                    }, 1400);
                }, 200);
            } else if(index==5) {
                smileSound();
                middle=true;
                lite=false;
                hard=false;
                clearInterval(time1);
                clearInterval(time2);
                setTimeout(function() {
                    level.style.display = 'none';
                    shose.style.display = 'flex';

                    pic[0].src="gameImg/cross.svg";
                    pic[1].src="gameImg/zero.svg";

                    time3 = setInterval(function() {
                        znakShose.src="img/znak.svg";
                    }, 700);
                    time4 = setInterval(function() {
                        znakShose.src="img/znakFone.svg";
                    }, 1400);
                }, 200);
            } else if(index==6) {
                smileSound();
                hard=true;
                lite=false;
                middle=false;
                clearInterval(time1);
                clearInterval(time2);
                setTimeout(function() {
                    level.style.display = 'none';
                    shose.style.display = 'flex';

                    pic[0].src="gameImg/cross.svg";
                    pic[1].src="gameImg/zero.svg";

                    time3 = setInterval(function() {
                        znakShose.src="img/znak.svg";
                    }, 700);
                    time4 = setInterval(function() {
                        znakShose.src="img/znakFone.svg";
                    }, 1400);
                }, 200);
            } else if(index==7) {
                if(getWinTwo==false) {
                    soundChoise();
                    getWinTwo=true;
                    cross='gameImg/cross.svg';
                    zero='gameImg/zero.svg';
                    setTimeout(function() {
                        pic[0].src="img/first.svg";
                        pic[1].src="img/second.svg";
                    }, 200);
                } else {
                    clearInterval(time1);
                    clearInterval(time2);
                    clearInterval(time3);
                    clearInterval(time4);

                    Iam = true;
                    soundChoise();
                    getWinTwo=false;
                    stop=true;
                    oneAi=false;

                    for(let i=0; i<box.length; i++) {
                        box[i].classList.add('boxChange');
                        arr[i]=fone;
                    };
                    setTimeout(function() {
                        winOne.style.display = 'none';
                    }, 200);
                };
            } else if(index==8) {
                if(getWinTwo==false) {
                    soundChoise();
                    getWinTwo=true;
                    cross='gameImg/zero.svg';
                    zero='gameImg/cross.svg';

                    setTimeout(function() {
                        pic[0].src="img/first.svg";
                        pic[1].src="img/second.svg";
                    }, 200);
                } else {
                    clearInterval(time1);
                    clearInterval(time2);
                    clearInterval(time3);
                    clearInterval(time4);
                    Iam = false;
                    soundChoise();
                    getWinTwo=false;
                    oneAi=true;
                    stop=true;

                    for(let i=0; i<box.length; i++) {
                        box[i].classList.add('boxChange');
                        arr[i]=fone;
                    };
                    setTimeout(function() {
                        winOne.style.display = 'none';
                    }, 200);
                    Ai();
                };
            } else if(index==9) {
                if(vol==0) {
                    return;
                } else {
                    soundDin();
                    vol -= 1;
                    volumeOut.innerHTML = vol;

                    if(vol==0) {
                        volumeDin.src="img/dinOff.svg";
                    } else if(vol > 0 && vol < 10) {
                        volumeDin.src="img/dinOn1.svg";
                    } else if(vol > 10 && vol < 20) {
                        volumeDin.src="img/dinOn2.svg";
                    } else if(vol > 20) {
                        volumeDin.src="img/dinOn3.svg";
                    };
                };
            } else if(index==10) {
                soundDin();
                volumeDin.src="img/dinOff.svg";
                vol=0;
                volumeOut.innerHTML = vol;
            } else if(index==11) {
                if(vol==30) {
                    return;
                } else {
                    soundDin();
                    vol += 1;
                    volumeOut.innerHTML = vol;
                    if(vol > 0 && vol < 10) {
                        volumeDin.src="img/dinOn1.svg";
                    } else if(vol > 10 && vol < 20) {
                        volumeDin.src="img/dinOn2.svg";
                    } else if(vol > 20) {
                        volumeDin.src="img/dinOn3.svg";
                    };
                };
            };
        } else {
            if(index==12) {
                nil = false;
                one = false;
                two = false;
                three = false;
                four = false;
                five = false;
                six = false;
                seven = false;
                eight = false;
                move=0;

                clearInterval(time3);
                clearInterval(time4);

                let victory = document.querySelector('.victory');
                let victoryWrap = document.querySelector('.victoryWrap');
                let victoryPicOne = document.querySelector('.victoryPicOne');

                setTimeout(function() {
                    victory.style.width = '37%';
                    victoryWrap.style.width = '75%';
                    victoryPicOne.style.borderColor = 'rgba(199, 194, 194, 0.3)';
                }, 600);

                soundVictory();
                stop=true;
                over=false;
                vicOn=false;
                numAi=0;
                windowEndOn=false;
                
                setTimeout(function() {
                    victory.style.display = 'none';
                }, 200);
                for(let i=0; i<box.length; i++) {
                    box[i].classList.remove('boxDraw');
                    box[i].classList.remove('boxEnd');
                    box[i].classList.add('boxChange');
                    arr[i]=fone;
                };
                if(oneAi==true) {
                    Ai();
                };
                binding();
            };
        };
    };
});
/*----------------------------Получение Окон Вывода Очков-----------------*/
let sumCross = 0;
let sumZero = 0;
let sumDraw = 0;
/*----------------------------Функция Генерации Тени----------------------*/
function outPut(a) {
    let outNil = document.querySelectorAll('.outputShadow');
    let outOne = document.querySelectorAll('.out');
    
    
    outNil[a].classList.add('shadowOut');
    outOne[a].style.fontWeight = 'bold';

    time5 = setInterval(function() {
        outOne[a].style.fontWeight = '200';
    }, 1000);

    time6 = setInterval(function() {
        outOne[a].style.fontWeight = 'bold';
    }, 1500);
    
    setTimeout(function() {
        clearInterval(time5);
        clearInterval(time6);
        outNil[a].classList.remove('shadowOut');
    }, 4000);
    
};
/*----------------------------Функция Окна Победы---------------------------*/
function windowEnd(p, d) {
    windowEndOn = true;
    let victory = document.querySelector('.victory');
    let victoryPicOne = document.querySelector('.victoryPicOne');
    let victoryPicTwo = document.querySelector('.victoryPicTwo');
    victory.style.display = 'flex';
    victoryPicOne.src = p;
    victoryPicTwo.style.display = d;

    time3 = setInterval(function() {
        victoryPicOne.src= p;
    }, 700);

    time4 = setInterval(function() {
        victoryPicOne.src="img/fone.svg";
    }, 1400);
    
    setTimeout(function() {
        clearInterval(time3);
        clearInterval(time4);
    }, 8000);
};
/*----------------------------Функция Определения Победителя----------------*/
function end() {
    let out = document.querySelectorAll('.out');

    if(arr[0]==cross && arr[1]==cross && arr[2]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[1].classList.add('boxEnd');
            box[2].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[3]==cross && arr[4]==cross && arr[5]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[3].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[5].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[6]==cross && arr[7]==cross && arr[8]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[6].classList.add('boxEnd');
            box[7].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[0]==cross && arr[3]==cross && arr[6]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[3].classList.add('boxEnd');
            box[6].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[1]==cross && arr[4]==cross && arr[7]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[1].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[7].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[2]==cross && arr[5]==cross && arr[8]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[2].classList.add('boxEnd');
            box[5].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[0]==cross && arr[4]==cross && arr[8]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[2]==cross && arr[4]==cross && arr[6]==cross) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[2].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[6].classList.add('boxEnd');
            if(cross=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            } else if(cross=='gameImg/zero.svg') {
                sumZero++;
                out[1].value = sumZero;
                outPut(1);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(cross, 'inline');
        }, 1500);
    } else if(arr[0]==zero && arr[1]==zero && arr[2]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[1].classList.add('boxEnd');
            box[2].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[3]==zero && arr[4]==zero && arr[5]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[3].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[5].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[6]==zero && arr[7]==zero && arr[8]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[6].classList.add('boxEnd');
            box[7].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[0]==zero && arr[3]==zero && arr[6]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[3].classList.add('boxEnd');
            box[6].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[1]==zero && arr[4]==zero && arr[7]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[1].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[7].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[2]==zero && arr[5]==zero && arr[8]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[2].classList.add('boxEnd');
            box[5].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[0]==zero && arr[4]==zero && arr[8]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[0].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[8].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else if(arr[2]==zero && arr[4]==zero && arr[6]==zero) {
        stop=false;
        over=true;
        endOne=true;
        vicOn=true;
        for(let i=0; i<box.length; i++) {
            box[i].classList.remove('boxChange');
        };
        setTimeout(function() {
            soundEnd();
            box[2].classList.add('boxEnd');
            box[4].classList.add('boxEnd');
            box[6].classList.add('boxEnd');
            if(zero=='gameImg/zero.svg') {
                sumZero ++;
                out[1].value = sumZero;
                outPut(1);
            } else if(zero=='gameImg/cross.svg') {
                sumCross ++;
                out[0].value = sumCross;
                outPut(0);
            };
        }, 500);
        setTimeout(function() {
            windowEnd(zero, 'inline');
        }, 1500);
    } else {
        if((arr[0]!=fone && arr[1]!=fone && arr[2]!=fone) &&
           (arr[3]!=fone && arr[4]!=fone && arr[5]!=fone) &&
           (arr[6]!=fone && arr[7]!=fone && arr[8]!=fone)) {
    
            let victoryPicOne = document.querySelector('.victoryPicOne');
            victoryPicOne.style.borderColor = 'rgba(199, 194, 194, 0)';
            let victory = document.querySelector('.victory');
            let victoryWrap = document.querySelector('.victoryWrap');
            victory.style.width = '28%';
            victoryWrap.style.width = '63%';

            stop=false;
            over=true;
            endOne=true;
            vicOn=true;

            for(let i=0; i<box.length; i++) {
                box[i].classList.remove('boxChange');
            };

            setTimeout(function() {
                windowEnd('gameImg/draw.svg', 'none');
            }, 1500);

            setTimeout(function() {
                soundDraw();
                sumDraw ++;
                out[2].value = sumDraw;

                box[0].classList.add('boxDraw');
                box[1].classList.add('boxDraw');
                box[2].classList.add('boxDraw');
                box[3].classList.add('boxDraw');
                box[4].classList.add('boxDraw');
                box[5].classList.add('boxDraw');
                box[6].classList.add('boxDraw');
                box[7].classList.add('boxDraw');
                box[8].classList.add('boxDraw');
                outPut(2);
            }, 500);
        };
    };
};

/*-----------------------------------Функция Управления----------------------*/
let numAi = 0;
function Ai(){
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != fone) {
            numAi++;
        };
    };
    if(stop==true) {
        if(numAi < 2) {
            moveOne();
        } else {
            if(lite==true) {
                let n = Math.floor(Math.random() * 2);
                if(n==0) {
                    moveOne();
                } else if(n==1) {
                    moveTwo();
                };
            } else {
                moveTwo();
            };
        };
    } else {
        return;
    };
};
/*------------------------------------Функция Первого Хода-------------------*/
function moveOne() {
    let num = Math.floor(Math.random() * arr.length);

    if(numAi<2 && Iam==true && lite==false && middle==false && hard==true) {
        let n2 = Math.floor(Math.random() * 2);
        if(n2==0) {
            if(arr[4]==fone) {
                setTimeout(function() {
                    arr[4]=zero;
                    end();
                    soundMove();
                    binding();
                }, 600);
            } else {
                let arrTwo = [0, 2, 6, 8];
                let numTwo = Math.floor(Math.random() * arrTwo.length);
    
                if(arr[arrTwo[numTwo]]==fone) {
                    setTimeout(function() {
                        arr[arrTwo[numTwo]]=zero;
                        end();
                        soundMove();
                        binding();
                    }, 600);
                } else {
                    Ai();
                };
            };
        } else {
            if(arr[num]==fone) {
                setTimeout(function() {
                    arr[num]=zero;
                    end();
                    soundMove();
                    binding();
                }, 600);
            } else {
                Ai();
            };
        };
    } else {
        if(arr[num]==fone) {
            setTimeout(function() {
                arr[num]=zero;
                end();
                soundMove();
                binding();
            }, 600);
        } else {
            Ai();
        };
    };
};
/*------------------------------------Функция Второго Хода-------------------*/
function moveTwo() {
    if(arr[0]==zero && arr[1]==zero && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==zero && arr[2]==zero && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[2]==zero && arr[1]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==zero && arr[4]==zero && arr[5]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[5]==zero && arr[3]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==zero && arr[5]==zero && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==zero && arr[7]==zero && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[7]==zero && arr[8]==zero && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==zero && arr[8]==zero && arr[7]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[3]==zero && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==zero && arr[6]==zero && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[6]==zero && arr[3]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==zero && arr[4]==zero && arr[7]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[7]==zero && arr[1]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==zero && arr[7]==zero && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[5]==zero && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[5]==zero && arr[8]==zero && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[8]==zero && arr[5]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[4]==zero && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[8]==zero && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[8]==zero && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[4]==zero && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[6]==zero && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[6]==zero && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else {
        moveThree();
    };
};
/*------------------------------------Функция Третьего Хода-------------------*/
function moveThree() {
    if(arr[0]==cross && arr[1]==cross && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==cross && arr[2]==cross && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==cross && arr[2]==cross && arr[1]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==cross && arr[4]==cross && arr[5]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==cross && arr[5]==cross && arr[3]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==cross && arr[5]==cross && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==cross && arr[7]==cross && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[7]==cross && arr[8]==cross && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==cross && arr[8]==cross && arr[7]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==cross && arr[3]==cross && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==cross && arr[6]==cross && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==cross && arr[6]==cross && arr[3]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==cross && arr[4]==cross && arr[7]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==cross && arr[7]==cross && arr[1]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==cross && arr[7]==cross && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==cross && arr[5]==cross && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[5]==cross && arr[8]==cross && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==cross && arr[8]==cross && arr[5]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==cross && arr[4]==cross && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==cross && arr[8]==cross && arr[0]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==cross && arr[8]==cross && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==cross && arr[4]==cross && arr[6]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==cross && arr[6]==cross && arr[2]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==cross && arr[6]==cross && arr[4]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else {
        if(lite==true) {
            moveOne();
        } else if(middle==true) {
            moveSix();
        } else if(hard==true) {
            let n3 = Math.floor(Math.random() * 3);
            if(n3==0) {
                moveSix();
            } else {
                moveFour();
            };
        };
    };
};
/*-----------------------------------Функция Четвертого Хода-----------------*/
function moveFour() {
    if(Iam==true && arr[4]==cross && arr[0]==zero && arr[8]==cross && arr[2]==fone && move==2) {
        setTimeout(function() { 
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==cross && arr[2]==zero && arr[6]==cross && arr[0]==fone && move==2) {
        setTimeout(function() { 
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==cross && arr[6]==zero && arr[2]==cross && arr[0]==fone && move==2) {
        setTimeout(function() { 
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==cross && arr[8]==zero && arr[0]==cross && arr[2]==fone && move==2) {
        setTimeout(function() { 
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[0]==cross && arr[8]==cross && arr[1]==fone && move==2) {
        setTimeout(function() { 
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[2]==cross && arr[6]==cross && arr[1]==fone && move==2) {
        setTimeout(function() { 
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[5]==cross && arr[7]==cross && arr[8]==fone && move==2) {
        setTimeout(function() { 
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[0]==cross && arr[7]==cross && arr[6]==fone && move==2) {
        setTimeout(function() { 
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[2]==cross && arr[7]==cross && arr[8]==fone && move==2) {
        setTimeout(function() { 
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[6]==cross && arr[5]==cross && arr[8]==fone && move==2) {
        setTimeout(function() { 
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==true && arr[4]==zero && arr[8]==cross && arr[3]==cross && arr[6]==fone && move==2) {
        setTimeout(function() { 
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else {
        moveFive();
    };
};
/*---------------------------------Функция Пятого Хода------------------------*/
function moveFive() {
    if(Iam==false && arr[0]==zero && arr[2]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[0]==zero && arr[4]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[0]==zero && arr[6]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[0]==zero && arr[8]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[0]==zero && arr[8]==cross && arr[2]==zero && arr[1]==cross && arr[6]==fone && move==2) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[0]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[2]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[4]==cross && arr[3]==fone && move==1) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[6]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[7]==cross && arr[3]==fone && move==1) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[1]==zero && arr[8]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[2]==zero && arr[0]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[2]==zero && arr[4]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[2]==zero && arr[6]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[2]==zero && arr[6]==cross && arr[0]==zero && arr[1]==cross && arr[8]==fone && move==2) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[2]==zero && arr[8]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[3]==zero && arr[2]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[3]==zero && arr[4]==cross && arr[1]==fone && move==1) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[3]==zero && arr[5]==cross && arr[1]==fone && move==1) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[3]==zero && arr[6]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[3]==zero && arr[8]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[0]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[1]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[3]==cross && arr[2]==zero && arr[8]==cross && arr[6]==fone && move==2) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[4]==cross && arr[7]==fone &&  move==1) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[6]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[7]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[5]==zero && arr[8]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[0]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[2]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[2]==cross && arr[0]==zero && arr[3]==cross && arr[8]==fone && move==2) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[3]==cross && arr[7]==fone && move==1) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[4]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[6]==zero && arr[8]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[0]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[1]==cross && arr[6]==zero && arr[8]==cross && arr[2]==fone && move==2) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[2]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[3]==cross && arr[6]==fone && move==1) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[4]==cross && arr[5]==fone && move==1) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[5]==cross && arr[8]==fone && move==1) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[6]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[7]==zero && arr[8]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[0]==cross && arr[2]==fone && move==1) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[0]==cross && arr[2]==zero && arr[5]==cross && arr[6]==fone && move==2) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[2]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[4]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[5]==cross && arr[7]==fone && move==1) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(Iam==false && arr[8]==zero && arr[6]==cross && arr[0]==fone && move==1) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else {
        moveSix();
    };
};
/*---------------------------------Функция Шестого Хода-----------------------*/
function moveSix() {
    if(arr[0]==zero && arr[4]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[1]==fone && arr[2]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[0]==zero && arr[3]==fone && arr[6]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==zero && arr[4]==fone && arr[7]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[1]==zero && arr[0]==fone && arr[2]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[4]==fone && arr[6]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[1]==fone && arr[0]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[2]==zero && arr[5]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==zero && arr[4]==fone && arr[5]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[3]==zero && arr[0]==fone && arr[6]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[0]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[0]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[2]==fone && arr[6]==fone) {
        setTimeout(function() {
            arr[2]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[1]==fone && arr[7]==fone) {
        setTimeout(function() {
            arr[1]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[4]==zero && arr[3]==fone && arr[5]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[5]==zero && arr[4]==fone && arr[3]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[5]==zero && arr[2]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[8]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==zero && arr[4]==fone && arr[2]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==zero && arr[3]==fone && arr[0]==fone) {
        setTimeout(function() {
            arr[3]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[6]==zero && arr[7]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[7]==zero && arr[4]==fone && arr[1]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[7]==zero && arr[6]==fone && arr[8]==fone) {
        setTimeout(function() {
            arr[6]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[8]==zero && arr[4]==fone && arr[0]==fone) {
        setTimeout(function() {
            arr[4]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[8]==zero && arr[5]==fone && arr[2]==fone) {
        setTimeout(function() {
            arr[5]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else if(arr[8]==zero && arr[7]==fone && arr[6]==fone) {
        setTimeout(function() {
            arr[7]=zero;
            soundMove();
            end();
            binding();
        }, 600);
    } else {
        moveOne();
    };
};
/*------------------------Функция Кнопок Игрового Поля-------------------*/
function smileSound() {
    let audio = new Audio();
    audio.src="audio/smile.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
}

function soundMove2() {
    let audio = new Audio();
    audio.src="audio/move2.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 30);
};

function soundMove() {
    let audio = new Audio();
    audio.src="audio/move.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 120);
};

function soundEnd() {
    let audio = new Audio();
    audio.src="audio/end.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundDraw() {
    let audio = new Audio();
    audio.src="audio/end.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundStart() {
    let audio = new Audio();
    audio.src="audio/start.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundClear() {
    let audio = new Audio();
    audio.src="audio/clear.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundClose() {
    let audio = new Audio();
    audio.src="audio/close.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundMenu() {
    let audio = new Audio();
    audio.src="audio/start.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundChoise() {
    let audio = new Audio();
    audio.src="audio/choise.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundVictory() {
    let audio = new Audio();
    audio.src="audio/start.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundInfo() {
    let audio = new Audio();
    audio.src="audio/info.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundDin() {
    let audio = new Audio();
    audio.src="audio/din.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};

function soundSound() {
    let audio = new Audio();
    audio.src="audio/sound.mp3";
    audio.autoplay = true;
    audio.volume = (vol / 100);
};
/*------------------------Фунция Звука Игрового Поля---------------------*/
let box = document.querySelectorAll('.box');
box.forEach(function(item, index) {
    item.addEventListener('touchstart', clickBox);
    item.addEventListener('click', clickBox);

    function clickBox() {
        if(stop==true) {
            if(arr[index]==fone) {
                arr[index]=cross;
                move ++;
                soundMove2();
                end();
                Ai();
                binding();
            };
        } else {
            return;
        };
    };
});
