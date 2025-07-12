<template>
    <div class="info text-[4.2vw] rounded-[2.5vw]">
                                                          
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
