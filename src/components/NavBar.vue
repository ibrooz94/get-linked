<script setup>
import {ref} from 'vue';
const purpleGradient = "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";
const hoverGradient = "hover:bg-gradient-to-r from-bright-purple to-purple hover:bg-clip-text hover:text-transparent";
const menuOpen = ref(false)
</script>
<template>
    <nav class="flex items-center justify-between max-w-[1512px] w-[85%] mx-auto pt-14 ">
        <div class="flex-none logo z-[11] ">
            <img class="w-40" src="../assets/images/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div :class="{'hidden': !menuOpen}" class="z-10 absolute lg:static lg:flex items-start lg:items-center flex-col lg:flex-row min-h-[500px] lg:min-h-fit bg-gradient-to-b from-dark-purple from-80% lg:bg-none
              left-0 top-0 w-full lg:w-auto py-32 lg:py-0 px-[8%] lg:px-0 lg:mx-0 gap-5 lg:gap-0 ">

            <ul class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 xl:gap-14 text-white overflow-hidden">
                <li><a href="#" :class="hoverGradient"> Timeline</a> </li>
                <li><a href="#" :class="hoverGradient"> Overview </a></li>
                <li><a href="#" :class="hoverGradient"> FAQs</a></li>
                <li><a href="#" :class="hoverGradient"> Contact</a> </li>
                
            </ul>

            <button :class="purpleGradient" class="text-white py-4 px-14 lg:ml-20 xl:ml-24 mt-6 lg:mt-0">
                Register
            </button>
        </div>
        <img @click="menuOpen= !menuOpen" :class="{'hidden': menuOpen}" class="lg:hidden z-[11] transition-all duration-75" role="button" src="../assets/icons/hamburger.png" alt="">
        <img @click="menuOpen= !menuOpen" :class="{'hidden': !menuOpen}" class="lg:hidden z-[11]" role="button" src="../assets/icons/close.png" alt="">
    </nav>
    <hr class="border-zinc-600 my-8">

</template>
