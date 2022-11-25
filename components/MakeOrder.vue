<template lang="pug">
div#order(class="w-full h-max  p-5 bg-[#333533]")
    div#order-title(class='flex flex-row')
    div#order-names(class='flex flex-row justify-between h-12   ')
        div(class='w-[49.5%]')
            p(class="text-white text-lg mb-2 font-adelia") Imię
            input(class="w-full h-full bg-[#d6d6d6] border-white border-[1px] rounded-md") 
        div(class='w-[49.5%]')
            p(class="text-white text-lg mb-2 font-adelia") Nazwisko
            input(class="w-full h-full bg-[#d6d6d6] border-white border-[1px] rounded-md") 
    div#order-email(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            p(class="text-white text-lg mb-2 font-adelia") Email*
            input(class="w-full h-full bg-[#d6d6d6] border-white border-[1px] rounded-md") 
    div#order-mobile(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            p(class="text-white text-lg mb-2 font-adelia") Numer telefonu*
            input(class="w-full h-full bg-[#d6d6d6] border-white border-[1px] rounded-md") 
    div#order-letter(class='flex flex-row h-28 mt-12')
        div(class='w-full')
            p(class="text-white text-lg mb-2 font-adelia") Wiadomość
            input(class="w-full h-full bg-[#d6d6d6] border-white border-[1px] rounded-md") 
    div#order-policy(class='flex flex-col h-12 mt-12')
        p(class="text-white text-lg mb-2 font-adelia underline" ) polityka prywatności
        
        div(class="flex flex-row justify-start items-center  ")
            input(type="checkbox" class="")
            p(class="text-white text-lg font-adelia ml-2") Zaznaczając akceptujesz warunki polityki prywatności.
    div#order-send(class='flex flex-row mt-12')

   
    <SmartButton text="Wyślij"/>
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
