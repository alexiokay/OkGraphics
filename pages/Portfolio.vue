<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#CFB53B]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#000000]")
      h1(class="text-white text-3xl text-center w-full") MOJE PRACE
    
      
     

      ClientOnly
        

        h2(class="w-[95%] text-white text-2xl mb-2 ")
          p(class="mb-2") Loga
          LazySwiper(:slides="loga") 
        
        h2(class="w-[95%] text-white text-2xl ") 
<<<<<<< HEAD:pages/portfolio.vue
          p(class="mb-2") Miniaturki
          LazySwiper(:slides="miniaturki") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Plakaty
          LazySwiper(:slides="plakaty") 
        h2(class="w-[95%] text-white text-2xl ") 
          p(class="mb-2") Książki
          LazySwiper(:slides="ksiazki") 
=======
          p(class="mb-2") Ulotki
          LazySwiper(:slides="ulotki") 
          
          h2(class="w-[95%] text-white text-2xl mt-16  ")
          p(class="mb-2") Wizytówki
          LazySwiper(:slides="wizytowki")
          
          
          h2(class="w-[95%] text-white text-2xl mt-16  ")
          p(class="mb-2") Plakat
          LazySwiper(:slides="plakat")
          

>>>>>>> 682425a9c11e077db0b9048659b14991f67cce25:pages/Portfolio.vue



</template>

<script setup lang="ts">
<<<<<<< HEAD:pages/portfolio.vue
import {
  wizytowki,
  ulotki,
  loga,
  miniaturki,
  plakaty,
  ksiazki,
} from "../libs/sliders";
=======
import { loga, wizytówki, ulotki, plakat, naklejki, okładka książki } from "../libs/sliders";
>>>>>>> 682425a9c11e077db0b9048659b14991f67cce25:pages/Portfolio.vue
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
