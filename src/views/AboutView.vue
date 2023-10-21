<script setup>
import Timeline from "../components/Timeline.vue"


</script>

<template>
<Timeline/>
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