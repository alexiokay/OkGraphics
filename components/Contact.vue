<template lang="pug">
.panel#Contact
    p.title Kontakt
    .images
        img#phone(src="https://img.icons8.com/clouds/100/000000/phone.png")
        img#chat(src="https://img.icons8.com/clouds/100/000000/sos.png")
        img#email(src="https://img.icons8.com/clouds/100/000000/email--v1.png")
</template>

<script lang="ts">
export default defineComponent({
  name: `Contact`,
});
</script>

<style lang="sass" scoped>
.panel

    //background-color: #EEE8AA


    margin: 0 auto
    text-align: center
    width: 90%

    .images
        display: flex
        justify-content: space-between
        width: 100%

        img
            width: 15%
</style>
