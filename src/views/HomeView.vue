<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar.vue";
import CoundownTimer from "../components/CountdownTimer.vue";
import FAQs from "../components/FAQs.vue";
import Criteria from "../components/Criteria.vue";
import { setupGSAPAnimation } from "../components/useAnimation";
import Timeline from "../components/Timeline.vue";

gsap.registerPlugin(ScrollTrigger);
const { animateFadeRight, animateFadeLeft, updateNavbarActiveSection } = setupGSAPAnimation();
const purpleGradient =
  "bg-gradient-to-r from-purple to-bright-purple hover:bg-gradient-to-t hover:from-bright-purple hover:to-purple";

// Lenis Smoothscroll BoilerPlate
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  ScrollTrigger.update;
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Handle smoothscroll to section
function handleScrollTo(target) {
  lenis.scrollTo(target, {offset: -120})
}

const main = ref();
let activeSection = ref()
let ctx;

onMounted(() => {

// GSAP OnScroll Animation
  ctx = gsap.context((self) => {
    const fadeRight = self.selector("[data-fade-right]");
    fadeRight.forEach(animateFadeRight);

    const fadeLeft = self.selector("[data-fade-left]");
    fadeLeft.forEach(animateFadeLeft);

    updateNavbarActiveSection(activeSection)

  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <NavBar @scroll-to="handleScrollTo" :activeSection="activeSection"/>
  <main ref="main" class="overflow-x-hidden">
    <!-- HEADER -->
    <header class="before:animate-pulse bg-mobile lg:before:bg-large">
      <hr class="border-zinc-600 mb-4" />

      <section class="flex flex-col items-stretch text-white px-0 lg:px-[7%] max-w-[1512px] mx-auto lg:gap-8">
        <h1 class="lg:self-end lg:text-4xl italic font-bold text-center lg:text-start">
          Igniting a Revolution in
          <span class="relative whitespace-nowrap">
            HR Innovation
            <img src="../assets/images/underline.svg" alt="Custom Underline"
              class="absolute -bottom-4 left-0 right-0 w-full h-5" />
          </span>
        </h1>


        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center relative">
          <!-- stars  -->
          <img class="absolute top-4 lg:top-[-5%] left-[5%] -z-10 w-2 lg:w-auto" src="../assets/images/star-1.png"
            alt="" />
          <img class="absolute top-[2%] right-[10%] lg:top-[5%] lg:right-[40%] -z-10 w-3 lg:w-auto"
            src="../assets/images/star-2.png" alt="" />
          <img class="absolute left-[75%] lg:left-[30%] bottom-[65%] lg:bottom-[30%] -z-10 w-3 lg:w-auto"
            src="../assets/images/star-2.png" alt="" />
          <Transition name="slide-fade" appear>
            <div class="flex flex-col items-center lg:items-start flex-initial gap-4 text-center lg:text-start">
              <h1 class="font-clash text-3xl lg:text-7xl pt-8 max-w-[300px] lg:max-w-[600px] font-bold">
                getlinked
                <span class="bulb relative">Tech
                  <span class="absolute top-[-.9em] right-[.5em] text-[.7em] animate-bounce">
                    <img src="../assets/images/bulb.png" alt="" class="w-[1em] h-auto;" />
                  </span>
                </span>
                <br />
                Hackathon
                <span class="text-purple">1.0</span>
                <span class="inline-block text-[1em] align-middle">
                  <img class="w-[1em] h-auto" src="../assets/images/chain.png" alt="" />
                </span>
                <span class="inline-block lg:-mr-16 text-[1em] align-middle">
                  <img class="w-[1em] h-auto" src="../assets/images/burst.png" alt="" /></span>
              </h1>

              <p class="w-[260px] lg:w-[520px]">
                Participate in getlinked tech Hackathon 2023 stand a chance to win
                a Big prize
              </p>

              <button :class="purpleGradient" class="text-white py-4 px-14 lg:self-start">
                <router-link :to="{name: 'register'}">
                Register
              </router-link>
              </button>
              <CoundownTimer />
            </div>

          </Transition>


          <Transition name="bounce" appear>

            <div class="lg:w-[55%] mx-[-9%] relative">
              <img class="opacity-70 grayscale-[70%] w-full mix-blend-luminosity" src="../assets/images/glassesman.png"
                alt="" />
              <img class="absolute top-0 animate-spin-slow" src="../assets/images/globe.png" alt="" />
            </div>

          </Transition>
        </div>

      </section>
    </header>

    <hr class="border-zinc-600 mb-14" />

    <!-- INTRODUCTION -->

    <section id="overview"
      class="overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-[10%] max-w-[1300px] mx-auto px-[7%] text-center lg:text-start">

      <div data-fade-left class="pb-16 relative">
        <img class="absolute lg:-left-[7%] top-[30%]" src="../assets/images/star_purple.png" alt="" />
        <img class="absolute w-[2em] lg:w-auto bottom-3 right-[45%] lg:bottom-0 lg:right-[-2em]"
          src="../assets/images/curly_arrow.png" alt="" />

        <img src="../assets/images/big_idea.png" alt="" />
      </div>

      <div data-fade-right class="text-white">
        <p class="text-xl lg:text-3xl font-clash font-bold mb-1">
          Introduction to getlinked <br />
          <span class="text-purple"> techHackathon 1.0</span>
        </p>
        <p class="max-w-[500px] leading-7 text-[13px] lg:text-[14px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>

    </section>

    <hr class="border-zinc-600 mt-14 h-4" />

    <!-- RULES AND GUIDELINES -->

    <section
      class="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-[10%] max-w-[1300px] px-[7%] mx-auto text-center lg:text-start">
      <img class="absolute -top-[20%] -left-[20%] lg:left-0 -z-10 lg:w-[45em] mix-blend-hard-light" src="../assets/images/purple-flare.png"
        alt="" />
      <img class="absolute bottom-0 lg:-bottom-[70%] lg:-right-[40%] -z-10 mix-blend-hard-light " src="../assets/images/purple-flare.png"
        alt="">

      <div data-fade-right class="text-white relative">
        <img class="absolute w-[1em] lg:w-fit top-0 lg:-top-[2em] left-[20em]" src="../assets/images/star-2.png" alt="" />
        <img class="absolute w-[1em] lg:w-fit bottom-0 lg:bottom-[1.5em] right-[70%] lg:right-0 lg:-mr-14"
          src="../assets/images/star-1.png" alt="" />

        <p class="text-xl lg:text-3xl font-clash font-bold mb-1">
          Rules and
          <br />
          <span class="text-purple">Guidelines</span>
        </p>
        <p class="max-w-[500px] leading-7 text-[13px] lg:text-[14px] pb-8">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div data-fade-left class="pb-8 relative">
        <img src="../assets/images/sitting_woman.png" alt="" />
      </div>
    </section>

    <hr class="border-zinc-600 my-6" />

    <!-- CRITERIA -->

    <section
      class="relative flex flex-col lg:flex-row items-center justify-center gap-[7%] max-w-[1512px] px-[7%] mx-auto text-center lg:text-start">
      <img class="absolute top-0 lg:-bottom-[10%] -left-[20%] lg:-left-[10%] -z-10 lg:w-[45em] mix-blend-hard-light"
        src="../assets/images/purple-flare.png" alt="" />
      <img class="absolute bottom-0 lg:-bottom-[20%] right-0 lg:-right[30%] -z-10 mix-blend-hard-light"
        src="../assets/images/purple-flare.png" alt="" />

      <div data-fade-right class="pb-8 basis-6/12 relative">
        <img class="w-auto object-fill" src="../assets/images/criteria.png" alt="" />
      </div>

      <div data-fade-right class="relative basis-6/12 max-w-[500px] lg:py-[4.5em] text-white text-[13px] lg:text-[14px]">
        <p class="text-xl lg:text-3xl font-clash font-bold mb-5">
          Judging Criteria
          <br />
          <span class="text-purple">Key attributes</span>
        </p>
        <div data-fade-right class="">
          <Criteria />
        </div>

        <button :class="purpleGradient" class="mt-4 text-white py-4 px-14 lg:self-start">
          <router-link :to="{name: 'register'}">
            Register
          </router-link>
        </button>
      </div>
    </section>

    <hr  class="border-zinc-600 my-6" />

    <!-- FAQs  -->

    <section id="faqs"
      class="relative flex flex-auto flex-col lg:flex-row  gap-[10%] max-w-[1300px] px-[7%] mx-auto text-center lg:text-start">


      <div data-fade-right class="text-white basis-6/12 relative">
        <img class="absolute w-[1em] lg:w-fit top-8 lg:-left-[15%]" src="../assets/images/star_purple.png" alt="" />
        <img class="absolute w-[1em] lg:w-fit bottom-0 lg:bottom-[1.5em] right-[70%] lg:right-0 lg:-mr-14"
          src="../assets/images/star-1.png" alt="" />

        <p class="text-xl lg:text-3xl font-clash font-bold mt-16 mb-5">
          Frequently Asked
          <br />
          <span class="text-purple">Questions</span>
        </p>
        <p class="mb-12">
          We got answers to the questions that you <br />
          might want to ask about getlinked Hackathon 1.0
        </p>


        <FAQs />

      </div>
      <div data-fade-left class="pb-8 basis-6/12 lg:mt-20 ">
        <img class="relative pt-20" src="../assets/images/faq.png" alt="" />
        <img class="absolute w-[10em] md:w-[15em] lg:w-fit top-5 lg:-top-10 left-[20%] lg:left-0"
          src="../assets/images/questionmarks.png" alt="" />
      </div>
    </section>

    <hr  class="border-zinc-600 my-20" />

    <!-- TIMELINE -->

    <section id="timeline" class="relative flex flex-col items-center max-w-[1300px] px-[7%] mx-auto text-center">
      <img class="absolute w-[1em] lg:w-fit top-[8em] left-[25%]" src="../assets/images/star_purple.png" alt="" />
      <img class="absolute w-[1em] lg:w-fit bottom-[33%] right-[15%]" src="../assets/images/star-1.png" alt="" />
      <img class="absolute w-[1em] lg:w-fit bottom-0 left-24" src="../assets/images/star-2.png" alt="" />

      <div class="text-white mb-12 lg:mb-20">
        <p class="text-xl lg:text-3xl  font-clash font-bold mb-4">
          Timeline
        </p>
        <p class="text-center max-w-[350px]">
          Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>

      </div>
      <Timeline />
    </section>

    <hr class="border-zinc-600 my-20" />

    <!-- PRIZES AND REWARDS -->

    <section class="flex flex-col items-center text-white px-0 lg:px-[7%] max-w-[1512px] mx-auto lg:gap-8 ">
      <p data-fade-left class="lg:self-end lg:pr-16 lg:pl-8 text-base text-center lg:text-start max-w-[550px] mb-8">
        <span class="font-clash font-bold text-3xl">Prizes and <br> <span class="text-purple">Rewards</span> </span><br>
        Highlight of the prizes or rewards for winners
        and for participants.
      </p>

      <div class="flex w-full flex-col lg:flex-row justify-between items-center">
        <div data-fade-right class="flex lg:-mt-12">
          <img class src="../assets/images/trophy.png" alt="">
        </div>

        <div data-fade-left class="flex items-center gap-2 mt-24 lg:mt-32 lg:gap-4">
          <div
            class="relative font-bold text-[12px] lg:text-3xl text-center border border-purple bg-purple/10 px-4 pt-[18%] pb-5 rounded-lg  ">
            <img class="absolute m-auto left-0 right-0 -top-[40%]" src="../assets/images/silver_medal.png" alt="">
            <p>2nd <span class="block font-semibold lg:text-2xl">Runner</span> </p>
            <p class="text-purple mt-4"> #300,000 </p>
          </div>
          <div data-fade-left
            class="mt-12 relative font-bold text-[12px] lg:text-3xl text-center border border-purple bg-purple/10 px-4 pt-[18%] pb-5 rounded-lg ">
            <img class="absolute m-auto left-0 right-0 -top-[55%] transfrom scale-[1.4]"
              src="../assets/images/gold_medal.png" alt="">
            <p>1st <span class="block font-semibold lg:text-2xl">Runner</span> </p>
            <p class="text-bright-purple mt-4"> #400,000 </p>
          </div>
          <div data-fade-left
            class="relative font-bold text-[12px] lg:text-3xl text-center border border-purple bg-purple/10 px-4 pt-[18%] pb-5 rounded-lg  ">
            <img class="absolute m-auto left-0 right-0 -top-[40%]" src="../assets/images/bronze_medal.png" alt="">
            <p>3rd <span class="block font-semibold lg:text-2xl">Runner</span> </p>
            <p class="text-purple mt-4"> #150,000 </p>
          </div>

        </div>
      </div>
    </section>

    <hr class="border-zinc-600 my-20" />

    <!-- PARTNERS AND SPONSORS -->
    <section class="flex flex-col items-center text-white px-0 lg:px-[7%] max-w-[1512px] mx-auto lg:gap-8 ">
      <div class="text-center mb-12 lg:mb-20">
        <p class="text-xl lg:text-3xl  font-clash font-bold mb-4">
          Partners and Sponsors
        </p>
        <p class=" max-w-[500px]"> Getlinked Hackathon 1.0 is honored to have the following major companies as its
          partners and sponsors
        </p>

      </div>
      <div
        class="w-[90%] lg:w-full border px-12 py-8 lg:px-8 lg:py-12  border-purple grid grid-rows-2 place-content-center place-items-center grid-cols-3">

        <div class="relative p-2 w-full h-full first-letter flex justify-center items-center
                    after:absolute after:bottom-0 after:h-[1px] lg:after:h-1 after:w-[80%] after:bg-purple
                    before:absolute before:top-0 before:right-0 before:h-[90%] before:w-[1px] lg:before:w-1 before:bg-purple
                    ">
          <img src="../assets/images/sponsor_1.png" alt="sponsor_logo" />
        </div>
        <div class="relative p-2 w-full h-full first-letter flex justify-center items-center 
                    after:absolute after:bottom-0 after:h-[1px] lg:after:h-1 after:w-[80%] after:bg-purple">
          <img class="" src="../assets/images/sponsor_2.png" alt="sponsor_logo" />
        </div>
        <div class="relative p-2 w-full h-full first-letter flex justify-center items-center
                    after:absolute  after:bottom-0 after:h-[1px] lg:after:h-1 after:w-[80%] after:bg-purple
                    before:absolute before:top-0 before:left-0 before:h-[90%] before:w-[1px] lg:before:w-1 before:bg-purple
        ">
          <img src="../assets/images/sponsor_3.png" alt="sponsor_logo" />
        </div>
        <div class="relative p-2 w-full h-full first-letter flex justify-center items-center
        before:absolute before:bottom-0 before:right-0 before:h-[90%] before:w-[1px] lg:before:w-1 before:bg-purple">

          <img src="../assets/images/sponsor_4.png" alt="sponsor_logo" />
        </div>
        <div class="p-2 w-full h-full first-letter flex justify-center items-center">
          <img class="object-fit" src="../assets/images/sponsor_5.png" alt="sponsor_logo" />
        </div>
        <div class="relative p-2 w-full h-full first-letter flex justify-center items-center
        before:absolute before:bottom-0 before:left-0 before:h-[90%] before:w-[1px] lg:before:w-1 before:bg-purple">
          <img class="object-fit" src="../assets/images/sponsor_6.png" alt="sponsor_logo" />
        </div>
      </div>
    </section>

    <hr class="border-zinc-600 my-20" />

    <!-- PRIVACY POLICY AND TERMS -->
    <section
      class="relative flex flex-auto flex-col lg:flex-row  gap-[8%] max-w-[1500px] px-[7%] mx-auto justify-between items-start text-center lg:text-start">
      <img class="absolute -top-[15%] -left-[20%] lg:left-0 -z-10 lg:w-[45em] mix-blend-hard-light" src="../assets/images/purple-flare.png"
        alt="" />

      <div data-fade-right class="text-white basis-6/12 relative">
        <img class="absolute w-[1em] lg:w-fit top-8 lg:-left-[15%]" src="../assets/images/star_purple.png" alt="" />
        <img class="absolute w-[1em] lg:w-fit bottom-0 lg:bottom-[1.5em] right-[70%] lg:right-0 lg:-mr-14"
          src="../assets/images/star-1.png" alt="" />

        <p class="text-xl lg:text-3xl font-clash font-bold mb-5">
          Privacy Policy and
          <br />
          <span class="text-purple">Terms</span>
        </p>
        <p class="text-sm mb-4">Last updated on September 12, 2023</p>
        <p class="mb-12">
          Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take of our participant
        </p>

        <div class="p-12 flex flex-col bg-purple/5 border-purple border-2 gap-3">
          <p class="mb-8">
            At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your data when you participate in our tech
            hackathon event. By participating in our event, you consent
            to the practices described in this policy.
          </p>
          <p class="text-purple font-bold"> Licensing Policy </p>
          <p class=" font-bold"> Here are terms of our Standard License: </p>
          <p
            class="text-start pl-8 relative before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-green-500 mb-4">
            The Standard License grants you a non-exclusive right to
            navigate and register for our event </p>
          <p
            class="text-start pl-8 relative before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-green-500">
            You are licensed to use the item available at any free source
            sites, for your project developement </p>
          <button :class="purpleGradient" class="text-white py-4 px-14 self-center mt-4">
            Read More
          </button>
        </div>

      </div>
      <div data-fade-left class="pb-8 basis-6/12 flex self-center ">
        <img src="../assets/images/privacypolicy.png" alt="" />
      </div>
    </section>

    <hr class="border-zinc-600 mt-20" />

    <!-- FOOTER -->
    <footer
      class="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 max-w-[1550px] mx-auto px-[7%] py-20 pb-12 text-[12px] bg-[#100b20]">

      <div class="flex flex-col gap-12 overflow-hidden text-white">
        <div>
          <img class="w-40 mb-4" src="../assets/images/getlinked_logo.png" alt="logo" srcset="" />
          <p class="max-w-[400px] "> Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology</p>
        </div>

        <div class="">
          <span class="pr-3 border-r-2 border-purple"> Terms of use</span>
          <span class="pl-3"> Privacy Policy </span>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-purple font-semibold text-[14px]"> Useful Links </p>
        <ul class="flex flex-col text-white gap-4">
          <li><a href="#overview" @click="handleScrollTo('#overview')"> Overview </a></li>
          <li><a href="#faqs" @click="handleScrollTo('#faqs')"> FAQs</a></li>
          <li><a href="#timeline" @click="handleScrollTo('#timeline')"> Timeline</a> </li>
          <li><a href="#"> Contact</a> </li>
          <li class="flex gap-2 items-center"> <span class="text-purple"> Follow Us </span>
            <a href="">
              <img src="../assets/images/instagram.png" alt="instagram">
            </a>
            <a href="">
              <img src="../assets/images/x.png" alt="twitter||x">
            </a>
            <a href="">
              <img src="../assets/images/linkedin.png" alt="linkedin">
            </a>
            <a href="">
              <img src="../assets/images/facebook.png" alt="facebook">
            </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-purple font-semibold text-[14px]"> Contact Us </p>

        <ul class="flex flex-col text-white gap-2">
          <li class="flex gap-2 items-center">
            <img src="../assets/images/phone.png" alt="">
            +234 6707653444
          </li>
          <li class="flex gap-2 items-center max-w-[120px]">
            <img src="../assets/images/location.png" alt="">
            27,Alara Street
            Yaba 100012
            Lagos State
          </li>

        </ul>
      </div>

    </footer>

  </main>
</template>

<style scoped>
header {
  position: relative;
  background: url("../assets/images/metrix.png");
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  overflow: hidden;
}

header::before {
  content: "";
  background-image: url("../assets/images/purple-flare.png"),
    url("../assets/images/purple-flare.png");
  background-size: min(35em, 90%), min(32em, 90%);
  /* background-position: "8% 10%, 100% 100%"; */
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0.75;
  z-index: -1;
  background-blend-mode: hard-light;
}

.slide-fade-enter-active {
  transition: all .8s ease-out;
}

.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes slidein {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: transformX(100%);
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
