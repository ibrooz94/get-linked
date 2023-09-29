<script setup>
import NavBar from '../components/NavBar.vue';
import CoundownTimer from '../components/CountdownTimer.vue';
const purpleGradient = "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";

</script>

<template>
    <header class="before:animate-pulse">
        <NavBar />
        <section
            class="flex flex-col items-center lg:items-stretch text-white w-[85%] max-w-[1512px] mx-auto lg:gap-8 relative">
            <!-- stars  -->
            <img class="absolute top-[2.5em] left-[6em] -z-[1] w-2 lg:w-auto " src="../assets/images/star-1.png" alt="">
            <img class="absolute right-[10%] lg:right-[50%] top-[2em] lg:top-[5em] -z-[1] w-3 lg:w-auto "
                src="../assets/images/star-2.png" alt="">
            <img class="absolute left-[75%] lg:left-[30%] bottom-[65%] lg:bottom-[30%] -z-[1] w-3 lg:w-auto "
                src="../assets/images/star-2.png" alt="">

            <h1 class="lg:self-end lg:text-4xl italic font-extrabold text-center lg:text-start "> Igniting a Revolution in
                <span class="relative whitespace-nowrap">
                    HR Innovation
                    <img src="../assets/images/underline.svg" alt="Custom Underline"
                        class="absolute -bottom-4 left-0 right-0 w-full h-5">
                </span>
                <!-- <span class="custom-underline relative whitespace-nowrap"> HR Innovation </span> -->
            </h1>

            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center relative">
                <div class="flex flex-col items-center lg:items-start flex-initial gap-4 text-center lg:text-start">
                    <h1 class="font-clash text-3xl lg:text-7xl pt-8 max-w-[300px] lg:max-w-[600px] font-bold">
                        getlinked <span class="bulb relative">Tech
                            <span class="absolute top-[-.9em] right-[.5em] animate-bounce" style="font-size: .7em;">
                                <img src="../assets/images/bulb.png" alt="" style="width: 1em; height: auto;">
                            </span>
                        </span> <br>
                        Hackathon <span class="text-purple">1.0</span>
                        <span class="inline-block" style="font-size: 1em;"> <img src="../assets/images/chain.png" alt=""
                                style="width: 1em; height: auto;"></span>
                        <span class="inline-block lg:-mr-16" style="font-size: 1em;"> <img src="../assets/images/burst.png"
                                alt="" style="width: 1em; height: auto;"></span>
                    </h1>
                    <p class=" w-[260px] lg:w-[520px] ">Participate in getlinked tech Hackathon 2023 stand a chance to win a
                        Big prize</p>
                    <button :class="purpleGradient" class=" text-white py-4 px-14 lg:self-start">
                        Register
                    </button>
                    <CoundownTimer />
                </div>

                <div class="hero-image lg:w-[55%] -mx-[9%] relative">
                    <img class="opacity-70 grayscale-[80%] w-full" src="../assets/images/glassesman.png" alt="">
                    <img class="absolute top-0 animate-spin-slow" src="../assets/images/globe.png" alt="">

                </div>
            </div>

        </section>
    </header>
    <hr class="border-zinc-600 mb-14">

    <section class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[10%] w-[80%] max-w-[calc(1512px-15%)] mx-auto ">
        <div class="pb-8 relative ">
            <img class="absolute left-4" src="../assets/images/star_purple.png" alt="">
            <img class="absolute w-8 lg:w-auto bottom-[-5%] lg:bottom-[1.5em] right-[45%] lg:right-0 lg:-mr-14 " src="../assets/images/curly_arrow.png" alt="">
            <img src="../assets/images/big_idea.png" alt="">
        </div>
        <div class="text-white">
            <p class="text-xl lg:text-3xl font-clash font-bold mb-1"> Introduction to getlinked <br>
                <span class="text-purple"> techHackathon 1.0</span> </p>
            <p class="max-w-[500px]"> Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!</p>
        </div>
    </section>
</template>

<style scoped>
.hero-image {
    animation: scaleIn 1s ease-in;
}

header {
    position: relative;
    background: url('../assets/images/metrix.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
}

header::before {
    content: "";
    background-image: url('../assets/images/purple-flare.png'), url('../assets/images/purple-flare.png');
    background-size: 32em, 32em;
    background-position-x: 10%, 100%;
    background-position-y: 10%, 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    z-index: -1;

}

.custom-underline::after {
    content: "";
    background-image: url('../assets/images/underline.svg');
    background-size: 100% 20px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    padding-bottom: 20px;
    transform: translateY(15px);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

}

.bulbe::after {
    content: "";
    background-image: url('../assets/images/bulb.png');
    /* Replace with the path to your crown image */
    background-repeat: no-repeat;
    background-size: contain;
    /* Adjust as needed to control image size */
    width: 1em;
    /* Set the desired width */
    height: 1em;
    /* Set the desired height */
    position: absolute;
    top: -0.7em;
    /* Adjust to position the image above the text */
    left: 80%;
    transform: translateX(-50%);
    z-index: 1;
    /* Ensure the image is above the text */
}

@keyframes slidein {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);

    }
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);

    }
}
</style>