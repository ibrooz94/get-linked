<script setup>
const purpleGradient =
    "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";
</script>
<template>
    <nav class="flex items-center justify-between mx-36 ">
        <div class="logo">
            <img class="w-40" src="../assets/getlinked_logo.png" alt="logo" srcset="" />
        </div>

        <div class="md:static absolute md:flex-row flex-col md:min-h-fit min-h-[60vh] md:bg-transparent bg-dark-purple left-0 top-0 md:w-auto w-full py-28 px-8 flex gap-5 items-start md:items-center">
            <ul class="flex md:flex-row flex-col items-center md:gap-14 gap-5 text-white ">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>

            <button :class="purpleGradient" class="text-white py-4 px-14 lg:ml-16 xl:ml-32">
                Register
            </button>
        </div>
    </nav>
</template>
