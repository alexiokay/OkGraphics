<template lang="pug">
div(class="flex flex-wrap flex-row w-full  items-between text-xs lg:text-sm justify-center space-x-2 space-y-2 h-full text-white")
           
           div(@click="tab = 'marketing'" class="flex h-12 w-auto px-3 justify-center items-center mt-auto bg-orange-400 rounded-xl")
             button MARKETING
           div(@click="tab = 'kartki'" class="flex h-12  w-auto px-3  justify-center items-center bg-orange-400 my-auto rounded-xl")
             button KARTKI I ZAPROSZENIA
           div(@click="tab = 'biuro'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button BIURO I FIRMA
        
           div(@click="tab = 'opakowania'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button OPAKOWANIA I ETYKIETY
           div(@click="tab = 'odziez'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button ODIEŻ
           div(@click="tab = 'social'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button MEDIA SPOŁECNOŚCIOWE
        
           div(@click="tab = 'yt/tw'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button YOUTUBE / TWITCH
           div(@click="tab = 'prezentacja'" class="flex h-12 w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button PREZENTACJA
           div(@click="tab = 'inne'" class="flex h-12  w-auto px-3  justify-center bg-orange-400 rounded-xl")
             button INNE
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
