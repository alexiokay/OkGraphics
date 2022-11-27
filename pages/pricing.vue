<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")
    div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
        div(class="flex flex-row flex-wrap h-full items-start p-4 md:p-10  w-full sm:w-[96%] xl:w-[87%] justify-around rounded-md bg-[#202020]")
         
          div#pricing-table( class="w-1/2 justify-center flex flex-col text-white items-center mt-12 ")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") MARKETING
            p Projekt graficzny LOGA: 200zł
            p Projekt graficzny WIZYTÓWKI: 200zł
            p Projekt graficzny ULOTKI: 250zł
            p Projekt graficzny PLAKATU: 200zł
            p Projekt graficzny BROSZURY: 250zł
            p Projekt graficzny MENU: 250zł
            p Projekt graficzny BILLBOARD: 300zł
          div#pricing-table( class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") KARTKI I ZAPROSZENIA
            p Projekt graficzny ZAPROSZENIA: 250zł
            p  Projekt graficzny POCZTÓWKI: 200zł
            p  Projekt graficzny KARTKI: 200zł
          div#pricing-table(class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") ODZIEŻ:
            p Projekt graficzny BLUZY: 250zł
            p Projekt graficzny KOSZULKI: 250zł
          div#pricing-table(class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") BIURO I FIRMA
            p  Projekt graficzny CV: 150zł
            p  Projekt graficzny CERTYFIKATU: 200zł
            p  Projekt graficzny DYPLOMU: 200zł
            p  Projekt graficzny FAKTURY: 200zł
            p  Projekt graficzny KALENDARZA: 250zł
            p  Projekt graficzny PAPIERU FIRMOWEGO: 250zł
          div#pricing-table(class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") OPAKOWANIA/ETYKIETY
            p  Projekt graficzny NAPOJU: 350zł
            p  Projekt graficzny ŻYWNOŚCI: 350zł
            p  Projekt graficzny KOSMETYKÓW: 350zł
            p  Projekt graficzny SUPLEMENTÓW: 350zł
          div#pricing-table( class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") MEDIA SPOŁECZNOŚCIOWE
            p  Projekt graficzny POSTU NA INSTAGRAMIE/FACEBOOKU: 200zł
            p  Projekt graficzny RELACJI NA INSTAGRAMIE/FACEBOOKU: 200zł
            p  Projekt graficzny ROLKI NA INSTAGRAMIE/FACEBOOKU: 200zł
            p  Projekt graficzny WPISU NA INSTAGRAMIE/FACEBOOKU: 200zł
            p  Projekt graficzny ZDJĘCIA W TLE NA FACEBOOKU: 200zł
            p  Projekt graficzny REKLAMY NA INSTAGRAMIE/FACEBOOKU: 200zł
          div#pricing-table( class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") YOUTUBE/TWITCH
            p  Projekt graficzny OVERLAY'A: 350zł
            p  Projekt graficzny MINIATURKI: 250zł
            p  Projekt graficzny BANERA: 250zł
            p  Projekt graficzny AVATARA: 250zł
          div#pricing-table( class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") PREZENTACJA
            p  Projekt graficzny PREZENTACJI MULTIMEDIALNEJ: 30zł (jeden slajd)
          div#pricing-table(class="w-1/2 justify-center flex flex-col text-white items-center mt-12")
            h3(class="underline text-xl mb-3 text-[#CFB53B]") INNE
            p  Projekt graficzny KUBKA: 250zł
            p   Projekt graficzny PODUSZKI: 250zł
            p  Projekt graficzny ZNICZA: 250zł
            p  Projekt graficzny BALONA: 250zł
            p  Projekt graficzny ETUI NA TELEFON: 250zł
            p  Projekt graficzny TORBY: 250zł
            p  Projekt graficzny OKŁADKI NA PŁYTĘ: 250zł
            p  Projekt graficzny NAKLEJKI: 250zł

</template>

<script setup lang="ts">
const tab = ref("marketing");
useHead({
  title: "Ok Graphics - Cennik, oferta",
  meta: [{ name: "description", content: "Nie bój sie, sprawdź mój cennik!" }],
});
</script>

<style lang="sass"></style>
