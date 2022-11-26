<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")
h1(v-show="false") Ok Graphics, twój zdalny doświadczony grafik komputerowy.
  div#contact-mini(class=" hidden xl:flex xl:flex-col mt-5 xl:fixed xl:top-[79vh] xl:left-[2%] ")
    IconPhone( class=" w-9 h-9 text-blue-600 hover:cursor-pointer")
    IconEmail(class="  w-9 h-9 text-blue-600 hover:cursor-pointer ")
    a(href="https://www.facebook.com/profile.php?id=100088083068376")
      IconFb( class="w-9 h-9 text-blue-600 hover:cursor-pointer")
   
  
  <SliderPortfolio class="top-[-2000px]" />

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
   div(class="flex h-full flex-row w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
    div(class="flex h-full flex-col w-[95%]  mt-8 rounded-md ") 
      div#header(class=" h-[35rem] sm:h-[33rem] w-full bg-[#d6d6d6] shadow-xl flex flex-col items-center justify-center")
        div#header-content(class=" w-full h-[90%] md:h-[100%] flex flex-col items-center justify-around text-white")
          h2(class=" text-6xl md:text-8xl  font-bold mt-4  text-[#CFB53B] text-center") Ok Graphics
          h2(class=" text-xl md:text-3xl font-adelia font-medium text-center") TWÓJ ZDALNY GRAFIK KOMPUTEROWY
          div(class="w-full flex flex-col items-center justify-center mb-16")
            button#header-button( class="border-2 h-16 w-44 hover:bg-[#CFB53B] hover:border-[#CFB53B]  border-[#CFB53B] text-2xl font-adelia text-white") Galeria
            div(class="w-full flex flex-col justify-center mt-8")
              h3(class="text-xl font-adelia font-semibold text-center  ") Zaprojektuję dla Ciebie wyjątkowe i niepowtarzalne prace graficzne. 
              h3(class="text-xl font-adelia font-semibold text-center ") Dzięki temu twoja firma stanie się rozpoznawalna!
      div#offert-elements(class="flex flex-row w-full h-42 mt-16 items-center justify-around ")
        

          <WorkComponent   title='Loga' image="/images/header1-compressed.webp" alt="loga" />
          <WorkComponent    title='Wizytówki' image="/images/wizytowki/Wizytówka-Informatyk.webp" alt="wizytowki" />
          <WorkComponent   title='Ulotki' image="https://allbor.pl/wp-content/uploads/2022/01/King-garage-dobre-02-01.jpg" />
          

      hr(class="mt-6")
      <SmartButton text="ZAMÓW" class="mt-8"/>
      p(class="text-white text-center text-xl font-adelia mt-8 ") Twoj grafik komputerowy
      hr(class="mt-12")

      <MakeOrder class="mt-12"/>

      hr(class="mt-8")

      <PhoneNumber class="mt-8"/>

      div.button(class="hover:cursor-pointer rounded-md w-full font-adelia h-12 flex justify-center items-center text-lg text-white text-center bg-[#202020] mb-8 mt-8")
        p Odwiedź również stronę WebGod – STRONY INTERNETOWE ORAZ APLIKACJE
    
</template>

<script lang="ts" setup>
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onMounted } from "vue";
const router = useRouter();
const config = useRuntimeConfig();
</script>

<style lang="sass">

#header
  background-image: url(~/assets/images/header.webp)
  background-size: cover

  background-position: bottom
  background-repeat: no-repeat
  background-size: fill

#header-button
  -webkit-transition-property: color, background-color
  transition-property: color, background-color, border
  -webkit-transition-duration: 0.4s
  transition-duration: 0.4s
  -moz-osx-font-smoothing: grayscale
  cursor: pointer
</style>
