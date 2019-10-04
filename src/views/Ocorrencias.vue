<template>
    <v-container>
        <v-layout column>
             <v-flex xs12 sm6 md6 lg4 xl4 v-for="(ocorrencia, i) in ocorrencias" :key="i" style="padding: 5px" @click="goTo(ocorrencia)">
                     <v-card
                        elevation-5
                        style="border-radius: 3px"
                        class="mx-auto"
                    >
                        <v-card-title style="background: #E0E0E0">
                            <v-layout>
                                <v-flex style="text-align: left">
                                    {{ocorrencia['.uid']}}
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-card-text>
                            <v-layout>
                                <v-flex>
                                    Local : 
                                </v-flex>
                                <v-flex style="text-align: right">
                                    {{ocorrencia.logradouro}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-text>
                            <v-layout>
                                <v-flex>
                                    Ref: 
                                </v-flex>
                                <v-flex style="text-align: right">
                                    {{ocorrencia.ponto_referência}}
                                </v-flex>
                            </v-layout>
                        </v-card-text>    
                        <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
                        <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                     </v-card>
                </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data() {
        return {
            ocorrencias: this.$fiery(firebase.firestore().collection('ocorrencias'))
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