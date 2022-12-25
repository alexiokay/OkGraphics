<template lang="pug">
.swiper-container(class='overflow-hidden')
    .swiper-wrapper
        .swiper-slide(v-for="slide in props.slides" class="rounded-xl select-none")
            img.swiper-image(:src="slide.img" class="swiper-lazy rounded-xl"  alt="logo")
            .swiper-lazy-preloader
            
</template>

<script setup lang="ts">
import { Swiper } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  const evaluateMaxNofChild = (number: any) => {
    const carouselChildren = document.querySelectorAll(
      ".swiper-container .swiper-slide"
    ).length;

    return number >= carouselChildren ? carouselChildren : number;
  };

  const mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    lazy: {
      //  tell swiper to load images before they appear
      loadPrevNext: true,
      // amount of images to load
      loadPrevNextAmount: 2,
    },
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      720: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1180: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1480: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
  });
});
</script>

<style lang="sass">


.swiper-slide

  text-align: center
  font-size: 18px
  background: #fff
  /* Center slide text vertically */
  display: -webkit-box
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-box-pack: center
  -ms-flex-pack: center
  -webkit-justify-content: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  -webkit-align-items: center
  align-items: center



.append-buttons
  text-align: center
  margin-top: 20px

.append-buttons a
  display: inline-block
  border: 1px solid #007aff
  color: #007aff
  text-decoration: none
  padding: 4px 10px
  border-radius: 4px
  margin: 0 10px
  font-size: 13px

  @media (min-width: 0px) and (max-width: 419px)
  .swiper-container
    width: 100%
    height: 100px
    margin: 20px auto

@media (min-width: 420px) and (max-width: 754px)
  .swiper-container
    width: 100%
    height: 180px
    margin: 20px auto

@media (min-width: 754px)
  .swiper-container
    width: 100%
    height: 210px
    margin: 20px auto





.swiper-slide
  width: 40%
  text-align: center
  font-size: 18px
  background: #fff

  /* Center slide text vertically */
  display: -webkit-box
  display: -ms-flexbox
  display: -webkit-flex
  display: flex
  -webkit-box-pack: center
  -ms-flex-pack: center
  -webkit-justify-content: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  -webkit-align-items: center
  align-items: center


.container
  padding: 20px
  background: red
  overflow: hidden

.swiper-button-next
  right: -15px

.container-inner
  background: #000
  padding: 15px

.swiper-image
  object-fit: cover
  width: 100%
  height: 100%
</style>
