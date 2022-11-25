<template lang="pug">
 
div(class="w-full md:w-1/3 lg:w-1/5 bg-black relative flex items-center justify-center")
    img(class=" " :src="props.image" v-bind:alt="props.alt? props.alt : 'image'" )
    div(class="absolute flex items-center justify-center bg-black w-full h-full opacity-0 hover:opacity-100 transition ease-in-out delay-50")
        div(class="flex flex-col h-1/3 items-center justify-around")
            p(class="text-white text-center") Project name 2021 
            div( class="h-[2px] w-[1rem] bg-white")
            p(class="text-white text-center") Color festival
    </template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
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
