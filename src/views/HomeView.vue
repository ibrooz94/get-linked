<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<template>
    <header>
         <NavBar />
        <section class="flex flex-col text-white  w-[80%] max-w-[1512px] mx-auto">
            <h1 class="lg:self-end lg:text-4xl italic font-bold mb-4 lg:mb-16"> Igniting a Revolution in <span class="custom-underline relative"> HR Innovation </span> </h1>
            <div class="flex flex-col lg:flex-row items-star mx-auto">
                <div class="flex flex-col gap-4">
                    <h1 class="font-clash lg:text-7xl font-bold">getlinked <span class="bulb relative">Tech</span>
                        Hackathon <span class="text-purple">1.0</span> 
                    </h1>
                    <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <p>00 <span>H</span> 00<span>M</span> 00<span>S</span></p>
                </div>
                <div class="hero-image">
                    <img src="../assets/images/glassesman.png" alt="">
                </div>
            </div>

        </section>

    </header>
</template>

<style scoped>
header {
    height: 100vh;
    position: relative;
    background: url('../assets/images/metrix.png');
    background-position: right;
    background-position-y: 20vh;
    background-repeat: no-repeat;
    background-size: contain;
    background-blend-mode: luminosity;
    overflow: hidden;
}

header::before {
    content: "";
    background-image: url('../assets/images/purple-flare-2.png'), url('../assets/images/purple-flare.png');
    background-size: 1000px, 800px;
    background-position: left, right;
    background-position-y: 0, 20vh ;
    background-repeat: no-repeat;
    
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
    z-index: -2;
}
.custom-underline::after{
    content: "";
    background-image: url('../assets/images/underline.svg');
    background-size: 100% 20px;
    background-repeat: no-repeat;
    background-position: 0 100%; 
    padding-bottom:20px; 
    transform: translateY(15px) ;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

}
.bulb::after{
    content: "";
    background-image: url('../assets/images/bulb.png');
    background-size: 100% 20px;
    background-repeat: no-repeat;
    background-position: 0 100%; 
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(7rem,-3.5rem);
}

.hero-image{
    /* transform: translate(25%, -10%); */

}
</style>