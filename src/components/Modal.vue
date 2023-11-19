<script setup>
import {toRefs} from 'vue'

const props = defineProps(["modal-active"])
const emit = defineEmits(['close-modal'])

const {modalActive } = toRefs(props)

const closeModal = () =>{
    emit("close-modal", false)
}

</script>

<template>

    <teleport to='body'>
        <transition name="modal-animation">
            <div @click="closeModal" v-show="modalActive" class="modal fixed mx-auto left-0 right-0 top-0 bottom-0  z-50 bg-dark-purple/90 backdrop-blur-sm">
                <transition name="modal-animation-inner">
                    <div v-show="modalActive" @click.stop="" class="modal-inner max-w-fit mx-auto flex flex-col justify-center items-center h-screen">

                        <!-- Modal Content -->
                        <slot>
    
                        </slot>
    
                    </div>
                </transition> 
            </div>
        
        </transition>
    </teleport>
</template>


<style scoped>

</style>