<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <main class="w-screen h-screen overflow-hidden relative">
        <NavBar active-section="contact"/>
        <img class="absolute -top-[10%] -left-[30%] z-[-1] mix-blend-hard-light w-[60em]" src="../assets/images/purple-flare.png" alt="" />
        <section class="relative flex justify-center gap-[10%] items-center max-w-[1300px] mx-auto px-[7%] mt-4 ">
            <div class="text-white hidden md:flex flex-col gap-3 text-[13px] self-start mt-20">
                <h1 class="font-clash text-purple"> Get in touch </h1>
                <p> Contact <br> Information </p>
                <p> 27, Alara Street Yaba 100012 Lagos State</p>
                <p> Call Us: 07067981819</p>
                <p> We are open from Monday-Friday 08:00am - 05:00pm</p>

                <div>
                    <p class="mb-2">Share on </p>
                    <div class="flex flex-row gap-2 items-center"> <a href="">
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
                    </div>

                </div>

            </div>

            <div class="bg-none lg:bg-bright-purple/5 p-4 lg:p-14 w-full lg:basis-6/12">
                <h1 class="font-clash font-semibold text-xl  text-purple mb-6 max-w-[200px] lg:max-w-none">Questions or need assistance? <br>
                    Let us know  about it!</h1>
                <form action="" class="flex flex-col gap-5 text-white">
                    <input class="pl-8 p-1 bg-transparent border w-full" type="text" placeholder="First Name" name="firstname">
                    <input class="pl-8 p-1 bg-transparent border w-full" type="email" placeholder="Mail" name="email">
                    <textarea class="pl-8 p-1 bg-transparent border w-full" name="" id="message" placeholder="Message" cols="30" rows="10 "></textarea>
                    
                    <button type="submit" class="btn-purple-gradient lg:self-center text-white py-4 px-14"> Submit </button>
                </form>
            </div>
        </section>

    </main>
</template>