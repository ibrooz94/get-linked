<script setup>
const criteriaList = [
  {
    question: "Innovation and Creativity:",
    answer: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."
  },
  {
    question: "Functionality:",
    answer: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
  },
  {
    question: "Impact and Relevance:",
    answer: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits."
  },
  {
    question: "Technical Complexity:",
    answer: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
  },
  {
    question: "Adherence to Hackathon Rules:",
    answer: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
  }
];

</script>

<template>

<p class="font-bold pb-[22px] leading-6 text-white" v-for="(criteria, index) in criteriaList" :key="index">
    <span class="text-purple text-base">{{ criteria.question }}:</span>
    {{ criteria.answer }}
  </p>
</template>