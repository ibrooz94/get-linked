<script setup>
import { ref, toRefs } from 'vue'

const emit = defineEmits(['scrollTo'])
const props = defineProps(
    {
        activeSection : {
            type: String,
        },
        isSticky: {
            type: Boolean,
            default: true
        }
    }
    )

const { activeSection } = toRefs(props)
const menuOpen = ref(false)

function jumpToSection(sectionId) {
    emit('scrollTo', sectionId);
    menuOpen.value = false;

}

const handleActiveSection = (el) => {
    if (activeSection.value === el) {
        return 'bg-gradient-to-r from-bright-purple to-purple bg-clip-text text-transparent transition-all font-extrabold';
    }
    else {
        return "hover:bg-gradient-to-r from-bright-purple to-purple hover:bg-clip-text hover:text-transparent transition-all"
    }
};

</script>

<template>
    <nav class="z-30 flex items-center justify-between max-w-[1512px] mx-auto px-[7%] pt-8 pb-4 lg:h-auto"
        :class=" isSticky ? 'sticky backdrop-blur-lg top-0': ''">
        <div class="flex-none z-20" :class="menuOpen ? 'fixed top-8 left-[7%] ' : 'static'">
            <img class="w-40" src="../assets/images/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div :class="{ 'hidden': !menuOpen }"
            class="z-10 fixed h-screen lg:h-auto lg:static lg:flex items-start lg:items-center flex-col lg:flex-row min-h-[500px] lg:min-h-fit 
        bg-dark-purple lg:bg-transparent left-0 top-0 w-full lg:w-auto py-24 lg:py-0 px-[7%] lg:px-0 lg:mx-0 gap-5 lg:gap-0">
            <ul class="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 xl:gap-14 text-white">
                <li>
                    <router-link :to="{ name: 'home', hash: '#overview' }" @click="jumpToSection('#overview')"
                        :class="handleActiveSection('overview')">
                        Overview
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'home', hash: '#faqs' }" @click="jumpToSection('#faqs')"
                        :class="handleActiveSection('faqs')">
                        FAQs
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'home', hash: '#timeline' }" @click="jumpToSection('#timeline')" class="h"
                        :class="handleActiveSection('timeline')">
                        Timeline
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" :class="handleActiveSection('contact')">
                        Contact Us
                    </router-link>
                </li>
                <li>
                    <router-link to="/register" active-class="font-semibold relative bg-dark-purple from-transparent to-transparent 
                        after:absolute after:-top-1 after:-bottom-1 after:-right-1 after:-left-1 after:-z-10 
                        after:bg-gradient-to-r after:from-purple after:to-bright-purple after:p-1 hover:after:bg-none"
                        class="inline-block text-white py-4 px-14 lg:ml-6 xl:ml-8 bg-gradient-to-r from-bright-purple to-purple
                         hover:bg-gradient-to-b hover:from-purple hover:to-bright-purple">
                        Register
                    </router-link>
                </li>

            </ul>


        </div>

        <div role="menu" class="lg:hidden z-20" :class="menuOpen ? 'fixed top-8 right-8' : 'static'" aria-label="Menu">
            <img @click="menuOpen = !menuOpen" v-if="!menuOpen" role="button" src="../assets/icons/hamburger.png"
                alt="hamburger_icon">
            <img @click="menuOpen = !menuOpen" v-if="menuOpen" role="button" src="../assets/icons/close.png"
                alt="close_icon">
        </div>
    </nav>
</template>


