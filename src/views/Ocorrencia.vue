<template>
    <div>
        <samu v-if="tipo == 'samu' "> </samu>
        <CTTU v-if="tipo == 'CTTU' "> </CTTU>
    </div>

</template>

<script>
import Samu from '../components/Samu'
import CTTU from '../components/CTTU'
export default {
      components: {
        Samu: Samu,
        CTTU: CTTU
    },
    computed: {
        ocorrencia () {
            return this.$store.state.selectedOcorrencia
        },
        tipo(){
            return this.$store.getters.getUser
        }
    },
    created () {
        console.log('this.$store.getters.getUser')
    }
}
</script>