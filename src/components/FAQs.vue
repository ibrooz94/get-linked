<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from "gsap";
const faqs = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes, you can continue working on a pre-existing project.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "You can reach out to mentors or organizers for assistance.",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: "You can join a team or brainstorm ideas with other participants.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: "You can join a team during the hackathon if you don't have one.",
  },
  {
    question: "What happens after the hackathon ends?",
    answer: "After the hackathon, you can continue working on your project or showcase it.",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes, you can continue working on a pre-existing project.",
  },
]
const openItemIndex = ref(null);

function toggleAccordion(index) {

  if (openItemIndex.value === index) {
    openItemIndex.value = null
  } else {
    openItemIndex.value = index
  }
}
// GSAP animation
// onMounted(() => {
//   const detailsElements = document.querySelectorAll("details");
//   detailsElements.forEach((details) => {
//     const summary = details.querySelector("summary");
//     summary.addEventListener("click", () => {
//       const detailContent = details.querySelector('p');
//       const isClose = details.hasAttribute('open');

//       if (isClose) {
//         gsap.to(detailContent, { maxHeight: 0 });
//       } else {
//         gsap.to(detailContent, { maxHeight: '100px', duration: .5 });
//       }
//     });
//   });
// })

</script>
<template>
  <details v-for="(faq, index) in faqs" :key="index" @click.prevent="toggleAccordion(index)"
    :open="index === openItemIndex" class="inline w-full text-left cursor-pointer text-[14px] mb-8 ">
    <summary class="relative list-none pb-4 pr-4 border-b-2 text-[13px] w-full lg:text-[14px] border-b-purple">
      {{ faq.question }}
    </summary>
    <p class="py-2 text-[13px] overflow-hidden">
      {{ faq.answer }}
    </p>
  </details>
</template>

<style scoped>
summary::after {
  content: '+';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px;
  vertical-align: middle;
  color: #D434FE;
  position: absolute;
  right: 0;


}


details[open]>summary::after {
  content: '-';
}
</style>