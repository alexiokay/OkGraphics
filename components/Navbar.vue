<template lang="pug">
div#mobile-menu(v-if="mobileMenu === true" class="fixed top-0 left-0 md:hidden flex flex-col items-center  w-full h-screen bg-black opacity-95 z-50  ")
  div(class="flex w-[80%] h-[7rem] justify-end items-center ")
    button(@click="mobileMenu = false" class="text-white text-4xl") X
  div#mobile-menu-content(class="flex w-full h-full text-2xl text-white flex-col justify-start items-center")
    NuxtLink(@click="mobileMenu = false" class="navbar-text    hover:text-blue-700 mt-12" to="/") STRONA GŁÓWNA
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/about") O MNIE
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/portfolio") PORTFOLIO
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/pricing") CENNIK
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/contact" ) KONTAKT
div#navbar-wrapper(class=" w-full h-[7rem] flex items-center justify-between lg:justify-center mx-0 bg-[#000000]") 

  div#navbar-content(class=" w-full lg:w-[87%] h-full flex items-center justify-center self-start mx-0")
    
    div#navbar-image( class=" w-[90px]   h-[97px] flex items-center justify-start  lg:justify-center mx-0")
      embed#logo(@click="router.push({name: 'index'})" src="/Logo-cropped.svg" alt="logo" class='w-[90px]  hover:cursor-pointer h-[97px]')
    
    div#navbar-empty(class=" w-[0px] lg:w-[12%] h-full flex items-center justify-center mx-0")
    div#navbar-content(class="  lg:w-[76%] w-[66%] h-full flex items-center justify-end md:justify-around mx-0 tracking-wider text-white font-brown  font-normal ")
    
      NuxtLink(class="navbar-text  hidden md:block  hover:text-blue-700 " to="/") STRONA GŁÓWNA
      NuxtLink(class="navbar-text  hidden md:block  hover:text-blue-700 " to="/about") O MNIE
      NuxtLink(class="navbar-text  hidden md:block  hover:text-blue-700 " to="/portfolio") PORTFOLIO
      NuxtLink(class="navbar-text  hidden md:block  hover:text-blue-700 " to="/pricing") CENNIK
      NuxtLink(class="navbar-text  hidden md:block hover:text-blue-700 " to="/contact" ) KONTAKT
      button#mobile-menu-button(@click="mobileMenu = !MobileMenu" class="block md:hidden") Menu

    div#navbar-empty(class=" w-[0px]  lg:w-[12%] h-full  flex items-center justify-center mx-0")
 

            

</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

let mobileMenu = ref(false);

const scrollToAbout = () => {
  const about = document.getElementById("navbar");
  about?.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const contact = document?.getElementById("contact");
  contact?.scrollIntoView({ behavior: "smooth" });
  contact?.classList.add("shake");
};

const toContact = () => {
  router.push({ name: "index" });
  setTimeout(() => {
    scrollToContact();
  }, 200);
};
</script>

<style lang="sass">

.navbar-text
  -webkit-transition: color 0.5s
  transition: color 1s
  cursor: pointer



#navbar


    a:hover
      cursor: pointer
      color: green

.shake
  animation-name: shake
  animation-duration: 2s


@keyframes shake
  0%
    transform: translate(1px, 1px) rotate(0deg)
  10%
    transform: translate(-1px, -2px) rotate(-1deg)
  20%
    transform: translate(-3px, 0px) rotate(1deg)
  30%
    transform: translate(3px, 2px) rotate(0deg)
  40%
    transform: translate(1px, -1px) rotate(1deg)
  50%
    transform: translate(-1px, 2px) rotate(-1deg)
  60%
    transform: translate(-3px, 1px) rotate(0deg)
  70%
    transform: translate(3px, 1px) rotate(-1deg)
  80%
    transform: translate(-1px, -1px) rotate(1deg)
  90%
    transform: translate(1px, 2px) rotate(0deg)
  100%
    transform: translate(1px, -2px) rotate(-1deg)
</style>
