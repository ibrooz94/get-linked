<script setup>
const purpleGradient =
    "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";
</script>
<template>
    <nav class="flex items-center justify-between w-[80%] mx-auto pt-14 ">
        <div class="flex-none logo z-10">
            <img class="w-40" src="../assets/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div class="absolute md:static flex items-start md:items-center flex-col md:flex-row min-h-[60vh] md:min-h-fit bg-dark-purple md:bg-transparent
              left-0 top-0 w-full md:w-auto py-32 md:py-0 px-8 md:px-0 gap-5 md:gap-0 ">

            <ul class="flex flex-col md:flex-row md:items-center gap-5 lg:gap-14 text-white overflow-hidden transform duration-300">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>

            <button :class="purpleGradient" class="text-white py-4 px-14 md:px-8 lg:px-14 md:ml-8 lg:ml-16 transform duration-300">
                Register
            </button>
        </div>
    </nav>
</template>

    <!-- <style scoped>
    ul li {
        font-size: 1rem;
    }
    </style> -->
