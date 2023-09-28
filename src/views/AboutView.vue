<script setup>

</script>

<template>
    <div class="flex h-screen w-[100vw] justify-center items-center" >
    <!-- style="perspective:500px"> -->
      <span class="lens-flare"></span>
        <button class="transition px-4 py-2 text-xl font-sans border-[5px] text-white border-[#272727]">
            Hover me
        </button>
    </div>


</template>

<style scoped>
        .lens-flare {
            width: 150px;
            height: 150px;
            background: rgba(127, 0, 127, 0.188);
            position: relative;
            animation: flareAnimation 3s linear infinite;
            box-shadow: 0 0 200px rgba(128, 0, 128, 0.7);
            border-radius: 50%;
        }

        @keyframes flareAnimation {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.2);
                opacity: .5;
            }
            100% {
                transform: scale(1);
            }
        }
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