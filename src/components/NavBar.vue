<script setup>
import { ref } from 'vue';
const purpleGradient = "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";
const hoverGradient = "hover:bg-gradient-to-r from-bright-purple to-purple hover:bg-clip-text hover:text-transparent transition-all";
const menuOpen = ref(false)

const stagger = (index) => {
    let delayVal = index * 100
    return {
        initial: { opacity: 0, x: 100, filter: 'blur(5px)' },
        enter: {
            opacity: 1, x: 0, scale: 1, filter: 'blur(0px)',
            transition: {
                delay: delayVal
            }
        }
    }
}

</script>
<template>
    <nav class="sticky backdrop-blur-lg top-[-10px] mt-[-110px]
    z-[999] flex items-center justify-between max-w-[1512px] mx-auto px-[7%] pt-8 pb-4 lg:h-auto">
        <div class="flex-none z-[11] ">
            <img class="w-40" src="../assets/images/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div :class="{ 'hidden': !menuOpen }" class="z-10 absolute lg:static lg:flex items-start lg:items-center flex-col lg:flex-row min-h-[500px] lg:min-h-fit bg-gradient-to-b from-dark-purple from-80% lg:bg-none
              left-0 top-0 w-full lg:w-auto py-24 lg:py-0 px-[7%] lg:px-0 lg:mx-0 gap-5 lg:gap-0 overflow-hidden">
            <ul class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 xl:gap-14 text-white overflow-hidden">
                <li v-motion="stagger(1)"><a href="#" :class="hoverGradient"> Timeline</a> </li>
                <li v-motion="stagger(2)"><a href="#" :class="hoverGradient"> Overview </a></li>
                <li v-motion="stagger(3)"><a href="#" :class="hoverGradient"> FAQs</a></li>
                <li v-motion="stagger(4)"><a href="#" :class="hoverGradient"> Contact</a> </li>
            </ul>

            <button :class="purpleGradient"
                class="text-white py-4 px-14 lg:ml-20 xl:ml-24 mt-6 lg:mt-0">
                Register
            </button>
        </div>

        <div class="lg:hidden z-[12] overflow-hidden">
            <img v-motion-roll-left @click="menuOpen = !menuOpen" v-if="!menuOpen" role="button"
                src="../assets/icons/hamburger.png" alt="hamburger_icon">
            <img v-motion-roll-right @click="menuOpen = !menuOpen" v-if="menuOpen" role="button"
                src="../assets/icons/close.png" alt="close_icon">
        </div>
    </nav>
</template>
