<template lang="pug">
div(id="pricing-page" class=" w-full  flex flex-col  bg-[#CFB53B]")
    div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
      
        div(class="flex flex-col md:flex-row space-x-3 flex-wrap h-full items-center md:items-start p-4 md:p-10  w-full sm:w-[96%] xl:w-[87%] justify-around rounded-md bg-[#000000]")
          h1(class='w-full  text-4xl text-center text-white m-auto mb-6') CENNIK
          
          PricingTable(:elements="kartki_i_zaproszenia" title="KARTKI I ZAPROSZENIA")
         
          PricingTable(:elements="odziez" title="ODIEŻ")
         
          PricingTable(:elements="biuro_i_firma" title="BIURO I FIRMA")
         
          PricingTable(:elements="opakowania_i_etykiety" title="OPAKOWANIA/ETYKIETY")
          
          
          PricingTable(:elements="youtube_twitch" title="YOUTUBE/TWITCH")
         
          PricingTable(:elements="prezentacja" title="PREZENTACJA")
           
         
          PricingTable(:elements="marketing" title="MARKETING")

         
          PricingTable(:elements="media_spol" title="MEDIA SPOŁECZNOŚCIOWE")
          
          PricingTable(:elements="inne" title="INNE")
           
           

</template>

<script setup lang="ts">
const tab = ref("marketing");
type Element = {
  title: string;
  price: number;
};
const media_spol = ref([
  { title: "POST ", price: "200zł" },
  { title: "RELACJA ", price: "200zł" },
  { title: "ROLKA", price: "200zł" },
  { title: "WPIS ", price: "200zł" },
  { title: "ZDJĘCIE W TLE", price: "200zł" },
  { title: "REKLAMA ", price: "200zł" },
]);
const marketing = ref([
  { title: "LOGO", price: "200zł" },
  { title: "WIZYTÓWKA", price: "200zł" },
  { title: "ULOTKA", price: "250zł" },
  { title: "PLAKAT", price: "200zł" },
  { title: "BROSZURA", price: "250zł" },
  { title: "MENU", price: "250zł" },
  { title: "BILLBOARD", price: "300zł" },
]);
const kartki_i_zaproszenia = ref([
  { title: "ZAPROSZENIE", price: "250zł" },
  { title: "POCZTÓWKA", price: "200zł" },
  { title: "KARTKA", price: "200zł" },
]);
const biuro_i_firma = ref([
  { title: "CV", price: "150zł" },
  { title: "CERTYFIKAT", price: "200zł" },
  { title: "DYPLOM", price: "200zł" },
  { title: "FAKTURA", price: "200zł" },
  { title: "KALENDARZ", price: "250zł" },
  { title: "PAPIER FIRMOWY", price: "250zł" },
]);
const opakowania_i_etykiety = ref([
  { title: "NAPOJU", price: "350zł" },
  { title: "ŻYWNOŚCI", price: "350zł" },
  { title: "KOSMETYKÓW", price: "350zł" },
  { title: "SUPLEMENTÓW", price: "350zł" },
]);
const odziez = ref([
  { title: "KOSZULKA", price: "250zł" },
  { title: "BLUZA", price: "250zł" },
]);
const youtube_twitch = ref([
  { title: "OVERLAY", price: "350zł" },
  { title: "MINIATURKA", price: "250zł" },
  { title: "BANER", price: "250zł" },
  { title: "AVATAR", price: "250zł" },
]);
const prezentacja = ref([
  { title: "PREZENTACJA MULTIMEDIALNA", price: "30zł (jeden slajd)" },
]);
const inne = ref([
  { title: "KUBEK", price: "250zł" },
  { title: "PODUSZKA", price: "250zł" },
  { title: "ZNICZ", price: "250zł" },
  { title: "BALON", price: "250zł" },
  { title: "ETUI NA TELEFON", price: "250zł" },
  { title: "TORBA", price: "250zł" },
  { title: "OKŁADKA PŁYTY", price: "250zł" },
  { title: "OKŁADKA KSIĄŻKI", price: "250zł" },
  { title: "NAKLEJKA", price: "250zł" },
]);
useHead({
  title: "Ok Graphics - Cennik, oferta",
  meta: [{ name: "description", content: "Nie bój sie, sprawdź mój cennik!" }],
});
</script>

<style lang="sass">
#pricing-page
  background-image: linear-gradient(to top, #cfb53b, #b27937, #804933, #432525, #000000)
</style>
