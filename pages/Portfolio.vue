<template lang="pug">
div(id="portfolio-page" class=" w-full  flex flex-col  bg-[#CFB53B]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#000000]")
      h1(class="text-white text-3xl text-center w-full") MOJE PRACE
    
      
     

      ClientOnly
        
        h2(class="w-[95%] text-white text-2xl mb-2 ")
          p(class="mb-2") Wizytówki
          LazySwiper(:slides="wizytowki") 
        h2(class="w-[95%] text-white text-2xl mb-2 ")
          p(class="mb-2") Loga
          LazySwiper(:slides="loga") 
        
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Miniaturki
          LazySwiper(:slides="miniaturki") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Plakaty
          LazySwiper(:slides="plakaty") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Okładka książki
          LazySwiper(:slides="ksiazki") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Naklejki
          LazySwiper(:slides="naklejki") 



</template>

<script setup lang="ts">
import {
  wizytowki,
  ulotki,
  loga,
  miniaturki,
  plakaty,
  ksiazki,
  naklejki,
} from "../libs/sliders";
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

<style lang="sass">
#portfolio-page
  background-image: linear-gradient(to top, #cfb53b, #b27937, #804933, #432525, #000000)
</style>
