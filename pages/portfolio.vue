<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#7209b7]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#000000]")
      h1(class="text-white text-3xl text-center w-full") Moje prace
    
      
     

      ClientOnly
        h2(class="w-[95%] text-white text-2xl mt-16  ")
          p(class="mb-2") Wizytówki
          LazySwiper(:slides="wizytowki")

        h2(class="w-[95%] text-white text-2xl mb-2 ")
          p(class="mb-2") Loga
          LazySwiper(:slides="loga") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Miniaturki
          LazySwiper(:slides="miniaturki") 
          




</template>

<script setup lang="ts">
import { wizytowki, ulotki, loga, miniaturki } from "../libs/sliders";
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
