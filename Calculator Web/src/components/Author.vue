<template>
    <div class="info text-[4.2vw] rounded-[2.5vw] 
                sm:text-[3.9vw] sm:rounded-[2.3vw] 
                md:text-[3.4vw] md:rounded-[2vw]
                lg:text-[2.8vw] lg:rounded-[1.8vw]
                xl:text-[1.22vw] xl:rounded-[0.8vw]
                2xl:text-[2vw] 2xl:rounded-[1.1vw]">
                                                          
        <ul class="list">
            <li>Приложение <span style="color:rgb(128, 223, 255)">Калькулятор</span></li>
            <li>Разработал:</li>
            <li>Горланов Глеб</li>
            <li>Россия, г.Ярославль</li>
            <li><span style="color:rgb(255, 250, 163)">gorlanovgleb<span style="color:pink">@</span>gmail.com</span></li>
        </ul>
    </div>
</template>

<script></script>

<style scoped>
.info {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    aspect-ratio: 1 / 0.6;

    background-color: #000000cc;
    border: 1px groove rgba(255, 255, 255, 0.5);
    color: whitesmoke;
    font-family: 'Candara Light';
    font-weight: 100;

    font-style: italic;
    letter-spacing: 1px;
    line-height: 0;
    white-space: nowrap;
}

.list {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    text-align: center;
    line-height: 1.2;
}
</style>
