<template lang="pug">
div#navbar-wrapper(class=" w-full h-[7rem] flex items-center justify-between lg:justify-center mx-0 bg-[#202020]") 
    div#navbar-content(class=" w-[87%] lg:w-[87%] h-full flex items-center justify-center self-start mx-0")

        div#navbar-content(class="  lg:w-[100%] w-[66%] h-full flex items-center justify-around mx-0 tracking-wider text-white font-adelia  font-normal ")
            p(class="navbar-text hidden sm:block hover:text-blue-700 "  @click='$router.push({name: "index"})') Wizytówki
            p#nav-portfolio(class="navbar-text  hidden sm:block  hover:text-blue-700 " ) PORTFOLIO
            p(class="navbar-text  hidden sm:block hover:text-blue-700"  @click='$router.push({name: "prices"})') Bannery
            p(class="navbar-text  hidden sm:block hover:text-blue-700 "  @click='scrollToContact') Loga
   
    

            
    
    </template>

<script lang="ts" setup></script>

<style lang="sass"></style>
