<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
    div(class="flex h-full items-start p-10 flex-col w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
      h1(class="text-white text-3xl text-center w-full") Moje prace
      div(class="w-full flex flex-col md:flex-row mt-12")
        div(class="flex w-full md:w-2/4  justify-center items-center")
          img(src="/images/avatar.png" class=" w-5/6 h-2/5 sm:w-2/4 md:w-3/4 md:h-5/6 lg:w-2/4 lg:h-full" width="" height="" alt="avatar")
        div(class="flex flex-col justify-start w-full md:w-2/4 space-y-4 mt-12 ")
          p(class="text-white") Nazywam się Oktawia Kaczmarska, jestem grafikiem komputerowym. Doświadczenie zdobyłam poprzez samokształcenie się zdalnie i nadal kreuje swoje umiejętności, poszerzając przy tym swoje portfolio. Zrealizowałam już kilka projektów graficznych, odnosząc przy tym sukces zawodowy z zadowolonych klientów.
          p(class="text-white") Pracuje w domowym zaciszu, by móc maksymalnie się skupić na opracowaniu zlecenia powierzonego przez klienta.
          p(class="text-white") owstają między innymi takie projekty graficzne jak:
        
 
      h2(class="w-[95%] text-white text-3xl mt-28 ") Wizytowki
      ClientOnly
        LazySwiper(:slides="wizytowki")
      h2(class="w-[95%] text-white text-3xl ") Ulotki
      ClientOnly
        LazySwiper(:slides="ulotki")

      SmartButton(text="Złóż zamówienie" class="mt-12" @click="toMakeOrder")




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
