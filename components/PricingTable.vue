<template lang="pug">
div#pricing-table( class=" w-2/3  lg:w-1/3  flex flex-col text-white items-start mt-12 ")
            
  h2(class="underline text-xl mb-3 w-full text-center text-[#CFB53B]") {{title}}
  div(v-for="element in elements" class="w-full")

    div( class='w-full flex justify-between px-2')
        p  {{element.title}}
        p {{element.price}}
    hr(class="w-full")
    </template>

<script setup lang="ts">
type Element = {
  title: string;
  price: number;
};

defineProps({
  title: {
    type: String,
    required: true,
  },
  elements: {
    type: Array<Element>,
    required: true,
  },
});
</script>

<style lang="sass"></style>
