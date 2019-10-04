<template>
    <div style="width: 100%; height: 100%; background-color: #a1a1a1;">
        <v-container fill-height>
            <v-layout column>
                <v-flex class="centerDiv" shrink>
                    <v-layout column>
                        <v-flex style="margin-bottom: 100px;">
                            <v-btn @click=novaOcorrencia() class="buttonCiodes">Nova Ocorrência</v-btn>
                        </v-flex>
                        <v-flex>
                            <v-btn class="buttonCiodes">Consultar/Alterar</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
    methods: {
        novaOcorrencia(){
            this.$router.push('/novaocorrencia')
        }
    }
}
</script>

<style>
    .buttonCiodes{
        text-decoration: none;
        min-width: 230px !important;
        height: 80px !important;
        font-size: 1em !important;
    }
    .centerDiv{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>