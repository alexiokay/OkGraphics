<template lang="pug">
div(style="display:flex flex-direction: column" class="h-screen")
    <Navbar/>
    div#contact-mini(class=" hidden xl:flex xl:flex-col mt-5 xl:fixed xl:top-[79vh] xl:left-[2%] ")
      IconPhone( class=" w-9 h-9 text-blue-600 hover:cursor-pointer")
      IconEmail(@click="sendEmail" class="  w-9 h-9 text-blue-600 hover:cursor-pointer ")
      a(href="https://www.facebook.com/profile.php?id=100088083068376")
        IconFb( class="w-9 h-9 text-blue-600 hover:cursor-pointer")
        
    <slot />
    
</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onBeforeMount } from "vue";
const router = useRouter();

const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};
</script>

<style lang="sass">

*
    scroll-snap-type: y mandatory

body
    overflow-x: hidden


.app-container

    z-index: 10
    display: flex
    flex-direction: column
    justify-content: center




.panel
    margin-top: 60px
    text-align: center
    margin: 0 auto
    scroll-snap-align: center

    width: 90%
    p.title

        font-style: normal
        font-size: 5vh
        line-height: 0%
        align-self: center
        letter-spacing: 0.18em
</style>
