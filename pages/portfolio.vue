<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
      h1(class="text-white text-3xl text-center w-full") Moje prace
      div#offert-elements(class="flex space-y-8 md:space-y-0 flex-col md:flex-row w-full h-42 mt-16 items-start justify-around ")
        <WorkComponent   title='Loga' image="/images/header1-compressed.webp" alt="loga" description="To jak się prezentujesz, wpływana pierwsze wrażenie. Ludzie w świecie biznesu mają tylko chwilę żeby Ciebie zauważyć. Czy Twoje Logodobrze się prezentuje?" />
        <WorkComponent    title='Wizytówki' image="/images/wizytowki/Wizytówka-Informatyk.webp" alt="wizytowki" description="Kiedy dojdzie do pierwszego spotkania, masz szanse zdobyć czyjeś zaufanie. Wizytówka to twoja pierwsza rozmowaz potencjalnym klientem. Czy korzystaszz jej najlepszej formy?" />
        <WorkComponent   title='Ulotki' image="https://allbor.pl/wp-content/uploads/2022/01/King-garage-dobre-02-01.jpg" description="Co gdy zdobędziesz czyjeś zaufanie?Jego wzbudzenie to wiele, lecz to może nie wystarczyć. Czy zrobiłeś wszystko żeby przekonać klienta do owocnej współpracy?"/>
      
     

 
      h2(class="w-[95%] text-white text-3xl mt-28 ") Wizytowki
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
