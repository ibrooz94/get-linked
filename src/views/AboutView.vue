<script setup>

</script>

<template>
    <div class="flex h-screen w-[50vw] justify-center items-center" >
    <!-- style="perspective:500px"> -->

        <button class="transition px-4 py-2 text-xl font-sans border-[5px] text-white border-[#272727]">
            Hover me
        </button>
    </div>


</template>

<style scoped>

 .transition{
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all 1500ms;
 }
 .transition:hover{
    color: black
 }
 .transition::before{
    content: '';
    background-color: yellow;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom right;
    transform: rotate(90deg);
    /* transition: transform 1s, background-color 1s 400ms; */
    transition: all 1s;
 }
 .transition:hover::before{
    transform: rotate(0deg);
    background-color: aquamarine;
 }
</style>