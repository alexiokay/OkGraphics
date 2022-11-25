<template lang="pug">
 

div(class=" w-[29%] relative flex flex-col items-center justify-center ")
    img(class=" h-52 w-full object-cover hover:cursor-pointer " :src="props.image  " )
    p(class="text-white text-center text-base font-brown mt-4") Przyciagnij wzrok        
    p(class="text-[#ffee32] text-center text-2xl mt-2 font-semibold  hover:cursor-pointer ") {{props.title}}
    p(class="text-white text-center mt-4 text-lg ") o jak się prezentujesz, wpływana pierwsze wrażenie. Ludzie w świecie biznesu mają tylko chwilę żeby Ciebie zauważyć. Czy Twoje Logodobrze się prezentuje?

</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass">
#middle
    transition: .5s ease
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
</style>
