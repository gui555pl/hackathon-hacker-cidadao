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
                                <v-layout column v-if="ocorrencia.lat !== undefined">
                                    <v-flex xs12 class="fonteCard">
                                        Local : 
                                    </v-flex>
                                    <v-flex xs12> 
                                        <gps name="example"></gps>
                                    </v-flex>
                                </v-layout>
                                <v-layout v-else>
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
                            <!-- INFO CTTU -->
                            <template> <!--  v-if="cttu" -->
                                <v-divider></v-divider>
                                <h2 style="padding-left: 16px; padding-top: 16px;">CTTU:</h2>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Tipo de colisão: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Placa do carro: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Quantidade de vítimas: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Local de atendimento: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                            </template>
                            <!-- INFO SAMU -->
                            <template> <!--  v-if="samu" -->
                                <v-divider></v-divider>
                                <h2 style="padding-left: 16px; padding-top: 16px;">SAMU:</h2>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Quantidade de vítimas: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Tipo de lesão: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Local de lesão: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                                <v-card-text style="padding-top: 16px;">
                                    <v-layout>
                                        <v-flex class="fonteCard">
                                            Local de atendimento: 
                                        </v-flex>
                                        <v-flex class="fonteCard" style="text-align: right">
                                            {{ocorrencia.ponto_referência}}
                                        </v-flex>
                                    </v-layout>  
                                </v-card-text>
                            </template>
                        </v-card>
                        <samu v-if="tipo == 'samu'& ocorrencia.arrived_samu == true"> </samu>
                            <cttu v-if="tipo == 'cttu' & ocorrencia.arrived_cttu == true"> </cttu>
                    </v-flex>
                </v-layout>
            </v-container>                
        </v-card-text>
    </div>

</template>

<script>
import samu from '../components/Samu'
import cttu from '../components/CTTU'
import firebase from 'firebase'
import gps from '../components/Gps'
export default {
    fiery: true,
    data() {
        return {
            ocorrencia: {},
            id: ''
        }
    },
      components: {
        samu: samu,
        cttu: cttu,
        gps: gps
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
    created (){
            

    },
    mounted (){
        let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)

            var tempid = splits[4]
            console.log(tempid)
            let that = this
            this.$fiery(firebase.firestore().collection('ocorrencias').doc(tempid), {
                onSuccess: (todos) => {
                    console.log(todos)
                    that.ocorrencia = todos
                    let cord = {
                        lat: that.ocorrencia.lat,
                        long: that.ocorrencia.long
                    }
                    that.$store.commit('setCord', cord)
                }
            })

    },
    computed: {

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