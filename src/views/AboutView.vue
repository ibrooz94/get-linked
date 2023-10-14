<script setup>

</script>

<template>
    <div class="flex flex-col gap-8 h-screen w-[100vw] justify-center items-center text-white">

        <!-- <span class="lens-flare"></span>
        <button class="transition px-4 py-2 text-xl font-sans border-[5px] text-white border-[#272727]">
            Hover me
        </button> -->

            <details class="relative w-[80%] mx-auto cursor-pointer ">
                <summary class="list-none max-w-[450px] pb-4 border-b-2 text-[13px] lg:text-base border-b-purple">
                    <span> Can I work on a project I started before the hackathon? </span>
                </summary>
                <p class="inline-block py-4 w-[25em] text-[13px] lg:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam autem nemo eaque.
                </p>
            </details>
            <details class="relative cursor-pointer ">
                <summary class="list-none max-w-[450px] pb-4 border-b-2 text-[13px] lg:text-base border-b-purple">
                    <span> Can I work on a project I started before the hackathon?  Quisquam autem nemo eaque. </span>
                </summary>
                <p class="inline-block py-4 w-[25em] text-[13px] lg:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
            </details>

    </div>
</template>

<style scoped>

summary::after{
    content: '+';
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; 
    vertical-align: middle;
    color: #D434FE;
    position: absolute;
    right: 0;
    /* padding-left: .3em; */

}
details[open]>summary::after{
    content: '-';
}

.lens-flare {
    width: 150px;
    height: 150px;
    background: rgba(127, 0, 127, 0.188);
    position: relative;
    animation: flareAnimation 3s linear infinite;
    box-shadow: 0 0 200px rgba(128, 0, 128, 0.7);
    border-radius: 50%;
}
</style>