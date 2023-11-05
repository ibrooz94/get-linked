<script setup>
import { ref } from 'vue'
const emit = defineEmits(['scrollTo'])
const props = defineProps(["activeSection"])

function handleClick(sectionId) {
    emit('scrollTo', sectionId);
    menuOpen.value = false;

}
const purpleGradient = "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";
const hoverGradient = "hover:bg-gradient-to-r from-bright-purple to-purple hover:bg-clip-text hover:text-transparent transition-all";

const handleActiveSection = (el) =>{
    const activeSection = props.activeSection
    if (activeSection === el){
        return 'bg-gradient-to-r from-bright-purple to-purple bg-clip-text text-transparent transition-all font-extrabold'
    }else{
        return hoverGradient
    }
 } 
const menuOpen = ref(false)


</script>
<template>
    <nav class="z-[999] flex items-center justify-between max-w-[1512px] mx-auto px-[7%] pt-8 pb-4 lg:h-auto
        sticky backdrop-blur-lg top-0">
        <div class="flex-none z-[11]" :class="menuOpen ? 'fixed top-8 left-[7%] ' : 'statc'">
            <img class="w-40" src="../assets/images/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div :class="{ 'hidden': !menuOpen }" class="z-10 fixed h-screen lg:h-auto lg:static lg:flex items-start lg:items-center flex-col lg:flex-row min-h-[500px] lg:min-h-fit 
        bg-dark-purple lg:bg-transparent left-0 top-0 w-full lg:w-auto py-24 lg:py-0 px-[7%] lg:px-0 lg:mx-0 gap-5 lg:gap-0">
            <!-- bg-gradient-to-b from-dark-purple from-80% lg:bg-none -->
            <ul class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 xl:gap-14 text-white">
                <li>
                    <router-link :to="{ name: 'home', hash: '#overview' }" @click="handleClick('#overview')" :class="handleActiveSection('overview')">
                        Overview
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'home', hash: '#faqs' }" @click="handleClick('#faqs')" :class="handleActiveSection('faqs')">
                        FAQs
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'home', hash: '#timeline' }" @click="handleClick('#timeline')" :class="handleActiveSection('timeline')">
                        Timeline
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" :class="hoverGradient">
                        Contact Us
                    </router-link>
                </li>
            </ul>

            <button :class="purpleGradient" class="text-white py-4 px-14 lg:ml-20 xl:ml-24 mt-6 lg:mt-0">
                Register
            </button>
        </div>

        <div role="menu" class="lg:hidden z-[12]" :class="menuOpen ? 'fixed top-8 right-8' : 'static'" aria-label="Menu">
            <img @click="menuOpen = !menuOpen" v-if="!menuOpen" role="button" src="../assets/icons/hamburger.png"
                alt="hamburger_icon">
            <img @click="menuOpen = !menuOpen" v-if="menuOpen" role="button" src="../assets/icons/close.png"
                alt="close_icon">
        </div>
    </nav>
</template>


