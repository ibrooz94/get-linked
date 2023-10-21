<script setup>
const timelineData = [
    {
        title: "Hackaton Annoucement",
        description: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
        date: "November 18, 2023"
    },
    {
        title: "Teams Registration begins",
        description: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        date: "November 18, 2023"
    },
    {
        title: "Teams Registration ends",
        description: "Interested Participants are no longer Allowed to register",
        date: "November 18, 2023"
    },
    {
        title: "Announcement of the accepted teams and ideas",
        description: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        date: "November 18, 2023"
    },
    {
        title: "Getlinked Hackathon 1.0 Offically Begins",
        description: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
        date: "November 18, 2023"
    },
    {
        title: "Demo Day",
        description: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        date: "November 18, 2023"
    },
]
</script>

<template>
    <div class="flex flex-col lg:flex-row items-center justify-center ">
        <ul class="relative text-white py-8 ">
            <li v-for="(item, index) in timelineData"
                class="flex flex-col lg:flex-row relative gap-4 lg:gap-10 items-start lg:items-center text-[12px] mb-8 lg:mb-20 pl-14 lg:pl-0">

                <div :class="index % 2 == 0 ? 'lg:order-3 lg:text-start' : 'lg:order-1 lg:text-end' "
                class="basis-6/12 text-start lg:text-[14px] ">
                    <span class="inline-block text-purple font-bold lg:text-2xl lg:mb-4"> {{ item.title }} </span> <br>
                    {{ item.description }}
                </div>

                <div
                    class="font-bold lg:text-2xl order-2 absolute left-1 -bottom-4 lg:static w-8 h-8 lg:w-14 lg:h-14 p-4 rounded-[50%] flex justify-center items-center border-8 border-dark-purple bg-gradient-to-r from-purple to-bright-purple">
                    <span> {{ index + 1 }}</span>
                </div>

                <div 
                :class="index % 2 == 0 ? 'lg:order-1 lg:text-end' : 'lg:order-3 lg:text-start' "
                class="basis-6/12 font-bold lg:text-2xl text-purple "> {{ item.date }} </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul::after {
    content: '';
    position: absolute;
    top: 0;
    left: 28px;
    width: 4px;
    background-color: purple;
    height: 100%;
    z-index: -1;
}

@media (min-width: 1024px) {
    ul::after {
        left: 50%;

    }

}
</style>