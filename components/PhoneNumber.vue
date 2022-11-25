<template lang="pug">
div#contact(class="w-full  bg-[#ffee32] h-32 flex justify-center items-center p-[5px] rounded-2xl ")
    div(class="w-full bg-[#ffc300] h-full rounded-xl flex flex-row justify-center  ")
        div(class="w-[94%] h-full flex items-center")
            div(class="flex justify-center items-center h-20 w-20 rounded-full bg-white")
                IconPhone2(class="w-[2rem] h-[2rem] text-slate-800")
            div(class="flex flex-col items-start justify-center ml-4 text-black space-y-2")
                div(class="flex hover:cursor-pointer space-x-2")
                    IconPhone(@click="callNumber" class="text-blue-700 w-6 h-6")
                    p 798 832 807
                div(@click="sendEmail" class="flex space-x-2 hover:cursor-pointer")
                    IconEmail(class="text-white w-6 h-6 ")
                    p graphicdesigner@gmail.com
                div(@click='openFBPage' class="flex space-x-2 hover:cursor-pointer")
                    IconFb( class="text-blue-600 w-6 h-6 ")
                    p Ok Graphics
</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconPhone2 from "~icons/uil/phone-volume";
import IconEmail from "~icons/material-symbols/alternate-email";

const openFBPage = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100088083068376",
    "_blank"
  );
};

const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};

const callNumber = () => {
  document.location = "tel:798832807";
};
</script>

<style lang="sass"></style>
