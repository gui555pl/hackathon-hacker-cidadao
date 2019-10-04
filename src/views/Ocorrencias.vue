<template>
    <div style="height: 100%; background-color: #a1a1a1;">
        <v-container style="padding-top: 64px;">
            <v-layout mt-4 column>
                <v-flex xs12 sm6 md6 lg4 xl4 v-for="(ocorrencia, i) in ocorrencias" :key="i" style="padding: 5px" @click="goTo(ocorrencia)">
                    <v-card
                        elevation-5
                        style="border-radius: 3px;"
                        class="mx-auto fonteCard"
                    >
                        <v-card-title style="background: #E0E0E0">
                            <v-layout>
                                <v-flex style="text-align: left">
                                    {{ocorrencia['.uid']}}
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text style="padding-top: 16px;">
                            <v-layout>
                                <v-flex class="fonteCard">
                                    Local : 
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{ocorrencia.logradouro}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-text style="padding-top: 16px;">
                            <v-layout>
                                <v-flex class="fonteCard">
                                    Ref: 
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{ocorrencia.ponto_referência}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-text style="padding-top: 16px;" class="fonteCard">
                            Agentes no local:
                            <v-chip-group
                                multiple
                                active-class="primary--text"
                            >
                                <v-chip v-if="ocorrencia.arrived_bptran" color="yellow">
                                    <span style="color: white">BPTRAN</span>
                                </v-chip>
                                <v-chip v-if="ocorrencia.arrived_cttu" color="green">
                                    <span style="color: white">CTTU</span>
                                </v-chip>
                                <v-chip v-if="ocorrencia.arrived_samu" color="red">
                                    <span style="color: white">SAMU</span>
                                </v-chip>
                                <v-chip v-if="ocorrencia.arrived_pm" color="black">
                                    <span style="color: white">PM</span>
                                </v-chip>
                                <v-chip v-if="ocorrencia.arrived_prf" color="blue">
                                    <span style="color: white">PRF</span>
                                </v-chip>
                                <v-chip v-if="ocorrencia.arrived_bombeiro" color="red">
                                    <span style="color: white">Bombeiros</span>
                                </v-chip>
                            </v-chip-group>
                        </v-card-text>
                        <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
                        <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data() {
        return {
            ocorrencias: this.$fiery(firebase.firestore().collection('ocorrencias')),
        }
    },
    methods: {
        goTo (ocorrencia) {
            this.$store.commit('setOcorrencia', ocorrencia)
            this.$router.push('/ocorrencia')
        }
    }
}
</script>
<style>
    .titlePendencias{
        color: white;
        font-size: 50px;
        color: #021b39;
    }
    .titlePendencias2{
        color: white;
        font-size: 25px;
        color: #021b39;
    }
    .fonteCard{
        color: rgba(0, 0, 0, 1) !important;
    }
</style>