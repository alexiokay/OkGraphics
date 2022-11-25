<template lang="pug">
div#navbar-wrapper(class=" w-full h-[7rem] flex items-center justify-between lg:justify-center mx-0 bg-[#202020]") 
  div#navbar-content(class=" w-full lg:w-[87%] h-full flex items-center justify-center self-start mx-0")
    div#navbar-image(class=" w-[90px]   h-[97px] flex items-center justify-start lg:justify-center mx-0")
      embed#logo( src="/assets/images/Logo-cropped.svg" alt="logo")
    div#navbar-empty(class=" w-[0px] lg:w-[22%] h-full flex items-center justify-center mx-0")
    div#navbar-content(class="  lg:w-[44%] w-[66%] h-full flex items-center justify-around mx-0 tracking-wider text-white font-brown  font-normal ")
      p(class="navbar-text hidden sm:block hover:text-blue-700 "  @click='$router.push({name: "index"})') O MNIE
      p#nav-portfolio(class="navbar-text  hidden sm:block  hover:text-blue-700 " ) PORTFOLIO
      p(class="navbar-text  hidden sm:block hover:text-blue-700"  @click='$router.push({name: "prices"})') CENNIK
      p(class="navbar-text  hidden sm:block hover:text-blue-700 "  @click='scrollToContact') KONTAKT
    div#navbar-empty(class=" w-[0px]  lg:w-[30%] h-full  flex items-center justify-center mx-0")
    

            

</template>

<script lang="ts" setup>
const route = useRoute();

const scrollToContact = () => {
  const contact = document.getElementById("contact");
  contact?.scrollIntoView({ behavior: "smooth" });
  contact.classList.add("shake");
};

const scrollToAbout = () => {
  const about = document.getElementById("navbar");
  about?.scrollIntoView({ behavior: "smooth" });
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
