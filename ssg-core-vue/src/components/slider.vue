<template>
    <div class="slider">
        
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">

            <div class="slide first">
                <img src="@/assets/codigos.jpg" alt="">
            </div>
            <div class="slide">
                <img src="@/assets/jogos-digitais-Pixabay.jpg" alt="">
            </div>
            <div class="slide">
                <img src="@/assets/activity-adult-device.jpg" alt="">
            </div>
            <div class="slide last">
                <img src="@/assets/jogos-digitais-senai.jpg" alt="">
            </div>

            <div class="navegation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>

        </div>

        <div class="manual-navegation">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
            <label for="radio4" class="manual-btn"></label>
        </div>

    
    </div>
</template>
<script>
export default {
    //eslint-disable-next-line vue/multi-word-component-names
    name: 'Slider'
}
</script>
<style>
    .slider{
    margin: 0 auto;
    margin-top: 3em;
    width: 1000px;
    height: 500px;
    overflow: hidden;
}

.slides{
    width: 400%;
    height: 500px;
    display: flex;
}

.slides input{
    display: none;
}

.slide{
    width: 25%;
    position: static;
}

#radio2:checked ~ .slide{
    transition: 1s;
}

#radio3:checked ~ .slide{
    transition: 1s;
}

#radio4:checked ~ .slide{
    transition: 1s;
}

.slide img{
    width: 1000px;
}

.manual-navegation{
    position: absolute;
    width: 1000px;


    margin-top: -2.7%;
    display: flex;
    justify-content: center;
}

.manual-btn{
    border: 2px solid white;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
}

.manual-btn:not(:last-child){
    margin-right: 10px;
}

.manual-btn:hover{
    background-color: white;
}

#radio1:checked ~ .first{
    margin-left: 0;
}

#radio2:checked ~ .first{
    margin-left: -25%;
}

#radio3:checked ~ .first{
    margin-left: -50%;
}

#radio4:checked ~ .first{
    margin-left:-75%;
}

.navegation-auto div{
    border: solid white 2px;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: .5s;
}

.navegation-auto{
    position: absolute;
    width: 1000px;
    margin-top: 460px;
    
    display: flex;
    justify-content: center;
}

.navegation-auto div:not(:last-child){
    margin-right: 10px;
}

#radio1:checked ~ .navegation-auto .auto-btn1{
    background-color: #d1deea;
}

#radio2:checked ~ .navegation-auto .auto-btn2{
    background-color: #d1deea;
}

#radio3:checked ~ .navegation-auto .auto-btn3{
    background-color: #d1deea;
}

#radio4:checked ~ .navegation-auto .auto-btn4{
    background-color: #d1deea;
}
</style>