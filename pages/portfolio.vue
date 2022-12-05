<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
      h1(class="text-white text-3xl text-center w-full") MOJE PRACE
    
      
     

 
      h2(class="w-[95%] text-white text-3xl mt-16 ") Wizytowki
      ClientOnly
        LazySwiper(:slides="wizytowki")
      h2(class="w-[95%] text-white text-3xl ") Ulotki
      ClientOnly
        LazySwiper(:slides="ulotki") 
        




</template>

<script setup lang="ts">
import { wizytowki, ulotki } from "../libs/sliders";
const router = useRouter();

const toMakeOrder = () => {
  router.push({ name: "index" });
  setTimeout(() => {
    scrollToMakeOrder();
  }, 200);
};

const scrollToMakeOrder = () => {
  const contact = document?.getElementById("order");
  contact?.scrollIntoView({ behavior: "smooth" });
  contact?.classList.add("shake");
};

useHead({
  title: "Ok Graphics - Portfolio",
  meta: [{ name: "description", content: "Moje poprzednie prace" }],
});
</script>

<style lang="sass"></style>
