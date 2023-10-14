<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue';
import CoundownTimer from '../components/CountdownTimer.vue';
import FAQs from "../components/FAQs.vue"
import Criteria from '../components/Criteria.vue';

const purpleGradient = "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";

</script>

<template>
    <NavBar />
    <header class="before:animate-pulse bg-mobile lg:before:bg-large pt-[100px] ">
        <hr class="border-zinc-600 mb-4">

        <section class="flex flex-col items-stretch text-white px-0 lg:px-[7%] max-w-[1512px] mx-auto lg:gap-8  ">

            <h1 class="lg:self-end lg:text-4xl italic font-extrabold text-center lg:text-start ">
                Igniting a
                Revolution
                in
                <span class="relative whitespace-nowrap">
                    HR Innovation
                    <img src="../assets/images/underline.svg" alt="Custom Underline"
                        class="absolute -bottom-4 left-0 right-0 w-full h-5">
                </span>
                <!-- <span class="custom-underline relative whitespace-nowrap"> HR Innovation </span> -->
            </h1>

            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center relative">
                <!-- stars  -->
                <img class="absolute top-4 lg:top-[-5%] left-[5%] -z-[1] w-2 lg:w-auto " src="../assets/images/star-1.png"
                    alt="">
                <img class="absolute top-[2%] right-[10%] lg:top-[5%] lg:right-[40%]   -z-[1] w-3 lg:w-auto "
                    src="../assets/images/star-2.png" alt="">
                <img class="absolute left-[75%] lg:left-[30%] bottom-[65%] lg:bottom-[30%] -z-[1] w-3 lg:w-auto "
                    src="../assets/images/star-2.png" alt="">


                <div class="flex flex-col items-center lg:items-start flex-initial gap-4 text-center lg:text-start">

                    <h1
                        class="font-clash text-3xl lg:text-7xl pt-8 max-w-[300px] lg:max-w-[600px] font-bold">
                        getlinked
                        <span class="bulb relative">Tech
                            <span class="absolute top-[-.9em] right-[.5em] text-[.7em] animate-bounce">
                                <img src="../assets/images/bulb.png" alt="" class="w-[1em] h-auto;">
                            </span>
                        </span> <br> Hackathon
                        <span class="text-purple">1.0</span>
                        <span class="inline-block text-[1em] align-middle">
                            <img class="w-[1em] h-auto" src="../assets/images/chain.png" alt="">
                        </span>
                        <span class="inline-block lg:-mr-16 text-[1em] align-middle"> <img class="w-[1em] h-auto"
                                src="../assets/images/burst.png" alt=""></span>
                    </h1>

                    <p class=" w-[260px] lg:w-[520px] ">
                        Participate in getlinked tech Hackathon 2023 stand a chance to
                        win a
                        Big prize</p>

                    <button :class="purpleGradient" class=" text-white py-4 px-14 lg:self-start">
                        Register
                    </button>
                    <CoundownTimer />

                </div>



                <div class=" lg:w-[55%] mx-[-9%] relative">
                    <img class="opacity-70 grayscale-[70%] w-full mix-blend-luminosity"
                        src="../assets/images/glassesman.png" alt="">
                    <img class="absolute top-0 animate-spin-slow" src="../assets/images/globe.png" alt="">

                </div>
            </div>

        </section>
    </header>

    <hr class="border-zinc-600 mb-14">

    <!-- INTRODUCTION -->

    <section class="overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-[10%] max-w-[1300px] mx-auto
                    px-[7%] text-center lg:text-start ">
        <div class="pb-16 relative  ">
            <img class="absolute lg:-left-[7%] top-[30%]" src="../assets/images/star_purple.png" alt="">
            <img class="absolute w-[2em] lg:w-auto bottom-3 right-[45%] lg:bottom-0 lg:right-[-2em]"
                src="../assets/images/curly_arrow.png" alt="">

            <img src="../assets/images/big_idea.png" alt="">
        </div>
        <div class="text-white ">
            <p class="text-xl lg:text-3xl font-clash font-bold mb-1"> Introduction to getlinked <br>
                <span class="text-purple"> techHackathon 1.0</span>
            </p>
            <p class="max-w-[500px] leading-7 text-[13px] lg:text-[14px]"> Our tech hackathon is a melting pot of
                visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!</p>
        </div>

    </section>

    <hr class="border-zinc-600 mt-14 h-4 ">

    <!-- RULES AND GUIDELINES -->
    <section
        class="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-[10%] max-w-[1300px] px-[7%] mx-auto text-center lg:text-start">

        <img class="absolute -top-[20%] -left-[20%] lg:left-0  z-[-1] lg:w-[45em]" src="../assets/images/purple-flare.png"
            alt="">
        <!-- <img class="absolute bottom-0 lg:-bottom-[70%] lg:-right-[40%] z-[-1] "
            src="../assets/images/purple-flare-right.png" alt=""> -->

        <div class="text-white relative ">
            <img class="absolute w-[1em] lg:w-fit top-0 lg:-top-[2em] left-[20em]" src="../assets/images/star-2.png" alt="">
            <img class="absolute w-[1em] lg:w-fit bottom-0 lg:bottom-[1.5em] right-[70%] lg:right-0 lg:-mr-14 "
                src="../assets/images/star-1.png" alt="">

            <p class="text-xl lg:text-3xl font-clash font-bold mb-1"> Rules and
                <br>
                <span class="text-purple">Guidelines</span>

            </p>
            <p class="max-w-[500px] leading-7 text-[13px] lg:text-[14px] pb-8">
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a
                design maverick, or a concept wizard, you'll have the chance to transform
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
            </p>

        </div>
        <div class="pb-8 relative">
            <img src="../assets/images/sitting_woman.png" alt="">

        </div>

    </section>

    <hr class="border-zinc-600 my-6">

    <!-- CRITERIA -->
    <section
        class="relative flex flex-col lg:flex-row items-center justify-center gap-[7%] max-w-[1512px] px-[7%] mx-auto text-center lg:text-start">

        <img class="absolute top-0 lg:-bottom-[10%] -left-[20%] lg:-left-[10%] z-[-1] lg:w-[45em]"
            src="../assets/images/purple-flare.png" alt="">
        <img class="absolute bottom-0 lg:-bottom-[20%] right-0 z-[-1] " src="../assets/images/purple-flare.png" alt="">

        <div class="pb-8  basis-6/12 relative">
            <img class="w-auto object-fill" src="../assets/images/criteria.png" alt="">
        </div>

        <div
            class="relative  basis-6/12  max-w-[500px] lg:py-[4.5em] text-white text-[13px] lg:text-[14px] ">
            <p class="text-xl lg:text-3xl font-clash font-bold mb-5"> Judging Criteria
                <br>
                <span class="text-purple">Key attributes</span>
            </p>
            <Criteria/>

            <button :class="purpleGradient" class=" mt-4 text-white py-4 px-14 lg:self-start">
                Register
            </button>
        </div>
    </section>

    <hr class="border-zinc-600 my-6">

    <!-- FAQs  -->
    <section
        class="relative flex flex-auto flex-col-reverse lg:flex-row items-center justify-center gap-[10%] max-w-[1300px] px-[7%] mx-auto 
        text-center lg:text-start">

        <img class="absolute -top-[20%] -left-[20%] lg:left-0  z-[-1] lg:w-[45em]" src="../assets/images/purple-flare.png"
            alt="">

        <div class="text-white basis-6/12 relative ">
            <img class="absolute w-[1em] lg:w-fit top-0 lg:-top-[2em] left-[20em]" src="../assets/images/star-2.png" alt="">
            <img class="absolute w-[1em] lg:w-fit bottom-0 lg:bottom-[1.5em] right-[70%] lg:right-0 lg:-mr-14 "
                src="../assets/images/star-1.png" alt="">


            <p class="text-xl lg:text-3xl font-clash font-bold mb-5"> Frequently Asked
                <br>
                <span class="text-purple">Questions</span>
            </p>
            <p class="mb-12"> We got answers to the questions that you <br> might want to ask about getlinked Hackathon 1.0</p>

            <FAQs/>

        </div>
        <div class="pb-8 basis-6/12 relative">
            <img class="lg:pt-16" src="../assets/images/faq.png" alt="">
        </div>

    </section>

    <hr class="border-zinc-600 my-6">
</template>

<style scoped>
header {
    position: relative;
    background: url('../assets/images/metrix.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
    overflow: hidden;
}

header::before {
    content: "";
    background-image: url('../assets/images/purple-flare.png'), url('../assets/images/purple-flare.png');
    background-size: min(35em, 90%), min(32em, 90%);
    /* background-position: "8% 10%, 100% 100%"; */
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.75;
    z-index: -1;
    background-blend-mode: hard-light;

}

.lensflare::before {
    content: "";
    background-image: url('../assets/images/purple-flare.png'), url('../assets/images/purple-flare.png');
    background-size: min(40em, 90%), min(32em, 90%);
    background-position-x: 8%, 190%;
    background-position-y: 10%, 100%;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    z-index: -1;
    background-blend-mode: hard-light;

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
        transform: translateX(0);
    }

    100% {
        transform: transformX(100%);

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