<template lang="pug">
div(class=" w-full  flex flex-col  bg-[#d6d6d6]")
  div#contact-mini(class=" hidden xl:flex xl:flex-col mt-5 xl:fixed xl:top-[79vh] xl:left-[2%] ")
    IconPhone( class=" w-9 h-9 text-blue-600 hover:cursor-pointer")
    IconEmail(class="  w-9 h-9 text-blue-600 hover:cursor-pointer ")
    IconFb(@click="openFBPage" class="w-9 h-9 text-blue-600 hover:cursor-pointer")
   
  
  <SliderPortfolio class="top-[-2000px]" @close="unCoverPage"/>

  div(class="flex flex-row h-full justify-center mt-16 md:mt-20 mb-12  ")
   div(class="flex h-full flex-row w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#202020]")
    div(class="flex h-full flex-col w-[95%]  mt-8 rounded-md ") 
      div#header(class=" h-[35rem] sm:h-[33rem] w-full bg-[#d6d6d6] shadow-xl flex flex-col items-center")
        p(class="text-2xl") Nazywam się Oktawia Kaczmarska, jestem grafikiem komputerowym.
        p Doświadczenie zdobyłam poprzez samokształcenie się zdalnie i nadal kreuje swoje umiejętności, poszerzając przy tym swoje portfolio. Zrealizowałam już kilka projektów graficznych, odnosząc przy tym sukces zawodowy z zadowolonych klientów. Pracuje w domowym zaciszu, by móc maksymalnie się skupić na opracowaniu zlecenia powierzonego przez klienta. Powstają między innymi takie projekty graficzne jak:
     
      div#offert-elements(class="flex flex-row w-full h-42 mt-16 items-center justify-around ")
        

          <WorkComponent  @click="coverPage" title='Loga' image="https://allbor.pl/wp-content/uploads/2022/01/King-garage-dobre-02-01.jpg" />
          <WorkComponent  @click="coverPage"  title='Wizytówki' image="https://allbor.pl/wp-content/uploads/2022/01/wizytowa-01.jpg" />
          <WorkComponent  @click="coverPage"  title='Ulotki' image="https://allbor.pl/wp-content/uploads/2022/01/King-garage-dobre-02-01.jpg" />
          

      hr(class="mt-6")
      <SmartButton class="mt-8"/>
      p(class="text-white text-center text-xl font-brown mt-8 ") Twoj grafik komputerowy
      hr(class="mt-12")

      <MakeOrder class="mt-12"/>

      hr(class="mt-8")

      <PhoneNumber class="mt-8"/>

      div.button(class="hover:cursor-pointer rounded-md w-full font-brown h-12 flex justify-center items-center text-lg text-white font-brown bg-[#202020] mb-8 mt-8")
        p Odwiedź również stronę WebGod – STRONY INTERNETOWE ORAZ APLIKACJE
    
</template>

<script lang="ts" setup>
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onMounted } from "vue";
const router = useRouter();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const coverPage = () => {
  const SliderPortfolio = document.querySelector<HTMLElement>("#coverpage");

  clearCoverPageStyle();
  const mode = getRandomInt(0, 4);
  console.log(mode);
  if (mode === 0) SliderPortfolio.classList.add("page-covered-top-down");
  if (mode === 1) SliderPortfolio.classList.add("page-covered-down-top");
  if (mode === 2) SliderPortfolio.classList.add("page-covered-left-right");
  if (mode === 3) SliderPortfolio.classList.add("page-covered-right-left");

  SliderPortfolio.addEventListener("animationend", function (ev) {
    document.body.style.overflow = "hidden";
    SliderPortfolio.removeEventListener("animationend", function (ev) {});
  });
};

const unCoverPage = () => {
  document.body.style.overflow = "visible";
  const SliderPortfolio = document.querySelector<HTMLElement>("#coverpage");
  clearCoverPageStyle();
  const mode = getRandomInt(0, 4);
  if (mode === 0) SliderPortfolio.classList.add("page-uncovered-top-down");
  if (mode === 1) SliderPortfolio.classList.add("page-uncovered-down-top");
  if (mode === 2) SliderPortfolio.classList.add("page-uncovered-left-right");
  if (mode === 3) SliderPortfolio.classList.add("page-uncovered-right-left");

  SliderPortfolio.addEventListener("animationend", function (ev) {
    if (ev.animationName.includes("uncoverPage")) {
      clearCoverPageStyle();
      document.body.style.overflow = "visible";
    }
  });
};

const clearCoverPageStyle = () => {
  const SliderPortfolio = document.querySelector<HTMLElement>("#coverpage");
  SliderPortfolio.classList.forEach((item) => {
    if (item.includes("page-covered") || item.includes("page-uncovered"))
      SliderPortfolio.classList.remove(item);
  });
};

const closeSlider = () => {};

const openFBPage = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100088083068376",
    "_blank"
  );
};

onMounted(() => {
  const navPortfolio = document.querySelector("#nav-portfolio");
  navPortfolio.addEventListener("click", () => {
    coverPage();
  });
});
</script>

<style lang="sass">


.page-covered-top-down
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: coverPage-top-down
  animation-duration: 1s

.page-covered-down-top
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: coverPage-down-top
  animation-duration: 1s

.page-covered-left-right
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: coverPage-left-right
  animation-duration: 1s

.page-covered-right-left
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: coverPage-right-left
  animation-duration: 1s

@keyframes coverPage-top-down
  0%
    top: -100vh

  100%
    top: 0vh

@keyframes coverPage-down-top
  0%
    top: 200vh

  100%
    top: 0vh


@keyframes coverPage-left-right
  0%
    left: -200vh

  100%
    left: 0vh


@keyframes coverPage-right-left
  0%
    left: 200vh

  100%
    left: 0vh



.page-uncovered-top-down
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: uncoverPage-top-down
  animation-duration: 1s

.page-uncovered-down-top
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: uncoverPage-down-top
  animation-duration: 1s

.page-uncovered-left-right
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: uncoverPage-left-right
  animation-duration: 1s

.page-uncovered-right-left
  position: fixed
  top: 0px
  z-index: 1000
  animation-name: uncoverPage-right-left
  animation-duration: 1s

@keyframes uncoverPage-top-down
  0%
    top: 0vh

  100%
    top: -100vh

@keyframes uncoverPage-down-top
  0%
    top: 0vh

  100%
    top: 200vh


@keyframes uncoverPage-left-right
  0%
    left: 0vh

  100%
    left: -200vh


@keyframes uncoverPage-right-left
  0%
    left: 0vh

  100%
    left: 200vh
</style>
