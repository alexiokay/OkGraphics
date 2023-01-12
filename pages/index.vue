<template lang="pug">
div(id="index-page" class=" w-full  flex flex-col")
  h1(v-show="false") Ok Graphics, twój zdalny doświadczony grafik komputerowy.



  div(class="flex flex-col h-full items-center justify-center mt-16 md:mt-2 mb-10  ")
   h1(class=" text-6xl md:text-8xl  font-bold mt-4  text-white text-center") OK Graphics
   div(class="flex h-full flex-row w-full sm:w-[100%] xl:w-[47%] mt-8 justify-center rounded-md bg-[#000000]")
   
    div(class="flex h-full flex-col w-[15%]  mt-8 rounded-md ") 
    
      div#header(class=" h-[35rem] sm:h-[33rem] w-full bg-[#c9ada7] shadow-xl flex flex-col items-center justify-center")
        div#header-content(class=" w-full h-[90%] md:h-[100%] flex flex-col items-center justify-around text-white")
          
          h2(class=" text-xl md:text-3xl font-adelia font-medium text-center") TWÓJ ZDALNY GRAFIK KOMPUTEROWY
          div(class="w-full flex flex-col items-center justify-center mb-16")
            <!-- button#header-button( @click='router.push({path: "/portfolio" })' class="border-2 h-16 w-44 hover:bg-[#c9ada7] hover:border-[#c9ada7]  border-[#c9ada7) Galeria -->
            div(class="w-full flex flex-col justify-center mt-8")
              h3(class="text-xl font-adelia font-semibold text-center  ") Zaprojektuję dla Ciebie wyjątkowe i niepowtarzalne prace graficzne. 
              h3(class="text-xl font-adelia font-semibold text-center ") Dzięki temu Twoja firma stanie się rozpoznawalna!
      div#offert-elements(class="flex flex-row w-full h-42 mt-16 items-start justify-around ")




      
          

     
     
     
 

      div.button(v-show="false" class="hover:cursor-pointer rounded-md w-full font-adelia h-auto md:h-12 flex justify-center items-center text-lg text-white text-center bg-[#CFB53B] mb-8 ")
        p Odwiedź również stronę WebGod – STRONY INTERNETOWE ORAZ APLIKACJE
    


      

</template>

<script lang="ts" setup></script>

<style lang="sass">

#index-page
 background-image: linear-gradient(to top, #cfb53b, #b27937, #804933, #432525, #000000)
#header
  background-image: url(/images/header-new.webp)
  background-size: cover



  background-position: bottom
  background-repeat: no-repeat


#header-button
  -webkit-transition-property: color, background-color
  transition-property: color, background-color, border
  -webkit-transition-duration: 0.4s
  transition-duration: 0.4s
  -moz-osx-font-smoothing: grayscale
  cursor: pointer
</style>
