<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import Modal from '../components/Modal.vue';

const modalActive = ref(false)


</script>

<template>
    <Modal :modal-active="modalActive" @close-modal="modalActive = false">
        <div class="modal-content flex flex-col p-8 lg:px-16 border-purple border-2 mx-8">
            <img class="" src="../assets/images/congratulation.png" alt="congratulation_image">
            <h1 class="text-base lg:text-3xl max-w-[500px] text-white font-semibold self-center text-center">Congratulations
                you have successfully Registered!</h1>
            <p class="mt-4 text-[12px] lg:text-sm max-w-[300px] self-center text-center text-white">Yes, it was easy and you
                did it! check your mail box for next step</p>

            <router-link class="mt-4 btn-purple-gradient text-center text-white py-4 px-14" :to="{ name: 'home' }">
                Back
            </router-link>
        </div>
    </Modal>

    <main class="relative">
        <NavBar active-section="register" :is-sticky="false" />
        <img class="absolute -top-[10%] -left-[30%] -z-10 mix-blend-hard-light w-[60em]"
            src="../assets/images/purple-flare.png" alt="" />
        <section
            class="relative flex flex-col lg:flex-row justify-center  items-center gap-[10%] max-w-[1300px] mx-auto mt-16">
            <div class="text-white flex gap-5 text-[13px] w-[15em] lg:w-auto mx-auto">

                <img src="../assets/images/designer_thumbs.png" alt="">
            </div>

            <div class="bg-none lg:bg-bright-purple/5 p-4 lg:px-20 lg:py-12 w-full lg:basis-7/12">
                <div class="text-white flex flex-col gap-2 lg:gap-3">
                    <h1 class="font-clash font-semibold text-xl text-purple max-w-[200px] lg:max-w-none mb-4">
                        Register
                    </h1>
                    <p class="text-[12px] lg:text-[14px] flex items-center">Be part of this movement!
                        <img class="inline-block self-center ml-4" src="../assets/images/movement.png" alt="">
                    </p>
                    <h2 class="text-2xl mb-4 font-semibold">CREATE YOUR ACCOUNT</h2>
                </div>

                <form ref="registerform" @submit.prevent="modalActive = true" class="flex flex-col mb-12 lg:mb-0">
                    <div class="grid grid-cols-2 gap-4  text-white">
                        <div class="mb-4 col-span-2 lg:col-span-1">
                            <label for="team_name" class="block text-sm ">Team's Name</label>
                            <input class="mt-1 p-2 w-full border bg-transparent" type="text" id="team_name" name="team_name" 
                            placeholder="Enter the name of your team"  required >
                        </div>
    
                        <div class="mb-4 col-span-2 lg:col-span-1">
                            <label for="phone_number" class="block text-sm text-white">Phone Number</label>
                            <input class="mt-1 p-2 w-full border bg-transparent" type="text" id="phone_number" name="phone_number" required>
                        </div>
    
                        <div class="mb-4 col-span-2 lg:col-span-1">
                            <label for="email" class="block text-sm text-white">Email:</label>
                            <input class="mt-1 p-2 w-full border bg-transparent" type="email" id="email" name="email" required>
                        </div>

                        <div class="mb-4 col-span-2 lg:col-span-1">
                            <label for="pronect_topic" class="block text-sm text-white">Project Topic</label>
                            <input class="mt-1 p-2 w-full border bg-transparent" type="text" id="project_topic" name="project_topic" 
                            placeholder="" required >
                        </div>

                        <div class="mb-4 col-span-1">
                            <label for="category" class="text-white block">Category </label>
                            <select name="category" id="category" class="p-4 text-base w-full border bg-transparent text-white">
                                <option value="" selected disabled hidden> Select your category</option>
                                <option value="AI">Artificial Intelligence</option>
                            </select>
                        </div>
                        <div class="mb-4 col-span-1">
                            <label for="group_size" class="text-white block">Group Size </label>
                            <select name="group_size" id="group_size" class="p-4 text-base w-full border bg-transparent text-white">
                                <option value="" selected disabled hidden> Select </option>
                                <option value="2to4">2 - 4</option>
                            </select>
                        </div>
                    </div>

                    <div class="self-start">
                        <input type="checkbox" name="termsandconditions" id="termsandconditions" required>
                        <label class="text-sm text-white" for="termsandconditions"> I agreed with the event terms and conditions and privacy policy </label>
                    </div>
                    
                    <button type="submit" class="mt-8 btn-purple-gradient text-white py-4 px-14"> Submit </button>
                </form>
            </div>
        </section>

    </main>
</template>

<style scoped>
select > option {
    color: black;
    padding: 2rem;
}
</style>