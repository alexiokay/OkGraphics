<template lang="pug">
div(class=" w-full h-screen flex flex-col")

    p(class="text-white  px-8 text-xl hover:cursor-pointer bg-[#202020] h-[7rem] flex items-center" @click="$emit('close')") X

    div(class="flex flex-row w-full")
        <PortfolioComponent @click="coverPage()" image="https://64.media.tumblr.com/f8d8dba355692b8a1a133c6a2d00e195/3633398f083eee6e-a7/s1280x1920/aba4c6a18b9b206166a8e9f48da72904133d940f.jpg"/>
        <PortfolioComponent @click="coverPage()" image="https://64.media.tumblr.com/a2428dbcdd3797cef4d73aed60d0b903/4f07cee55e20df22-61/s1280x1920/caa4194d7b7c2a91bf80e035563081688924cb70.jpg"/>
        <PortfolioComponent @click="coverPage()" image="https://64.media.tumblr.com/43c0d86336549e20e53b5570deae2986/542e2b843a1f4051-41/s1280x1920/f9552020b279b6b0c650672e01cc9f456d17dee9.jpg"/>
        <PortfolioComponent @click="coverPage()" image="https://64.media.tumblr.com/926b3486fe9be56e44a040120dab634c/6916b4b40651da36-59/s1280x1920/1e1d85e19c0aad66b7eb7a0f83be9e2c95e7207e.jpg"/>
        <PortfolioComponent @click="coverPage()" image="https://64.media.tumblr.com/007127fd676aad80bf6a9fee5fe417e5/d911bebebf07f83e-24/s1280x1920/962489ba49c4c8c0274110165148286ce033066c.jpg"/>
    
    </template>

<script setup lang="ts"></script>

<style lang="sass"></style>
