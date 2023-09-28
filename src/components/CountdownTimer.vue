<script setup>
import { ref, computed, watch } from "vue";

const targetDate = new Date("2023-09-30T11:59:59").getTime();

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const complete = ref(false)

const calculateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaining = Math.max(targetDate - now, 0);

    if (timeRemaining > 0) {
        hours.value = Math.floor(timeRemaining / (1000 * 60 * 60));
        minutes.value = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    } else {
        // complete.value = true
        
    }
};

const countdownInterval = setInterval(calculateCountdown, 1000);
calculateCountdown();

watch([hours, minutes, seconds], () => {

    if (hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
        clearInterval(countdownInterval);
        complete.value = true
    }
});

const countdown = computed(() => ({
    hours: hours.value,
    minutes: minutes.value,
    seconds: seconds.value,
}));
</script>

<template>
    <p class="text-6xl py-4 lg:pb-14 font-['Unica_One'] lg:self-start" :class="{ 'animate-ping': complete }">
        {{ countdown.hours }}<span class="text-sm">H</span>
        {{ countdown.minutes }}<span class="text-sm">M</span>
        {{ countdown.seconds }}<span class="text-sm">S</span>
    </p>
</template>