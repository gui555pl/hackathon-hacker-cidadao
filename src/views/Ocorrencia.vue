<template>
    <div style="width:100%; height:100%; background-color: #a1a1a1; padding-top: 64px;">
        <v-card-text style="padding-top: 0px;">
            <v-container ma-0 pa-0>
                <v-layout mt-4 column>
                    <v-flex xs12 sm6 md6 lg4 xl4 style="padding: 0px">
                        <v-card style="background-color: white;">    
                            <v-card-title>
                                <v-layout>
                                    <v-flex style="text-align: left">
                                        Ocorrência: {{ocorrencia.number}}
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{ocorrencia.creation_date}} às {{ocorrencia.creation_time}}</v-card-text>
                            <v-card-text style="padding-top: 26px;">
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
                                        Referência: 
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.ponto_referência}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text style="padding-top: 16px;">
                                <v-layout>
                                    <v-flex class="fonteCard">
                                        Tipo de Ocorrência:
                                    </v-flex>
                                    <v-flex class="fonteCard" style="text-align: right">
                                        {{ocorrencia.tipo_ocorrencia}}
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                            <v-card-text v-if="orgaoPresente(ocorrencia)" style="padding-top: 10px;" class="fonteCard">
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
                            <v-card-text v-if="!orgaoPresente(ocorrencia)" style="padding-bottom: 0px;">
                                <div class="fonteCard">Agentes no local:</div>
                                <div style="padding-top: 16px;">Ainda não há órgãos no local</div>
                            </v-card-text>
                            <v-card-actions style="padding-right: 0; padding-top: 3px;"></v-card-actions>
                            <v-divider></v-divider>
                            <samu v-if="tipo == 'samu'& ocorrencia.arrived_samu == true"> </samu>
                            <cttu v-if="tipo == 'cttu' & ocorrencia.arrived_cttu == true"> </cttu>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>                
        </v-card-text>

    </div>

</template>

<script>
import samu from '../components/Samu'
import cttu from '../components/CTTU'
export default {
    data() {
        return {
            ocorrencia: this.$fiery(firebase.firestore().collection('ocorrencias').doc(this.id))
        }
    },
      components: {
        samu: samu,
        cttu: cttu
    },
    methods: {
        orgaoPresente(ocorrencia){
            if(ocorrencia.arrived_bombeiro || ocorrencia.arrived_bptran || ocorrencia.arrived_cttu || ocorrencia.arrived_pm || ocorrencia.arrived_prf || ocorrencia.arrived_samu){
                return true;
            }else{
                return false;
            }
        }
    },
    computed: {
        id () {
            let oc = this.$store.state.selectedOcorrencia
            var splits = oc['.uid'].split('/', 4)
            console.log(splits)
            return splits
        },
        tipo(){
            return this.$store.getters.getUser
        },
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        },
    },
    created () {
        
    }
}
</script>