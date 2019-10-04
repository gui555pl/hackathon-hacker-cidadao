<template>
    <!-- <samu></samu> -->
    <samu v-if="this.$store.state.tipoUsuario==='SAMU'"> </samu>
</template>
<script>
import Samu from '../components/Samu'
import CTTU from '../components/CTTU'
import store from '../store'
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
            return this.$store.state.tipoUsuario
        }
    }
}
</script>