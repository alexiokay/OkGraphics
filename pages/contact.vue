<template lang="pug">
div(class=" w-full h-full flex flex-col  bg-[#d6d6d6]")
    div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
        div(class="flex h-full items-start p-10 flex-col md:flex-row w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
            
            <div class="map  w-full md:w-3/5 h-[50vh] md:h-[69vh]" id="map" ></div>
            div(class=" w-full md:w-2/5 h-[69vh] text-white flex flex-col justify-start items-start px-10")
              
                div(class="flex flex-col items-start justify-center ml-4 text-white space-y-2")
                    h1(class="text-4xl mb-10 mt-4 md:mt-0") KONTAKT
                    div(class="flex hover:cursor-pointer space-x-2")
                        IconPhone(@click="callNumber" class="text-blue-700 w-6 h-6")
                        h2 798 832 807
                    
                    div( class="flex space-x-2 hover:cursor-pointer")
                        IconEmail(@click="sendEmail" class="text-white w-6 h-6 ")
                
                        div#email(@click="sendEmail")
                            h2() graphicdesigner@gmail.com
                    div(@click='openFBPage' class="flex space-x-2 hover:cursor-pointer")
                        IconFb( class="text-blue-600 w-6 h-6 ")
                        h2 Ok Graphics
                h3(class="mt-8") Dni/godziny pracy: Od poniedziałku do soboty, 10:00-20:00

               
                        
          
            
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconPhone2 from "~icons/uil/phone-volume";
import IconEmail from "~icons/material-symbols/alternate-email";

const config = useRuntimeConfig();
const loader = new Loader({
  apiKey: config.GOOGLE_MAPS_API_KEY,
  version: "weekly",
  libraries: ["places"],
});

let isEmailVisible = ref(false);

const openFBPage = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100088083068376",
    "_blank"
  );
};

const showEmail = () => {
  isEmailVisible.value = true;
};

const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};

const callNumber = () => {
  document.location = "tel:798832807";
};

const map = ref([]);

onMounted(async () => {
  await loader
    .load()
    .then((google: any) => {
      map.value = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.133106, lng: 23.476335 },

        zoom: 13,
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});
</script>

<style lang="sass"></style>
