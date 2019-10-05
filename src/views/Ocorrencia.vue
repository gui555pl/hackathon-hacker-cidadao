<template>
    <div style="width:100%; height:100%; ">
        <v-card-text style="background-color: #a1a1a1;">
            <v-container >
                <v-layout mt-4 column>
                    <v-flex xs12 sm6 md6 lg4 xl4style="padding: 5px">
                      
                            <v-card-title style="background-color: #a1a1a1;">
                                <v-layout>
                                    <v-flex style="text-align: left">
                                        {{ocorrencia.number}}
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
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
                            <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                            <v-divider></v-divider>
                            <samu v-if="tipo == 'samu' "> </samu>
                            <CTTU v-if="tipo == 'cttu' "> </CTTU>
                  
                    </v-flex>
                </v-layout>
            </v-container>                
        </v-card-text>

    </div>

</template>

<script>
import Samu from '../components/Samu'
import CTTU from '../components/CTTU'
export default {
    data() {
        return {
            ocorrencias: this.$fiery(firebase.firestore().collection('ocorrencias'), {
                query: q => q.where( this.$store.getters.getUser,'==', true).orderBy('creation_timestamp', 'desc'),
            })
        }
    },
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
        },
         user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        }
    },
    created () {
        console.log('this.$store.getters.getUser')
    }
}
</script>